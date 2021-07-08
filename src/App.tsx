import { useAuth } from "./providers/AuthProvider";

function App() {
  const {
    token,
    handleRegister,
    handleLogin,
    getUserLoggedInfo,
    getInfoFromASpecificUser,
    addMoreInfoUser,
  } = useAuth();
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
          addMoreInfoUser({
            moreInfo: {
              categories: ["pintura", "arte"],
              description: "",
              telephone: "9123912938",
            },
          })
        }
      >
        Add more info
      </button>

      <button
        onClick={() =>
          handleLogin({
            email: "leandro@gmail.com",
            password: "123456",
          })
        }
      >
        Login
      </button>

      <button onClick={() => getUserLoggedInfo()}>UserInfo</button>

      <button onClick={() => getInfoFromASpecificUser("3")}>
        Search user 3
      </button>
    </>
  );
}

export default App;
