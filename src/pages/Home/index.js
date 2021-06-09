import React, { useState } from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Modal
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StatusBarPage from "../../components/StatusBarPage";
import Menu from "../../components/Menu";
import { Feather } from "@expo/vector-icons";


import {
  ContainerLogo,
  Logo,
  ContainerContent,
  Title,
  SubTitle,
  ContainerInput,
  BoxIcon,
  Input,
  ButtonLink,
  ButtonLinkText,
} from "./styles";
import ModalLink from "../../components/ModalLink/Index";


export default function Home() {

  const [input,setInput] = useState('');
  const [modalVisble, setModalVisible ] =  useState(false)

  function handleShortLink (){
    //alert(input)
    setModalVisible(true)
  }


  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss(); //Ao clicar fora desabilita o teclado
      }}
    >
      <LinearGradient
        colors={["#1ddbb9", "#132742"]}
        style={{ flex: 1, justifyContent: "center" }}
      >
        <StatusBarPage barStyle="light -content" backgroundColor="#1ddbb9" />
        <Menu />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "position" : "padding"}
          enabled
        >
          <ContainerLogo>
            <Logo
              source={require("../../assets/Logo.png")}
              resizeMode="contain"
            />
          </ContainerLogo>

          <ContainerContent>
            <Title>SujeitoLink</Title>
            <SubTitle>Cole seu link para encurtar</SubTitle>

            <ContainerInput>
              <BoxIcon>
                <Feather name="link" size={22} color="#fff" />
              </BoxIcon>
              <Input
                placeholder="Cole seu link"
                placeholderTextColor="#fff"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="url"
                value={input}
                onChangeText={(text) => setInput(text)}
                // autoFocus={true}
                clearButtonMode="while-editing" //adiciona o opção do botão de limpeza no ios
              />
            </ContainerInput>
            <ButtonLink   onPress={handleShortLink}>
              <ButtonLinkText
            
              >Gerar Link
              </ButtonLinkText>
            </ButtonLink>
          </ContainerContent>
        </KeyboardAvoidingView>

        <Modal visible={modalVisble} transparent animationType="slide" >
        <ModalLink onClose={() => setModalVisible(false)  }/>
        </Modal>
      </LinearGradient>

    </TouchableWithoutFeedback>
  );
}
