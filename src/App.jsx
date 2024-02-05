import './App.css'
import Footer from './components/Footer'
import Nav from './components/Nav'
import NavMovil from './components/NavMovil'
import SectionFour from './components/SectionFour'
import SectionOne from './components/SectionOne'
import SectionTree from './components/SectionTree'
import SectionTwo from './components/SectionTwo'

function App() {

  return (
    <div className='app'>
      <Nav />
      <NavMovil/>
      <SectionOne />
      <SectionTwo />
      <SectionTree />
      <SectionFour />
      <Footer />

    </div>
  )
}

export default App
