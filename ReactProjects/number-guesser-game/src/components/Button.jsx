const Button = ({ type, className, onClick, children, id = "" }) => {
  return (
    <button type={type} className={className} onClick={onClick} id={id}>
      {children}
    </button>
  );
};

export default Button;
