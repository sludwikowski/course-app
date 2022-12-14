import React from 'react'
import PropTypes from 'prop-types'

import Ratio16x9 from '../../components/Ratio16x9'

import { useMediaQuery, useTheme, Box } from '@mui/material'

export const CourseLayout = (props) => {
  const {
    sx,
    slotContent,
    slotSidebar,
    slotTitle,
    slotGoBackButton,
    ...otherProps
  } = props

  const theme = useTheme()
  const isXs = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box
      sx={{
        height: '100vh',
        overflow: 'hidden',
        [theme.breakpoints.down('sm')]: {
          overflow: 'auto'
        },
        ...sx
      }}
      {...otherProps}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          [theme.breakpoints.down('sm')]: {
            height: 'auto',
            minHeight: '100vh',
            flexDirection: 'column'
          }
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            [theme.breakpoints.down('sm')]: {
              flexGrow: 0
            }
          }}
        >
          <Ratio16x9>
            {isXs ? slotGoBackButton : null}
            {slotContent}
          </Ratio16x9>
          <Box
            sx={{
              flexGrow: 1,
              overflowX: 'hidden',
              overflowY: 'auto'
            }}
          >
            {slotTitle}
          </Box>
        </Box>
        <Box
          sx={{
            flexShrink: 0,
            width: 320,
            height: '100%',
            overflowX: 'hidden',
            overflowY: 'auto',
            [theme.breakpoints.down('sm')]: {
              width: '100%',
              height: 'auto',
              flexGrow: 1
            }
          }}
        >
          {isXs ? null : slotGoBackButton}
          {slotSidebar}
        </Box>
      </Box>
    </Box>
  )
}

CourseLayout.propTypes = {
  sx: PropTypes.object,
  slotContent: PropTypes.node,
  slotSidebar: PropTypes.node,
  slotTitle: PropTypes.node,
  slotGoBackButton: PropTypes.node
}

export default CourseLayout
