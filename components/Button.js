import PropTypes from 'prop-types'
import React from 'react'

const Button = props => (
  <button onClick={props.disabled ? props.onClick : null}>
    {props.text}
  </button>
)

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string,
}

export default Button