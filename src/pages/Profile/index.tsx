import { Redirect, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useAuth } from "../../providers/AuthProvider";
import { useMenuFooter } from "../../providers/MenuFooterProvider";
import Footer from "../../components/Footer";
import { Container, StyledMureInfo, StyleMain, Exp, StyledNoInfo, JobsDone, ListJobs, StyleBody } from "./style";
import { useJobs } from "../../providers/Jobs";
import { string } from "yup/lib/locale";
import Button from "../../components/Button";

interface moreInfoUser{
  description:string,
  telephone:string,
  categories:any,
}

const Profile = () => {
  const { token, getUserLoggedInfo } = useAuth();
  const { setInHome, setInWorks, setInProfile } = useMenuFooter();
  const [loading, setLoading] = useState(true);

  const history =useHistory()

  const [loggedInfo, setLoggedInfo]= useState(
    (JSON.parse(
      localStorage.getItem("@WorkSpace:userLoggedInfo") as string
    ) || {
    //   email:""
    //   moreInfo:{
    //    categories: string[],
    //    description: "",
    //    telephone: "",
    // }
  })


    // {

    //   // email:"ianW@gmail.com",
    //   // moreInfo:{
    //   //     categories: [],
    //   //     description: "You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element's box.By default, the overflow is visible, meaning that it is not clipped and it renders outside the element's box:By default, the overflow is visible, meaning that it is not clipped and it renders outside the element's box:By default, the overflow is visible, meaning that it is not clipped and it renders outside the element's box:By default, the overflow is visible, meaning that it is not clipped and it renders outside the element's box:",
    //   //     telephone: "(64)99999-9999",
    //   // }

    //   // email:"",
    //   // moreInfo:{
    //   //     categories: [],
    //   //     description: "",
    //   //     telephone: "",
    //   // }

    // }
    )
  const{ email,moreInfo:{telephone, description,categories}} =loggedInfo

  const {listCompletedJobs}= useJobs()

  useEffect(() => {
    getUserLoggedInfo(setLoading);
    setInHome(false);
    setInWorks(false);
    setInProfile(true);
    localStorage.setItem("@WorkSpace:inHome", "false");
    localStorage.setItem("@WorkSpace:inWorks", "false");
    localStorage.setItem("@WorkSpace:inProfile", "true");

    

  }, []);

  useEffect(()=>{
    console.log("listCompletedJobs",listCompletedJobs);
    console.log("loggedInfo",loggedInfo)
  },[listCompletedJobs])

  if (!token) {
    return <Redirect to="/" />;
  }

  const handleEdit = () => {
    history.push("/editProfile");
  };
 
  return (
    <Container>
      {loading ? (
        <div className="loader">Carregando</div>
      ) : (
        <>
          <Header/>
          <StyleBody>
          {
            telephone ?(
              <StyleMain>
            <StyledMureInfo>

              <div>
                <h3>Categorias</h3>
                <div>
                  {
                  // categories && categories.map((iten:string)=>(
                  //   <span>{iten}</span>
                  // ))
                }
                </div>
              </div>

              <div>
                <h3>Contato</h3>
                <span>{email}</span>
                <span>{telephone} </span>
              </div>
              
              
            </StyledMureInfo>
            <Exp>
              <h3>Experiência</h3>
              <div>{description} </div>
            </Exp>
          </StyleMain>
            ):(
              <StyledNoInfo>
              <div>
                Adicione o restante de suas informações!
              </div>
              <Button 
                text="Adicionar" 
                width="100px" 
                heigth='32px' 
                borderRadius="20px" 
                handleClick={handleEdit}
              />
              </StyledNoInfo>
            )
          }
          
          <JobsDone>
            
            {
              listCompletedJobs ?(
                <>
                <div className="JobsDoneHeader" >
                  <h3>
                    Trabalhos feitos
                    </h3>
                    <Button text="MOSTRAR TODOS" width="150px" heigth="25px" borderRadius="20px"  />
                </div>
                <ListJobs>
                  {
                    listCompletedJobs.map((job)=>(
                      <div key={job.id} >
                        {job.title}
                      </div>
                    ))
                  }
                </ListJobs>
                </>
              ):(
              <>
                <h3>Trabalhos feitos</h3>
                <div>
                  <div>
                  Parece que você não possui nenhum trabalho feito ainda...
                  </div>

                </div>
              </>
              )
            }

          </JobsDone>
          
          
          </StyleBody>
          
          <Footer />
        </>
      )}
    </Container>
  );
};

export default Profile;
