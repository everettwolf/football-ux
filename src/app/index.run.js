(function () {
  'use strict';

  angular
    .module('footballUx')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
