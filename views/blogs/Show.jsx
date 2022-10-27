const React = require('react')
const Default = require('../layouts/Default.jsx')
class Show extends React.Component {
  constructor (props) {
    super(props)
    this.props = props
  }
  render () {
    const { title, content, imageUrl } = this.props.blog
    const publicBool = this.props.blog.public
    return (
      <Default title={`${title} Show Page`} blog={this.props.blog}>
        <h4>{title}</h4>
        <p>{content}</p>
        <img src={`${imageUrl}`}></img>
        <p>{publicBool ? 'it\'s public' : 'it\'s not public'}</p>
      </Default>
    )
  }
}

module.exports = Show
