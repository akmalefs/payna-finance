const Button = ({ children, variant }) => {
  return (
    <a
      href="#"
      className={`${variant} text-navy tracking-minus py-3 px-11 rounded-full text-center`}
    >
      {children}
    </a>
  );
};

export default Button;
