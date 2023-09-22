import { useEffect, useRef } from "react";

const RefFrom = () => {
    const textRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(()=>{
        textRef.current.focus();
    },[])

    const handleSubmit = e=>{
        e.preventDefault();
        console.log(textRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={textRef} type="text" name='text'/>
                <br />
                <input ref={emailRef} defaultValue={'sajalb@gmail.com'} type="email" name="email"/>
                <br />
                <input ref={passwordRef} type="password" name='password'/>
                <br />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default RefFrom;