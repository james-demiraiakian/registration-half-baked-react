import React, { useState } from 'react';
import Authenticate from '../../presentation/Authenticate/Authenticate';
import { signInUser } from '../../services/users';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await signInUser(email, password);
    console.log(resp);
  };

  return (
    <div>
      <Authenticate
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
