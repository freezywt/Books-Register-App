import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 20px;
    border-radius: 5px;
    background: #2E303D;
    margin-bottom: 15px;
`;

export const Name = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #DCDCDC;
`;

export const Price = styled.Text`
    font-size: 17px;
    font-style: italic;
    color: #DCDCDC;
`;

export const CenterView = styled.View`
    flex-direction: row;
    margin-top: 15px;
`;

export const ButtonCustom = styled.TouchableOpacity`
    background-color: #737894;
    padding: 5px;
    width: 50%;
    margin-right: 15px;
    border-radius: 5px;
`;

export const ButtonText = styled.Text`
    color: #DCDCDC;
    font-size: 16px;
    text-align: center;
`;