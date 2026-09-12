export default function Input({ id, error, ...rest }) {
  return (
    <input
      id={id}
      className="form-field__control"
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error` : undefined}
      {...rest}
    />
  );
}
