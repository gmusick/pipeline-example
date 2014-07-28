var DataStore = require('./data_store');

function PersistNewProject() {
}

PersistNewProject.prototype.process = function(response, data, done) {
  var err = null;

  DataStore.create('projects', data.project, function(err, project) {
    data.project = project;
    done(err, data);
  });
};

module.exports = PersistNewProject;

