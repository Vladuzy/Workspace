import Footer from "../../components/Footer"
import {ListContainer, TabStyleMobile, Header} from "./style"
import CardWork from "../../components/CardWork"
import { useEffect, useState } from "react";
import { useJobs } from "../../providers/Jobs";

const Home = () => {
  const [current, setCurrent]=useState<string>( "ativos" as string )
  const [totalGain, setTotalGain]=useState<string>( "0" as string )
  
  const {
    getListUserWorkerAppliedJobs, 
    getListUserWorkerActiveJobs, 
    listUserWorkerAppliedJobs,
    listUserWorkerActiveJobs
    }= useJobs()
  const listApplied =listUserWorkerAppliedJobs;
  const listActive =listUserWorkerActiveJobs

  const addGains=()=>{
    const num = Number(totalGain)
    //reduci da lista de concluidos pra somar a quantidade total ganha
    const stg = num.toFixed(2)
    setTotalGain(stg)
  }

  useEffect(()=>{
    getListUserWorkerAppliedJobs()
    getListUserWorkerActiveJobs()
    addGains()
  }, [])

  return (
    <>
    <div>
      <Header>
        
        <span>Total ganho:</span>
        <div>R${totalGain}</div>
        
      </Header>

      <div>
        <TabStyleMobile id="ativos" current={current} onClick={()=> setCurrent("ativos")} >ATIVOS</TabStyleMobile>
        <TabStyleMobile id="aplicados" current={current} onClick={()=> setCurrent("aplicados")} >APLICADOS</TabStyleMobile>
      </div>

      {
        current==="ativos" ?(
          <ListContainer>
            <CardWork
              key="1"
              work={{
              nameWork: "Remoção de vespas",
              category: "Gerais",
              valorOferecido: "400,00",
              local: "Rua dos Mineiros",
            }}
            />
            {/* {listApplied.map(job => ({
              <CardWork work={job} key={job.id}/>
            }))} */}
          </ListContainer>
        ):(
          <ListContainer>
            <CardWork
              key="1"
              work={{
              nameWork: "Remoção de abelhas",
              category: "Gerais",
              valorOferecido: "300,00",
              local: "Rua dos Mineiros",
            }}
            />
            {/* {listActive.map(job => ({
              <CardWork work={job} key={job.id}/>
            }))} */}
          </ListContainer>
        )
      }
      
      <Footer isHome />
    </div>
    </>
  );
};

export default Home;