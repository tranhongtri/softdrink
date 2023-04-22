const Logo = ({ id, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <rect fill="#111111" width="40" height="40" rx="20"/>
        <path d="M14 10h12v20H14V10zM10 10h4v20h-4V10z" fill="#d67215"/>
      </g>
    </svg>
  );
};

export default Logo;
