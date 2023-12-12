import Section from '../../components/section/Section';
import './Home.css'
import LogoIFPR from '../../assets/logo-ifpr.png';

function Home (){
  return (
    <div className='home'>  
      <div className='logo'>
        <img src={LogoIFPR} alt='Logo IFPR' width={600} height='auto'/>
      </div>
    </div>
  )
}

export default Home;