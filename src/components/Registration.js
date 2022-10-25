import React, {useState} from 'react';
import '../styles/registration.css'
import myImage from '../images/register.png';
import 'bootstrap/dist/css/bootstrap.css';


export default function Registration() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirm] = useState("");
  const[message, setMessage] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
 
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
 
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirm = (e) => {
    setConfirm(e.target.value);
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const emailRegEx =  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const passRegEx = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^?&*]).{7,}/;

    if( name === "" || email === "" || password === "" || confirmPass === "")
      setMessage("♦ You have to fill all the fields");
    
    else {

      if( !emailRegEx.test(email) )
        setMessage("♦ Email is not valid");

      else {

        if( !passRegEx.test(password) )
          setMessage("♦ Password is not valid");

        else {

          if( password !== confirmPass )
            setMessage("♦ The two passwords do not match");

          else
            setMessage("");

        }
      }    
    }
  }

  return (

    <section class="myContainer">

      <div class="container h-100">
        <div class="row d-flex justify-content-center  h-100">
          <div class="col-lg-12 col-xl-11">
            <div class="card text-black">
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                    <form class="mx-1 mx-md-4">

                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                          <input type="text" id="form3Example1c" class="form-control" onChange={handleName}/>
                          <label class="form-label" for="form3Example1c">Your Name</label>
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                          <input type="email" id="form3Example3c" class="form-control" onChange={handleEmail} />
                          
                          <label class="form-label" for="form3Example3c">Your Email</label>
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                          <input type="password" id="form3Example4c" class="form-control" onChange={handlePassword} />
                          <label class="form-label" for="form3Example4c">Password</label>
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                          <input type="password" id="form3Example4cd" class="form-control" onChange={handleConfirm} />
                          <label class="form-label" for="form3Example4cd">Verify password</label>
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                          <ul>
                            <span class="myError">{message}</span>
                          </ul>
                        </div>
                      </div>

                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4 myButton">
                        <button type="button" class="btn btn-primary btn-lg" onClick={handleSubmit}>Register</button>
                      </div>

                    </form>

                  </div>

                  <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                    <img src={myImage} alt="Logo" class="myLoginPhoto"/>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </section>

  ); 

}