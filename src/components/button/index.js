import { StyledButton } from "./button.styled";

function Button({
  onClick,
  type = "button",
  variant = "primary",
  disabled,
  children,
  ...rest
}) {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
