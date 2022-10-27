const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
  render () {
    return (
      <Default title='Signup'>
        <form method='POST' action='/blogs/newuser'>
          Username: <input type='text' name='userName' placeholder='User Name' /><br />
          Password: <input type='password' name='password'  /><br />
          <input type='submit' value='Create User' />
        </form>
      </Default>
    )
  }
}

module.exports = New
