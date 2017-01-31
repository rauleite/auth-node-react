import Auth from './modules/Auth'
import Base from './components/Base.jsx'
import DashboardPage from './containers/DashboardPage.jsx'
import ForgotPage from './containers/ForgotPage.jsx'
import HomePage from './components/HomePage.jsx'
import LoginPage from './containers/LoginPage.jsx'
import SignUpPage from './containers/SignUpPage.jsx'

const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [

    {
      path: '/',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, DashboardPage)
        } else {
          callback(null, HomePage)
        }
      }
    },

    {
      path: '/login',
      component: LoginPage
    },

    {
      path: '/signup',
      component: SignUpPage
    },

    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser()

        // change the current URL to /
        replace('/')
      }
    },
    {
      path: '/forgot',
      component: ForgotPage
    }

  ]
}

export default routes
