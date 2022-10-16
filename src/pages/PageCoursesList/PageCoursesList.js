import React from 'react'
import PropTypes from 'prop-types'

import Logo from '../../components/Logo'
import UserDropdown from '../../components/UserDropdown'
import ListItem from '../../components/ListItem'
import List from '../../components/List'
import CoursesList from '../../components/CoursesList'
import MainLayout from '../../components/MainLayout'
import TextField from '../../components/TextField'
import { CoursePropType } from '../../components/CourseCard'

import classes from './styles.module.css'

export const PageCoursesList = (props) => {
  const {
    className,
    userDisplayName,
    userEmail,
    userAvatar,
    courses,
    onClickLogOut,
    ...otherProps
  } = props

  const [isUserDropdownOpen, setIsUserDropdownOpen] = React.useState(false)
  const [searchPhrase, setSearchPhrase] = React.useState('')

  const filteredCourses = React.useMemo(() => {
    const searchPhraseUpperCase = searchPhrase.toUpperCase()
    return courses && courses.filter((course) => {
      return (
        course.title.toUpperCase().includes(searchPhraseUpperCase) ||
        course.category.toUpperCase().includes(searchPhraseUpperCase) ||
        course.description.toUpperCase().includes(searchPhraseUpperCase)
      )
    })
  }, [courses, searchPhrase])

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <MainLayout
        contentAppBar={
          <>
            <Logo
              className={classes.logo}
            />
            <UserDropdown
              className={classes.userDropdown}
              userDisplayName={userDisplayName}
              userEmail={userEmail}
              userAvatar={userAvatar}
              onOpenRequested={() => setIsUserDropdownOpen(() => true)}
              onCloseRequested={() => setIsUserDropdownOpen(() => false)}
              contentList={
                isUserDropdownOpen ?
                  <List
                    className={classes.userDropdownList}
                  >
                    <ListItem
                      icon={'profile'}
                      text={'Profile'}
                      disabled={true}
                    />
                    <ListItem
                      icon={'log-out'}
                      text={'Log out'}
                      onClick={onClickLogOut}
                    />
                  </List>
                  :
                  null
              }
            />
          </>
        }
        contentSearch={
          <TextField
            className={classes.searchTextField}
            placeholder={'Type to search'}
            value={searchPhrase}
            onChange={(e) => setSearchPhrase(() => e.target.value)}
          />
        }
        contentMain={
          <CoursesList
            courses={filteredCourses}
          />
        }
      />
    </div>
  )
}

PageCoursesList.propTypes = {
  className: PropTypes.string,
  userDisplayName: PropTypes.string,
  userEmail: PropTypes.string,
  userAvatar: PropTypes.string,
  courses: PropTypes.arrayOf(CoursePropType),
  onClickLogOut: PropTypes.func
}

export default PageCoursesList
