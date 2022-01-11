import React, { useState } from 'react';
import Auth from '../../presentation/Auth/Auth';
import { signUpUser } from '../../services/users';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await signUpUser(email, password);
      console.log(resp);
    } catch {
      setErrorMessage('Something went wrong.');
    }
  };

  return (
    <div>
      <Auth
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        errorMessage={errorMessage}
      />
    </div>
  );
}
