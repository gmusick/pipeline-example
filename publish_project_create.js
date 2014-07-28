function PublishProjectCreate() {
}

PublishProjectCreate.prototype.process = function(response, data, done) {
  response.publish("project:create", data.project);
  done(null, data);
};

module.exports = PublishProjectCreate;

