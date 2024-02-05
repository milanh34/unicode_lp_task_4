import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from './Axios';    

const Register = () => {
    const [registered, setRegistered] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    
    const [name, setname] = useState("");
    const [validname, setValidname] = useState(false);
    
    const [mail, setMail] = useState("");
    const [validMail, setValidMail] = useState(false);
    
    const [pass, setPass] = useState("");
    const [validPass, setValidPass] = useState(false);
    
    const [confirmPass, setConfirmPass] = useState("");
    const [validConfirmPass, setValidConfirmPass] = useState(false);
    
    let changename = (event) => {
        setname(event.target.value);
    }
    let changeMail = (event) => {
        setMail(event.target.value);
    }
    let changePass = (event) => {
        setPass(event.target.value);
    }
    let changeConfirmPass = (event) => {
        setConfirmPass(event.target.value);
    }
    const REGURL = '/register';

    let regexname = /^[A-Za-z][A-Za-z\s]{1,}$/;
    let regexmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    let regexpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

   useEffect(() => {
      setValidname(regexname.test(name));
    }, [name])
    
    useEffect(() => {
      setValidMail(regexmail.test(mail));
    }, [mail])
    
    useEffect(() => {
      setValidPass(regexpass.test(pass));
      setValidConfirmPass(pass === confirmPass);
    }, [pass, confirmPass])
    
    let checkRegister = async (event) => {
        event.preventDefault();
        if(validname && validMail && validPass && validConfirmPass){
            setErrMsg("")
            setLoading(true);
            try{
                let res = await axios.post(REGURL, 
                    {name: name, email: mail, password: pass, auth: 'Normal'},
                    {headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}})
                console.log(res);
                setTimeout(() => {
                    setRegistered(true);
                }, 500);
            } catch(error) {
                    setErrMsg("Registration Error. Try using different email");
            } finally {
                setLoading(false);
            }
        } else {
            setErrMsg("Registration Failed!");
        }
    }


    document.title = "Sign Up Page";
    return(
        <>
       {
        registered ? (
            <section className="bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700 text-center">
                        <div className="p-4 space-y-4 md:space-y-6 sm:p-4">
                            <h1 className="text-xl font-bold leading-tight text-center tracking-tight md:text-2xl text-green-400">Sign Up Successful !</h1>
                            <Link to="/login" className="font-medium hover:underline text-blue-500">Login here</Link>
                        </div>
                    </div>
                </div>
            </section>
        ) : (
        <section className="bg-gray-900">
            <div id="registerForm" className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                    <div className="p-4 space-y-4 md:space-y-6 sm:p-4">
                        <h1 id="heading" className="text-xl font-bold leading-tight text-center tracking-tight md:text-2xl text-white">Sign Up Now</h1>
                        <p className="text-yellow-300">{loading && <span>Registering...</span>}</p>
                        <p className="text-red-400">{errMsg}</p>
                        <form className="space-y-4 md:space-y-6" onSubmit={checkRegister}>
                            <div>
                                <div className="flex justify-between">
                                    <label htmlFor="name" className="inline-block mb-1 text-sm font-medium text-white">Name</label>
                                </div>
                                <input onChange={changename} type="text" name="name" id="name" className="border sm:text-sm rounded-lg block w-full p-2 bg-gray-700 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500" autoFocus required />
                                <p className="text-sm inline-block text-red-400"><span className={name && !validname ? "info" : "offscr"}>Please Enter Valid User name</span></p>
                            </div>
                            <div>
                                <div className="flex justify-between">
                                    <label htmlFor="email" className="block mb-1 text-sm font-medium text-white">Email</label>
                               </div> 
                               <input onChange={changeMail} type="email" name="email" id="email" className="border sm:text-sm rounded-lg block w-full p-2 bg-gray-700 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500" required />
                               <p className="text-sm inline-block text-red-400"><span className={mail && !validMail ? "info" : "offscr"}>Incorrect Email Format</span></p>
                            </div>
                            <div> 
                                <div className="flex justify-between">
                                    <label htmlFor="password" className="block mb-1 text-sm font-medium text-white">Password</label>
                               </div>
                               <input onChange={changePass} type="password" name="password" id="password" className="border sm:text-sm rounded-lg block w-full p-2 bg-gray-700 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500" required />
                               <p className="text-sm inline-block text-red-400"><span className={pass && !validPass ? "info" : "offscr"}>Password must contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character</span></p>
                            </div>
                            <div>
                                <div className="flex justify-between">
                                    <label htmlFor="confirm-password" className="block mb-1 text-sm font-medium text-white">Confirm password</label>
                                </div> 
                                <input onChange={changeConfirmPass} type="password" name="confirm-password" id="confirm-password" className="border sm:text-sm rounded-lg block w-full p-2 bg-gray-700 border-gray-600 text-white focus:ring-blue-500 focus:border-blue-500" required />
                                <p className="text-sm inline-block text-red-400"><span className={confirmPass && !validConfirmPass ? "info" : "offscr"}>Confirm Password should be same as Password</span></p>
                            </div>
                            <button className="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800" >Sign Up</button>
                            <p className="text-sm font-light text-gray-400">Already have an account? <Link to="/login" className="font-medium hover:underline text-blue-500">Login here</Link></p>
                         </form>
                    </div>
                </div>
            </div>
        </section>
    )}
    </>
    )
}

export default Register;