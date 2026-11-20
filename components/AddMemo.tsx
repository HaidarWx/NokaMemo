export function AddMemo() {
  return (
    <div className=" bg-[#FFA6B5] h-full rounded-[5px]">
      <div className="flex flex-col items-center justify-center bg-[#FDEDED] md:h-40 m-1">
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-plus-lg text-[#FFA6B5] font-bold"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
            />
          </svg>
        </div>
        <div className="text-[#FFA6B5] font-bold text-[24px]">
          Add more your memo here...
        </div>
      </div>
    </div>
  );
}
