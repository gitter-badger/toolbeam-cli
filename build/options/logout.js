'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _clui = require('clui');

var _userActions = require('../actions/user-actions');

var userActions = _interopRequireWildcard(_userActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logoutMessage = 'You are logged out of Toolbeam.';

exports.default = function () {
	var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(store) {
		var spinner;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:

						store.dispatch(userActions.load());

						if (userActions.isLoggedIn(store.getState())) {
							_context.next = 4;
							break;
						}

						console.log(_chalk2.default.cyan(logoutMessage));
						return _context.abrupt('return');

					case 4:
						spinner = new _clui.Spinner('Logging out of Toolbeam…');

						spinner.start();

						_context.prev = 6;
						_context.next = 9;
						return store.dispatch(userActions.logout());

					case 9:
						_context.next = 16;
						break;

					case 11:
						_context.prev = 11;
						_context.t0 = _context['catch'](6);

						spinner.stop();
						console.log(_chalk2.default.red('Logout failed: ' + _context.t0.message));
						return _context.abrupt('return');

					case 16:

						spinner.stop();
						console.log(_chalk2.default.cyan(logoutMessage));

					case 18:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this, [[6, 11]]);
	}));

	return function (_x) {
		return _ref.apply(this, arguments);
	};
}();
//# sourceMappingURL=logout.js.map