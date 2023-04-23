import React, { useState } from 'react'
import Form from './Form'
import SuccesWindow from './SuccesWindow'

export const Send = () => {
    const [succesWindow, setSuccesWindow] = useState('')

    const postMethod = (props) => {
        console.log(props);
        // fetch('https://react-http-70f07-default-rtdb.firebaseio.com/NFTs.json',
        fetch('http://localhost:8080/api',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: props.name,
                    mail: props.mail
                })
            }
        ).then((res) => { setSuccesWindow('✅ Thanks for subscribing!') }), (error) => { setSuccesWindow('❌ Try later!') }

    }

    const showHandler = () => {
        setSuccesWindow('');
    }

    return (
        <>
            {succesWindow !== '' && <SuccesWindow succestext={succesWindow} showHandler={showHandler} />}
            <Form onConfirm={postMethod} />
        </>
    )
}

export default Send;