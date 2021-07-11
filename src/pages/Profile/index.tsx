import { Redirect } from "react-router-dom";
import { useEffect } from "react";
import Header from "../../components/Header";
import { useAuth } from "../../providers/AuthProvider";
import { useMenuFooter } from "../../providers/MenuFooterProvider";

const Profile = () => {
  const { token } = useAuth();
  const { setInHome, setInWorks, setInProfile } = useMenuFooter();

  useEffect(() => {
    setInHome(false);
    setInWorks(false);
    setInProfile(true);
    localStorage.setItem("@WorkSpace:inHome", "false");
    localStorage.setItem("@WorkSpace:inWorks", "false");
    localStorage.setItem("@WorkSpace:inProfile", "true");
  }, []);

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
