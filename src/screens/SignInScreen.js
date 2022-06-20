import React, { useState } from "react";
import "./SignInScreen.css";
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignInScreen = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const register = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  // const signIn = (e) => {
  //   e.preventDefault();
  // };
  return (
    <div className='signupScreen'>
      <form>
        <h1>Sign In</h1>
        <input
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
          type='email'
          placeholder='Email address'
        />
        <input
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
          type='password'
          placeholder='Password'
        />
        <button
          type='submit'
          onClick={(e) => {
            // signIn();
            register(e);
          }}
        >
          Sign In
        </button>
        <h4>
          <span className='signupScreen-gray'>New to Netflix?</span>
          <span className='signupScreen-link' onClick={register}>
            Sign Up Now
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignInScreen;
