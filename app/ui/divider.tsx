const SectionDivider = ({ flip = false, color = "white" }) => {
    return (
      <div className={`relative w-full overflow-hidden ${flip ? "rotate-180" : ""}`}>
         <svg
        className="w-full h-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
      >
        <path
          fill={color}
          d="M0,0 L1440,150 L1440,0 Z"
        ></path>
      </svg>
      </div>
    );
  };
  
  export default SectionDivider;