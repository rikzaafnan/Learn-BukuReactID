import React from 'react'

let dataPasien = []

const TestControlledForm = () => {
    const [namePasien, setNamePasien] = React.useState('')
    const [gender, setGender] = React.useState(1)
    const [alamat, setAlamat] = React.useState('')
    const [kelurahan, setKelurahan] = React.useState('')
    const [cellularPhone, setCellularPhone] = React.useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        // sent to server
        const formData = { namePasien, gender, alamat, kelurahan, cellularPhone }

        console.log(formData)
        
    }


    return (
        <form onSubmit={handleSubmit} >

            <table>
                <tbody>
                    <tr >
                        <td colSpan="3">
                            Test Controller Form
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Nama Pasien
                            </label>
                        </td>
                        <td>
                            :
                        </td>
                        <td>
                            <input type="text" value={namePasien} onChange={(e) => setNamePasien(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                Gender
                            </label>
                        </td>
                        <td>
                            :
                        </td>
                        <td>
                            <input type="radio" name='gender' checked={gender===1} onChange={(e) => setGender(1)} /> Pria
                            <input type="radio" name='gender' checked={gender===0} onChange={(e) => setGender(0)} /> Wanita
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                alamat
                            </label>
                        </td>
                        <td>
                            :
                        </td>
                        <td>
                            <textarea value={alamat} onChange={(e) => setAlamat(e.target.value)} />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label>
                                kelurahan
                            </label>
                        </td>
                        <td>
                            :
                        </td>
                        <td>
                            <select value={kelurahan} onChange={(e) => setKelurahan(e.target.value)}>
                                <option  >-</option>
                                <option value='tengah' >Tengah</option>
                                <option value='gedong' >Gedong</option>
                                <option value='batu-ampar' >Batu Ampar</option>
                            </select>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <label>
                                No handphone
                            </label>
                        </td>
                        <td>
                            :
                        </td>
                        <td>
                            <input type="text" value={cellularPhone} onChange={(e) => setCellularPhone(e.target.value)} />
                        </td>
                    </tr>

                    <tr>
                        <td colSpan="3">
                            <input type='submit' value='submit' style={{backgroundColor:'lightblue'}} />
                        </td>   
                    </tr>
                </tbody>
                
            </table>
        </form>

    )

}

export default TestControlledForm