import { useRef, useState } from "react";
import "./PasswordInput.css"

function PasswordInput() {

    let inputRef = useRef(null)
    
    let [password, setPassword] = useState("")
    let [spanClass, setSpanClass] = useState("passwordStrength")
    let [spanText, setSpanText] = useState("\u00a0\u00a0")
    
    let checkStrength = () => {
        let enteredPassword = inputRef.current.value
        setPassword(enteredPassword)

    }


	return (
		<>
			<div className="checker">
				<input
					className="passwordInput"
					type="text"
					placeholder="Enter your password"
                    ref={inputRef}
					onInput={checkStrength}
                    value={password}
                    autoFocus
				/>

                <span className={spanClass}>{spanText}</span>
			</div>
		</>
	)
}

export default PasswordInput
