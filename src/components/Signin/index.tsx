import React from "react";

import { useState } from "react";

import logo from "../../assets/logo.svg";

import { useAuth } from "../../hooks/auth";
import Input from "../../pages/Input";
import Button from "../../pages/Button";
import { Container, Logo, Form, FormTitle } from "./style";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const [password, setPassword] = useState<string>("");

  const { signIn } = useAuth();

  return (
    <Container>
      <Logo>
        <img src={logo} alt="Minha Carteira" />
        <h2>Minha Carteira</h2>
      </Logo>

      <Form
   
        onSubmit={() => {
          signIn(email, password);
        }}
      >
        <FormTitle> Entrar </FormTitle>
        <Input
          type="email"
          required
          placeholder="e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="senha"
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit">Acessar</Button>
      </Form>
    </Container>
  );
};

export default SignIn;
