import React from 'react'
import {Link} from 'react-router-dom'
import './Left-menu.css'

const LeftMenu = () => {

  const [backToHome, setBackToHome] = React.useState(false);
  const screenSize = window.innerWidth;
  const [showMenu, setShowMenu] = React.useState(false);
  
  function controlBackToHome() {
    backToHome === false ? setBackToHome(true) : setBackToHome(false);
  }

  function openCloseMenu() {
    if (screenSize < 480) {
      setShowMenu(!showMenu);
    }
  }

  React.useEffect(() => {
    screenSize > 480 ? setShowMenu(true) : setShowMenu(false);
    
  }, [screenSize])

  return (
    <section className="box-default left-menu col-md-3">
      <div className="profile">
        <img src="src/assets/img/profile.png" alt="Foto de perfil."/>
        <div className="info">
          <h2 className="title-vsm c-white">André H Pereira</h2>
          <p className="paragraph-lg c-gray-2">Desenvolvedor Front End 1 ano de experiência</p>
          <p className="paragraph-lg c-gray-2 text-mobile">Desenvolvedor Front End</p>
        </div>
        <a className="btn-mobile" onClick={openCloseMenu}>
          {/* <ion-icon name="menu-outline"></ion-icon> */}
        </a>
      </div>
      <h3 className="paragraph-md c-white"></h3>
      <div>
      </div>
      <div className="mini-box" onClick={openCloseMenu} style={{display: showMenu? "flex" : "none"}}>
        <Link to="/about-me" className="box-default-small mini-box-content">
          <p className="paragraph-sm c-gray-2">Sobre mim</p>
          <img src="src/assets/img/sobre.png" alt="" />
        </Link>
        <Link to="/experience" className="box-default-small mini-box-content">
          <p className="paragraph-sm c-gray-2">Experiência</p>
          <img src="src/assets/img/experiencia.png" alt="" />
        </Link>
        <Link to="/achievements" className="box-default-small mini-box-content">
          <p className="paragraph-sm c-gray-2">Conquistas</p>
          <img src="src/assets/img/conquistas.png" alt="" />
        </Link>
        <Link onClick={controlBackToHome} to="/projects" className="box-default-small mini-box-content">
          <p className="paragraph-sm c-gray-2">Projetos</p>
          <img src="src/assets/img/projetos.png" alt="" />
        </Link>
        {backToHome ? (
          <Link onClick={controlBackToHome} to="/" className="back-home">Voltar ao início</Link>
        ) : ''}
      </div>
      <div className="social-media">
        <img src="src/assets/img/wpp.png" alt=""/>
        <a href="https://linkedin.com/in/andrehenriquepereira" target="_blank"><img src="src/assets/img/linkedin.png" alt=""/></a>
        <a href="https://github.com/DevAHP" target="_blank"><img src="src/assets/img/github.png" alt=""/></a>
      </div>
    </section>
  )
}

export default LeftMenu