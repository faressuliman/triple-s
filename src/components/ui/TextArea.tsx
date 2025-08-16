import { forwardRef, type Ref, type TextareaHTMLAttributes } from "react";

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = forwardRef(({ ...rest }: IProps, ref: Ref<HTMLTextAreaElement>) => {
  return (
    <textarea
    ref={ref}
      className="border-[1px] border-gray-300 shadow-md focus:border-[#22518f] focus:outline-none focus:ring-1 focus:ring-[#22518f] mb-1 rounded-lg px-3 py-3 text-base w-full bg-transparent"
      rows={6}
      {...rest}
    />
  );
});

Textarea.displayName = "Textarea";

export default Textarea;
