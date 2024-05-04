import React, { useContext } from 'react';
import login from '../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Signup = () => {

    const {createUser} = useContext(AuthContext);

    const handleSignUp = e =>{
        e.preventDefault();
        const from = e.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
     
        console.log(name, email, password)


        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .then(error =>{
            console.error(error)
        })
    }

    return (
        <div>
             <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
   
     
       <div>
       <img src={login} alt="" />
       </div>
     </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
        <h1 className='font-bold text-center text-2xl'>Sign Up</h1>
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          
        </div>
        
        <div className="form-control mt-6">
        <input className='btn bg-orange-500' type="submit" value="Login" />
        </div>
      </form>
      <p className='my-4 text-center'>Already you have an account <Link className='text-orange-500 font-bold' to='/login'>Login</Link></p>
    </div>
  </div>
        </div>
    );
};

export default Signup;