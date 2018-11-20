(function (global) {

    global.App.Controller('app', './', function ($scope, _update) {
        $scope.title = "App works!";

        setTimeout(function () {
            $scope.title = "Hello World!";
            _update();
        }, 3000)
    });

})(Function('return this')());
(function (global) {

    var appRoutes = [
        {path: '', redirect: 'home'},
        {path: 'home', controller: 'main-layout'},
    ];

    new global.App.Router(appRoutes);

})(Function('return this')());
(function (global) {

    global.App.Controller('main-layout', '/main-layout/', function ($scope, _update) {
        $scope.title = "Main Layout";

        $scope.buttonClicked = function (pageName) {
            global.App.Router().navigateTo(pageName);
        };
    });

})(Function('return this')());
(function (global) {

    global.App.Pipe('split', function (value, data) {
        return value.split(data);
    });

})(Function('return this')());
(function (global) {

    global.App.Model('AidaTest', function (setData) {

        this.getCalMultiplication = function (n1, n2) {
            var res = n1 * n2;
            return res;
        };

        this.getCalDivision = function (n1, n2) {
            var res = n1 / n2;
            return res;
        };

    });

})(Function('return this')());
(function (global) {

    global.App.Controller('aida-test', './components/aida-test/', function ($scope, _update) {
        var NumberModel = global.App.getModel('AidaTest');
        $scope.title = "Calculate Test";
        $scope.number1 = '';
        $scope.number2 = '';
        $scope.result = null;

        $scope.inputNumber = function () {
            switch (this.name) {
                case 'number1':
                    $scope.number1 = this.value;
                    break;
                case 'number2':
                    $scope.number2 = this.value;
                    break;
            }
            _update();
        };

        $scope.calAddition = function () {
            $scope.result = parseInt($scope.number1) + parseInt($scope.number2);
            _update();
        }

        $scope.calSubtraction = function () {
            $scope.result = parseInt($scope.number1) - parseInt($scope.number2);
            _update();
        }

        $scope.calMultiplication = function () {
            $scope.result = NumberModel.getCalMultiplication($scope.number1, $scope.number2);
            _update();
        }

        $scope.calDivision = function () {
            $scope.result = NumberModel.getCalDivision($scope.number1, $scope.number2);
            _update();
        }

    });
})(Function('return this')());