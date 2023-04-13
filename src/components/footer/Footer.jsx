import './Footer.css'
import { Container } from 'react-bootstrap'

  const Footer=()=>{
    return(

       <div className='footer'>
         <Container className='container'>
          <div className='one'>
            <img src="https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/6087f2b060c7a92408bac811_logo.svg" alt="" />
            </div>
          <div className='two'>
            <h4>Amin-Sousani</h4>
          </div>
         </Container>
       </div>
    )
  }

export default Footer