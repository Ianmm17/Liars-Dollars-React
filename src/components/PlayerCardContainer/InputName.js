import React from "react";

import './InputName.css'

function InputName ({name}) {

    return (
        <input type="text" className={'input-name'} placeholder={'Enter Name'} value={name}/>
    )
}

export default InputName