import React from 'react';

import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, Code, Nav, NavText, NavItem, SignOutButton, SignOutButtonText, NavSpan,
  NavDivSpan, NavDiv, InformationDiv, Informations, TextNormal, TextBold,
} from './styles';

export default function Menu({ translateY }) {
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1],
      }),
    }}
    >
      <Code>
        <QRCode
          value="https://rocketseat.com.br"
          size={80}
          color="#fff"
          backgroundColor="#8b10ae"
        />
      </Code>
      <InformationDiv>
        <Informations>
          <TextNormal>Banco </TextNormal><TextBold>260 - Nu Pagamentos S.A.</TextBold>
        </Informations>
        <Informations>
          <TextNormal>Agência </TextNormal><TextBold>9999</TextBold>
        </Informations>
        <Informations>
          <TextNormal>Conta </TextNormal><TextBold>999999-9</TextBold>
        </Informations>
      </InformationDiv>


      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#fff" />
          <NavDiv>
            <NavText>Me ajuda</NavText>
            <Icon name="chevron-right" size={20} color="#fff" />
          </NavDiv>


        </NavItem>
        <NavItem>
          <Icon name="person-outline" size={20} color="#fff" />
          <NavDiv>
            <NavDivSpan>
              <NavText>Perfil</NavText>
              <NavSpan>Nome de preferência, telefone, e-mail</NavSpan>
            </NavDivSpan>
            <Icon name="chevron-right" size={20} color="#fff" />
          </NavDiv>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={20} color="#fff" />
          <NavDiv>
            <NavText>Configurar cartão</NavText>
            <Icon name="chevron-right" size={20} color="#fff" />
          </NavDiv>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#fff" />
          <NavDiv>
            <NavText>Configurações do app</NavText>
            <Icon name="chevron-right" size={20} color="#fff" />
          </NavDiv>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
