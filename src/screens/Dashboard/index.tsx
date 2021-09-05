import React from "react";

import { 
    Container,
    UserContainer,
    Header,
    UserInfo,
    Photo,
    User, 
    UserGreeting, 
    UserName,
} from './styles'; 

export function Dashboard(){
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
                </UserContainer>

            </Header>
        </Container>
    )
}