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

  _index.router.goToRoute('template1');
});

},{"./routes/index":7}],2:[function(require,module,exports){
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
		define(['exports', './utils', '../settings'], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports, require('./utils'), require('../settings'));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, global.utils, global.settings);
		global.Controller = mod.exports;
	}
})(this, function (exports, _utils, _settings) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _utils2 = _interopRequireDefault(_utils);

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
		function Controller(templateUrl, model) {
			_classCallCheck(this, Controller);

			this.templateUrl = templateUrl;
			this.model = model;
		}

		_createClass(Controller, [{
			key: 'init',
			value: function init() {
				console.log('Controller init');
				this.render();
			}
		}, {
			key: '_setModel',
			value: function _setModel(model) {
				this.model = model;
			}
		}, {
			key: 'render',
			value: async function render() {
				var wrapper = document.getElementById(_settings.settings.wrapperId);
				var html = await _utils2.default.fetchHtml(this.templateUrl);
				wrapper.insertAdjacentHTML('afterbegin', html);
			}
		}]);

		return Controller;
	}();

	exports.default = Controller;
});

},{"../settings":8,"./utils":6}],5:[function(require,module,exports){
(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['exports', './utils', '../settings'], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports, require('./utils'), require('../settings'));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, global.utils, global.settings);
		global.Router = mod.exports;
	}
})(this, function (exports, _utils, _settings) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _utils2 = _interopRequireDefault(_utils);

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
			key: 'init',
			value: function init() {
				console.log('Router init');
				this._activateLinkToButtons();
			}
		}, {
			key: 'goToRoute',
			value: function goToRoute(routeName) {
				_utils2.default.clearDomElement(_settings.settings.wrapperId);
				var route = this.routes[routeName];
				var templateUrl = route.templateUrl;
				var Controller = route.controller;
				var model = this._getModel();
				var controller = new Controller(templateUrl, model);
				controller.init();
			}
		}, {
			key: '_getModel',
			value: function _getModel() {
				return [{ name: 'Sasha' }, { name: 'Vasya' }, { name: 'Petya' }, { name: 'Igor' }];
			}
		}, {
			key: '_activateLinkToButtons',
			value: function _activateLinkToButtons() {
				_utils2.default.addEventListener('.linkTo', 'click', this._routeToAction, this);
			}
		}, {
			key: '_routeToAction',
			value: function _routeToAction(evt) {
				evt.preventDefault();
				this.goToRoute(evt.target.attributes.route.value);
			}
		}]);

		return Router;
	}();

	exports.default = Router;
});

},{"../settings":8,"./utils":6}],6:[function(require,module,exports){
(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(["exports"], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports);
		global.utils = mod.exports;
	}
})(this, function (exports) {
	"use strict";

	exports.fetchHtml = function (url) {
		return fetch(url).then(function (res) {
			return res.text();
		});
	};

	exports.addEventListener = function (className, event, action, context) {
		var items = document.querySelectorAll(className);

		for (var i = 0; i < items.length; i++) {
			items[i].addEventListener(event, action.bind(context), false);
		}
	};

	exports.clearDomElement = function (elemId) {
		var element = document.getElementById(elemId);
		while (element.firstChild) {
			element.removeChild(element.firstChild);
		}
	};
});

},{}],7:[function(require,module,exports){
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
			templateUrl: '/../templates/template1.html',
			controller: _template2.default,
			url: 'template1'
		},
		'template2': {
			templateUrl: '/../templates/template2.html',
			controller: _template4.default,
			url: 'template2'
		}
	};

	var router = new _Router2.default(routes);
	router.init();

	exports.router = router;
});

},{"../controllers/template1":2,"../controllers/template2":3,"../core/Router":5}],8:[function(require,module,exports){
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
		global.index = mod.exports;
	}
})(this, function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var settings = exports.settings = {
		wrapperId: 'page-content'
	};
});

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL2NvbnRyb2xsZXJzL3RlbXBsYXRlMS5qcyIsImFwcC9jb250cm9sbGVycy90ZW1wbGF0ZTIuanMiLCJhcHAvY29yZS9Db250cm9sbGVyLmpzIiwiYXBwL2NvcmUvUm91dGVyLmpzIiwiYXBwL2NvcmUvdXRpbHMuanMiLCJhcHAvcm91dGVzL2luZGV4LmpzIiwiYXBwL3NldHRpbmdzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FDRUEsZ0JBQU8sU0FBUCxDQUFpQixXQUFqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ0FxQixtQjs7Ozs7Ozs7OztJQUE0QixvQjs7b0JBQTVCLG1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DQUEsbUI7Ozs7Ozs7Ozs7SUFBNEIsb0I7O29CQUE1QixtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQ0NBLFU7QUFDcEIsc0JBQVksV0FBWixFQUF5QixLQUF6QixFQUFnQztBQUFBOztBQUMvQixRQUFLLFdBQUwsR0FBbUIsV0FBbkI7QUFDQSxRQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0E7Ozs7MEJBRU07QUFDTixZQUFRLEdBQVIsQ0FBWSxpQkFBWjtBQUNBLFNBQUssTUFBTDtBQUNBOzs7NkJBRVMsSyxFQUFPO0FBQ2hCLFNBQUssS0FBTCxHQUFhLEtBQWI7QUFDQTs7O2tDQUVjO0FBQ2QsUUFBTSxVQUFVLFNBQVMsY0FBVCxDQUF3QixtQkFBUyxTQUFqQyxDQUFoQjtBQUNBLFFBQU0sT0FBTyxNQUFNLGdCQUFNLFNBQU4sQ0FBZ0IsS0FBSyxXQUFyQixDQUFuQjtBQUNBLFlBQVEs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bix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHsgcm91dGVyIH0gZnJvbSAnLi9yb3V0ZXMvaW5kZXgnO1xuXG5yb3V0ZXIuZ29Ub1JvdXRlKCd0ZW1wbGF0ZTEnKTtcblxuIiwiaW1wb3J0IENvbnRyb2xsZXIgZnJvbSAnLi4vY29yZS9Db250cm9sbGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdGVtcGxhdGUxQ29udHJvbGxlciBleHRlbmRzIENvbnRyb2xsZXIge31cbiIsImltcG9ydCBDb250cm9sbGVyIGZyb20gJy4uL2NvcmUvQ29udHJvbGxlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRlbXBsYXRlMkNvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIHt9XG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBzZXR0aW5ncyB9IGZyb20gJy4uL3NldHRpbmdzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlciB7XG5cdGNvbnN0cnVjdG9yKHRlbXBsYXRlVXJsLCBtb2RlbCkge1xuXHRcdHRoaXMudGVtcGxhdGVVcmwgPSB0ZW1wbGF0ZVVybDtcblx0XHR0aGlzLm1vZGVsID0gbW9kZWw7XG5cdH1cblxuXHRpbml0KCkge1xuXHRcdGNvbnNvbGUubG9nKCdDb250cm9sbGVyIGluaXQnKTtcblx0XHR0aGlzLnJlbmRlcigpO1xuXHR9XG5cblx0X3NldE1vZGVsKG1vZGVsKSB7XG5cdFx0dGhpcy5tb2RlbCA9IG1vZGVsO1xuXHR9XG5cblx0YXN5bmMgcmVuZGVyKCkge1xuXHRcdGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZXR0aW5ncy53cmFwcGVySWQpO1xuXHRcdGNvbnN0IGh0bWwgPSBhd2FpdCB1dGlscy5mZXRjaEh0bWwodGhpcy50ZW1wbGF0ZVVybCk7XG5cdFx0d3JhcHBlci5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBodG1sKTtcblx0fVxufVxuIiwiXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBzZXR0aW5ncyB9IGZyb20gJy4uL3NldHRpbmdzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIHtcblx0Y29uc3RydWN0b3Iocm91dGVzKSB7XG5cdFx0dGhpcy5yb3V0ZXMgPSByb3V0ZXM7XG5cdFx0dGhpcy5jb250cm9sbGVycyA9IFtdO1xuXHR9XG5cblx0aW5pdCgpIHtcblx0XHRjb25zb2xlLmxvZygnUm91dGVyIGluaXQnKTtcblx0XHR0aGlzLl9hY3RpdmF0ZUxpbmtUb0J1dHRvbnMoKTtcblx0fVxuXG5cdGdvVG9Sb3V0ZShyb3V0ZU5hbWUpIHtcblx0XHR1dGlscy5jbGVhckRvbUVsZW1lbnQoc2V0dGluZ3Mud3JhcHBlcklkKTtcblx0XHRjb25zdCByb3V0ZSA9IHRoaXMucm91dGVzW3JvdXRlTmFtZV07XG5cdFx0Y29uc3QgdGVtcGxhdGVVcmwgPSByb3V0ZS50ZW1wbGF0ZVVybDtcblx0XHRjb25zdCBDb250cm9sbGVyID0gcm91dGUuY29udHJvbGxlcjtcblx0XHRjb25zdCBtb2RlbCA9IHRoaXMuX2dldE1vZGVsKCk7XG5cdFx0Y29uc3QgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKHRlbXBsYXRlVXJsLCBtb2RlbCk7XG5cdFx0Y29udHJvbGxlci5pbml0KCk7XG5cdH1cblxuXHRfZ2V0TW9kZWwoKSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdHsgbmFtZTogJ1Nhc2hhJyB9LFxuXHRcdFx0eyBuYW1lOiAnVmFzeWEnIH0sXG5cdFx0XHR7IG5hbWU6ICdQZXR5YScgfSxcblx0XHRcdHsgbmFtZTogJ0lnb3InIH1cblx0XHRdO1xuXHR9XG5cblx0X2FjdGl2YXRlTGlua1RvQnV0dG9ucygpIHtcblx0XHR1dGlscy5hZGRFdmVudExpc3RlbmVyKCcubGlua1RvJywgJ2NsaWNrJywgdGhpcy5fcm91dGVUb0FjdGlvbiwgdGhpcyk7XG5cdH1cblxuXHRfcm91dGVUb0FjdGlvbihldnQpIHtcblx0XHRldnQucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLmdvVG9Sb3V0ZShldnQudGFyZ2V0LmF0dHJpYnV0ZXMucm91dGUudmFsdWUpO1xuXHR9XG59XG4iLCJleHBvcnRzLmZldGNoSHRtbCA9IGZ1bmN0aW9uKHVybCkge1xuXHRyZXR1cm4gZmV0Y2godXJsKS50aGVuKChyZXMpID0+IHtcblx0XHRyZXR1cm4gcmVzLnRleHQoKTtcblx0fSk7XG59O1xuXG5leHBvcnRzLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihjbGFzc05hbWUsIGV2ZW50LCBhY3Rpb24sIGNvbnRleHQpIHtcblx0Y29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNsYXNzTmFtZSk7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdGl0ZW1zW2ldLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGFjdGlvbi5iaW5kKGNvbnRleHQpLCBmYWxzZSk7XG5cdH1cbn07XG5cbmV4cG9ydHMuY2xlYXJEb21FbGVtZW50ID0gZnVuY3Rpb24oZWxlbUlkKSB7XG5cdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtSWQpO1xuXHR3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XG5cdFx0ZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuXHR9XG59O1xuIiwiaW1wb3J0IFJvdXRlciBmcm9tICcuLi9jb3JlL1JvdXRlcic7XG5pbXBvcnQgdGVtcGxhdGUxQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy90ZW1wbGF0ZTEnO1xuaW1wb3J0IHRlbXBsYXRlMkNvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvdGVtcGxhdGUyJztcblxuY29uc3Qgcm91dGVzID0ge1xuXHQndGVtcGxhdGUxJzoge1xuXHRcdHRlbXBsYXRlVXJsOiAnLy4uL3RlbXBsYXRlcy90ZW1wbGF0ZTEuaHRtbCcsXG5cdFx0Y29udHJvbGxlcjogdGVtcGxhdGUxQ29udHJvbGxlcixcblx0XHR1cmw6ICd0ZW1wbGF0ZTEnXG5cdH0sXG5cdCd0ZW1wbGF0ZTInOiB7XG5cdFx0dGVtcGxhdGVVcmw6ICcvLi4vdGVtcGxhdGVzL3RlbXBsYXRlMi5odG1sJyxcblx0XHRjb250cm9sbGVyOiB0ZW1wbGF0ZTJDb250cm9sbGVyLFxuXHRcdHVybDogJ3RlbXBsYXRlMidcblx0fVxufTtcblxuY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcihyb3V0ZXMpO1xucm91dGVyLmluaXQoKTtcblxuZXhwb3J0IHsgcm91dGVyIH07XG4iLCJleHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XG5cdHdyYXBwZXJJZDogJ3BhZ2UtY29udGVudCdcbn07XG5cbiJdLCJwcmVFeGlzdGluZ0NvbW1lbnQiOiIvLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTV2WkdWZmJXOWtkV3hsY3k5aWNtOTNjMlZ5TFhCaFkyc3ZYM0J5Wld4MVpHVXVhbk1pTENKaGNIQXZZWEJ3TG1weklpd2lZWEJ3TDJOdmJuUnliMnhzWlhKekwzUmxiWEJzWVhSbE1TNXFjeUlzSW1Gd2NDOWpiMjUwY205c2JHVnljeTkwWlcxd2JHRjBaVEl1YW5NaUxDSmhjSEF2WTI5eVpTOURiMjUwY205c2JHVnlMbXB6SWl3aVlYQndMMk52Y21VdlVtOTFkR1Z5TG1weklpd2lZWEJ3TDJOdmNtVXZkWFJwYkhNdWFuTWlMQ0poY0hBdmNtOTFkR1Z6TDJsdVpHVjRMbXB6SWl3aVlYQndMM05sZEhScGJtZHpMMmx1WkdWNExtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSkJRVUZCT3pzN096czdPenM3T3pzN096czdPMEZEUlVFc1owSkJRVThzVTBGQlVDeERRVUZwUWl4WFFVRnFRanM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dE5RMEZ4UWl4dFFqczdPenM3T3pzN096dEpRVUUwUWl4dlFqczdiMEpCUVRWQ0xHMUNPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wMURRVUVzYlVJN096czdPenM3T3pzN1NVRkJORUlzYjBJN08yOUNRVUUxUWl4dFFqczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dExRME5CTEZVN1FVRkRjRUlzYzBKQlFWa3NWMEZCV2l4RlFVRjVRaXhMUVVGNlFpeEZRVUZuUXp0QlFVRkJPenRCUVVNdlFpeFJRVUZMTEZkQlFVd3NSMEZCYlVJc1YwRkJia0k3UVVGRFFTeFJRVUZMTEV0QlFVd3NSMEZCWVN4TFFVRmlPMEZCUTBFN096czdNRUpCUlUwN1FVRkRUaXhaUVVGUkxFZEJRVklzUTBGQldTeHBRa0ZCV2p0QlFVTkJMRk5CUVVzc1RVRkJURHRCUVVOQk96czdOa0pCUlZNc1N5eEZRVUZQTzBGQlEyaENMRk5CUVVzc1MwRkJUQ3hIUVVGaExFdEJRV0k3UVVGRFFUczdPMnREUVVWak8wRkJRMlFzVVVGQlRTeFZRVUZWTEZOQlFWTXNZMEZCVkN4RFFVRjNRaXh0UWtGQlV5eFRRVUZxUXl4RFFVRm9RanRCUVVOQkxGRkJRVTBzVDBGQlR5eE5RVUZOTEdkQ1FVRk5MRk5CUVU0c1EwRkJaMElzUzBGQlN5eFhRVUZ5UWl4RFFVRnVRanRCUVVOQkxGbEJRVkVzYTBKQlFWSXNRMEZCTWtJc1dVRkJNMElzUlVGQmVVTXNTVUZCZWtNN1FVRkRRVHM3T3pzN08yMUNRVzVDYlVJc1ZUczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dExRME5CTEUwN1FVRkRjRUlzYTBKQlFWa3NUVUZCV2l4RlFVRnZRanRCUVVGQk96dEJRVU51UWl4UlFVRkxMRTFCUVV3c1IwRkJZeXhOUVVGa08wRkJRMEVzVVVGQlN5eFhRVUZNTEVkQlFXMUNMRVZCUVc1Q08wRkJRMEU3T3pzN01FSkJSVTA3UVVGRFRpeFpRVUZSTEVkQlFWSXNRMEZCV1N4aFFVRmFPMEZCUTBFc1UwRkJTeXh6UWtGQlREdEJRVU5CT3pzN05rSkJSVk1zVXl4RlFVRlhPMEZCUTNCQ0xHOUNRVUZOTEdWQlFVNHNRMEZCYzBJc2JVSkJRVk1zVTBGQkwwSTdRVUZEUVN4UlFVRk5MRkZCUVZFc1MwRkJTeXhOUVVGTUxFTkJRVmtzVTBGQldpeERRVUZrTzBGQlEwRXNVVUZCVFN4alFVRmpMRTFCUVUwc1YwRkJNVUk3UVVGRFFTeFJRVUZOTEdGQlFXRXNUVUZCVFN4VlFVRjZRanRCUVVOQkxGRkJRVTBzVVVGQlVTeExRVUZMTEZOQlFVd3NSVUZCWkR0QlFVTkJMRkZCUVUwc1lVRkJZU3hKUVVGSkxGVkJRVW9zUTBGQlpTeFhRVUZtTEVWQlFUUkNMRXRCUVRWQ0xFTkJRVzVDTzBGQlEwRXNaVUZCVnl4SlFVRllPMEZCUTBFN096c3JRa0ZGVnp0QlFVTllMRmRCUVU4c1EwRkRUaXhGUVVGRkxFMUJRVTBzVDBGQlVpeEZRVVJOTEVWQlJVNHNSVUZCUlN4TlFVRk5MRTlCUVZJc1JVRkdUU3hGUVVkT0xFVkJRVVVzVFVGQlRTeFBRVUZTTEVWQlNFMHNSVUZKVGl4RlFVRkZMRTFCUVUwc1RVRkJVaXhGUVVwTkxFTkJRVkE3UVVGTlFUczdPelJEUVVWM1FqdEJRVU40UWl4dlFrRkJUU3huUWtGQlRpeERRVUYxUWl4VFFVRjJRaXhGUVVGclF5eFBRVUZzUXl4RlFVRXlReXhMUVVGTExHTkJRV2hFTEVWQlFXZEZMRWxCUVdoRk8wRkJRMEU3T3p0clEwRkZZeXhITEVWQlFVczdRVUZEYmtJc1VVRkJTU3hqUVVGS08wRkJRMEVzVTBGQlN5eFRRVUZNTEVOQlFXVXNTVUZCU1N4TlFVRktMRU5CUVZjc1ZVRkJXQ3hEUVVGelFpeExRVUYwUWl4RFFVRTBRaXhMUVVFelF6dEJRVU5CT3pzN096czdiVUpCY2tOdFFpeE5PenM3T3pzN096czdPenM3T3pzN096czdPMEZEU25KQ0xGTkJRVkVzVTBGQlVpeEhRVUZ2UWl4VlFVRlRMRWRCUVZRc1JVRkJZenRCUVVOcVF5eFRRVUZQTEUxQlFVMHNSMEZCVGl4RlFVRlhMRWxCUVZnc1EwRkJaMElzVlVGQlF5eEhRVUZFTEVWQlFWTTdRVUZETDBJc1ZVRkJUeXhKUVVGSkxFbEJRVW9zUlVGQlVEdEJRVU5CTEVkQlJrMHNRMEZCVUR0QlFVZEJMRVZCU2tRN08wRkJUVUVzVTBGQlVTeG5Ra0ZCVWl4SFFVRXlRaXhWUVVGVExGTkJRVlFzUlVGQmIwSXNTMEZCY0VJc1JVRkJNa0lzVFVGQk0wSXNSVUZCYlVNc1QwRkJia01zUlVGQk5FTTdRVUZEZEVVc1RVRkJUU3hSUVVGUkxGTkJRVk1zWjBKQlFWUXNRMEZCTUVJc1UwRkJNVUlzUTBGQlpEczdRVUZGUVN4UFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGaUxFVkJRV2RDTEVsQlFVa3NUVUZCVFN4TlFVRXhRaXhGUVVGclF5eEhRVUZzUXl4RlFVRjFRenRCUVVOMFF5eFRRVUZOTEVOQlFVNHNSVUZCVXl4blFrRkJWQ3hEUVVFd1FpeExRVUV4UWl4RlFVRnBReXhQUVVGUExFbEJRVkFzUTBGQldTeFBRVUZhTEVOQlFXcERMRVZCUVhWRUxFdEJRWFpFTzBGQlEwRTdRVUZEUkN4RlFVNUVPenRCUVZGQkxGTkJRVkVzWlVGQlVpeEhRVUV3UWl4VlFVRlRMRTFCUVZRc1JVRkJhVUk3UVVGRE1VTXNUVUZCVFN4VlFVRlZMRk5CUVZNc1kwRkJWQ3hEUVVGM1FpeE5RVUY0UWl4RFFVRm9RanRCUVVOQkxGTkJRVThzVVVGQlVTeFZRVUZtTEVWQlFUSkNPMEZCUXpGQ0xGZEJRVkVzVjBGQlVpeERRVUZ2UWl4UlFVRlJMRlZCUVRWQ08wRkJRMEU3UVVGRFJDeEZRVXhFT3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3UVVOV1FTeExRVUZOTEZOQlFWTTdRVUZEWkN4bFFVRmhPMEZCUTFvc1owSkJRV0VzT0VKQlJFUTdRVUZGV2l4bFFVRlpMR3RDUVVaQk8wRkJSMW9zVVVGQlN6dEJRVWhQTEVkQlJFTTdRVUZOWkN4bFFVRmhPMEZCUTFvc1owSkJRV0VzT0VKQlJFUTdRVUZGV2l4bFFVRlpMR3RDUVVaQk8wRkJSMW9zVVVGQlN6dEJRVWhQTzBGQlRrTXNSVUZCWmpzN1FVRmhRU3hMUVVGTkxGTkJRVk1zU1VGQlNTeG5Ra0ZCU2l4RFFVRlhMRTFCUVZnc1EwRkJaanRCUVVOQkxGRkJRVThzU1VGQlVEczdVMEZGVXl4TkxFZEJRVUVzVFRzN096czdPenM3T3pzN096czdPenM3T3pzN096dEJRM0JDUml4TFFVRk5MRGhDUVVGWE8wRkJRM1pDTEdGQlFWYzdRVUZFV1N4RlFVRnFRaUlzSW1acGJHVWlPaUpuWlc1bGNtRjBaV1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUtHWjFibU4wYVc5dUtDbDdablZ1WTNScGIyNGdjaWhsTEc0c2RDbDdablZ1WTNScGIyNGdieWhwTEdZcGUybG1LQ0Z1VzJsZEtYdHBaaWdoWlZ0cFhTbDdkbUZ5SUdNOVhDSm1kVzVqZEdsdmJsd2lQVDEwZVhCbGIyWWdjbVZ4ZFdseVpTWW1jbVZ4ZFdseVpUdHBaaWdoWmlZbVl5bHlaWFIxY200Z1l5aHBMQ0V3S1R0cFppaDFLWEpsZEhWeWJpQjFLR2tzSVRBcE8zWmhjaUJoUFc1bGR5QkZjbkp2Y2loY0lrTmhibTV2ZENCbWFXNWtJRzF2WkhWc1pTQW5YQ0lyYVN0Y0lpZGNJaWs3ZEdoeWIzY2dZUzVqYjJSbFBWd2lUVTlFVlV4RlgwNVBWRjlHVDFWT1JGd2lMR0Y5ZG1GeUlIQTlibHRwWFQxN1pYaHdiM0owY3pwN2ZYMDdaVnRwWFZzd1hTNWpZV3hzS0hBdVpYaHdiM0owY3l4bWRXNWpkR2x2YmloeUtYdDJZWElnYmoxbFcybGRXekZkVzNKZE8zSmxkSFZ5YmlCdktHNThmSElwZlN4d0xIQXVaWGh3YjNKMGN5eHlMR1VzYml4MEtYMXlaWFIxY200Z2JsdHBYUzVsZUhCdmNuUnpmV1p2Y2loMllYSWdkVDFjSW1aMWJtTjBhVzl1WENJOVBYUjVjR1Z2WmlCeVpYRjFhWEpsSmlaeVpYRjFhWEpsTEdrOU1EdHBQSFF1YkdWdVozUm9PMmtyS3lsdktIUmJhVjBwTzNKbGRIVnliaUJ2ZlhKbGRIVnliaUJ5ZlNrb0tTSXNJbWx0Y0c5eWRDQjdJSEp2ZFhSbGNpQjlJR1p5YjIwZ0p5NHZjbTkxZEdWekwybHVaR1Y0Snp0Y2JseHVjbTkxZEdWeUxtZHZWRzlTYjNWMFpTZ25kR1Z0Y0d4aGRHVXhKeWs3WEc1Y2JpSXNJbWx0Y0c5eWRDQkRiMjUwY205c2JHVnlJR1p5YjIwZ0p5NHVMMk52Y21VdlEyOXVkSEp2Ykd4bGNpYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklIUmxiWEJzWVhSbE1VTnZiblJ5YjJ4c1pYSWdaWGgwWlc1a2N5QkRiMjUwY205c2JHVnlJSHQ5WEc0aUxDSnBiWEJ2Y25RZ1EyOXVkSEp2Ykd4bGNpQm1jbTl0SUNjdUxpOWpiM0psTDBOdmJuUnliMnhzWlhJbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQmpiR0Z6Y3lCMFpXMXdiR0YwWlRKRGIyNTBjbTlzYkdWeUlHVjRkR1Z1WkhNZ1EyOXVkSEp2Ykd4bGNpQjdmVnh1SWl3aWFXMXdiM0owSUhWMGFXeHpJR1p5YjIwZ0p5NHZkWFJwYkhNbk8xeHVhVzF3YjNKMElIc2djMlYwZEdsdVozTWdmU0JtY205dElDY3VMaTl6WlhSMGFXNW5jeWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRU52Ym5SeWIyeHNaWElnZTF4dVhIUmpiMjV6ZEhKMVkzUnZjaWgwWlcxd2JHRjBaVlZ5YkN3Z2JXOWtaV3dwSUh0Y2JseDBYSFIwYUdsekxuUmxiWEJzWVhSbFZYSnNJRDBnZEdWdGNHeGhkR1ZWY213N1hHNWNkRngwZEdocGN5NXRiMlJsYkNBOUlHMXZaR1ZzTzF4dVhIUjlYRzVjYmx4MGFXNXBkQ2dwSUh0Y2JseDBYSFJqYjI1emIyeGxMbXh2WnlnblEyOXVkSEp2Ykd4bGNpQnBibWwwSnlrN1hHNWNkRngwZEdocGN5NXlaVzVrWlhJb0tUdGNibHgwZlZ4dVhHNWNkRjl6WlhSTmIyUmxiQ2h0YjJSbGJDa2dlMXh1WEhSY2RIUm9hWE11Ylc5a1pXd2dQU0J0YjJSbGJEdGNibHgwZlZ4dVhHNWNkR0Z6ZVc1aklISmxibVJsY2lncElIdGNibHgwWEhSamIyNXpkQ0IzY21Gd2NHVnlJRDBnWkc5amRXMWxiblF1WjJWMFJXeGxiV1Z1ZEVKNVNXUW9jMlYwZEdsdVozTXVkM0poY0hCbGNrbGtLVHRjYmx4MFhIUmpiMjV6ZENCb2RHMXNJRDBnWVhkaGFYUWdkWFJwYkhNdVptVjBZMmhJZEcxc0tIUm9hWE11ZEdWdGNHeGhkR1ZWY213cE8xeHVYSFJjZEhkeVlYQndaWEl1YVc1elpYSjBRV1JxWVdObGJuUklWRTFNS0NkaFpuUmxjbUpsWjJsdUp5d2dhSFJ0YkNrN1hHNWNkSDFjYm4xY2JpSXNJbHh1YVcxd2IzSjBJSFYwYVd4eklHWnliMjBnSnk0dmRYUnBiSE1uTzF4dWFXMXdiM0owSUhzZ2MyVjBkR2x1WjNNZ2ZTQm1jbTl0SUNjdUxpOXpaWFIwYVc1bmN5YzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklGSnZkWFJsY2lCN1hHNWNkR052Ym5OMGNuVmpkRzl5S0hKdmRYUmxjeWtnZTF4dVhIUmNkSFJvYVhNdWNtOTFkR1Z6SUQwZ2NtOTFkR1Z6TzF4dVhIUmNkSFJvYVhNdVkyOXVkSEp2Ykd4bGNuTWdQU0JiWFR0Y2JseDBmVnh1WEc1Y2RHbHVhWFFvS1NCN1hHNWNkRngwWTI5dWMyOXNaUzVzYjJjb0oxSnZkWFJsY2lCcGJtbDBKeWs3WEc1Y2RGeDBkR2hwY3k1ZllXTjBhWFpoZEdWTWFXNXJWRzlDZFhSMGIyNXpLQ2s3WEc1Y2RIMWNibHh1WEhSbmIxUnZVbTkxZEdVb2NtOTFkR1ZPWVcxbEtTQjdYRzVjZEZ4MGRYUnBiSE11WTJ4bFlYSkViMjFGYkdWdFpXNTBLSE5sZEhScGJtZHpMbmR5WVhCd1pYSkpaQ2s3WEc1Y2RGeDBZMjl1YzNRZ2NtOTFkR1VnUFNCMGFHbHpMbkp2ZFhSbGMxdHliM1YwWlU1aGJXVmRPMXh1WEhSY2RHTnZibk4wSUhSbGJYQnNZWFJsVlhKc0lEMGdjbTkxZEdVdWRHVnRjR3hoZEdWVmNtdzdYRzVjZEZ4MFkyOXVjM1FnUTI5dWRISnZiR3hsY2lBOUlISnZkWFJsTG1OdmJuUnliMnhzWlhJN1hHNWNkRngwWTI5dWMzUWdiVzlrWld3Z1BTQjBhR2x6TGw5blpYUk5iMlJsYkNncE8xeHVYSFJjZEdOdmJuTjBJR052Ym5SeWIyeHNaWElnUFNCdVpYY2dRMjl1ZEhKdmJHeGxjaWgwWlcxd2JHRjBaVlZ5YkN3Z2JXOWtaV3dwTzF4dVhIUmNkR052Ym5SeWIyeHNaWEl1YVc1cGRDZ3BPMXh1WEhSOVhHNWNibHgwWDJkbGRFMXZaR1ZzS0NrZ2UxeHVYSFJjZEhKbGRIVnliaUJiWEc1Y2RGeDBYSFI3SUc1aGJXVTZJQ2RUWVhOb1lTY2dmU3hjYmx4MFhIUmNkSHNnYm1GdFpUb2dKMVpoYzNsaEp5QjlMRnh1WEhSY2RGeDBleUJ1WVcxbE9pQW5VR1YwZVdFbklIMHNYRzVjZEZ4MFhIUjdJRzVoYldVNklDZEpaMjl5SnlCOVhHNWNkRngwWFR0Y2JseDBmVnh1WEc1Y2RGOWhZM1JwZG1GMFpVeHBibXRVYjBKMWRIUnZibk1vS1NCN1hHNWNkRngwZFhScGJITXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25MbXhwYm10VWJ5Y3NJQ2RqYkdsamF5Y3NJSFJvYVhNdVgzSnZkWFJsVkc5QlkzUnBiMjRzSUhSb2FYTXBPMXh1WEhSOVhHNWNibHgwWDNKdmRYUmxWRzlCWTNScGIyNG9aWFowS1NCN1hHNWNkRngwWlhaMExuQnlaWFpsYm5SRVpXWmhkV3gwS0NrN1hHNWNkRngwZEdocGN5NW5iMVJ2VW05MWRHVW9aWFowTG5SaGNtZGxkQzVoZEhSeWFXSjFkR1Z6TG5KdmRYUmxMblpoYkhWbEtUdGNibHgwZlZ4dWZWeHVJaXdpWlhod2IzSjBjeTVtWlhSamFFaDBiV3dnUFNCbWRXNWpkR2x2YmloMWNtd3BJSHRjYmx4MGNtVjBkWEp1SUdabGRHTm9LSFZ5YkNrdWRHaGxiaWdvY21WektTQTlQaUI3WEc1Y2RGeDBjbVYwZFhKdUlISmxjeTUwWlhoMEtDazdYRzVjZEgwcE8xeHVmVHRjYmx4dVpYaHdiM0owY3k1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5SUQwZ1puVnVZM1JwYjI0b1kyeGhjM05PWVcxbExDQmxkbVZ1ZEN3Z1lXTjBhVzl1TENCamIyNTBaWGgwS1NCN1hHNWNkR052Ym5OMElHbDBaVzF6SUQwZ1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZja0ZzYkNoamJHRnpjMDVoYldVcE8xeHVYRzVjZEdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2FYUmxiWE11YkdWdVozUm9PeUJwS3lzcElIdGNibHgwWEhScGRHVnRjMXRwWFM1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0dWMlpXNTBMQ0JoWTNScGIyNHVZbWx1WkNoamIyNTBaWGgwS1N3Z1ptRnNjMlVwTzF4dVhIUjlYRzU5TzF4dVhHNWxlSEJ2Y25SekxtTnNaV0Z5Ukc5dFJXeGxiV1Z1ZENBOUlHWjFibU4wYVc5dUtHVnNaVzFKWkNrZ2UxeHVYSFJqYjI1emRDQmxiR1Z0Wlc1MElEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb1pXeGxiVWxrS1R0Y2JseDBkMmhwYkdVZ0tHVnNaVzFsYm5RdVptbHljM1JEYUdsc1pDa2dlMXh1WEhSY2RHVnNaVzFsYm5RdWNtVnRiM1psUTJocGJHUW9aV3hsYldWdWRDNW1hWEp6ZEVOb2FXeGtLVHRjYmx4MGZWeHVmVHRjYmlJc0ltbHRjRzl5ZENCU2IzVjBaWElnWm5KdmJTQW5MaTR2WTI5eVpTOVNiM1YwWlhJbk8xeHVhVzF3YjNKMElIUmxiWEJzWVhSbE1VTnZiblJ5YjJ4c1pYSWdabkp2YlNBbkxpNHZZMjl1ZEhKdmJHeGxjbk12ZEdWdGNHeGhkR1V4Snp0Y2JtbHRjRzl5ZENCMFpXMXdiR0YwWlRKRGIyNTBjbTlzYkdWeUlHWnliMjBnSnk0dUwyTnZiblJ5YjJ4c1pYSnpMM1JsYlhCc1lYUmxNaWM3WEc1Y2JtTnZibk4wSUhKdmRYUmxjeUE5SUh0Y2JseDBKM1JsYlhCc1lYUmxNU2M2SUh0Y2JseDBYSFIwWlcxd2JHRjBaVlZ5YkRvZ0p5OHVMaTkwWlcxd2JHRjBaWE12ZEdWdGNHeGhkR1V4TG1oMGJXd25MRnh1WEhSY2RHTnZiblJ5YjJ4c1pYSTZJSFJsYlhCc1lYUmxNVU52Ym5SeWIyeHNaWElzWEc1Y2RGeDBkWEpzT2lBbmRHVnRjR3hoZEdVeEoxeHVYSFI5TEZ4dVhIUW5kR1Z0Y0d4aGRHVXlKem9nZTF4dVhIUmNkSFJsYlhCc1lYUmxWWEpzT2lBbkx5NHVMM1JsYlhCc1lYUmxjeTkwWlcxd2JHRjBaVEl1YUhSdGJDY3NYRzVjZEZ4MFkyOXVkSEp2Ykd4bGNqb2dkR1Z0Y0d4aGRHVXlRMjl1ZEhKdmJHeGxjaXhjYmx4MFhIUjFjbXc2SUNkMFpXMXdiR0YwWlRJblhHNWNkSDFjYm4wN1hHNWNibU52Ym5OMElISnZkWFJsY2lBOUlHNWxkeUJTYjNWMFpYSW9jbTkxZEdWektUdGNibkp2ZFhSbGNpNXBibWwwS0NrN1hHNWNibVY0Y0c5eWRDQjdJSEp2ZFhSbGNpQjlPMXh1SWl3aVpYaHdiM0owSUdOdmJuTjBJSE5sZEhScGJtZHpJRDBnZTF4dVhIUjNjbUZ3Y0dWeVNXUTZJQ2R3WVdkbExXTnZiblJsYm5RblhHNTlPMXh1WEc0aVhYMD0ifQ==
