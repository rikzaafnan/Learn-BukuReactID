import React from 'react'
import PropTypes from 'prop-types'

function PropTypesButton({title, onClick}) {
    return (
        <div>
            <button onClick={onClick}>
                {title}
            </button>
        </div>
    )
}

PropTypesButton.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default PropTypesButton
