import React from 'react'

const InputText = ({label, value, onChange}) => {

    return (
        <div>
            <label>
            {label} : <input type='text' value={value} onChange={onChange} />
            </label>
            <br/>
        </div>
    )

}

export default InputText