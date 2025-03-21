import { useRef } from "react";
import { Input } from "../components/Input"
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = "http://localhost:3000"

export default function Signin() {
    const usernameRef = useRef<any>("");
    const passwordRef = useRef<any>("");
    const navigate = useNavigate();

    async function handleSignin() {
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        const response = await axios.post(BACKEND_URL + "/signin", {
            username,
            password
        });
        const token = response.data.token;
        localStorage.setItem("token", token);
        alert("Signed in succesfully!");
        navigate("/");
    }

    const inputStyles = "bg-myBlack-700 w-full";
    return (<>
        <div className="bg-myBlack-500 text-white h-screen w-screen flex justify-center items-center">
            <div className="w-[50%] py-4 bg-myBlack-700 rounded-3xl size-fit">
                <div className="pl-6 pb-5 pt-5">
                    ICON
                </div>
                <div className="flex justify-between gap-4">
                    <div className="w-[25%]">
                        <div className="text-3xl pl-6">
                            Sign in
                        </div>
                        <div className="text-sm pl-6 pt-4">
                            <i>
                                Use the account you've made earlier!
                            </i>
                        </div>
                    </div>
                    <div className="flex-1 pr-6">
                        <div className="space-y-4">
                            <div className="ml-[22%] w-[75%]">
                                <Input reference={usernameRef} placeHolder="Username" extraStyles={inputStyles}></Input>
                            </div>
                            <div className="ml-[22%] w-[75%]">
                                <Input reference={passwordRef} placeHolder="Password" extraStyles={inputStyles} type="password"></Input>
                            </div>
                            <div className="flex justify-end">
                                <Button text={"Submit!"} size="md" variant="primary" onClick={handleSignin}></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
    )
}