import { getAuth, signOut } from 'firebase/auth';

import React from 'react';

const Home: React.FC = () => {
  const auth = getAuth();

  return (
    <>
      <span>WELCOME TO HOME PAGE</span>
      <button onClick={() => signOut(auth)}>
        Sign out of firebase
      </button>
    </>
  );
}

export default Home;