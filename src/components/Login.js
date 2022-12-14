import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

async function loginUser(credentials) {
    return fetch('http://app.larntechke.com:8083/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }
  
  export default function Login() {
    const history = useNavigate();
    const [username, setusername] = useState();
    const [password, setPassword] = useState();
  
    const handleSubmit = async e => {
      e.preventDefault();
      const response = await loginUser({
        username,
        password
      });
     
      
      
      if ('success' in response ) {
        alert('success')
        .then((value) => {
        //   localStorage.setItem('X-Auth-Token', response['X-Auth-Token']);
        //   localStorage.setItem('user', JSON.stringify(response['user']));
         history("/Welcome");
          
        });
      } else {
        alert(response.error_message)
        console.log( response.error_message);
      }
    }
  
    return (
      
          <div className='container'>
            
            
             <h3 className='text-success fw-bolder'> Sign in</h3>
             <br />
            
            <form  onSubmit={handleSubmit}>
              <input
                
                required
                
                id="username"
                name="username"
                placeholder="username"
                onChange={e => setusername(e.target.value)}
              />
              <br/><br />
              <input
            
                required
                
                id="password"
                name="password"
                placeholder="Password"
                type="password"
                onChange={e => setPassword(e.target.value)}
              />
              <br /><br />
              <Button  className='btn btn-success' type="submit">Submit</Button>
            </form>
          </div>
        
    );
  }


