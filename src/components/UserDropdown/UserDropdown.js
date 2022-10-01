import React from 'react'
import PropTypes from 'prop-types'

import Typography from '../Typography'
import Avatar from '../Avatar'

import classes from './styles.module.css'

export const UserDropdown = (props) => {
  const {
    className,
    userDisplayName,
    userEmail,
    userAvatar,
    contentList,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <div
        className={classes.wrapper}
      >
        <div
          className={classes.textWrapper}
        >
          <Typography
            className={classes.userDisplayName}
            variant={'body1'}
          >
            {userDisplayName || '– –'}
          </Typography>
          <Typography
            className={classes.userEmail}
            variant={'caption'}
          >
            {userEmail}
          </Typography>
        </div>
        <div
          className={classes.avatarWrapper}
        >
          <Avatar
            src={userAvatar}
          />
        </div>
      </div>

      {
        contentList ?
          <div
            className={classes.listContainer}
          >
            {contentList}
          </div>
          :
          null
      }
    </div>
  )
}

UserDropdown.propTypes = {
  className: PropTypes.string,
  userDisplayName: PropTypes.string,
  userEmail: PropTypes.string,
  userAvatar: PropTypes.string,
  contentList: PropTypes.node
}

export default UserDropdown
