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
      <Default title='My Blogs Index'>
        <a href={`/blogs/${this.props.uid}/new`}>New Blog</a>
        <ul>
          {
                        blogs.map((blog) => {
                          const { title, content, imageUrl } = blog
                          const publicBool = blog.public
                          return (
                            <li key={blog._id}>
                              <a href={`/blogs/my/${blog._id}`}>
                                {title}
                              </a> <div>{content}</div>
                              <img src={`${imageUrl}`}></img>
                              <br />
                              {
                                        publicBool
                                          ? 'It\'s public'
                                          : 'It\'s not public'
                                    }
                              <br />
                              <form method='POST' action={`/blogs/${blog._id}?_method=DELETE`}>
                                <input type='submit' value={`Delete ${title}`} />
                              </form>
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
