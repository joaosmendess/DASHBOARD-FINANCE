import React from 'react'

import logo from '../../assets/logo.svg'

import Input from '../../pages/Input'
import Button from '../../pages/Button'
import {
  Container,
  Logo,
  Form,
  FormTitle
} from './style'

const SignIn: React.FC = () => {
  return (

<Container>
  <Logo>
    <img src={logo} alt='Minha Carteira'/>
    <h2>Minha Carteira</h2>
  </Logo>

  <Form onSubmit={()=> {}}>
     
     <FormTitle> Entrar </FormTitle>
<Input 
type='email'
required
placeholder='e-mail'
/>
<Input 
placeholder='senha'
type='password'
required
/>


<Button
type='submit'

>Acessar</Button>


  </Form>
</Container>


  )
}

export default SignIn