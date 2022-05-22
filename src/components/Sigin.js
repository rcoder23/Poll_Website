import React,{useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
export const Sigin = () => {
  let history = useNavigate();
    const [credit, setcredit] = useState({name:"",username:"",email:"",password:""})


    const onchange=(e)=>{
      console.log(e.target.value);
      setcredit({...credit,[e.target.name]:e.target.value})
    }

    const handleSubmit=async(e)=>{
      toast.success('🦄 User Create Successfully ', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        })

      e.preventDefault();
        console.log(credit);
        const response = await fetch("http://localhost:5000/api/auth/createUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name:credit.name,username:credit.username,email: credit.email, password: credit.password})
        });
        const json = await response.json()
        console.log(json);
        setTimeout(function(){
          history('/login');
        }, 3000); 
       
    }

  return (
    <>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
    <div className="container1">
      <center><h1>Sigin</h1></center>
      <form onSubmit={handleSubmit}>
      <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="name"
            value={credit.name}
            onChange={onchange}
            name="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            UserName
          </label>
          <input
            type="text"
            class="form-control"
            value={credit.username}
            onChange={onchange}
            
            id="username"
            name="username"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            name="email"
            value={credit.email}
            onChange={onchange}
          
            id="email"
            aria-describedby="emailHelp"
          
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
           name="password"
           onChange={onchange}
            class="form-control"
            id="password"
          />
        </div>
        <center><p>Or Alredy Account <Link to="/login">Login</Link></p></center>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
    </>
  );
};
