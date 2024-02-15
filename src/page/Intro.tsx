import './Intro.css'

const Intro = () => {
  const text : string = "JAVASCRIPT TYPESCRIPT VUE ANGULAR REACT PUG";
  const letters = text.split('').map((char, i) => {
    return `<span class="paragraph-lg c-white" style="transform: rotate(${i * 8.3}deg)">${char}</span>`
  }).join('');

  return (
    <section className="intro col-md-9">
      <div className="box-default">
        <h1 className="title-lg c-white">
          Olá!
          <br/> 
          Seja <strong>bem vindo</strong> ao meu espaço <strong>pessoal</strong>
        </h1>
        <div className="p-absolut">
          <div className="circle">
            <div id="circle" className="text-circle" dangerouslySetInnerHTML={{__html: letters}}>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro