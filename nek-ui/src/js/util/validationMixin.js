var Validation = require('./validation');

module.exports = function(Component) {
  Component.implement({
    initValidation: function() {
      var $outer = this;
      do {
        if ($outer.$outer) {
          $outer = $outer.$outer;
        } else if ($outer.$parent) {
          $outer = $outer.$parent;
        }} while(!($outer instanceof Validation) && ($outer.$outer || $outer.$parent));

      if ($outer && $outer instanceof Validation) {
        $outer.controls.push(this);
        this._parentValidator = $outer;

        this.$on('destroy', function() {
          var index = $outer.controls.indexOf(this);
          $outer.controls.splice(index, 1);
        });
      }
    }
  });
}