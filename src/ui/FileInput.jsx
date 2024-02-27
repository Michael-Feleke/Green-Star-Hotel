// import styled from "styled-components";

// const FileInput = styled.input`
//   font-size: 1.4rem;
//   border-radius: var(--border-radius-sm);

//   &::file-selector-button {
//     font: inherit;
//     font-weight: 500;
//     padding: 0.8rem 1.2rem;
//     margin-right: 1.2rem;
//     border-radius: var(--border-radius-sm);
//     border: none;
//     color: var(--color-brand-50);
//     background-color: var(--color-brand-600);
//     cursor: pointer;
//     transition: color 0.2s, background-color 0.2s;

//     &:hover {
//       background-color: var(--color-brand-700);
//     }
//   }
// `;

// export default FileInput;

export default function FileInput() {
  return (
    <label
      htmlFor="uploadFile1"
      className="bg-white text-center rounded w-full sm:w-[360px] min-h-[160px] py-4 px-4 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300  font-[sans-serif] m-4"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 mb-6 fill-gray-400"
        viewBox="0 0 24 24"
      >
        <path
          d="M22 13a1 1 0 0 0-1 1v4.213A2.79 2.79 0 0 1 18.213 21H5.787A2.79 2.79 0 0 1 3 18.213V14a1 1 0 0 0-2 0v4.213A4.792 4.792 0 0 0 5.787 23h12.426A4.792 4.792 0 0 0 23 18.213V14a1 1 0 0 0-1-1Z"
          data-original="#000000"
        />
        <path
          d="M6.707 8.707 11 4.414V17a1 1 0 0 0 2 0V4.414l4.293 4.293a1 1 0 0 0 1.414-1.414l-6-6a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 1.414 1.414Z"
          data-original="#000000"
        />
      </svg>
      <p className="text-gray-400 font-semibold text-xl">
        Drag & Drop or <span className="text-emerald-600">Choose file</span> to
        upload the room image
      </p>
      <input type="file" id="uploadFile1" className="hidden" />
      <p className="text-xl text-gray-400 mt-2">
        PNG, JPG SVG, WEBP, and GIF are Allowed.
      </p>
    </label>
  );
}
