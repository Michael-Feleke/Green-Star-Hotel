// import styled from "styled-components";

// const Input = styled.input`
//   border: 1px solid var(--color-grey-300);
//   background-color: var(--color-grey-0);
//   border-radius: var(--border-radius-sm);
//   padding: 0.8rem 1.2rem;
//   box-shadow: var(--shadow-sm);
// `;

// export default Input;

export default function Input({ type, defalutValue, register, name }) {
  return (
    <input
      {...register(name)}
      type={type}
      defaultValue={defalutValue}
      className="peer w-full h-full bg-transparent text-emerald-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-emerald-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-emerald-gray-200 placeholder-shown:border-t-emerald-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-[1.7rem] px-4 py-8 rounded-[7px] border-emerald-gray-200 focus:border-emerald-500"
      placeholder=" "
    />
  );
}
