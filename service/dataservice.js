// import db.js
const db = require('./db')


register = (uname, psw) => {

    return db.User.findOne({ username: uname }).then(user => {
      if (user) {
        return {
          statusCode: 401,
          status: false,
          message: 'user alredy exsist'
        }
      }
      else {
        const newuser = new db.User({

          username: uname,
          password: psw,

        })
        // to save the data in databse command is
        newuser.save()
        return {
          statusCode: 200,
          status: true,
          message: 'registration success'
        }
      }
    })
  }
  

  // login function
  login = (uname, psw) => {
  
    return db.User.findOne({ username: uname , password: psw }).then(user => {
      if (user) {

        return {
          statusCode: 200,
          status: true,
          message: 'login success',
          currentUser:user.username,
        }
      }
      else {
        return {
          statusCode: 401,
          status: false,
          message: 'incorrect password or acno'
        }
      }
    })
  }

//   to export method register for index.js
module.exports = {
  register,
  login,
}