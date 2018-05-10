(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['routes/index'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('routes/index'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.index);
    global.app = mod.exports;
  }
})(this, function (_index) {
  'use strict';
});
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
  exports.template1Controller = undefined;

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
  }(_Controller2.Controller);

  exports.template1Controller = template1Controller;
});
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
  exports.template2Controller = undefined;

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
  }(_Controller2.Controller);

  exports.template2Controller = template2Controller;
});
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
		function Controller(template) {
			_classCallCheck(this, Controller);

			this.template = template;
			this.wrapperId = 'page-content';
		}

		_createClass(Controller, [{
			key: 'init',
			value: function init() {
				this.render();
			}
		}, {
			key: 'render',
			value: function render() {
				document.getElementById(this.wrapperId).appendChild(this.template);
			}
		}]);

		return Controller;
	}();

	exports.Controller = Controller;
});
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
		global.Router = mod.exports;
	}
})(this, function (exports) {
	"use strict";

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
		}

		_createClass(Router, [{
			key: "navigate",
			value: function navigate(routeName) {
				var route = this.routes[routeName];
				route.init(route.template);
			}
		}]);

		return Router;
	}();

	exports.Router = Router;
});
(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(["exports", 'routes/index', '../core/Controller', '../core/Controller', 'routes/index', '../core/Controller', '../core/Controller', 'routes/index', '../core/Controller', '../core/Controller', 'routes/index', '../core/Controller', '../core/Controller', '../core/Router', '../controllers/template1', '../controllers/template2', '../core/Router', '../controllers/template1', '../controllers/template2'], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports, require('routes/index'), require('../core/Controller'), require('../core/Controller'), require('routes/index'), require('../core/Controller'), require('../core/Controller'), require('routes/index'), require('../core/Controller'), require('../core/Controller'), require('routes/index'), require('../core/Controller'), require('../core/Controller'), require('../core/Router'), require('../controllers/template1'), require('../controllers/template2'), require('../core/Router'), require('../controllers/template1'), require('../controllers/template2'));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, global.index, global.Controller, global.Controller, global.index, global.Controller, global.Controller, global.index, global.Controller, global.Controller, global.index, global.Controller, global.Controller, global.Router, global.template1, global.template2, global.Router, global.template1, global.template2);
		global.all = mod.exports;
	}
})(this, function (exports) {
	"use strict";

	var _typeof4 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
		return typeof obj;
	} : function (obj) {
		return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};

	(function (global, factory) {
		if (typeof define === "function" && define.amd) {
			define(['routes/index'], factory);
		} else if (typeof exports !== "undefined") {
			factory();
		} else {
			var mod = {
				exports: {}
			};
			factory(global.index);
			global.app = mod.exports;
		}
	})(undefined, function (_index) {
		'use strict';

		(0, _index.getUsefulContents)();
	});
	(function (global, factory) {
		if (typeof define === "function" && define.amd) {
			define(['exports', '../core/Controller'], factory);
		} else if (typeof exports !== "undefined") {
			factory(exports);
		} else {
			var mod = {
				exports: {}
			};
			factory(mod.exports, global.Controller);
			global.template1 = mod.exports;
		}
	})(undefined, function (exports, _Controller2) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.template1Controller = undefined;

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		function _possibleConstructorReturn(self, call) {
			if (!self) {
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			}

			return call && ((typeof call === "undefined" ? "undefined" : _typeof4(call)) === "object" || typeof call === "function") ? call : self;
		}

		function _inherits(subClass, superClass) {
			if (typeof superClass !== "function" && superClass !== null) {
				throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof4(superClass)));
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
		}(_Controller2.Controller);

		exports.template1Controller = template1Controller;
	});
	(function (global, factory) {
		if (typeof define === "function" && define.amd) {
			define(['exports', '../core/Controller'], factory);
		} else if (typeof exports !== "undefined") {
			factory(exports);
		} else {
			var mod = {
				exports: {}
			};
			factory(mod.exports, global.Controller);
			global.template2 = mod.exports;
		}
	})(undefined, function (exports, _Controller2) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.template2Controller = undefined;

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		function _possibleConstructorReturn(self, call) {
			if (!self) {
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			}

			return call && ((typeof call === "undefined" ? "undefined" : _typeof4(call)) === "object" || typeof call === "function") ? call : self;
		}

		function _inherits(subClass, superClass) {
			if (typeof superClass !== "function" && superClass !== null) {
				throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof4(superClass)));
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
		}(_Controller2.Controller);

		exports.template2Controller = template2Controller;
	});
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
	})(undefined, function (exports) {
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
			function Controller(template) {
				_classCallCheck(this, Controller);

				this.template = template;
				this.wrapperId = 'page-content';
			}

			_createClass(Controller, [{
				key: 'init',
				value: function init() {
					this.render();
				}
			}, {
				key: 'render',
				value: function render() {
					document.getElementById(this.wrapperId).appendChild(this.template);
				}
			}]);

			return Controller;
		}();

		exports.Controller = Controller;
	});
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
			global.Router = mod.exports;
		}
	})(undefined, function (exports) {
		"use strict";

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
			}

			_createClass(Router, [{
				key: "navigate",
				value: function navigate(routeName) {
					var route = this.routes[routeName];
					route.init(route.template);
				}
			}]);

			return Router;
		}();

		exports.Router = Router;
	});
	(function (global, factory) {
		if (typeof define === "function" && define.amd) {
			define(["exports", 'routes/index', '../core/Controller', '../core/Controller', 'routes/index', '../core/Controller', '../core/Controller', 'routes/index', '../core/Controller', '../core/Controller', '../core/Router', '../controllers/template1', '../controllers/template2'], factory);
		} else if (typeof exports !== "undefined") {
			factory(exports);
		} else {
			var mod = {
				exports: {}
			};
			factory(mod.exports, global.index, global.Controller, global.Controller, global.index, global.Controller, global.Controller, global.index, global.Controller, global.Controller, global.Router, global.template1, global.template2);
			global.all = mod.exports;
		}
	})(undefined, function (exports) {
		"use strict";

		var _typeof3 = typeof Symbol === "function" && _typeof4(Symbol.iterator) === "symbol" ? function (obj) {
			return typeof obj === "undefined" ? "undefined" : _typeof4(obj);
		} : function (obj) {
			return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof4(obj);
		};

		(function (global, factory) {
			if (typeof define === "function" && define.amd) {
				define(['routes/index'], factory);
			} else if (typeof exports !== "undefined") {
				factory();
			} else {
				var mod = {
					exports: {}
				};
				factory(global.index);
				global.app = mod.exports;
			}
		})(undefined, function (_index) {
			'use strict';

			(0, _index.getUsefulContents)();
		});
		(function (global, factory) {
			if (typeof define === "function" && define.amd) {
				define(['exports', '../core/Controller'], factory);
			} else if (typeof exports !== "undefined") {
				factory(exports);
			} else {
				var mod = {
					exports: {}
				};
				factory(mod.exports, global.Controller);
				global.template1 = mod.exports;
			}
		})(undefined, function (exports, _Controller2) {
			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.template1Controller = undefined;

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}

				return call && ((typeof call === "undefined" ? "undefined" : _typeof3(call)) === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof3(superClass)));
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
			}(_Controller2.Controller);

			exports.template1Controller = template1Controller;
		});
		(function (global, factory) {
			if (typeof define === "function" && define.amd) {
				define(['exports', '../core/Controller'], factory);
			} else if (typeof exports !== "undefined") {
				factory(exports);
			} else {
				var mod = {
					exports: {}
				};
				factory(mod.exports, global.Controller);
				global.template2 = mod.exports;
			}
		})(undefined, function (exports, _Controller2) {
			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.template2Controller = undefined;

			function _classCallCheck(instance, Constructor) {
				if (!(instance instanceof Constructor)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}

			function _possibleConstructorReturn(self, call) {
				if (!self) {
					throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				}

				return call && ((typeof call === "undefined" ? "undefined" : _typeof3(call)) === "object" || typeof call === "function") ? call : self;
			}

			function _inherits(subClass, superClass) {
				if (typeof superClass !== "function" && superClass !== null) {
					throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof3(superClass)));
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
			}(_Controller2.Controller);

			exports.template2Controller = template2Controller;
		});
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
		})(undefined, function (exports) {
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
				function Controller(template) {
					_classCallCheck(this, Controller);

					this.template = template;
					this.wrapperId = 'page-content';
				}

				_createClass(Controller, [{
					key: 'init',
					value: function init() {
						this.render();
					}
				}, {
					key: 'render',
					value: function render() {
						document.getElementById(this.wrapperId).appendChild(this.template);
					}
				}]);

				return Controller;
			}();

			exports.Controller = Controller;
		});
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
				global.Router = mod.exports;
			}
		})(undefined, function (exports) {
			"use strict";

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
				}

				_createClass(Router, [{
					key: "navigate",
					value: function navigate(routeName) {
						var route = this.routes[routeName];
						route.init(route.template);
					}
				}]);

				return Router;
			}();

			exports.Router = Router;
		});
		(function (global, factory) {
			if (typeof define === "function" && define.amd) {
				define(["exports", 'routes/index', '../core/Controller', '../core/Controller', 'routes/index', '../core/Controller', '../core/Controller'], factory);
			} else if (typeof exports !== "undefined") {
				factory(exports);
			} else {
				var mod = {
					exports: {}
				};
				factory(mod.exports, global.index, global.Controller, global.Controller, global.index, global.Controller, global.Controller);
				global.all = mod.exports;
			}
		})(undefined, function (exports) {
			"use strict";

			var _typeof2 = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
				return typeof obj === "undefined" ? "undefined" : _typeof3(obj);
			} : function (obj) {
				return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof3(obj);
			};

			(function (global, factory) {
				if (typeof define === "function" && define.amd) {
					define(['routes/index'], factory);
				} else if (typeof exports !== "undefined") {
					factory();
				} else {
					var mod = {
						exports: {}
					};
					factory(global.index);
					global.app = mod.exports;
				}
			})(undefined, function (_index) {
				'use strict';

				(0, _index.getUsefulContents)();
			});
			(function (global, factory) {
				if (typeof define === "function" && define.amd) {
					define(['exports', '../core/Controller'], factory);
				} else if (typeof exports !== "undefined") {
					factory(exports);
				} else {
					var mod = {
						exports: {}
					};
					factory(mod.exports, global.Controller);
					global.template1 = mod.exports;
				}
			})(undefined, function (exports, _Controller2) {
				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.template1Controller = undefined;

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}

					return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
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
				}(_Controller2.Controller);

				exports.template1Controller = template1Controller;
			});
			(function (global, factory) {
				if (typeof define === "function" && define.amd) {
					define(['exports', '../core/Controller'], factory);
				} else if (typeof exports !== "undefined") {
					factory(exports);
				} else {
					var mod = {
						exports: {}
					};
					factory(mod.exports, global.Controller);
					global.template2 = mod.exports;
				}
			})(undefined, function (exports, _Controller2) {
				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.template2Controller = undefined;

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}

					return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
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
				}(_Controller2.Controller);

				exports.template2Controller = template2Controller;
			});
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
			})(undefined, function (exports) {
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
					function Controller(template) {
						_classCallCheck(this, Controller);

						this.template = template;
						this.wrapperId = 'page-content';
					}

					_createClass(Controller, [{
						key: 'init',
						value: function init() {
							this.render();
						}
					}, {
						key: 'render',
						value: function render() {
							document.getElementById(this.wrapperId).appendChild(this.template);
						}
					}]);

					return Controller;
				}();

				exports.Controller = Controller;
			});
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
					global.Router = mod.exports;
				}
			})(undefined, function (exports) {
				"use strict";

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
					}

					_createClass(Router, [{
						key: "navigate",
						value: function navigate(routeName) {
							var route = this.routes[routeName];
							route.init(route.template);
						}
					}]);

					return Router;
				}();

				exports.Router = Router;
			});
			(function (global, factory) {
				if (typeof define === "function" && define.amd) {
					define(["exports", 'routes/index', '../core/Controller', '../core/Controller'], factory);
				} else if (typeof exports !== "undefined") {
					factory(exports);
				} else {
					var mod = {
						exports: {}
					};
					factory(mod.exports, global.index, global.Controller, global.Controller);
					global.all = mod.exports;
				}
			})(undefined, function (exports) {
				"use strict";

				var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
					return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
				} : function (obj) {
					return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
				};

				(function (global, factory) {
					if (typeof define === "function" && define.amd) {
						define(['routes/index'], factory);
					} else if (typeof exports !== "undefined") {
						factory();
					} else {
						var mod = {
							exports: {}
						};
						factory(global.index);
						global.app = mod.exports;
					}
				})(undefined, function (_index) {
					'use strict';

					(0, _index.getUsefulContents)();
				});
				(function (global, factory) {
					if (typeof define === "function" && define.amd) {
						define(['exports', '../core/Controller'], factory);
					} else if (typeof exports !== "undefined") {
						factory(exports);
					} else {
						var mod = {
							exports: {}
						};
						factory(mod.exports, global.Controller);
						global.template1 = mod.exports;
					}
				})(undefined, function (exports, _Controller2) {
					'use strict';

					Object.defineProperty(exports, "__esModule", {
						value: true
					});
					exports.template1Controller = undefined;

					function _classCallCheck(instance, Constructor) {
						if (!(instance instanceof Constructor)) {
							throw new TypeError("Cannot call a class as a function");
						}
					}

					function _possibleConstructorReturn(self, call) {
						if (!self) {
							throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						}

						return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
					}

					function _inherits(subClass, superClass) {
						if (typeof superClass !== "function" && superClass !== null) {
							throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
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
					}(_Controller2.Controller);

					exports.template1Controller = template1Controller;
				});
				(function (global, factory) {
					if (typeof define === "function" && define.amd) {
						define(['exports', '../core/Controller'], factory);
					} else if (typeof exports !== "undefined") {
						factory(exports);
					} else {
						var mod = {
							exports: {}
						};
						factory(mod.exports, global.Controller);
						global.template2 = mod.exports;
					}
				})(undefined, function (exports, _Controller2) {
					'use strict';

					Object.defineProperty(exports, "__esModule", {
						value: true
					});
					exports.template2Controller = undefined;

					function _classCallCheck(instance, Constructor) {
						if (!(instance instanceof Constructor)) {
							throw new TypeError("Cannot call a class as a function");
						}
					}

					function _possibleConstructorReturn(self, call) {
						if (!self) {
							throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						}

						return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
					}

					function _inherits(subClass, superClass) {
						if (typeof superClass !== "function" && superClass !== null) {
							throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
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
					}(_Controller2.Controller);

					exports.template2Controller = template2Controller;
				});
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
				})(undefined, function (exports) {
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
						function Controller(template) {
							_classCallCheck(this, Controller);

							this.template = template;
							this.wrapperId = 'page-content';
						}

						_createClass(Controller, [{
							key: 'init',
							value: function init() {
								this.render();
							}
						}, {
							key: 'render',
							value: function render() {
								document.getElementById(this.wrapperId).appendChild(this.template);
							}
						}]);

						return Controller;
					}();

					exports.Controller = Controller;
				});
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
						global.Router = mod.exports;
					}
				})(undefined, function (exports) {
					"use strict";

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
						}

						_createClass(Router, [{
							key: "navigate",
							value: function navigate(routeName) {
								var route = this.routes[routeName];
								route.init(route.template);
							}
						}]);

						return Router;
					}();

					exports.Router = Router;
				});
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
				})(undefined, function (exports) {
					'use strict';

					Object.defineProperty(exports, "__esModule", {
						value: true
					});
					exports.getUsefulContents = getUsefulContents;
					function getUsefulContents() {
						alert('getUsefulContents');
					};
				});
				//# sourceMappingURL=all.js.map
			});
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
			})(undefined, function (exports) {
				'use strict';

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.getUsefulContents = getUsefulContents;
				function getUsefulContents() {
					alert('getUsefulContents');
				};
			});
			//# sourceMappingURL=all.js.map
		});
		(function (global, factory) {
			if (typeof define === "function" && define.amd) {
				define(['exports', '../core/Router', '../controllers/template1', '../controllers/template2'], factory);
			} else if (typeof exports !== "undefined") {
				factory(exports);
			} else {
				var mod = {
					exports: {}
				};
				factory(mod.exports, global.Router, global.template1, global.template2);
				global.index = mod.exports;
			}
		})(undefined, function (exports, _Router, _template, _template2) {
			'use strict';

			Object.defineProperty(exports, "__esModule", {
				value: true
			});
			exports.router = undefined;

			var routes = {
				'template1': {
					template: 'app/templates/template1.html',
					controller: _template.template1Controller
				},
				'template2': {
					template: 'app/templates/template2.html',
					controller: _template2.template2Controller
				}
			};
			var router = new _Router.Router(routes);

			exports.router = router;
		});
		//# sourceMappingURL=all.js.map
	});
	(function (global, factory) {
		if (typeof define === "function" && define.amd) {
			define(['exports', '../core/Router', '../controllers/template1', '../controllers/template2'], factory);
		} else if (typeof exports !== "undefined") {
			factory(exports);
		} else {
			var mod = {
				exports: {}
			};
			factory(mod.exports, global.Router, global.template1, global.template2);
			global.index = mod.exports;
		}
	})(undefined, function (exports, _Router, _template, _template2) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.router = undefined;

		var routes = {
			'template1': {
				template: 'app/templates/template1.html',
				controller: _template.template1Controller
			},
			'template2': {
				template: 'app/templates/template2.html',
				controller: _template2.template2Controller
			}
		};
		var router = new _Router.Router(routes);

		exports.router = router;
	});
	//# sourceMappingURL=all.js.map
});
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
})(this, function (exports, _Router, _template, _template2) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.router = undefined;


	var routes = {
		'template1': {
			template: 'app/templates/template1.html',
			controller: _template.template1Controller
		},
		'template2': {
			template: 'app/templates/template2.html',
			controller: _template2.template2Controller
		}
	};
	var router = new _Router.Router(routes);

	exports.router = router;
});
//# sourceMappingURL=all.js.map
