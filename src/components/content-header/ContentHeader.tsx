import './ContentHeader.css'

interface ContentHeaderProps {
  image: string,
  title: string,
  text: string
}

const ContentHeader : React.FC<ContentHeaderProps> = ({image, title, text}) => {
  return (
    <div className="content-header">
      <img src={image} alt="" />
      <h2 className="title-sm c-white">{title}</h2>
      <p className="paragraph-lg c-gray">{text}</p>
    </div>
  )
}

export default ContentHeader