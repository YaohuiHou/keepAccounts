'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListAnother = function (_wepy$component) {
  _inherits(ListAnother, _wepy$component);

  function ListAnother() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ListAnother);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ListAnother.__proto__ || Object.getPrototypeOf(ListAnother)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ListAnother, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return ListAnother;
}(_wepy2.default.component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.data = {};
  this.props = {
    list: {
      type: Array,
      default: null
    }
  };
  this.events = {
    'index-broadcast': function indexBroadcast() {
      var _ref2;

      var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
      console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.name);
    }
  };
  this.methods = {
    tap: function tap() {
      wx.showModal({
        title: '提示',
        content: '暂未开通此功能',
        showCancel: false,
        confirmText: '我知道了',
        confirmColor: '#3ebba3'
      });
    }
  };
};

exports.default = ListAnother;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlcHktbGlzdC5qcyJdLCJuYW1lcyI6WyJMaXN0QW5vdGhlciIsIndlcHkiLCJjb21wb25lbnQiLCJkYXRhIiwicHJvcHMiLCJsaXN0IiwidHlwZSIsIkFycmF5IiwiZGVmYXVsdCIsImV2ZW50cyIsIiRldmVudCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCIkbmFtZSIsIm5hbWUiLCJzb3VyY2UiLCJtZXRob2RzIiwidGFwIiwid3giLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwiY29uZmlybVRleHQiLCJjb25maXJtQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBNEJULENBQ1Q7Ozs7RUE3QnNDQyxlQUFLQyxTOzs7OztPQUM1Q0MsSSxHQUFPLEU7T0FFUEMsSyxHQUFRO0FBQ05DLFVBQUs7QUFDSEMsWUFBS0MsS0FERjtBQUVIQyxlQUFRO0FBRkw7QUFEQyxHO09BT1JDLE0sR0FBUztBQUNQLHVCQUFtQiwwQkFBYTtBQUFBOztBQUM5QixVQUFJQyxrQkFBYyxVQUFLQyxNQUFMLEdBQWMsQ0FBNUIsMkRBQUo7QUFDQUMsY0FBUUMsR0FBUixDQUFlLE9BQUtDLEtBQXBCLGlCQUFxQ0osT0FBT0ssSUFBNUMsY0FBeURMLE9BQU9NLE1BQVAsQ0FBY0QsSUFBdkU7QUFDRDtBQUpNLEc7T0FNVEUsTyxHQUFVO0FBQ1JDLE9BRFEsaUJBQ0Q7QUFDTEMsU0FBR0MsU0FBSCxDQUFhO0FBQ1RDLGVBQU8sSUFERTtBQUVUQyxpQkFBUyxTQUZBO0FBR1RDLG9CQUFXLEtBSEY7QUFJVEMscUJBQVksTUFKSDtBQUtUQyxzQkFBYTtBQUxKLE9BQWI7QUFPRDtBQVRPLEc7OztrQkFoQlN6QixXIiwiZmlsZSI6IndlcHktbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RBbm90aGVyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIGRhdGEgPSB7XG4gICAgfVxuICAgIHByb3BzID0ge1xuICAgICAgbGlzdDp7XG4gICAgICAgIHR5cGU6QXJyYXksXG4gICAgICAgIGRlZmF1bHQ6bnVsbFxuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcbiAgICAgICdpbmRleC1icm9hZGNhc3QnOiAoLi4uYXJncykgPT4ge1xuICAgICAgICBsZXQgJGV2ZW50ID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuJG5hbWV9IHJlY2VpdmUgJHskZXZlbnQubmFtZX0gZnJvbSAkeyRldmVudC5zb3VyY2UubmFtZX1gKVxuICAgICAgfVxuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgdGFwICgpIHtcbiAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfmmoLmnKrlvIDpgJrmraTlip/og70nLFxuICAgICAgICAgICAgc2hvd0NhbmNlbDpmYWxzZSxcbiAgICAgICAgICAgIGNvbmZpcm1UZXh0OifmiJHnn6XpgZPkuoYnLFxuICAgICAgICAgICAgY29uZmlybUNvbG9yOicjM2ViYmEzJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZCAoKSB7XG4gICAgfVxuICB9XG4iXX0=