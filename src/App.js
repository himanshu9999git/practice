import './App.css';
import Btn from './Components/Btn';
import Demofn from './Components/Demofn';
import Demofn2 from './Components/Demofn2';
import Footer from './Components/Footer';
import Forms from './Components/Forms';
import Hooks from './Components/Hooks';
import ImageFile from './Components/ImageFile';
import Intro1 from './Components/Intro1';
import Intro2 from './Components/Intro2';
import Nav from './Components/Nav';
import Outline from './Components/Outline';
import Promo from './Components/Promo';
import Time from './Components/Time';

function App() {
  return <>
    <Nav/>
    <div className="boom">

    <Promo w1="deal" w2="Subscribe"/>
    </div>
    <Intro1/>
    <Intro2/>
    <Footer author="Myself"/>
    <Outline>
      <Promo w1 = "Chance" w2 = "Pay"/>
      <Footer author = "EAP"/>
    </Outline>
    <Demofn/>
    <Demofn2/>
    <Btn/>
    <Time/>
    {/* <ImageFile/> */}
    <Hooks/>
    <Forms/>
  </>
}

export default App;
