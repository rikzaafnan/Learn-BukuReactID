import React from 'react'

const ubah = (obj) => {
    const btn = obj.target
    btn.innerText = 'Clicked'
}

const Event = () => {
    return (
        <button onClick={(e) => ubah(e)} >
            Info
        </button>
    )
}

export default Event