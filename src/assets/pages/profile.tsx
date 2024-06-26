export default function Profile() {
  return (
    <>
      <div className="flex flex-row mb-8">
        <img
          src="./public/profile.JPG"
          alt="profile image"
          className="h-[100px] w-[100px] rounded-full"
        />
        <div className="self-center px-4 grow">
          <h2 className="font-bold text-xl"> hello world</h2>
          <p>lorem ipsum shlfjsjdljalsdajldskjaljlds</p>
        </div>

        <div className="self-center">
          <button className="flex flex-row rounded-full bg-grey-500 py-2 px-4 shadow hover:outline hover:outline-2 hover:outline-lime-500 hover:text-lime-500">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M4.5 17.2071V19C4.5 19.2761 4.72386 19.5 5 19.5H6.79289C6.9255 19.5 7.05268 19.4473 7.14645 19.3536L15.6452 10.8548L13.1452 8.35485L4.64645 16.8536C4.55268 16.9473 4.5 17.0745 4.5 17.2071Z"
                  stroke="#000000"></path>{" "}
                <path
                  d="M15.0897 6.4103L17.5897 8.9103L18.7929 7.70711C19.1834 7.31658 19.1834 6.68342 18.7929 6.2929L17.7071 5.20711C17.3166 4.81658 16.6834 4.81658 16.2929 5.20711L15.0897 6.4103Z"
                  stroke="#000000"></path>{" "}
              </g>
            </svg>
            Edit
          </button>
        </div>
      </div>
    </>
  );
}
