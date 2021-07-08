import { useAuth } from "./providers/AuthProvider";

function App() {
  const { token, handleRegister, handleLogin } = useAuth();
  console.log(token);
  return (
    <>
      <h1>App</h1>
      <button
        onClick={() =>
          handleRegister({
            email: "newUser234@gmail.com",
            password: "123456",
            name: "newUser234",
            type: "worker",
            rating: "",
            moreInfo: {
              categories: [],
              description: "",
              telephone: "",
            },
          })
        }
      >
        Register
      </button>

      <button
        onClick={() =>
          handleLogin({
            email: "leandro@mail.com",
            password: "123456",
          })
        }
      >
        Login
      </button>
    </>
  );
}

export default App;
