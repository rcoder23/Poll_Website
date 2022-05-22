import React,{useState} from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import './Login.css';
export const CreatePoll = () => {
  let history = useNavigate();
  const [credit, setcredit] = useState({Ques:"",OpA:"",OpB:"",OpC:"",OpD:""})

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const x=localStorage.getItem("auth-token");
    console.log(x);
    
    console.log(credit);
    if(x){
    const response = await fetch("http://localhost:5000/api/poll/createPoll", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authtoken':x
        },
        body: JSON.stringify({ques:credit.Ques,opA:credit.OpA,opB: credit.OpB, opC: credit.OpC,opD:credit.OpD})
    });
    
    const json = await response.json()
    
    console.log(json+"  "+"this is jons");
    toast.success('🦄 Poll Created Successfully ', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });

      setTimeout(function(){
        history('/feed');
      }, 3000); 

  }else{
    console.log("Invalid token form")
  }
  }

  const onchange=(e)=>{
    setcredit({...credit,[e.target.name]:e.target.value})
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
      <center><h2>Create Poll</h2></center>
    <form onSubmit={handleSubmit}>
      <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Question
          </label>
          <input
            type="text"
            class="form-control"
            id="name"
            value={credit.Ques}
            onChange={onchange}
            name="Ques"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Option A
          </label>
          <input
            type="text"
            class="form-control"
            value={credit.OpA}
            onChange={onchange}
            
            id="OpA"
            name="OpA"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Option B
          </label>
          <input
            type="text"
            class="form-control"
            name="OpB"
            value={credit.OpB}
            onChange={onchange}
          
            id="OpB"
            aria-describedby="emailHelp"
          
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
           Option C
          </label>
          <input
            type="text"
           name="OpC"
           value={credit.OpC}
           onChange={onchange}
            class="form-control"
            id="OpC"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
           Option D
          </label>
          <input
            type="text"
           name="OpD"
           value={credit.OpD}
           onChange={onchange}
            class="form-control"
            id="OpD"
          />
        </div>
        
        <center><button type="submit" class="btn btn-primary">
          Create 
        </button>
        </center>
      </form>
      </div>
    </>
  )
}
