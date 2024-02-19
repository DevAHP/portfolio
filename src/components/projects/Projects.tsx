import React from "react";
import ContentHeader from "../content-header/ContentHeader"
import CardPlayer from "../card-player/CardPlayer";

const Projects = () => {

  const [dataVideo, setDataVideo] = React.useState([]);

  async function getVideos() {
    const response = await fetch('../../../skills.json');
    const json = await response.json();

    setDataVideo(json.videos);
  };

  getVideos();

  return (
    <section className="animation-content">
      <ContentHeader 
        title="Projeos" 
        text="Estes são alguns dos meus projetos. Através deles, aprimorei minhas habilidades de resolução de problemas, aprendendo a abordar desafios de diferentes maneiras."
        image="src/assets/img/projetos.png"
      />
      <CardPlayer items={dataVideo}/>
    </section>
  )
}

export default Projects