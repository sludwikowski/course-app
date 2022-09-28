import React from 'react'
import PropTypes from 'prop-types'

import Logo from '../Logo'
// import Typography from '../Typography'
// import TextField from '../TextField'
// import Button from '../Button'

import classes from './styles.module.css'

export const LoginForm = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Logo/>
    </div>
  )
}

LoginForm.propTypes = {
  className: PropTypes.string
}

export default LoginForm
