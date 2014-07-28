var response = require('./response');
var AdminUser = require('./admin_user');
var AuthorizeAdmin = require('./authorize_admin');
var PersistNewProject = require('./persist_new_project');
var Pipeline = require('./pipeline');
var PublishProjectCreate = require('./publish_project_create');
var ValidateProject = require('./validate_project');

var data = {
  currentUser: new AdminUser(),
  project: { name: "Project 1" }
};

var pipeline = new Pipeline(response);
pipeline.step(AuthorizeAdmin)
        .step(ValidateProject)
        .step(PersistNewProject)
        .step(PublishProjectCreate)
        .execute(data);

