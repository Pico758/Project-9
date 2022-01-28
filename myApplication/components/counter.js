import * as CounterActions from '../actions/counter';

class CounterController {

    constructor($ngRedux, $scope) {
        const unsubscribe = $ngRedux.connect(this.mapStateToThis, CounterActions)(this);
        $scope.$on('$destroy', unsubscribe);
    }

    
    mapStateToThis(state) {
        return {
            value: state.counter
        };
    }
}

export default function counter() {
    return {
        restrict: 'E',
        controllerAs: 'counter',
        controller: CounterController,
        template: `<div>
    <p>Clicked: {{counter.value}} times </p>
    <button ng-click='counter.increment()'>+</button>
    <button ng-click='counter.decrement()'>-</button>
    <button ng-click='counter.incrementIfOdd()'>Increment if odd</button>
    <button ng-click='counter.incrementAsync()'>Increment Async</button>
 </div>`,
        scope: {}
    };
}

