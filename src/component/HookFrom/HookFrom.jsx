import useInputState from "../../hooks/useInputState";


const HookFrom = () => {
    // const [name, handleNameValu]=useInputState('jotin');
    const changeName = useInputState('sajal@b.com')

    const handleSubmit = e =>{
        e.preventDefault();
        // console.log(name)
        console.log(changeName.value)
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameValu} type="text" name='text'/> */}
                <br />
                <input {...changeName}  type="email" name="email"/>
                <br />
                <input type="password" name='password'/>
                <br />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default HookFrom;