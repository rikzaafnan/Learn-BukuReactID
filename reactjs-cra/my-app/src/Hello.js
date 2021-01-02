import React from 'react'
// function Hello () {

//     return <h1> Hello Rikza </h1>

// }



const Hello = (props) => {

    const { name, name2 } = props

    return (
    <div>
        <h1> ini props dari name 1 : {name} </h1>
        <h1> ini props dari name 2 : {name2} </h1>
    </div>
    ) 
    
}

Hello.defaultProps = {
    name: `rikza`
}


export default Hello