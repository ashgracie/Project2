const React = require('react')
const Default = require('../layouts/Default.jsx')
class Index extends React.Component {
  constructor (props) {
    super(props)
    this.props = props
  }

  render () {
    const { blogs } = this.props
    return (
      <Default title='Blogs Index Page'>
        <a href="/blogs/login">Login</a> <a href='/blogs/signup'>Sign Up</a>
        <ul>
          {
                        blogs.map((blog) => {
                          const { title, content, imageUrl } = blog
                          return (
                            <li key={blog._id}>
                              <a href={`/blogs/${blog._id}`}>
                                {title}
                              </a> <div>{content}</div>
                              <img src={`${imageUrl}`}></img>
                              <br />
                            </li>
                          )
                        })
                    }
        </ul>
      </Default>
    )
  }
}

module.exports = Index
