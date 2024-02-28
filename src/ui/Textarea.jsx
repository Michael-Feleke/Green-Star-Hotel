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

export default function Textarea({ register, registerObject, name }) {
  return (
    // <textarea className="py-[.8rem] px-[1.2rem] border border-solid border-emerald-600 rounded-[5px] bg-gray-50 shadow-sm w-full h-[8rem]" />

    <textarea
      {...register(name, registerObject)}
      className="py-[.8rem] px-[1.2rem] rounded-[5px] bg-gray-50 shadow-sm w-full h-[10rem] peer  bg-transparent text-emerald-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-emerald-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-emerald-gray-200 placeholder-shown:border-t-emerald-gray-200  focus:border-2 border-t-transparent focus:border-t-transparent text-[1.7rem]   border-emerald-gray-200 focus:border-emerald-500"
      placeholder=" "
    />
  );
}
