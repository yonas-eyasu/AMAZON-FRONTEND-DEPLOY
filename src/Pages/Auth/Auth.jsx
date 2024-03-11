

import React, { useState, useContext } from 'react';
import classes from '../Auth/Signup.module.css';
import { Link,useNavigate, useLocation} from 'react-router-dom';
import { auth } from '../../Utility/firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { ClipLoader } from 'react-spinners';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import { Type } from '../../Utility/action.type';

function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState({ signIn: false, signUP: false });
  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const navStateData=useLocation()
  console.log(navStateData)
  //console.log(user);


  const authHandler = async (e) => {
    e.preventDefault();
    console.log(e.target.name);

    if (e.target.name == 'signin') {
      // Firebase auth
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signIn: false });
          navigate(navStateData?.state?.redirect || "/")
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signIn: false });

        });
    } else {
      setLoading({ ...loading, signUP: true});
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {   
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signUP: false });
          navigate(navStateData?.state?.redirect || "/")
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signUP: false });
        });
    }
  };

  return (
    <section className={classes.login}>
      {/* logo */}
      <Link to={"/"}>
        <img
          src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/woodland-gardening-amazon-png-logo-vector-8.png"
          alt=""
        />
      </Link>

      {/* form */}
      <div className={classes.login_container}>
        <h1>sign in</h1>

        <small
            style={{
              color: "red",
              padding: "5px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {navStateData?.state?.msg}
          </small>
        

        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            onClick={authHandler}
            name="signin"
            className={classes.login_signInButton}
          >
            {loading.signIn ? (
              <ClipLoader color="#000" size={15} ></ClipLoader>
            ) : (
              ' Sign In'
            )}
          </button>
        </form>
        {/* agreement */}
        <p>
          By signing-in you agree to Fake-Amazon-Clone Conditions of Use and
          sale.
        </p>
        {/* create account btn */}
        <button
          type="submit"
          name="signup"
          onClick={authHandler}
          className={classes.login_registerButton}
        >

           {loading.signUP? (
              <ClipLoader color="#000" size={15}></ClipLoader> 
            ) : (
              'Create your Amazon Account'
            )}
         
        </button>
        {error && (
          <small style={{ paddingTop: '5px', color: 'red' }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;








