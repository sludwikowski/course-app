import React from 'react'

import FullPageLayout from './components/FullPageLayout'
import FullPageMessage from './components/FullPageMessage'
import FullPageLoader from './components/FullPageLoader'
import Message from './components/Message'
import LoginForm from './components/LoginForm/LoginForm'
import CreateAccountForm from './components/CreateAccountForm'
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
    notLoginUserRoute: 'CREATE-ACCOUNT', // 'CREATE-ACCOUNT' or 'FORGOT-PASSWORD'

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
    const {
      loginEmail,
      loginPassword,
      isLoading,
      isInfoDisplayed,
      infoMessage,
      hasError,
      errorMessage,
      notLoginUserRoute,
      createAccountEmail,
      createAccountPassword,
      createAccountRepeatPassword
    } = this.state
    return (
      <div>
        {
          notLoginUserRoute === 'LOGIN'
            ? <FullPageLayout>
              <LoginForm
                email={loginEmail}
                password={loginPassword}
                onChangeEmail={(e) => this.setState(() => ({ loginEmail: e.target.value }))}
                onChangePassword={(e) => this.setState(() => ({ loginPassword: e.target.value }))}
                onClickLogin={() => console.log('onClickLogin')}
                onClickCreateAccount={() => console.log('onClickCreateAccount')}
                onClickForgotPassword={() => console.log('onClickForgotPassword')}
              />
              {/* eslint-disable-next-line react/jsx-closing-tag-location */}
            </FullPageLayout>
            : notLoginUserRoute === 'CREATE-ACCOUNT'
              ? <FullPageLayout>
                <CreateAccountForm
                  email={createAccountEmail}
                  password={createAccountPassword}
                  repeatPassword={createAccountRepeatPassword}
                  onChangeEmail={(e) => this.setState(() => ({ createAccountEmail: e.target.value }))}
                  onChangePassword={(e) => this.setState(() => ({ createAccountPassword: e.target.value }))}
                  onChangeRepeatPassword={(e) => this.setState(() => ({ createAccountRepeatPassword: e.target.value }))}
                  onClickCreateAccount={() => console.log('onClickCreateAccount')}
                  onClickBackToLogin={() => console.log('onClickBackToLogin')}
                />
                {/* eslint-disable-next-line react/jsx-closing-tag-location */}
              </FullPageLayout>
              : null

        }

        {
          isLoading
            ? <FullPageLoader />
            : null
        }

        {
          isInfoDisplayed
            ? <FullPageMessage
                message={infoMessage}
                iconVariant={'info'}
                onButtonClick={console.log}
              />
            : null
        }

        {
          hasError
            ? <FullPageLayout
                className={'wrapper-class'}
              >
              <Message
                className={'regular-class'}
                message={errorMessage}
                iconVariant={'error'}
                onButtonClick={console.log}
              />
              {/* eslint-disable-next-line react/jsx-closing-tag-location */}
            </FullPageLayout>
            : null
        }

      </div>
    )
  }
}
export default App
