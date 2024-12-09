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
  errorMessage
}) {
  const inputHandler = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    errorMessage[1]({})
  }
  return (
    <div id="input" className=" flex flex-col gap-[.5rem]">
      <label className="text-[1.8rem] font-[600]" htmlFor={label}>
        {label}
      </label>
      <input
        className="text-[1.8rem] font-[600] px-[1.5rem] py-[1rem] foucus:border-none focus:outline-none  border-[#00000022] focus:border-[2px] focus:border-[#015107] focus:rounded-[.75rem]  rounded-t-[.5rem] bg-[rgba(253,255,255,0.1)] border-[blue] border-b-[2px] placeholder:text-gray-600"
        type={'text'}
        placeholder={placeholder}
        value={value}
        onInput={inputHandler}
        name={name}
        style={{ backdropFilter: `blur(5px)` }}
      />
      {!error && Note && (
        <div
          className="text-[1.2rem] px-[1rem] text-red-500 font-[500]"
          id="note"
        >
          Note* : {Note}
        </div>
      )}
      <p className="text-[1.6rem] text-red-500 font-[600]" id="error">
        {error}
      </p>
    </div>
  )
}

export default InputField
