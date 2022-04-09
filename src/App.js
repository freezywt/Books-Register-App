import React, { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';
import { StatusBar } from 'react-native';

import getRealm from './services/realm';

import { Container, Logo, Title, Input, CenterView, ButtonCustom, ButtonText, List } from './styles';
import Books from './Books';

export default function App(){

  const [ name, setName ] = useState('');
  const [ price, setPrice ] = useState('');
  const [ idEdit, setIdEdit ] = useState(null);
  const [ books, setBooks ] = useState([]);
  const [ disabledButton, setDisabledButton ] = useState(false);

  useEffect(() => {
    loadBooks = async() => {
      const realm = await getRealm();
      const data = realm.objects('Book');
      setBooks(data);
    }

    loadBooks();
  }, []);

  saveBook = async (data) => {
    const realm = await getRealm();

    const id = realm.objects('Book').sorted('id', true).length > 0 ?
     realm.objects('Book').sorted('id', true)[0].id + 1 : 1;

    const bookData = {
      id: id,
      name: data.name,
      price: data.price,
    }

    realm.write(() => {
      realm.create('Book', bookData)
    });
  }


  addBook = async () => {
    if(name === '' || price === '') {
      alert('fill in all fields');
      return;
    }

    try{
      const data = { 
        name: name,
        price: price,
      };

      await saveBook(data);

      setName('');
      setPrice('');
      Keyboard.dismiss();
    } catch(err){
      alert(err);
    }


  }

  function editBook(data){
    setName(data.name);
    setPrice(data.price);
    setIdEdit(data.id);
    setDisabledButton(true);
  }

  editBookButton = async ()  => {
    if(idEdit === null){
      return;
    }

    const realm = await getRealm();

    const response = {
      id: idEdit,
      name: name,
      price: price,
    };

    await realm.write(() => {
      realm.create('Book', response, 'modified')
    });

    const dataChanged = await realm.objects('Book').sorted('id', false);
    setBooks(dataChanged);
    setName('');
    setPrice('');
    setIdEdit(null);
    setDisabledButton(false);
    Keyboard.dismiss();
  }

  removeBook = async (data) => {
    const realm = await getRealm();
    const ID = data.id;

    realm.write(() => {
      if(realm.objects('Book').filtered('id =' + ID).length > 0){
        realm.delete(
          realm.objects('Book').filtered('id =' + ID)
        )
      }

      const BooksCurrent = realm.objects('Book').sorted('id', false);
      setBooks(BooksCurrent);
    })
  }

  return (
    <Container>
      <StatusBar backgroundColor="#242633"/>
      <Logo>White<Logo style={{color: '#737894'}}>List</Logo> Book's</Logo>

      <Title>Name</Title>
      <Input 
        autoCapitalize="none" 
        autoCorrect={false} 
        value={name}
        onChangeText={ (text) => setName(text)}
      />

      <Title>Price</Title>
      <Input 
        autoCapitalize="none" 
        autoCorrect={false}
        value={price}
        onChangeText={ (text) => setPrice(text)}
      />

      <CenterView>
          <ButtonCustom 
            onPress={addBook} 
            disabled={disabledButton}
            style={{opacity: disabledButton ? 0.1 : 1 }}
          >
            <ButtonText>Register</ButtonText>
          </ButtonCustom>

          <ButtonCustom onPress={editBookButton}>
            <ButtonText>Edit</ButtonText>
          </ButtonCustom>
      </CenterView>

      <List 
        ShowVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        data={books}
        keyExtractor={ item => String(item.id)}
        renderItem={({ item }) => (<Books data={item} edit={editBook} remove={removeBook}/>)}
      />
    </Container>
  );
}