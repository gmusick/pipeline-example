function ValidateProject() {
}

ValidateProject.prototype.process = function(response, data, done) {
  var err = null;

  var project = data.project;

  if (project) {
    var name = project.name;

    if (!name || name.length == 0) {
      err = 'Invalid project name'
    }
  } else {
    err = 'Invalid project'
  }

  done(err, data);
};

module.exports = ValidateProject;

