import Input from "../../components/Input"
import {useForm} from "react-hook-form"

interface FormLogin{
  email:string,
  password:string
}

const Login = () => {
  const { register, handleSubmit } = useForm<FormLogin>();

  const onSubmit =(data:FormLogin )=>{
    console.log("data", data)
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} >
        <Input
          type="email"
          id="email"
          placeholder="E-mail" 
          register= {register}

          width="200px" heigth="50px" backColor="#6666" borderRadius="10px" border="none" fontSize="16px"
        />

        <Input
          type="password"
          id="password"
          placeholder="password" 

          register= {register}
        />

        <button type="submit" >
          entrar
        </button>
      </form>
      
    </div>
  );
};

export default Login;