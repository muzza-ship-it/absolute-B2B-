import { Link } from 'react-router-dom';
import './Button.css';

// Unified button used for both internal <Link> navigation and real
// <button> submit/click actions, so every CTA in the app shares one
// visual and behavioral definition.
export default function Button({
  as = 'button',
  to,
  variant = 'primary',
  type = 'button',
  disabled = false,
  children,
  ...rest
}) {
  const className = `btn btn--${variant}`;

  if (as === 'link') {
    return (
      <Link to={to} className={className} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={className} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
