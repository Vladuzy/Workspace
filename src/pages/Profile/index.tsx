import { Redirect } from "react-router-dom";
import Header from "../../components/Header";
import { useAuth } from "../../providers/AuthProvider";

const Profile = () => {
  const { token } = useAuth();

  if (!token) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Header></Header>
      <h1>Página perfil do usuário</h1>
    </>
  );
};

export default Profile;
