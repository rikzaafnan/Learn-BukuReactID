import React from 'react'

const Counter = () => {
    // let number = 0

    // const increment = () => {
    //     number +=1

    //     console.log(number)
    // }

    const [number, increment] = React.useState(0)

    return (
        <div>
            <h1>Counter App</h1>
            <p>Nilai counter saat ini: {number}</p>
            <button onClick={() => increment(number+1)} >+</button>
            <button onClick={() => increment(number-1)} >-</button>
        </div>
    )
}

export default Counter