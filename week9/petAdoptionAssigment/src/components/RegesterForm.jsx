import { useState } from "react";
import Card from "./Card";
import "../App.css";
import {validation} from "../utils/validation"
import AdopterData from  "./AdopterData";



function Form(){
      
         const[formData, setFormData] = useState([]);
         const[values, setValues] = useState({
            petName:"",
            petType:"",
            bread:"",
            adopeterName:"",
            email:"",
            phone:""
         });
         const[showTable,setShowTable] = useState(false);// form submit zala var true honar aahe showTable
         const {petName, petType,bread, adopeterName, email,phone} = values;
         
         const[errors, setErrors] = useState({
            petName:"",
            petType:"",
            bread:"",
            adopeterName:"",
            email:"",
            phone:""
         })
         function handleChange(event){
           const{name,value} = event.target;
           setValues((prevValues) =>({

            ...prevValues,
            [name]:value
           })) //by these we add the  input values to value array usinf setvalue

           let errorsCopy = { ...errors };
           const errorR = validation(name, value, errorsCopy);
              setErrors(errorR);//object using the spread operator (`...`). This is done to ensure that any modifications made to `errorsCopy` do not directly affect the original `errors` object. */
         }

         function handleSubmit(){
                  console.log(
                     `Pet Name : ${petName},
                      Pet Type: ${petType},
                      bread :${bread},
                      Adopeter Name: ${adopeterName},
                      Email:${email},
                      Phone:${phone}
                     `
                  )
                  if(!petName||!petType||!bread||!adopeterName||!email||!phone){
                     alert("please fill out the whole form");
                     return;
                  }
                  const hasErrors = Object.values(errors).some((val) => val);
                  if (hasErrors) {
                      alert("Please fill out all fields");
                      return;
                  }


            const data ={petName, petType,bread, adopeterName, email,phone};
            setFormData(prevData=> [...prevData,data]);
            setShowTable(true);
            setValues({petName:"",
               petType:"",
               bread:"",
               adopeterName:"",
               email:"",
               phone:""})

            setErrors({
               petName:"",
            petType:"",
            bread:"",
            adopeterName:"",
            email:"",
            phone:""
            })

         }
           
         function handleGoBack(){
            setShowTable(!showTable);
         }
   if(!showTable){

   return (<div style={{ display: "flex",justifyContent: "center", alignItems: "center"}}>
    <Card >
       <form >
         <div>
            <label>Pet Name</label>
         <input type="text" id="petName" name="petName" placeholder="PetName" value={petName} onChange={handleChange} />
         <small>{errors.petName}</small>
         </div>
        <div>
        <label>Pet Type</label>
        <input type="text" id="petType" name="petType" placeholder="PetType" value={petType} onChange={handleChange} />
        <small>{errors.petType}</small>
        </div>
        <div>
        <label>Bread</label>
        <input type="text" id="bread" name="bread" placeholder="Bread" value={bread} onChange={handleChange} />
        <small>{errors.bread}</small>
        </div>
        <div>
        <label>Your Name</label>
        <input type="text" id="adopeterName" name="adopeterName" placeholder="Adopter Name" value={adopeterName} onChange={handleChange} />
        <small>{errors.adopterName}</small>
        </div>
        <div>
        <label>Email</label>
        <input type="email" id="email" name="email" placeholder="email" value={email} onChange={handleChange} />
        <small>{errors.email}</small>
        </div>
        <div>
        <label>Phone</label>
        <input type="text" id="phone" name="phone" placeholder="phone" value={phone} onChange={handleChange} />
        <small>{errors.phone}</small>
        </div>
        <div>
        <button onClick={handleSubmit}>Submit</button>
        </div>
        
       </form>
    </Card>
    </div>)
   }
   return <AdopterData formData={formData} handleGoBack={handleGoBack}></AdopterData>
    
}

export default Form;