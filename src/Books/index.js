import React from 'react';

import { Container, Name, Price, CenterView, ButtonCustom, ButtonText } from './styles';


export default function Books({ data, edit, remove }) {
 return (
   <Container>
       <Name>{data.name}</Name>
       <Price>U${data.price}</Price>

       <CenterView>
            <ButtonCustom onPress={() => edit(data)}>
                <ButtonText>Edit</ButtonText>
            </ButtonCustom>

            <ButtonCustom onPress={() => remove(data)}>
                <ButtonText>Remove</ButtonText>
            </ButtonCustom>
       </CenterView>
   </Container>
  );
}