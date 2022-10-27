const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
  constructor (props) {
    super(props)
    this.props = props
  }
  render () {
    return (
      <Default title='Create A New Blog'>
        <form method='POST' action='/blogs'>
          Title: <input type='text' name='title' placeholder='Title' /><br />
          Content: <textarea  name='content' ></textarea><br />
          ImageUrl: <input type='text' name='imageUrl' placeholder='Optional' /><br />
          Public: <input type='checkbox' name='public' /><br />
          <input type='hidden' name='userID' value={`${this.props.uid}`}></input>
          <input type='submit' value='New Blog' />
        </form>
      </Default>
    )
  }
}

module.exports = New
