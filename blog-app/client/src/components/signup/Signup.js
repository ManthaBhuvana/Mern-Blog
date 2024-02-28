import "./Signup.css";
import {useForm} from 'react-hook-form'
import axios from 'axios'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Signup() {

  let {register,handleSubmit,formState:{errors}}=useForm()
  let [err,setErr]=useState('')
  let navigate=useNavigate()

  async function onSignUpFormSubmit(userObj){
      //make http post req
      let res=await axios.post('http://localhost:4000/user-api/user',userObj)
      console.log(res)
      if(res.data.message==='User created'){
        //navigate to login
        navigate('/signin')
      }else{
        setErr(res.data.message)
      }
  }

  console.log(err)

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="card shadow">
            <div className="card-title text-center border-bottom">
              <h2 className="p-3" >Signup</h2>
            </div>
            <div className="card-body">

            {/* display user signup error message */}
            {err.length!==0&&<p className="text-danger fs-3">{err}</p>}

              <form onSubmit={handleSubmit(onSignUpFormSubmit)}>
                {/* radio */}
                <div className="mb-4">
                <label htmlFor="user" className="form-check-label me-3" style={{fontSize:'1.2rem',color:"var(--light-dark-grey)"}}>
                      Register as
                    </label>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="author"
                      value='author'
                      {...register("userType")}
                    />
                    <label htmlFor="author" className="form-check-label" style={{color:"var(--crimson)"}}>
                      Author
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="user"
                      value='user'
                      {...register("userType")}
                    />
                    <label htmlFor="user" className="form-check-label" style={{color:"var(--crimson)"}}>
                      User
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input type="text" className="form-control" id="username" {...register("username")} />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    {...register("password")}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" id="email" {...register("email")}/>
                </div>

                <div className="text-end">
                  <button type="submit" className="text-light">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
