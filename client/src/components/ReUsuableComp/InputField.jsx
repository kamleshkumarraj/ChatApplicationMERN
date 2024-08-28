// eslint-disable-next-line react/prop-types
function InputField({
  label,
  name,
  type,
  placeholder,
  value,
  setValue,
  error,
  Note,
}) {
  const inputHandler = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  return (
    <div id="input" className=" flex flex-col gap-[.5rem]">
      <label className="text-[1.8rem] font-[600]" htmlFor={label}>
        {label}
      </label>
      <input
        className="text-[1.8rem] font-[600] px-[1.5rem] py-[1rem] foucus:border-none focus:outline-none border-[.5px] border-[#00000022] focus:border-[1.6px] focus:border-[#0080007e] rounded-[.5rem]"
        type={type}
        placeholder={placeholder}
        value={value}
        onInput={inputHandler}
        name={name}
      />
      {Note && (
        <div
          className="text-[1.2rem] px-[1rem] text-red-500 font-[500]"
          id="note"
        >
          Note* : {Note}
        </div>
      )}
      <p className="text-[1.2rem] text-red-500 font-[500]" id="error">
        {error}
      </p>
    </div>
  )
}

export default InputField
