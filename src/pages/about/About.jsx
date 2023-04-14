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
                <h2>personal info</h2>
                <div>fullname  :<strong className='strong'>amin-sousani</strong> </div>
                <div>age:<strong className='strong'>20</strong> </div>
                <div>locitoin :<strong className='strong'>karmansh</strong> </div>
                <div> student:  <strong className='strong'>computer</strong></div>
              </div>
              <div className='card2'>
                <h2>skill</h2>
                <div>html %100</div>
                <div>css %60</div>
                <div>react %20</div>
                <div>sass %70</div>
                <div>js %40</div>
              </div>
            </div>

            <div className='about'>
              
            </div>
            </Container>
           <Footer></Footer>
          </>
    )
  }

export default About  