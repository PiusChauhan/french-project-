import React from 'react';
import { Link } from 'react-router-dom';

function Button({ children, to, href, onClick, variant = 'primary' }) {
  if (to) return <Link to={to} className={`btn btn-${variant}`}>{children}</Link>;
  if (href) return <a href={href} className={`btn btn-${variant}`}>{children}</a>;
  return <button className={`btn btn-${variant}`} onClick={onClick}>{children}</button>;
}

export default Button;