import {Routes, Route} from 'react-router-dom'
import About from '../components/about/About'
import Experience from '../components/experience/Experience'
import Achievements from '../components/achievements/Achievements'
import Projects from '../components/projects/Projects'

const Pages = () => {
  return (
    <section className="box-default p-children col-md-9">
      <Routes>
        <Route path="/about-me" element={<About/>}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/achievements" element={<Achievements/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </section>
  )
}

export default Pages