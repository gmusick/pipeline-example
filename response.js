var response = {
  publish: function(name, data) {
    console.log("Sending message to connected clients:", name, data);
  },

  err: function(message) {
    console.log("Responding with error:", message);
  }
};

module.exports = response;

