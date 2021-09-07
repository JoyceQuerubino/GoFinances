import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard'

import { 
    Container,
    UserContainer,
    Header,
    UserInfo,
    Photo,
    User, 
    UserGreeting, 
    UserName,
    Icon,
    HighlightCards,
    Transactions, 
    Title,
    TransactionList,

} from './styles'; 

export interface DataListProps extends TransactionCardProps {
    id: string;
}

export function Dashboard(){

    const data: DataListProps[] = [
        {
            id: '1', 
            type: 'positive', 
            title: "Desenolvimento de site",
            amount: "R$ 12.000,00",
            date: "13/04/2021",
            category: {
                name: 'Vendas', 
                icon: 'dollar-sign'
            }
        }, 
        {
            id: '2', 
            type: 'negative', 
            title: "Hamburgueria Pizzy",
            amount: "R$ 59,00",
            date: "10/04/2020",
            category: {
                name: 'Alimentação', 
                icon: 'coffee'
            }
        }, 
        {
            id: '3',
            type: 'negative', 
            title: "Aluguel do apartamento",
            amount: "R$ 1.200,00",
            date: "10/04/2021",
            category: {
                name: 'Casa', 
                icon: 'shopping-bag'
            }
        }
    ];

    return(
        <Container>
            <Header>
                <UserContainer>
                    <UserInfo>
                        <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/66806696?v=4' }} />
                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Joyce</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power"/>
                </UserContainer>
            </Header>
            <HighlightCards>
                <HighlightCard 
                    type="up"
                    title="Entradas"
                    amount="R$ 17.400,00"
                    lastTransaction="Última entrada dia 13 de abril"
                />
                <HighlightCard 
                    type="down"
                    title="Saídas"
                    amount="R$ 1.259,00"
                    lastTransaction="Última saída dia 03 de abril"
                />
                <HighlightCard 
                    type="total"
                    title="Total"
                    amount="R$ 16.141,00"
                    lastTransaction="01 á 16 de abril"
                />
            </HighlightCards>
        
            <Transactions>
                <Title>Listagem</Title>
                <TransactionList 
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>  <TransactionCard data={item}/>}
                />
            </Transactions>
        </Container>
    )
}