// import styled from "styled-components";

// const Textarea = styled.textarea`
//   padding: 0.8rem 1.2rem;
//   border: 1px solid var(--color-grey-300);
//   border-radius: 5px;
//   background-color: var(--color-grey-0);
//   box-shadow: var(--shadow-sm);
//   width: 100%;
//   height: 8rem;
// `;

// export default Textarea;

export default function Textarea({ label }) {
  return (
    // <textarea className="py-[.8rem] px-[1.2rem] border border-solid border-emerald-600 rounded-[5px] bg-gray-50 shadow-sm w-full h-[8rem]" />
    <div className="relative w-[500px] h-[10rem] min-w-[200px] ">
      <textarea
        className="py-[.8rem] px-[1.2rem] rounded-[5px] bg-gray-50 shadow-sm w-full h-[8rem] peer  bg-transparent text-emerald-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-emerald-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-emerald-gray-200 placeholder-shown:border-t-emerald-gray-200  focus:border-2 border-t-transparent focus:border-t-transparent text-[1.7rem]   border-emerald-gray-200 focus:border-emerald-500"
        placeholder=" "
      />
      <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-emerald-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-emerald-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-xl text-xl peer-focus:text-xl before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-emerald-gray-400 peer-focus:text-emerald-500 before:border-emerald-gray-200 peer-focus:before:!border-emerald-500 after:border-emerald-gray-200 peer-focus:after:!border-emerald-500">
        {label}
      </label>
    </div>
  );
}
