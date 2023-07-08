function InputForm({ type, name, value, onChange, labelText, editing }) {
  return (
    <div className='input-form'>
      <label htmlFor={name}>{labelText}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        disabled={!editing}
      />
    </div>
  );
}

export default InputForm;
