import { RefObject } from "react"

interface InputProps {
    onChange?: () => void,
    placeHolder?: string,
    extraStyles?: string,
    type?: string,
    reference?: RefObject<HTMLInputElement>,
    limit?: number
}

export function Input({onChange, placeHolder, extraStyles, type = "text", reference, limit}: InputProps) {
    return <input maxLength={limit} ref={reference} className={"transition-colors duration-700 px-4 py-2 rounded-md m-2 border" + ` ${extraStyles}`} type={type} onChange={onChange} placeholder={placeHolder} />
}