import React from 'react'

import FullPageLoader from './components/FullPageLoader'
import FullPageMessage from './components/FullPageMessage'
import Typography from './components/Typography'
import Button from './components/Button'

export class App extends React.Component {
  state = {
    // global state
    isLoading: false,
    hasError: false,
    errorMessage: '',
    isInfoDisplayed: false,
    infoMessage: '',

    // user/auth state
    isUserLoggedIn: false,
    userDisplayName: '',
    userEmail: '',
    userAvatar: '',

    // router state
    notLoginUserRoute: 'LOGIN', // 'NEW-ACCOUNT' or 'FORGOT PASSWORD'

    // login page state
    loginEmail: '',
    loginPassword: '',

    // create account page
    createAccountEmail: '',
    createAccountPassword: '',
    createAccountRepeatPassword: '',

    // recover password page
    recoverPasswordEmail: '',

    // course list
    courses: null,
    searchPhrase: ''
  }

  render () {
    const { isLoading } = this.state
    return (
      <div>
        <h1>Course App</h1>
        {
          isLoading
            ? <FullPageLoader />
            : null
        }
        <Typography
          variant={'h1'}
        >
          Header 1
        </Typography>
        <br />
        <Typography
          variant={'h3'}
        >
          Header 3
        </Typography>
        <br />
        <Typography
          variant={'button'}
        >
          Button
        </Typography>
        <br/>
        <Button
          variant={'contained'}
          color={'primary'}
        >
          CONTAINED PRIMARY
        </Button>
        <br/>
        <Button
          variant={'contained'}
          color={'secondary'}
        >
          CONTAINED SECONDARY
        </Button>
        <br/>
        <Button
          variant={'text'}
          color={'primary'}
        >
          TEXT PRIMARY
        </Button>
        <FullPageMessage
          message={'INFO'}
        />
      </div>
    )
  }
}
export default App
