import type { ButtonHTMLAttributes, ReactNode } from "react"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode,
  className?: string
  isLoading?: boolean
}

const Button = ({ children, className, isLoading, ...rest }: IProps) => {
  return (
    <button className={`${className} w-full rounded-lg text-white border py-2 px-6 cursor-pointer duration-300 font-bold flex items-center justify-center disabled:cursor-not-allowed disabled:hover:bg-[#284975] disabled:bg-[#284975]`} {...rest} disabled={isLoading}>
      {isLoading ? <svg
        className="mr-3 -ml-1 w-5 h-5 animate-spin text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
        </path></svg> : null}
      {children}
    </button>
  )
}

export default Button