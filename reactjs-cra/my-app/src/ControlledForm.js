import React from 'react'

const ControlledForm = () => {
    const [name, setName] = React.useState('')
    const [isMember, setMember] = React.useState(false)
    const [gender, setGender] = React.useState(0)
    const [comment, setComment] = React.useState('')
    const [category, setCategory] = React.useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        // // kirim data form
        // alert(name, setName)

        // sent to server
        const formData = {name, isMember, gender, comment, category}
        console.log(formData)

    }

    return (
        <form onSubmit={handleSubmit} > 
            <label>
                Name: <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
            <br/>
            <label>
                Member: <input type='checkbox' checked={isMember} onChange={(e) => setMember(e.target.checked)}  />
            </label>
            <br/>

            <label>
                Gender:
                <input type='radio' name='gender' checked={gender===1} onChange={(e) => setGender(1)}/> Male
                <input type='radio' name='gender' checked={gender===0} onChange={(e) => setGender(0)}/> Female
            </label>
            <br/>

            <label>
                Comment: 
                <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
            </label>

            <br/>
            <label>
                Category:
                <select value={category} onChange={(e) => setCategory(e.target.value)} >
                    <option value='food'>Food</option>
                    <option value='drink'>Drink</option>
                </select> 
            </label>
            
            <br/>

            <input type='submit' value='submit' />
        </form>
    )
}

export default ControlledForm