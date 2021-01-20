import React from 'react'
import { useParams, useHistory } from 'react-router-dom'

export default () => {
    const { id } = useParams()
    const history = useHistory()

    return <div>
        <h4>Post ke-{id}</h4>
        <p>Lorem ipsum ini lorem ipsum lorem ipsum lorem ipsum.</p>
        <button onClick={() => history.push('/')} >Back</button>
    </div>

}