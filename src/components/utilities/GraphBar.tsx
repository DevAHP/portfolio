import './GraphBar.css'

const GraphBar = () => {
  return (
    <div className='graph-bar'>
      <div>
        <label className="paragraph-sm c-gray-2">HTML</label>
        <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
          <div className="progress-bar" style={{width: "90%"}}></div>
        </div>
      </div>
      <span className="paragraph-sm-b"> 90%</span>
    </div>
  )
}

export default GraphBar