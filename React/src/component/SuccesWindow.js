import React from 'react';
import Style from './SuccesWindows.module.css'

export const SuccesWindow = (props) => {
    return (
        <div className={Style.BackgroundWindow}>
            <div className={Style.Window}>
                <h1>{props.succestext}</h1>
                <p> <button onClick={props.showHandler}>Back</button></p>
            </div>
        </div>
    )
}


export default SuccesWindow;