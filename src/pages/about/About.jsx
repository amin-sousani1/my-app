import './About.css'
import Footer from '../../components/footer/Footer'
import OffcanvasExample from '../../components/navbar/Navbar'
import { Container } from 'react-bootstrap'

  const About=()=>{
    return(
          <>
           <OffcanvasExample></OffcanvasExample>
           <Container>
            <div className='about'>
              <div className='card1'>
                <p>aa</p>
                <p>fff</p>
                
                <p></p>
                <p></p>
              </div>
              <div className='card2'>
                <p>aa</p>
                <p>fff</p>
               
                <p></p>
                <p></p>
              </div>
            </div>

            <div className='about'>
              amin
            </div>
            </Container>
           <Footer></Footer>
          </>
    )
  }

export default About  