

const ReuseableFrom = ({handleFromSubmit, fromTitle, submitValue, children}) => {
    const handleSubmit= e =>{
        e.preventDefault();
        const data ={
            name: e.target.text.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }
        
        handleFromSubmit(data);
    }
    return (
        <div>
            {children}
            <form onSubmit={handleSubmit}>
                <input type="text" name='text'/>
                <br />
                <input type="email" name="email"/>
                <br />
                <input type="password" name='password'/>
                <br />
                <input type="submit" value={submitValue}/>
            </form>
        </div>
    );
};

export default ReuseableFrom;