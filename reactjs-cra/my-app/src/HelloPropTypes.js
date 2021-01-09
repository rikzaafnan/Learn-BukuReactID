import React from 'react'
import PropTypes from 'prop-types'

function HelloPropTypes({name}) {
    return (
        <div>
            <h1>Hellow {name}</h1>
        </div>
    )

}

HelloPropTypes.propTypes = {
    name: PropTypes.string
}

export default HelloPropTypes