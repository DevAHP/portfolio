import ContentHeader from '../content-header/ContentHeader'
import './About.css'

const About = () => {
  return (
    <section className="about-me animation-content">
      <ContentHeader
        title="Me chamo André, tenho 28 anos."
        text="Há alguns anos me descobri apaixonado por tecnologia e desenvolvimento de sistemas. Resolvi seguir meu sonho e ingressar nesta área."
        image="src/assets/img/sobre.png"
      />
      <div className="box-info">
        <div className="box-default-small col-md-6">
          <h3 className="title-vsm c-white">Formação acadêmica</h3>
          <div className="content">
            <h4 className="title-r-light c-white">Unicesumar</h4>
            <p className="title-r-light c-white">Análise e Desenvolvimento de Sistemas - Cursando</p>
          </div>
          <div className="content">
            <h4 className="title-r-light c-white">Brazcubas Educação</h4>
            <p className="title-r-light c-white">Gestão em Segurança Pública - Completo</p>
          </div>
        </div>
        <div className="curiosities col-md-6">
          <h3 className="title-vsm c-white">Curiosidades</h3>
          <div className="content">
            <p className="title-r-light c-white">Adoro passar um tempinho assistindo séries, filmes e animes.</p>
          </div>
          <div className="content">
            <p className="title-r-light c-white">Sou bem eclético em relação à músicas, mas meus gêneros favoritos são:</p>
            <span className="paragraph-sm c-gray">Sertanejo</span>
            <span className="paragraph-sm c-gray">Pagode</span>
            <span className="paragraph-sm c-gray">Rap</span>
          </div>
          <div className="content">
            <p className="title-r-light c-white">Gosto muito de ver Stand Up, e as vezes sou um pouco piadista também kkkkk.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About