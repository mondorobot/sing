angular
  .module('mycrm.filters')
  .filter('uszipcode', function() {
    return function(input, scope) {
      if (input === null) {
        return '';
      }

      input = input
        .replace('-', '')
        .replace(/(.....)(.+)/, '$1-$2');

      return input;
    };
  });
