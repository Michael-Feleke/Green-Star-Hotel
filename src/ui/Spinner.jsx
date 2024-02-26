// import styled, { keyframes } from "styled-components";

// const rotate = keyframes`
//   to {
//     transform: rotate(1turn)
//   }
// `;

// const Spinner = styled.div`
//   margin: 4.8rem auto;

//   width: 6.4rem;
//   aspect-ratio: 1;
//   border-radius: 50%;
//   background: radial-gradient(farthest-side, var(--color-brand-600) 94%, #0000)
//       top/10px 10px no-repeat,
//     conic-gradient(#0000 30%, var(--color-brand-600));
//   -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0);
//   animation: ${rotate} 1.5s infinite linear;
// `;

// export default Spinner;

function Spinner() {
  return (
    <div className="my-16 mx-auto w-24 ">
      <div className="w-24 h-24 rounded-full animate-spin border-8 border-dashed border-green-500 border-t-transparent"></div>
    </div>
  );
}

export default Spinner;
