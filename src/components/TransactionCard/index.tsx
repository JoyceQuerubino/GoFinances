import React from 'react'; 

import { 
    Container,
    Title, 
    Amount, 
    Footer, 
    Category, 
    Icon, 
    CategoryName, 
    Date
} from './styles';

//o tipo da categoria vai ser uma outra interface
interface Category {
    name: string;
    icon: string;
}

interface Data {
    title: string;
    amount: string; 
    date: string;
    category: Category; 
}

interface Props {
    data: Data;
}

export function TransactionCard({ data}: Props){

    return(
        <Container>
            <Title>{data.title}</Title>
            <Amount>{data.amount}</Amount>
            <Footer>
                <Category>
                    <Icon name="dollar-sign"/>
                    <CategoryName>{data.category.name}</CategoryName>
                </Category>
                <Date>{data.date}</Date>
            </Footer>
        </Container>
    ) 
}