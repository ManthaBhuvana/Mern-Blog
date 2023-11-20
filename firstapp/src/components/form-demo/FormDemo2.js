import { useForm } from "react-hook-form";

function FormDemo2() {
  let { register, handleSubmit ,formState:{errors}} = useForm();

  //handle form submit
  function handleFormSubmit(userObj) {
    console.log(userObj);
  }

  //console.log(errors)

  return (
    <div>
      <h1 className="display-3 text-center text-primary">
        Form submission & Validation Demo
      </h1>
      <form
        className="w-50 mx-auto mt-5"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        {/* username */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="form-control"
            {...register("username", { required: true,minLength:4,maxLength:6 })}
          />
          {/* validation error message of username */}
          {errors.username?.type==='required' && <p className="text-danger">Username is required</p>}
          {errors.username?.type==='minLength' && <p className="text-danger">Min length shd be 4</p>}
          {errors.username?.type==='maxLength' && <p className="text-danger">Max length shd be 6</p>}
        </div>
        {/* email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            {...register("email",{required:true})}
          />
          {/* validation error message of email */}
          { errors.email?.type==='required' && <p className="text-danger">Email is required</p>}
        </div>
          {/* state */}
          <div className="mb-3">
          <label htmlFor="state">Select state</label>
          <select  id="state" className="form-select" >
            <option value="telangana">Telangana</option>
            <option value="ap">Andhra pradesh</option>
          </select>
        </div>
        {/* validation error message for state */}
        { errors.state?.type==='required' && <p className="text-danger">Please select a state</p>}
        {/* feedback */}
        <div className="mb-3">
            <label htmlFor="feedback">Feedback</label>
            <textarea id="" rows="5" className="form-control" {...register('feedback',{required:true})}></textarea>
        </div>
        {errors.feedback?.type==='required' && <p className="text-danger">Feedback is required</p>}
        {/* submit button */}
        <button className="btn btn-success">Login</button>
      </form>
    </div>
  );
}

export default FormDemo2;



