import { useState } from "react"

const useInputState = (defaultValu=null)=>{
    const [value, setValue] = useState(defaultValu);
    // const handleChange= e =>{
    //     setValue(e.target.value)
    // }
    // return [value, handleChange]

    const onChange = e =>{
        setValue(e.target.value)
    }
    return {
        value,
        onChange
    }
}

export default useInputState;