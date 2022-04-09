import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #242633;
    padding-top: 45px;
`;

export const Logo = styled.Text`
    font-size: 35px;
    text-align: center;
    color: #DCDCDC;
    font-weight: bold;
`;

export const Title = styled.Text`
    font-size: 25px;
    margin-left: 15px;
    margin-top: 10px;
    color: #DCDCDC;
`;

export const Input = styled.TextInput`
    height: 40px;
    margin-left: 15px;
    margin-bottom: 10px;
    margin-right: 15px;
    padding: 5px;
    border-radius: 5px;
    background-color: #2E303D;
    color: #DCDCDC;
`;

export const CenterView = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
`;

export const ButtonCustom = styled.TouchableOpacity`
    background-color: #737894;
    height: 40px;
    width: 40%;
    border-radius: 5px;
    padding: 5px;
`;

export const ButtonText = styled.Text`
    font-size: 17px;
    text-align: center;
    color: #DCDCDC;
`;

export const List = styled.FlatList.attrs({
    contentContainerStyle: { paddingHorizontal: 20 }
})`
    margin-top: 20px;
`;