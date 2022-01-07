import { useState } from 'react';

const InputForm = () => {
    const [callSign, setCallSign] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        const submission = { callSign, name, phoneNumber, email }
        console.log(submission)

        fetch('http://localhost:8000/submissions', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(submission)
        }).then( () => {
            console.log('it worked!');
        })
        alert('Thanks for submitting!');
    }

    return (
        <form onSubmit={handleSubmit} id="main-form">
            <label>Call Sign</label>
            <input required
                type="text"
                placeholder="Enter your call sign"
                value={callSign}
                onChange={(event) => setCallSign(event.target.value)}
            />
            <label>Name</label>
            <input required
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <label>Phone Number</label>
            <input required
                type="text"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
            />
            <label>Email</label>
            <input required
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <input type="submit" />
        </form>
    )
}

export default InputForm;