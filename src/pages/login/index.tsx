import React from "react";

import LogoSvg from '../../assets/icons/logo.svg';
import GoogleSvg from '../../assets/icons/google.svg';
import AppleSvg from '../../assets/icons/apple.svg';

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
} from './styles'
import { SingInSocialButton } from "../../components/signInSocialButton";
import { useAuth } from "../../hooks/useAuth";
import { Alert } from "react-native";

export function Login() {
  const { signInWithGoogle, user } = useAuth()

  async function handleSignInWithGoogle() {
    try {
      await signInWithGoogle()
    } catch (error) {
      console.log(error)
      Alert.alert('Não foi possível conectar a conta Google')
    }
  }
  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg width={120} height={69} />
          <Title>
            Controle suas {"\n"}
            finanças de forma {"\n"}
            muito simples
          </Title>

          <SignInTitle>
            Faça seu login com {"\n"}
            uma das contas abaixo
          </SignInTitle>
        </TitleWrapper>
      </Header>

      <Footer>
        <FooterWrapper>
          <SingInSocialButton title="Entrar com Google" svg={GoogleSvg} onPress={() => handleSignInWithGoogle()} />
          <SingInSocialButton title="Entrar com Apple" svg={AppleSvg} onPress={() => {}} />

        </FooterWrapper>
      </Footer>
    </Container>
  );
}
