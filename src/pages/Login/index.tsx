import Input from "../../components/Input"
import Button from "../../components/Button"
import api from "../../service/api"
import { Link } from "react-router-dom";
import {useForm} from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import {Container, StyleForm, StyleInput} from "./style"
import { useAuth } from "../../providers/AuthProvider";

interface FormLogin{
  email:string,
  password:string
}

const Login = () => {
  const {handleLogin}=useAuth()

  const schema = yup.object().shape({
    email: yup.string().required('Campo obrigatorio!'),
    password: yup.string().required('Campo obrigatorio!'),
  })

  const { register, handleSubmit, formState: {errors} } = useForm<FormLogin>({
    resolver:yupResolver(schema)
  });

  const onSubmit =(data:FormLogin )=>{
    // console.log("data", data)
    handleLogin(data)
  }
  return (
    <Container>
      <h1>WORKSPACE</h1>
      < StyleForm onSubmit={handleSubmit(onSubmit)} >
        <StyleInput>
          <div>E-mail:</div>
          <Input
            type="email"
            id="email"
            placeholder="E-mail" 
            
            width="274px"
            heigth="56px"

            register= {register}
            

          />
          <span> {errors && errors.email?.message}</span>
        </StyleInput>
        
        <StyleInput>
          <div>Senha:</div>
          <Input
            type="password"
            id="password"
            placeholder="password"  
             
            width="274px"
            heigth="56px"

            register= {register}

          />
          <span>{errors && errors.email?.message}</span>
        </StyleInput>
        

        <Button 
          text="Entrar" 
          type="submit"  
          
          width="274px"
          heigth="56px"
/>
      </ StyleForm>

      <div>
        Ainda não possui uma conta? <Link to="/register">Cadastra-se</Link>
      </div>
      
    </Container>
  );
};

export default Login;