import React, { useContext } from 'react';
import login from '../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {

    const {signIn} = useContext(AuthContext);

    const handleLogin = e =>{
        e.preventDefault()
        const from = e.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
     
        console.log(name, email, password)
        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <div>
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
   
     
       <div>
       <img src={login} alt="" />
       </div>
     </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
        <h1 className='font-bold text-center text-2xl'>Login</h1>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
        <input className='btn bg-orange-500' type="submit" value="Login" />
        </div>
      </form>
      <p className='my-4 text-center'>New to car doctors <Link className='text-orange-500 font-bold' to='/signup'>Sign Up</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;