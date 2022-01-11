import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      Header
      <NavLink to="/signin">Log In</NavLink>
      <NavLink to="/signup">Regestrare</NavLink>
    </div>
  );
}
