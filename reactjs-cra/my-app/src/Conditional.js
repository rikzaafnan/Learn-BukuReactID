import React from 'react'

const Conditional = ({userNameProps}) => {
    const isLogin = false
    const userName = 'afnan'
    return (
        <div>
            {
                isLogin 
                ? 
                <b>{userName} {userNameProps} sudah login</b>
                : 'silahkan login!'
            }
        </div>
    )
}

export default Conditional