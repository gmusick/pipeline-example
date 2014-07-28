function Pipeline(response) {
  this.response = response;
  this.steps = [];
}

Pipeline.prototype = {
  step: function(stepClass) {
    this.steps.push(new stepClass());
    return this;
  },

  execute: function(data) {
    if (this.steps.length > 0) {
      var _this = this;
      var cb = function() {
        _this.callback.apply(_this, arguments);
      }

      var current = this.steps.shift();
      if (current) {
        current.process(this.response, data, cb);
      }
    }
  },

  callback: function(err, data) {
    if (err) {
      this.response.err(err);
    } else {
      this.execute(data);
    }
  }
};

module.exports = Pipeline;

