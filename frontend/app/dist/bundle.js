(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['./routes/index'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('./routes/index'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.index);
    global.app = mod.exports;
  }
})(this, function (_index) {
  'use strict';

  _index.router.navigate('template1');
});

},{"./routes/index":6}],2:[function(require,module,exports){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', '../core/Controller'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('../core/Controller'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Controller);
    global.template1 = mod.exports;
  }
})(this, function (exports, _Controller2) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Controller3 = _interopRequireDefault(_Controller2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var template1Controller = function (_Controller) {
    _inherits(template1Controller, _Controller);

    function template1Controller() {
      _classCallCheck(this, template1Controller);

      return _possibleConstructorReturn(this, (template1Controller.__proto__ || Object.getPrototypeOf(template1Controller)).apply(this, arguments));
    }

    return template1Controller;
  }(_Controller3.default);

  exports.default = template1Controller;
});

},{"../core/Controller":4}],3:[function(require,module,exports){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', '../core/Controller'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('../core/Controller'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Controller);
    global.template2 = mod.exports;
  }
})(this, function (exports, _Controller2) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Controller3 = _interopRequireDefault(_Controller2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var template2Controller = function (_Controller) {
    _inherits(template2Controller, _Controller);

    function template2Controller() {
      _classCallCheck(this, template2Controller);

      return _possibleConstructorReturn(this, (template2Controller.__proto__ || Object.getPrototypeOf(template2Controller)).apply(this, arguments));
    }

    return template2Controller;
  }(_Controller3.default);

  exports.default = template2Controller;
});

},{"../core/Controller":4}],4:[function(require,module,exports){
(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['exports'], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports);
		global.Controller = mod.exports;
	}
})(this, function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}

		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();

	var Controller = function () {
		function Controller(template, model) {
			_classCallCheck(this, Controller);

			this.template = template;
			this.wrapperId = 'page-content';
			this.model = model;
		}

		_createClass(Controller, [{
			key: 'init',
			value: function init() {
				this.render();
			}
		}, {
			key: '_setModel',
			value: function _setModel(model) {
				this.model = model;
			}
		}, {
			key: 'render',
			value: function render() {
				var wrapper = document.getElementById(this.wrapperId);

				wrapper.appendChild(this.template);
			}
		}]);

		return Controller;
	}();

	exports.default = Controller;
});

},{}],5:[function(require,module,exports){
(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['exports'], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports);
		global.Router = mod.exports;
	}
})(this, function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}

		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();

	var Router = function () {
		function Router(routes) {
			_classCallCheck(this, Router);

			this.routes = routes;
			this.controllers = [];
		}

		_createClass(Router, [{
			key: 'navigate',
			value: function navigate(routeName) {
				var route = this.routes[routeName];
				var template = route.template;
				var Controller = route.controller;
				var model = this._getModel();
				var controller = new Controller(template, model);
				controller.init();
			}
		}, {
			key: '_getModel',
			value: function _getModel() {
				return [{ name: 'Sasha' }, { name: 'Vasya' }, { name: 'Petya' }, { name: 'Igor' }];
			}
		}]);

		return Router;
	}();

	exports.default = Router;
});

},{}],6:[function(require,module,exports){
(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['exports', '../core/Router', '../controllers/template1', '../controllers/template2'], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports, require('../core/Router'), require('../controllers/template1'), require('../controllers/template2'));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, global.Router, global.template1, global.template2);
		global.index = mod.exports;
	}
})(this, function (exports, _Router, _template, _template3) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.router = undefined;

	var _Router2 = _interopRequireDefault(_Router);

	var _template2 = _interopRequireDefault(_template);

	var _template4 = _interopRequireDefault(_template3);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	var routes = {
		'template1': {
			template: 'app/templates/template1.html',
			controller: _template2.default
		},
		'template2': {
			template: 'app/templates/template2.html',
			controller: _template4.default
		}
	};

	var router = new _Router2.default(routes);

	exports.router = router;
});

},{"../controllers/template1":2,"../controllers/template2":3,"../core/Router":5}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL2NvbnRyb2xsZXJzL3RlbXBsYXRlMS5qcyIsImFwcC9jb250cm9sbGVycy90ZW1wbGF0ZTIuanMiLCJhcHAvY29yZS9Db250cm9sbGVyLmpzIiwiYXBwL2NvcmUvUm91dGVyLmpzIiwiYXBwL3JvdXRlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0VBLGdCQUFPLFFBQVAsQ0FBZ0IsV0FBaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNBcUIsbUI7Ozs7Ozs7Ozs7SUFBNEIsb0I7O29CQUE1QixtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ0FBLG1COzs7Ozs7Ozs7O0lBQTRCLG9COztvQkFBNUIsbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDRkEsVTtBQUNwQixzQkFBWSxRQUFaLEVBQXNCLEtBQXRCLEVBQTZCO0FBQUE7O0FBQzVCLFFBQUssUUFBTCxHQUFnQixRQUFoQjtBQUNBLFFBQUssU0FBTCxHQUFpQixjQUFqQjtBQUNBLFFBQUssS0FBTCxHQUFhLEtBQWI7QUFDQTs7OzswQkFFTTtBQUNOLFNBQUssTUFBTDtBQUNBOzs7NkJBRVMsSyxFQUFPO0FBQ2hCLFNBQUssS0FBTCxHQUFhLEtBQWI7QUFDQTs7OzRCQUVRO0FBQ1IsUUFBTSxVQUFVLFNBQVMsY0FBVCxDQUF3QixLQUFLLFNBQTdCLENBQWhCOztBQUVBLFlBQVEsV0FBUixDQUFvQixLQUFLLFFBQXpCO0FBQ0E7Ozs7OzttQkFuQm1CLFU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDQUEsTTtBQUNwQixrQkFBWSxNQUFaLEVBQW9CO0FBQUE7O0FBQ25CLFFBQUssTUFBTCxHQUFjLE1BQWQ7QUFDQSxRQUFLLFdBQUwsR0FBbUIsRUFBbkI7QUFDQTs7Ozs0QkFFUSxTLEVBQVc7QUFDbkIsUUFBTSxRQUFRLEtBQUssTUFBTCxDQUFZLFNBQVosQ0FBZDtBQUNBLFFBQU0sV0FBVyxNQUFNLFFBQXZCO0FBQ0EsUUFBTSxhQUFhLE1BQU0sVUFBekI7QUFDQSxRQUFNLFFBQVEsS0FBSyxTQUFMLEVBQWQ7QUFDQSxRQUFNLGFBQWEsSUFBSSxVQUFKLENBQWUsUUFBZixFQUF5QixLQUF6QixDQUFuQjtBQUNBLGVBQVcsSUFBWDtBQUNBOzs7K0JBRVc7QUFDWCxXQUFPLENBQ04sRUFBRSxNQUFNLE9BQVIsRUFETSxFQUVOLEVBQUUsTUFBTSxPQUFSLEVBRk0sRUFHTixFQUFFLE1BQU0sT0FBUixFQUhNLEVBSU4sRUFBRSxNQUFNLE1BQVIsRUFKTSxDQUFQO0FBTUE7Ozs7OzttQkF0Qm1CLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0lyQixLQUFNLFNBQVM7QUFDZCxlQUFhO0FBQ1osYUFBVSw4QkFERTtBQUVaLGVBQVk7QUFGQSxHQURDO0FBS2QsZUFBYTtBQUNaLGFBQVUsOEJBREU7QUFFWixlQUFZO0FBRkE7QUFMQyxFQUFmOztBQVdBLEtBQU0sU0FBUyxJQUFJLGdCQUFKLENBQVcsTUFBWCxDQUFmOztTQUVTLE0sR0FBQSxNIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgeyByb3V0ZXIgfSBmcm9tICcuL3JvdXRlcy9pbmRleCc7XG5cbnJvdXRlci5uYXZpZ2F0ZSgndGVtcGxhdGUxJyk7XG5cbiIsImltcG9ydCBDb250cm9sbGVyIGZyb20gJy4uL2NvcmUvQ29udHJvbGxlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRlbXBsYXRlMUNvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIHt9XG4iLCJpbXBvcnQgQ29udHJvbGxlciBmcm9tICcuLi9jb3JlL0NvbnRyb2xsZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB0ZW1wbGF0ZTJDb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlciB7fVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlciB7XG5cdGNvbnN0cnVjdG9yKHRlbXBsYXRlLCBtb2RlbCkge1xuXHRcdHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcblx0XHR0aGlzLndyYXBwZXJJZCA9ICdwYWdlLWNvbnRlbnQnO1xuXHRcdHRoaXMubW9kZWwgPSBtb2RlbDtcblx0fVxuXG5cdGluaXQoKSB7XG5cdFx0dGhpcy5yZW5kZXIoKTtcblx0fVxuXG5cdF9zZXRNb2RlbChtb2RlbCkge1xuXHRcdHRoaXMubW9kZWwgPSBtb2RlbDtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy53cmFwcGVySWQpO1xuXHRcdFxuXHRcdHdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy50ZW1wbGF0ZSk7XG5cdH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciB7XG5cdGNvbnN0cnVjdG9yKHJvdXRlcykge1xuXHRcdHRoaXMucm91dGVzID0gcm91dGVzO1xuXHRcdHRoaXMuY29udHJvbGxlcnMgPSBbXTtcblx0fVxuXG5cdG5hdmlnYXRlKHJvdXRlTmFtZSkge1xuXHRcdGNvbnN0IHJvdXRlID0gdGhpcy5yb3V0ZXNbcm91dGVOYW1lXTtcblx0XHRjb25zdCB0ZW1wbGF0ZSA9IHJvdXRlLnRlbXBsYXRlO1xuXHRcdGNvbnN0IENvbnRyb2xsZXIgPSByb3V0ZS5jb250cm9sbGVyO1xuXHRcdGNvbnN0IG1vZGVsID0gdGhpcy5fZ2V0TW9kZWwoKTtcblx0XHRjb25zdCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIodGVtcGxhdGUsIG1vZGVsKTtcblx0XHRjb250cm9sbGVyLmluaXQoKTtcblx0fVxuXG5cdF9nZXRNb2RlbCgpIHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0eyBuYW1lOiAnU2FzaGEnIH0sXG5cdFx0XHR7IG5hbWU6ICdWYXN5YScgfSxcblx0XHRcdHsgbmFtZTogJ1BldHlhJyB9LFxuXHRcdFx0eyBuYW1lOiAnSWdvcicgfVxuXHRcdF07XG5cdH1cbn1cbiIsImltcG9ydCBSb3V0ZXIgZnJvbSAnLi4vY29yZS9Sb3V0ZXInO1xuaW1wb3J0IHRlbXBsYXRlMUNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvdGVtcGxhdGUxJztcbmltcG9ydCB0ZW1wbGF0ZTJDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXJzL3RlbXBsYXRlMic7XG5cbmNvbnN0IHJvdXRlcyA9IHtcblx0J3RlbXBsYXRlMSc6IHtcblx0XHR0ZW1wbGF0ZTogJ2FwcC90ZW1wbGF0ZXMvdGVtcGxhdGUxLmh0bWwnLFxuXHRcdGNvbnRyb2xsZXI6IHRlbXBsYXRlMUNvbnRyb2xsZXJcblx0fSxcblx0J3RlbXBsYXRlMic6IHtcblx0XHR0ZW1wbGF0ZTogJ2FwcC90ZW1wbGF0ZXMvdGVtcGxhdGUyLmh0bWwnLFxuXHRcdGNvbnRyb2xsZXI6IHRlbXBsYXRlMkNvbnRyb2xsZXJcblx0fVxufTtcblxuY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcihyb3V0ZXMpO1xuXG5leHBvcnQgeyByb3V0ZXIgfTtcbiJdLCJwcmVFeGlzdGluZ0NvbW1lbnQiOiIvLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTV2WkdWZmJXOWtkV3hsY3k5aWNtOTNjMlZ5TFhCaFkyc3ZYM0J5Wld4MVpHVXVhbk1pTENKaGNIQXZZWEJ3TG1weklpd2lZWEJ3TDJOdmJuUnliMnhzWlhKekwzUmxiWEJzWVhSbE1TNXFjeUlzSW1Gd2NDOWpiMjUwY205c2JHVnljeTkwWlcxd2JHRjBaVEl1YW5NaUxDSmhjSEF2WTI5eVpTOURiMjUwY205c2JHVnlMbXB6SWl3aVlYQndMMk52Y21VdlVtOTFkR1Z5TG1weklpd2lZWEJ3TDNKdmRYUmxjeTlwYm1SbGVDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN096czdPenM3T3pzN096czdPenRCUTBWQkxHZENRVUZQTEZGQlFWQXNRMEZCWjBJc1YwRkJhRUk3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdUVU5CY1VJc2JVSTdPenM3T3pzN096czdTVUZCTkVJc2IwSTdPMjlDUVVFMVFpeHRRanM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dE5RMEZCTEcxQ096czdPenM3T3pzN08wbEJRVFJDTEc5Q096dHZRa0ZCTlVJc2JVSTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMHREUmtFc1ZUdEJRVU53UWl4elFrRkJXU3hSUVVGYUxFVkJRWE5DTEV0QlFYUkNMRVZCUVRaQ08wRkJRVUU3TzBGQlF6VkNMRkZCUVVzc1VVRkJUQ3hIUVVGblFpeFJRVUZvUWp0QlFVTkJMRkZCUVVzc1UwRkJUQ3hIUVVGcFFpeGpRVUZxUWp0QlFVTkJMRkZCUVVzc1MwRkJUQ3hIUVVGaExFdEJRV0k3UVVGRFFUczdPenN3UWtGRlRUdEJRVU5PTEZOQlFVc3NUVUZCVER0QlFVTkJPenM3TmtKQlJWTXNTeXhGUVVGUE8wRkJRMmhDTEZOQlFVc3NTMEZCVEN4SFFVRmhMRXRCUVdJN1FVRkRRVHM3T3pSQ1FVVlJPMEZCUTFJc1VVRkJUU3hWUVVGVkxGTkJRVk1zWTBGQlZDeERRVUYzUWl4TFFVRkxMRk5CUVRkQ0xFTkJRV2hDT3p0QlFVVkJMRmxCUVZFc1YwRkJVaXhEUVVGdlFpeExRVUZMTEZGQlFYcENPMEZCUTBFN096czdPenR0UWtGdVFtMUNMRlU3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzB0RFFVRXNUVHRCUVVOd1FpeHJRa0ZCV1N4TlFVRmFMRVZCUVc5Q08wRkJRVUU3TzBGQlEyNUNMRkZCUVVzc1RVRkJUQ3hIUVVGakxFMUJRV1E3UVVGRFFTeFJRVUZMTEZkQlFVd3NSMEZCYlVJc1JVRkJia0k3UVVGRFFUczdPenMwUWtGRlVTeFRMRVZCUVZjN1FVRkRia0lzVVVGQlRTeFJRVUZSTEV0QlFVc3NUVUZCVEN4RFFVRlpMRk5CUVZvc1EwRkJaRHRCUVVOQkxGRkJRVTBzVjBGQlZ5eE5RVUZOTEZGQlFYWkNPMEZCUTBFc1VVRkJUU3hoUVVGaExFMUJRVTBzVlVGQmVrSTdRVUZEUVN4UlFVRk5MRkZCUVZFc1MwRkJTeXhUUVVGTUxFVkJRV1E3UVVGRFFTeFJRVUZOTEdGQlFXRXNTVUZCU1N4VlFVRktMRU5CUVdVc1VVRkJaaXhGUVVGNVFpeExRVUY2UWl4RFFVRnVRanRCUVVOQkxHVkJRVmNzU1VGQldEdEJRVU5CT3pzN0swSkJSVmM3UVVGRFdDeFhRVUZQTEVOQlEwNHNSVUZCUlN4TlFVRk5MRTlCUVZJc1JVRkVUU3hGUVVWT0xFVkJRVVVzVFVGQlRTeFBRVUZTTEVWQlJrMHNSVUZIVGl4RlFVRkZMRTFCUVUwc1QwRkJVaXhGUVVoTkxFVkJTVTRzUlVGQlJTeE5RVUZOTEUxQlFWSXNSVUZLVFN4RFFVRlFPMEZCVFVFN096czdPenR0UWtGMFFtMUNMRTA3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUTBseVFpeExRVUZOTEZOQlFWTTdRVUZEWkN4bFFVRmhPMEZCUTFvc1lVRkJWU3c0UWtGRVJUdEJRVVZhTEdWQlFWazdRVUZHUVN4SFFVUkRPMEZCUzJRc1pVRkJZVHRCUVVOYUxHRkJRVlVzT0VKQlJFVTdRVUZGV2l4bFFVRlpPMEZCUmtFN1FVRk1ReXhGUVVGbU96dEJRVmRCTEV0QlFVMHNVMEZCVXl4SlFVRkpMR2RDUVVGS0xFTkJRVmNzVFVGQldDeERRVUZtT3p0VFFVVlRMRTBzUjBGQlFTeE5JaXdpWm1sc1pTSTZJbWRsYm1WeVlYUmxaQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJb1puVnVZM1JwYjI0b0tYdG1kVzVqZEdsdmJpQnlLR1VzYml4MEtYdG1kVzVqZEdsdmJpQnZLR2tzWmlsN2FXWW9JVzViYVYwcGUybG1LQ0ZsVzJsZEtYdDJZWElnWXoxY0ltWjFibU4wYVc5dVhDSTlQWFI1Y0dWdlppQnlaWEYxYVhKbEppWnlaWEYxYVhKbE8ybG1LQ0ZtSmlaaktYSmxkSFZ5YmlCaktHa3NJVEFwTzJsbUtIVXBjbVYwZFhKdUlIVW9hU3doTUNrN2RtRnlJR0U5Ym1WM0lFVnljbTl5S0Z3aVEyRnVibTkwSUdacGJtUWdiVzlrZFd4bElDZGNJaXRwSzF3aUoxd2lLVHQwYUhKdmR5QmhMbU52WkdVOVhDSk5UMFJWVEVWZlRrOVVYMFpQVlU1RVhDSXNZWDEyWVhJZ2NEMXVXMmxkUFh0bGVIQnZjblJ6T250OWZUdGxXMmxkV3pCZExtTmhiR3dvY0M1bGVIQnZjblJ6TEdaMWJtTjBhVzl1S0hJcGUzWmhjaUJ1UFdWYmFWMWJNVjFiY2wwN2NtVjBkWEp1SUc4b2JueDhjaWw5TEhBc2NDNWxlSEJ2Y25SekxISXNaU3h1TEhRcGZYSmxkSFZ5YmlCdVcybGRMbVY0Y0c5eWRITjlabTl5S0haaGNpQjFQVndpWm5WdVkzUnBiMjVjSWowOWRIbHdaVzltSUhKbGNYVnBjbVVtSm5KbGNYVnBjbVVzYVQwd08yazhkQzVzWlc1bmRHZzdhU3NyS1c4b2RGdHBYU2s3Y21WMGRYSnVJRzk5Y21WMGRYSnVJSEo5S1NncElpd2lhVzF3YjNKMElIc2djbTkxZEdWeUlIMGdabkp2YlNBbkxpOXliM1YwWlhNdmFXNWtaWGduTzF4dVhHNXliM1YwWlhJdWJtRjJhV2RoZEdVb0ozUmxiWEJzWVhSbE1TY3BPMXh1WEc0aUxDSnBiWEJ2Y25RZ1EyOXVkSEp2Ykd4bGNpQm1jbTl0SUNjdUxpOWpiM0psTDBOdmJuUnliMnhzWlhJbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQmpiR0Z6Y3lCMFpXMXdiR0YwWlRGRGIyNTBjbTlzYkdWeUlHVjRkR1Z1WkhNZ1EyOXVkSEp2Ykd4bGNpQjdmVnh1SWl3aWFXMXdiM0owSUVOdmJuUnliMnhzWlhJZ1puSnZiU0FuTGk0dlkyOXlaUzlEYjI1MGNtOXNiR1Z5Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nZEdWdGNHeGhkR1V5UTI5dWRISnZiR3hsY2lCbGVIUmxibVJ6SUVOdmJuUnliMnhzWlhJZ2UzMWNiaUlzSW1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklFTnZiblJ5YjJ4c1pYSWdlMXh1WEhSamIyNXpkSEoxWTNSdmNpaDBaVzF3YkdGMFpTd2diVzlrWld3cElIdGNibHgwWEhSMGFHbHpMblJsYlhCc1lYUmxJRDBnZEdWdGNHeGhkR1U3WEc1Y2RGeDBkR2hwY3k1M2NtRndjR1Z5U1dRZ1BTQW5jR0ZuWlMxamIyNTBaVzUwSnp0Y2JseDBYSFIwYUdsekxtMXZaR1ZzSUQwZ2JXOWtaV3c3WEc1Y2RIMWNibHh1WEhScGJtbDBLQ2tnZTF4dVhIUmNkSFJvYVhNdWNtVnVaR1Z5S0NrN1hHNWNkSDFjYmx4dVhIUmZjMlYwVFc5a1pXd29iVzlrWld3cElIdGNibHgwWEhSMGFHbHpMbTF2WkdWc0lEMGdiVzlrWld3N1hHNWNkSDFjYmx4dVhIUnlaVzVrWlhJb0tTQjdYRzVjZEZ4MFkyOXVjM1FnZDNKaGNIQmxjaUE5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLSFJvYVhNdWQzSmhjSEJsY2tsa0tUdGNibHgwWEhSY2JseDBYSFIzY21Gd2NHVnlMbUZ3Y0dWdVpFTm9hV3hrS0hSb2FYTXVkR1Z0Y0d4aGRHVXBPMXh1WEhSOVhHNTlYRzRpTENKbGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QlNiM1YwWlhJZ2UxeHVYSFJqYjI1emRISjFZM1J2Y2loeWIzVjBaWE1wSUh0Y2JseDBYSFIwYUdsekxuSnZkWFJsY3lBOUlISnZkWFJsY3p0Y2JseDBYSFIwYUdsekxtTnZiblJ5YjJ4c1pYSnpJRDBnVzEwN1hHNWNkSDFjYmx4dVhIUnVZWFpwWjJGMFpTaHliM1YwWlU1aGJXVXBJSHRjYmx4MFhIUmpiMjV6ZENCeWIzVjBaU0E5SUhSb2FYTXVjbTkxZEdWelczSnZkWFJsVG1GdFpWMDdYRzVjZEZ4MFkyOXVjM1FnZEdWdGNHeGhkR1VnUFNCeWIzVjBaUzUwWlcxd2JHRjBaVHRjYmx4MFhIUmpiMjV6ZENCRGIyNTBjbTlzYkdWeUlEMGdjbTkxZEdVdVkyOXVkSEp2Ykd4bGNqdGNibHgwWEhSamIyNXpkQ0J0YjJSbGJDQTlJSFJvYVhNdVgyZGxkRTF2WkdWc0tDazdYRzVjZEZ4MFkyOXVjM1FnWTI5dWRISnZiR3hsY2lBOUlHNWxkeUJEYjI1MGNtOXNiR1Z5S0hSbGJYQnNZWFJsTENCdGIyUmxiQ2s3WEc1Y2RGeDBZMjl1ZEhKdmJHeGxjaTVwYm1sMEtDazdYRzVjZEgxY2JseHVYSFJmWjJWMFRXOWtaV3dvS1NCN1hHNWNkRngwY21WMGRYSnVJRnRjYmx4MFhIUmNkSHNnYm1GdFpUb2dKMU5oYzJoaEp5QjlMRnh1WEhSY2RGeDBleUJ1WVcxbE9pQW5WbUZ6ZVdFbklIMHNYRzVjZEZ4MFhIUjdJRzVoYldVNklDZFFaWFI1WVNjZ2ZTeGNibHgwWEhSY2RIc2dibUZ0WlRvZ0owbG5iM0luSUgxY2JseDBYSFJkTzF4dVhIUjlYRzU5WEc0aUxDSnBiWEJ2Y25RZ1VtOTFkR1Z5SUdaeWIyMGdKeTR1TDJOdmNtVXZVbTkxZEdWeUp6dGNibWx0Y0c5eWRDQjBaVzF3YkdGMFpURkRiMjUwY205c2JHVnlJR1p5YjIwZ0p5NHVMMk52Ym5SeWIyeHNaWEp6TDNSbGJYQnNZWFJsTVNjN1hHNXBiWEJ2Y25RZ2RHVnRjR3hoZEdVeVEyOXVkSEp2Ykd4bGNpQm1jbTl0SUNjdUxpOWpiMjUwY205c2JHVnljeTkwWlcxd2JHRjBaVEluTzF4dVhHNWpiMjV6ZENCeWIzVjBaWE1nUFNCN1hHNWNkQ2QwWlcxd2JHRjBaVEVuT2lCN1hHNWNkRngwZEdWdGNHeGhkR1U2SUNkaGNIQXZkR1Z0Y0d4aGRHVnpMM1JsYlhCc1lYUmxNUzVvZEcxc0p5eGNibHgwWEhSamIyNTBjbTlzYkdWeU9pQjBaVzF3YkdGMFpURkRiMjUwY205c2JHVnlYRzVjZEgwc1hHNWNkQ2QwWlcxd2JHRjBaVEluT2lCN1hHNWNkRngwZEdWdGNHeGhkR1U2SUNkaGNIQXZkR1Z0Y0d4aGRHVnpMM1JsYlhCc1lYUmxNaTVvZEcxc0p5eGNibHgwWEhSamIyNTBjbTlzYkdWeU9pQjBaVzF3YkdGMFpUSkRiMjUwY205c2JHVnlYRzVjZEgxY2JuMDdYRzVjYm1OdmJuTjBJSEp2ZFhSbGNpQTlJRzVsZHlCU2IzVjBaWElvY205MWRHVnpLVHRjYmx4dVpYaHdiM0owSUhzZ2NtOTFkR1Z5SUgwN1hHNGlYWDA9In0=
