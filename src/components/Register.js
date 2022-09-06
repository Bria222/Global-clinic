import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Sign_img from './Sign_img'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
const history = useNavigate();

    const [inpval, setInpval] = useState({
       country_code:"",
       email: "",
       first_name: "",
       last_name: "",
       number: "",
       password: "",
       password_confirmation:"",
       username:""
    })
    const [data, setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
      const { value, name } = e.target;
        // console.log(value,name);
       setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }
     const addData = (e) => {
        e.preventDefault();

        const {country_code,email, first_name, last_name,number, password,password_confirmation,username } = inpval;

        if (country_code === "" && country_code.length < 4) {
            toast.error(' please check your country code',{
                position: "top-center",
        });
       }

        if (first_name === "") {
            toast.error(' first_name field is requred!',{
                position: "top-center",
        });
       }else if (last_name === "") {
            toast.error('last_name field is requred!',{
                position: "top-center",
                });
            }else if (number === "") {
            toast.error('number field is requred!',{
                position: "top-center",
                 });
                } else if (number.length < 10) {
                    toast.error('phone number not complete',{
                       position: "top-center",
                   });
        } else if (email === "") {
             toast.error('email field is requred',{
                position: "top-center",
            });
        } else if (!email.includes("@")) {
             toast.error('please enter valid email address',{
                position: "top-center",
            });
        }  else if (password === "") {
             toast.error('password field is requred',{
                position: "top-center",
            });
        } else if (password.length < 5) {
             toast.error('password length greater five',{
                position: "top-center",
            });
        }else if (password !== password_confirmation) {
            toast.error('passwords did not match please try again',{
               position: "top-center",
           });
       }
       else if (username === "" && username.length > 3) {
        toast.error('Enter valid username and  try again',{
           position: "top-center",
       });
   } 
        else {
            alert('data added succesfully');
            console.log("data added succesfully");
            history("/login")
            localStorage.setItem("userDetails",JSON.stringify([...data,inpval]));

        }

    }

    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign Up</h3>
                        <Form >
                            <Form.Group className="mb-3 col-lg-6" controlId="countrycode">

                            <Form.Control type="number" name='country_code' onChange={getdata} placeholder="+254" value={inpval.country_code} />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                            <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" value={inpval.email} />
                            </Form.Group>


                            <Form.Group className="mb-3 col-lg-6" controlId="first_name">

                                <Form.Control type="text" name='first_name' onChange={getdata} placeholder="Enter Your firstName" value={inpval.first_name} />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="lastname">

                                <Form.Control type="text" name='last_name' onChange={getdata} placeholder="Enter Your last_name" value={inpval.last_name}  />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="number">

                                <Form.Control type="number" name='number' onChange={getdata} placeholder="Enter Your phone number" value={inpval.number} />
                            </Form.Group>

                            

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" value={inpval.password} />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="password_confirmation">

                                <Form.Control type="password" name='password_confirmation' onChange={getdata} placeholder="confirm password" value={inpval.password_confirmation} />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="username">

                                <Form.Control type="username" name='username' onChange={getdata} placeholder="Username" value={inpval.username} />
                            </Form.Group>

                            <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Register
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span><NavLink to="/login">SignIn</NavLink></span> </p>
                    </div>
                    <Sign_img />
                </section>
                <ToastContainer />
            </div>
        </>
    )
}

export default Register