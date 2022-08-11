import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);

  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  };

  return (
    <>
      <span>WELCOME TO LOGIN PAGE</span>
      <button
        disabled={authing}
        onClick={() => signInWithGoogle()} 
      >
        Sign in with Google
      </button>
    </>
  );
}

export default Login;