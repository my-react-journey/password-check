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

        if(enteredPassword.length == 0) {
            setSpanClass("passwordStrength")
            setSpanText("Please type a password...")
            return
        }

        let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$&*])(?=.{8,}))')
        let strongPassword = new RegExp('((?=.+[a-z])(?=.+[A-Z])(?=.+[0-9])(?=.+[!@#$&*])(?=.{10,}))')
        let superStrongPassword = new RegExp('((?=.+[a-z])(?=.+[A-Z])(?=.+[0-9])(?=.+[!@#$&*])(?=.{16,}))')

        if(superStrongPassword.test(enteredPassword)) {
            setSpanClass("passwordStrength green")
            setSpanText("Password is Super Strong 🚀")
        } else if(strongPassword.test(enteredPassword)) {
            setSpanClass("passwordStrength purple")
            setSpanText("Password is Strong 💪")
        } else if(mediumPassword.test(enteredPassword)){
            setSpanClass("passwordStrength brown")
            setSpanText("Password is Good 🙂")
        } else {
            setSpanClass("passwordStrength red")
            setSpanText("Password is weak 🤮")
        }
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
