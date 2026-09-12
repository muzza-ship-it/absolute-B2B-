import './form.css';

// Wraps a label + input/textarea/select + error message so every field in
// the app has consistent structure and accessible error association.
export default function FormField({ id, label, required, error, children }) {
  return (
    <div className="form-field">
      <label htmlFor={id} className="form-field__label">
        {label}
        {required && <span aria-hidden="true"> *</span>}
        {required && <span className="sr-only"> required</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="form-field__error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
