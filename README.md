pipeline-example
================

This is an example of how a pipeline-based architecture could work in
JavaScript to separate concerns and make the code more readable and
testable. This is based upon work I did for a web socket-connected
app that managed teams of people and projects.

The example here shows the creation of a project. In the real app,
when a project was created, it was persisted to the database and
published to all connected clients so they could update their models
and UI. These functions have been stubbed out for this example.

Prerequisite
------------

[nodejs](http://nodejs.org/)


Execution
---------

```
node create_project.js
```
