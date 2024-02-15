import CardImage from "../card-img/CardImage"
import ContentHeader from "../content-header/ContentHeader"
import './Achievements.css'

const Achievements = () => {
  return (
    <section className="achievements animation-content">
      <ContentHeader
        title="Conquistas"
        text="Essas são as principais conquistas que fizeram a diferença no meu trabalho. Mudaram a maneira como vejo o desenvolvimento como um todo."
        image="src/assets/img/conquistas.png"
      />
      <div className="content">
        <CardImage image="src/assets/img/cjs.png" title="JavaScript" text="74 h" textInfo="O curso completo de JavaScript proporcionou uma compreensão abrangente, cobrindo desde conceitos básicos como variáveis e controle de fluxo até tópicos avançados como programação assíncrona e manipulação do DOM. Adquiri habilidades essenciais para desenvolver aplicações web modernas."/>
        <CardImage image="src/assets/img/cvue.png" title="Vuejs" text="44 h" textInfo="Neste curso prendi os conceitos fundamentais do Vue, como componentes, diretivas e reatividade, permitindo-me criar aplicações web dinâmicas de forma eficiente. Compreendi também a integração do Vue com APIs, facilitando a construção de aplicações."/>
        <CardImage image="src/assets/img/chtml.png" title="HTML/CSS3/JS" text="35 h" textInfo="Este curso proporcionou uma compreensão completa do desenvolvimento web. Adquiri habilidades para criar estruturas HTML semânticas, estilizar páginas com CSS3 para um design moderno e responsivo, além de interagir dinamicamente com os usuários usando JavaScript."/>
        <CardImage image="src/assets/img/cangular.png" title="Angular" text="26 h" textInfo="No curso de Angular, explorei conceitos essenciais do framework, tais como componentes, módulos e serviços. Além disso, adquiri compreensão sobre a arquitetura de uma Single Page Application (SPA)."/>
        <CardImage image="src/assets/img/cingles.png" title="Inglês - Básico" text="60 h" textInfo="Apesar de o curso ter se concentrado principalmente em inglês básico, sua influência no estudo de desenvolvimento web foi significativa.  Facilitou a compreensão de documentação, tutoriais e recursos online relacionados ao desenvolvimento web."/>
        <CardImage image="src/assets/img/cui.png" title="UI Design Iniciante" text="34 h" textInfo="O Curso de UI Design para Iniciantes foi crucial para aprimorar minhas habilidades na criação de interfaces de usuário. Aprendi princípios fundamentais, ferramentas como Figma, e a importância da usabilidade. "/>
      </div>
    </section>
  )
}

export default Achievements