import './CardImage.css'

interface ComponentProp {
  image: string,
  title: string,
  text: string,
  textInfo: string
}

const CardImage : React.FC<ComponentProp> = ({image, title, text, textInfo}) => {
  return (
    <div className="box-default-small card-image">
      <div className="control-hover">
        <div className="box-image">
          <img src={image} alt=""/>
        </div>
        <div className="box-image-back">
          <p className="paragraph-md-2 c-white">{textInfo}</p>
        </div>
      </div>
      <div className="card-content">
        <p className="paragraph-md c-white">{title}</p>
        <span className="paragraph-md c-gray">{text}</span>
      </div>
    </div>
  )
}

export default CardImage