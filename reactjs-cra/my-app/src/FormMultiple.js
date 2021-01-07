import React from 'react'
import InputText from './InputText'

const FormMultiple = () => {
    // const [name, setName] = React.useState('')
    // const [email, setEmail] = React.useState('')
    // const [phone, setPhone] = React.useState('')

    // state form memiliki 3 item data yaitu name, phone, dan email

    const [form, setForm] = React.useState({
        name: '',
        phone: '',
        email: ''
    })

    // validasi
    const [error, setError] = React.useState({
        name: 'name minimal 3 karakter',
        email: 'email minimal 3 karakter',
        phone: 'phone minimal 3 karakter'
    })

    const handleSubmit = (event) => {
        event.preventDefault()

        // Sent to server
        // alert(`
        //     name: ${name}
        //     email: ${email}
        //     phone: ${phone}
        // `)

        console.log(error)

        if (error['name'].length>0) {
            alert(error['name'])
        } else if (error['phone'].length>0) {
            alert(error['phone'])
        } else if (error['email'].length>0) {
            alert(error['email'])
        } else {
            alert('Validasi sukses')
        }

        // alert(JSON.stringify(form))
    }

    const handleChange = (field, e) => {
        // validasi disini

        setError('')
        const value = e.target.value
        if(value.length < 3) {
            setError({...error, [field]: `${field} minimal 3 karakter`})
        } else {
            setForm({...error, [field]: ''})
        }

        setForm({...form, [field]: value})
    }

    return (
        <form onSubmit={handleSubmit}>
            {error.name}
            <InputText label="Name" value={form.name} onChange={(e)=>handleChange('name', e)} />
            {error.email}
            <InputText label="Email" value={form.email} onChange={(e)=>handleChange('email', e)} />
            {error.phone}
            <InputText label="Phone" value={form.phone} onChange={(e)=>handleChange('phone', e)} />
            <input type='submit' value='submit' />
        </form>
    )

}

export default FormMultiple