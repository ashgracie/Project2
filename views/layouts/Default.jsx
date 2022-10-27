const React = require('react')

class Default extends React.Component {
  render () {
    const { blog, title } = this.props
    return (
      <html>
        <head>
          <link rel='stylesheet' href='/css/app.css' />
          <title>{title}</title>
        </head>
        <body>
          <nav>
            <a href='/blogs'>Go to Home Page For All Blogs</a>
          </nav>
          <h1>
            {title}
          </h1>
          {this.props.children}
          <h3>copyright 2022</h3>
        </body>
      </html>
    )
  }
}

module.exports = Default
