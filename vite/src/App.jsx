import './App.css'
import { Header } from './components/header/header'
import { Footer } from './components/footer/footer'
import { Reviuw } from './components/reviuw/reviuw'
import { Sections } from './components/sections/sections'
import { Form } from './components/form/form'


/*import { Slider } from './components/slider/slider'*/

function App() {


  return (
    <>
    <Header/>
   
    <Sections/>
    <Form/>
    <Reviuw/>
  
    <Footer/>
    

    </>
  )
}

export default App
