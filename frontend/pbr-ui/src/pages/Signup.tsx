import { useRef } from "react";
import { Input } from "../components/Input";
import Button from "../components/ui/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BACKEND_URL = "http://localhost:3000";

export default function Signup() {
    const usernameRef = useRef<any>("");
    const passwordRef = useRef<any>("");
    const fnameRef = useRef<any>("");
    const lnameRef = useRef<any>("");
    const navigate = useNavigate();

    async function handleSignup() {
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        const fname = fnameRef.current.value;
        const lname = lnameRef.current.value;
        await axios.post(BACKEND_URL + "/signup", {
            username: username,
            password: password,
            fname,
            lname
        });
        alert("Signed up succesfully!");
        navigate("/signin");
    }


    const inputStyles = "bg-myBlack-700 w-full";
    return (<>
        <div className="bg-myBlack-500 text-white h-screen w-screen flex justify-center items-center">
            <div className="size-fit w-[50%] py-4 bg-myBlack-700 rounded-3xl">
                <div className="pl-6 pb-5 pt-5">
                    ICON
                </div>
                <div className="flex justify-between gap-4">
                    <div className="w-[25%]">
                        <div className="text-3xl pl-6">
                            Sign up
                        </div>
                        <div className="text-sm pl-6 pt-4">
                            <i>
                                Use any account you'd like!
                            </i>
                        </div>
                    </div>
                    <div className="flex-1 pr-6">
                        <div className="space-y-4">
                            <div className="ml-[22%] w-[75%]">
                                <Input reference={fnameRef} placeHolder="First Name" extraStyles={inputStyles}></Input>
                            </div>
                            <div className="ml-[22%] w-[75%]">
                                <Input reference={lnameRef} placeHolder="Last Name" extraStyles={inputStyles}></Input>
                            </div>
                            <div className="ml-[22%] w-[75%]">
                                <Input reference={usernameRef} placeHolder="Username" extraStyles={inputStyles}></Input>
                            </div>
                            <div className="ml-[22%] w-[75%]">
                                <Input reference={passwordRef} placeHolder="Password" extraStyles={inputStyles} type="password"></Input>
                            </div>
                            <div className="flex justify-end">
                                <Button text={"Submit!"} size="lg" variant="primary" onClick={handleSignup}></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
    )
}