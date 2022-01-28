import angular from 'angular';
import ngRedux from 'ng-redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import counter from './components/counter';

angular.module('myApp', [ngRedux])
  .config(($ngReduxProvider) => {
    $ngReduxProvider.createStoreWith(rootReducer, [thunk]);
  })
  .directive('ngrCounter', counter)
 