export default function Textarea({ id, error, ...rest }) {
  return (
    <textarea
      id={id}
      className="form-field__control form-field__control--textarea"
      aria-invalid={!!error}
      aria-describedby={error ? `${id}-error` : undefined}
      {...rest}
    />
  );
}
