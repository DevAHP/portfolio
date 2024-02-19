import React from 'react'
import './CardPlayer.css'

interface ComponentsProp {
  items: {
    video: string,
    title: string,
    text: string
  }[];
}

const CardPlayer : React.FC<ComponentsProp> = ({items}) => {
  const [position, setPosition] = React.useState(0);
  const [active, setActive] = React.useState(0);
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    console.log("hahaah",contentRef)
    const width = 874;
    setPosition(-(width * active))
  })

  function slideLeft() {
    active !== 0 ? setActive(active - 1) : '';
  }

  function slideRight() {
    active + 1 < items.length / 2 ? setActive(active + 1) : '';
  }

  return (
    <div className="box-card-palyer">
      {items.map((item) => (
        <div ref={contentRef} style={{transform: `translateX(${position}px)`}} className="box-default-small card-player">
          <iframe src={item.video} title="Vídeo" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <div className="card-player-content">
            <h2 className="paragraph-lg c-white">{item.title}</h2>
            <p className="paragraph-md c-gray">{item.text}</p>
          </div>
        </div>
      ))}
      <div className="control">
        {items.length > 2  && active > 0 ? (<button onClick={slideLeft}><img className="control-left" src="src/assets/img/icon-scroll.png"/></button>) : (<button disabled><img className="control-left" src="src/assets/img/icon-scroll.png"/></button>)}
        {items.length > 2 && active + 1 < items.length / 2 ? (<button onClick={slideRight}><img className="control-right" src="src/assets/img/icon-scroll.png"/></button>) : (<button disabled><img className="control-right" src="src/assets/img/icon-scroll.png"/></button>)}
      </div>
    </div>
  )
}

export default CardPlayer