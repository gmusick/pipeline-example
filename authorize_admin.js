function AuthorizeAdmin() {
}

AuthorizeAdmin.prototype.process = function(response, data, done) {
  var err = null;

  if (!data.currentUser || !data.currentUser.isAdmin()) {
    err = 'Unauthorized'
  }

  done(err, data);
};

module.exports = AuthorizeAdmin;

