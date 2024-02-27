// import styled from "styled-components";

// const Input = styled.input`
//   border: 1px solid var(--color-grey-300);
//   background-color: var(--color-grey-0);
//   border-radius: var(--border-radius-sm);
//   padding: 0.8rem 1.2rem;
//   box-shadow: var(--shadow-sm);
// `;

// export default Input;

export default function Input({ label, type, defalutValue }) {
  return (
    <div className="relative w-full min-w-[200px] h-20">
      <input
        type={type}
        defaultValue={defalutValue}
        className="peer w-full h-full bg-transparent text-emerald-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-emerald-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-emerald-gray-200 placeholder-shown:border-t-emerald-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-[1.7rem] px-3 py-2.5 rounded-[7px] border-emerald-gray-200 focus:border-emerald-500"
        placeholder=" "
      />
      <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-emerald-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-emerald-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-xl text-xl peer-focus:text-xl before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-emerald-gray-400 peer-focus:text-emerald-500 before:border-emerald-gray-200 peer-focus:before:!border-emerald-500 after:border-emerald-gray-200 peer-focus:after:!border-emerald-500">
        {label}
      </label>
    </div>
  );
}
