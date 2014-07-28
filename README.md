pipeline-example
================

This is an example of how a pipeline-based architecture could work in
JavaScript to separate concerns and make the code more readable and
testable. This is based upon work I did for a web socket-connected
app that managed teams of people and projects.

The idea here is that a potentially complicated piece of work is
broken down into smaller, well-named pieces (classes) that are
executed sequentially. Each step in the pipeline has the opportunity
to parse the incoming data, change it, and, if necessary, stop the
pipeline from executing further.

The example here shows the creation of a project. In the real app,
when a project was created, it was persisted to the database and
published to all connected clients so they could update their models
and UI. These functions have been stubbed out for this example. The
steps and their sequence, however, are representative of production
code.

Prerequisite
------------

[nodejs](http://nodejs.org/)


Execution
---------

```
node create_project.js
```
