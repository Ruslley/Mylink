import React from 'react';
import Menu from '../../components/Menu';
import StatusBarPage from '../../components/StatusBarPage';
import {Container, Title} from './styles'

export default function Mylinks() {
  return (
    <Container>
    
      <StatusBarPage
      barStyle="light-content"
      backgroundColor="#132742"
      />
      <Menu/>
    
      
     <Title>Meus links</Title>
      <ListLinks 

        data ={[{id: 1 , link: 'https://teste.com'}]}
        keyExtractor={(item) => string(item.id)}



      />

    </Container>
  );
}
