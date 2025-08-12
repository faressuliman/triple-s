import type { ButtonHTMLAttributes, ReactNode } from "react"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    className?: string
}

const Button = ({children, className, ...rest}: IProps) => {
  return (
    <button className={`${className} w-full rounded-md text-white border-1 py-2 px-6 cursor-pointer duration-300 font-bold`} {...rest}>{children}</button>
  )
}

export default Button