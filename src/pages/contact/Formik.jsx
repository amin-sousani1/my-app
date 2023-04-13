import { useFormik } from "formik"
import './Contact.css'
import axios from "axios"
const Formik=()=>{

     const formik=useFormik({
        initialValues:{
            firstname:'',
            lastnmae:'',
            email:''
        },
        onSubmit:values=>{
            axios({
                method: 'post',
                url: 'http://localhost:5000/users',
                data: values
            })
            .then(function (response) {
                alert("successful call")
                values=''
                console.log(values)
            })
            .catch(function (error) {
            });
        }

     })

    return(
        <form onSubmit={formik.handleSubmit}>

            <label htmlFor="firstname">firstname</label><br />
            <input className="input" type="text" name="firstname" id="firstname" value={formik.values.firstname}  onChange={formik.handleChange}/><br />

            <label htmlFor="lastnmae">lastnmae</label><br />
            <input className="input" type="text" name="lastnmae" id="lastnmae" value={formik.values.lastnmae}  onChange={formik.handleChange}/><br />
       
            <label htmlFor="email">email</label><br />
            <input className="input" type="email" name="email" id="email" value={formik.values.email}  onChange={formik.handleChange}/><br />
       
            <button className="submit" type="submit">submit</button>

        </form>
    )
}

export default Formik