import React from 'react'
import ContentHeader from '../content-header/ContentHeader'
import MiniCard from '../helpers/MiniCard';
import UnderlineTitle from '../helpers/UnderlineTitle'
import './Experience.css'

const Experience = () => {
  const [languages, setLanguages] = React.useState([]);
  const [frameworks, setFrameworks] = React.useState([]);
  const [others, setOthers] = React.useState([]);

  async function getSkill() {
    const response = await fetch('../../../skills.json');
    const json = await response.json();
    
    setLanguages(json.skills.languages);
    setFrameworks(json.skills.frameworks);
    setOthers(json.skills.others);
  }

  getSkill();

  return (
    <section className="experience animation-content">
      <ContentHeader image="src/assets/img/experiencia.png"
        title="Experiência"
        text="Atualmente trabalho como Desenvolvedor Front End na MarQ Ponto. Presto manutenção e participo do desenvolvimento de novas ferramentas às aplicações da empresa."
      />
      <div className="content-title">
        <UnderlineTitle title="Ferramentas que utilizo na minha rotina de trabalho"/>
      </div>
      <div className="content-skills">
        <div className="list">
          <h2 className="title-r-light c-white">Linguagens</h2>
          <MiniCard items={languages}/>
        </div>
        <div className="list">
          <h2 className="title-r-light c-white">Frameworks/Bibliotecas</h2>
          <MiniCard items={frameworks}/>
        </div>
        <div className="list">
          <h2 className="title-r-light c-white">Complementares</h2>
          <MiniCard items={others}/>
        </div>
      </div>
    </section>
  )
}

export default Experience