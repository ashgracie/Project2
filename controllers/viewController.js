const RESOURCE_PATH = '/blogs'

const viewController = {
  login (req, res, next) {
    res.render('blogs/login')
  },
  signup (req, res, next) {
    res.render('blogs/signup')
  },
  myIndex (req, res, next) {
    res.render('blogs/myIndex', res.locals.data)
  },
  index (req, res, next) {
    res.render('blogs/Index', res.locals.data)
  },
  newView (req, res, next) {
    res.render('blogs/New', res.locals.data)
  },
  edit (req, res, next) {
    res.render('blogs/Edit', res.locals.data)
  },
  myShow (req, res, next) {
    res.render('blogs/myShow', res.locals.data)
  },
  show (req, res, next) {
    res.render('blogs/Show', res.locals.data)
  },
  redirectHome (req, res, next) {
    res.redirect(`${RESOURCE_PATH}/myIndex/${res.locals.data.blog.userID}`)
  },
  redirectUser (req, res, next) {
    res.redirect(`${RESOURCE_PATH}/myIndex/${res.locals.data.user.id}`)
  },
  redirectShow (req, res, next) {
    res.redirect(`${RESOURCE_PATH}/my/${res.locals.data.blog._id}`)
  }

}

module.exports = viewController
