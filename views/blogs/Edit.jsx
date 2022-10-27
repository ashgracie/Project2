const React = require('react')
const Default = require('../layouts/myDefault.jsx')

class Edit extends React.Component {
  render () {
    const { title, content, imageUrl, _id } = this.props.blog
    const publicBool = this.props.blog.public
    return (
      <Default title={`${title} Edit Page`} blog={this.props.blog}>
        <form method='POST' action={`/blogs/${_id}?_method=PUT`}>
          Title: <input type='text' name='title' defaultValue={title} /><br />
          Content: <textarea  name='content' defaultValue={content} ></textarea><br /><br />
          Image: <input type='text' name='imageUrl' defaultValue={imageUrl} /><br />
          Public: <input type='checkbox' name='public' defaultChecked={publicBool} /> <br />
          <input type='submit' value='Edit Blog' />
        </form>
      </Default>
    )
  }
}

module.exports = Edit

