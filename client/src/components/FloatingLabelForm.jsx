function FloatingLabelForm({ type, name, value, onChange, labelText, onBlur }) {
  return (
    <div className='form-group'>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <label htmlFor={name} className={value ? 'has-input' : ''}>
        {labelText}
      </label>
    </div>
  );
}

export default FloatingLabelForm;
