import {ButtonHTMLAttributes} from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

function Button(props: ButtonProps) {
	return <button {...props} />
}

export default Button
