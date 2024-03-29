import './MiniCard.css'

interface ComponentPops {
  items : {
    name: string,
    image: string 
  }[];
}

const MiniCard : React.FC<ComponentPops> = ({items}) => {
  return (
    <div className="box-with-scroll">
      <div className="mini-card-box">
        {items.map((value, index) => (
          <div className="box-default-small mini-card" key={index}>
            <p className="paragraph-lg c-white">{value.name}</p>
            <img src={value.image} alt=""/>
          </div>
        ))}
      </div>
      {items.length > 4 ? (<img src="src/assets/img/icon-scroll.png"/>) : null}
    </div>
  )
}

export default MiniCard