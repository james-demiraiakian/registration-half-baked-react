import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      Header
      <Link to="/">Log In</Link>
      <Link to="/">Regestrare</Link>
    </div>
  );
}
