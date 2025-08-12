import { forwardRef, type InputHTMLAttributes, type Ref } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef(({ ...rest }: IProps, ref: Ref<HTMLInputElement>) => {
  return (
    <div className="input-wrapper">
      <input type="text" ref={ref} {...rest} />
      <span></span>
    </div>
  );
});

Input.displayName = "Input";

export default Input;
