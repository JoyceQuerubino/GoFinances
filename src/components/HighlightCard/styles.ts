import styled, {css} from 'styled-components/native'; 
import { Feather } from '@expo/vector-icons'; 
import { RFValue } from 'react-native-responsive-fontsize';


// Tipagens
//Criar uma tipagem para conseguir declarar as cores de cada tipo de icone
interface CardsProps {
    type: 'up' | 'down' | 'total';
};


//Estilizações
export const Container = styled.View<CardsProps>`
    background-color: ${({ theme, type }) => 
    type === "total" ? theme.colors.secondary : theme.colors.shape};

    width: ${RFValue(300)}px;
    border-radius: 5px;
    padding: 19px 23px;
    padding-bottom: ${RFValue(42)}px;
    margin-right: 16px;
`;

export const Header = styled.View `
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<CardsProps>`
    color: ${({ theme, type }) => 
    type === "total" ? theme.colors.shape : theme.colors.text_dark};

    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`;

//Esse ícone vai receber a tipagem da interface IconProps
export const Icon = styled(Feather)<CardsProps>`
    font-size: ${RFValue(40)}px;
    
    ${(props) => props.type === 'up' && css`
        color: ${({ theme }) => theme.colors.sucess};
    `}

    ${(props) => props.type === 'down' && css`
        color: ${({ theme }) => theme.colors.attention};
    `}

    ${(props) => props.type === 'total' && css`
        color: ${({ theme }) => theme.colors.shape};
    `}
`;

export const Footer = styled.View ``; 

export const Amount = styled.Text<CardsProps>`
    color: ${({ theme, type }) => 
    type === "total" ? theme.colors.shape : theme.colors.text_dark};

    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(32)}px;
    margin-top: 38px;
` ;

export const LastTransaction  = styled.Text<CardsProps>`
    color: ${({ theme, type }) => 
    type === "total" ? theme.colors.shape : theme.colors.text};
    
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(12)}px;
`; 