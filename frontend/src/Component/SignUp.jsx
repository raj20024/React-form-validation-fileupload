import React, { useState } from 'react'
import axios from 'axios';

function SignUp() {
    // const [name, setName] = useState();
    // const [email, setEmail] = useState();
    // const [password, setPassword] = useState();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        
       
    });




    const [files, setFile] = useState([]);
    const [fileError,setFileError]=useState("")
   
    
    const [errors, setErrors] = useState({});
    const [message,setmessage] = useState("");
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    

    // const config={
    //     Headers:{
    //         "content-Type":"multipart/form-data"
    //     }
    // }
    const formData_2 = new FormData();
    formData_2.append("name", formData.name);
    formData_2.append("email", formData.email);
    formData_2.append("password", formData.password);
    for (let i = 0; i < files.length; i++){
        formData_2.append("photo", files[i]);
      }


    const handleSubmit = (e) => {
       e.preventDefault();
    
     // console.log()

      

        const newErrors = validateForm(formData);
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            if(files.length === 0){
             return   setFileError('Upload File') ;
            }else{
            axios.post("http://localhost:5000/signup",formData_2)
            .then(res => 
             {  console.log(res)
           setmessage('Form submitted successfully!');
           localStorage.setItem("user",JSON.stringify(res));
           setFormData({name:"",email:"",password:""});
           setFileError('');
              } 
            )
            .catch(err => console.log(err))
        }
       
        } else {
            console.log(`Form submission failed due to validation errors.`);
        }
    };

    const validateForm = (data) => {
        const errors = {};
        if (!data.name.trim()) {
            errors.name = 'name is required';
        }
        if (!data.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Email is invalid';
        }
        if (!data.password) {
            errors.password = 'Password is required';
        } else if (data.password.length < 8) {
            errors.password = `Password must be at 
            least 8 characters long`;
        }
        return errors;
    };
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center vh-100 ">


                <form onSubmit={handleSubmit} className='col-md-6 bg-light p-4 shadow-lg rounded-4'>
                {message &&
                            <span className="error-message" style={{ color: "green", fontSize: "18px" }}>
                                {message}
                            </span>
                }
                    <div>
                        <label className="form-label">
                            name:
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                           
                            onChange={handleChange}
                        />
                        {errors.name &&
                            <span className="error-message" style={{ color: "red", fontSize: "11px" }}>
                                {errors.name}
                            </span>
                        }
                    </div>
                    <div>
                        <label className="form-label">
                            Email:
                        </label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                          
                            onChange={handleChange}
                        />
                        {errors.email &&
                            <span className="error-message" style={{ color: "red", fontSize: "11px" }}>
                                {errors.email}
                            </span>
                        }
                    </div>
                    <div>
                        <label className="form-label">
                            Password:
                        </label>
                        <input
                            className="form-control"
                            type="password"
                            name="password"
                            
                            onChange={handleChange}
                        />
                        {errors.password &&
                            <span className="error-message" style={{ color: "red", fontSize: "11px" }}>
                                {errors.password}
                            </span>
                        }
                    </div>
                    <div>
                        <label className="form-label">
                            Profile:
                        </label>
                        <input
                            className="form-control"
                            type="file"
                           multiple
                           name='photo'
                            onChange={(e)=>setFile(e.target.files)}
                        />
                      {fileError &&
                            <span className="error-message" style={{ color: "red", fontSize: "11px" }}>
                                {fileError}
                            </span>
                        }
                    </div>

                    <button className="btn btn-primary mt-3"
                        type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default SignUp