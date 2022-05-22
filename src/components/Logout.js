import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Logout = () => {
  let history = useNavigate();

  useEffect(() => {
    
    return () => {
      console.log("logout se hu bhaii");
      const user=localStorage.getItem('auth-token')
      if(user!=null){
      localStorage.clear(user);
      toast.success('🦄 Logout Successfully ', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        setTimeout(function(){
          history('/login');
        }, 5000); 
         
      }else{
        toast.error('🦄 Alredy Logout ', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
          setTimeout(function(){
            history('/login');
          }, 5000); 
      }
    }
  }, [])


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
    <div>Logout</div>
    </>
  )
}
