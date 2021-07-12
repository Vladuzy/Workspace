import { Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useAuth } from "../../providers/AuthProvider";
import { useMenuFooter } from "../../providers/MenuFooterProvider";
import Footer from "../../components/Footer";
const Profile = () => {
  const { token, getUserLoggedInfo } = useAuth();
  const { setInHome, setInWorks, setInProfile } = useMenuFooter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserLoggedInfo(setLoading);
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
      {loading ? (
        <p>Carregando</p>
      ) : (
        <>
          <Header></Header>
          <h1>Página perfil do usuário</h1>
          <Footer />
        </>
      )}
    </>
  );
};

export default Profile;
