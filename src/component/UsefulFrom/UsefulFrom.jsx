import { useState } from 'react';
const UsefulFrom = () => {
    const [text, setText] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [error, setError] = useState('');


    const handleSubmit = e => {
        e.preventDefault();
        if (phone.length < 6) {
            setError('Must be 6 character')
        }
        else {
            setError('');
            console.log(text, email, phone);
        }
    }

    const handleText = e => {
        setText(e.target.value)

    }
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePhone = e => {
        setPhone(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleText} type="text" name='text' />
                <br />
                <input onChange={handleEmail} type="email" name="email" id="" required />
                <br />
                <input onChange={handlePhone} type="text" name='phone' />
                {
                    error && <p>{error}</p>
                }
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UsefulFrom;