import React from 'react'

// const List = () => {
//     const users = [
//         { id: 1, name: 'Albert', gender: 'male' },
//         { id: 2, name: 'Romy', gender: 'male' },
//         { id: 3, name: 'Shinta', gender: 'female' },
//         { id: 4, name: 'Hendra', gender: 'male' },
//         { id: 5, name: 'Fenny', gender: 'female' },
//         { id: 6, name: 'Desta', gender: 'male' },
//     ]

//     // const displayUser = users.map((user, index) =>  <li key={index}>{user}</li>)

//     // console.log(displayUser)

//     return (
//         <div>
//             <ul>
//                 {
//                     users.length > 0 && users.map((user) => {
//                         return <li key={user.id}>{user.name} ({user.gender})</li>
//                     })
//                 }
//             </ul>
//         </div>
//     )

// }

const List = () => {
        const users = [
        { id: 1, name: 'Albert', gender: 'male' },
        { id: 2, name: 'Romy', gender: 'male' },
        { id: 3, name: 'Shinta', gender: 'female' },
        { id: 4, name: 'Hendra', gender: 'male' },
        { id: 5, name: 'Fenny', gender: 'female' },
        { id: 6, name: 'Desta', gender: 'male' },
    ]

    return (
        <table border='1'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.length > 0 && users.map((user) => {
                        const {id, name, gender} = user
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{gender}</td>
                            </tr>
                        )
                    } ) 
                }
            </tbody>
        </table>
    )
}

export default List
