var DataStore = {
  create: function(collection, doc, callback) {
    // persist to data store here...
    // fake an id getting set
    var persisted = doc;
    persisted.id = 1;

    callback(null, persisted);
  }
};

module.exports = DataStore;

