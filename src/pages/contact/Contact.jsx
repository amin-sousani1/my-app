import Footer from '../../components/footer/Footer'
import OffcanvasExample from '../../components/navbar/Navbar'
import './Contact.css'
import Formik from './Formik'

  const Contact=()=>{
    return(
       <>
         <OffcanvasExample></OffcanvasExample>
          <div className='form'>
            <Formik></Formik>
          </div>
         <Footer></Footer>
       </>
    )
  }

export default Contact  