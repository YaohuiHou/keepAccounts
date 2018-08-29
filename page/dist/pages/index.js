'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _panel = require('./../components/panel.js');

var _panel2 = _interopRequireDefault(_panel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// alias example

var Myinfo = function (_wepy$page) {
  _inherits(Myinfo, _wepy$page);

  function Myinfo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Myinfo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Myinfo.__proto__ || Object.getPrototypeOf(Myinfo)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'test'
    }, _this.components = {
      panel: _panel2.default
    }, _this.data = {
      mynum: 20,
      userInfo: {
        nickName: '加载中...'
      },
      normalTitle: '首页',
      setTimeoutTitle: '我的',
      count: 0,
      netrst: ''
    }, _this.computed = {
      now: function now() {
        return +new Date();
      }
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Myinfo, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      this.$parent.getUserInfo(function (userInfo) {
        if (userInfo) {
          self.userInfo = userInfo;
        }
        self.normalTitle = '标题已被修改';

        self.setTimeoutTitle = '标题三秒后会被修改';
        setTimeout(function () {
          self.setTimeoutTitle = '到三秒了';
          self.$apply();
        }, 3000);

        self.$apply();
      });
    }
  }]);

  return Myinfo;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Myinfo , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk15aW5mbyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwicGFuZWwiLCJQYW5lbCIsImRhdGEiLCJteW51bSIsInVzZXJJbmZvIiwibmlja05hbWUiLCJub3JtYWxUaXRsZSIsInNldFRpbWVvdXRUaXRsZSIsImNvdW50IiwibmV0cnN0IiwiY29tcHV0ZWQiLCJub3ciLCJEYXRlIiwibWV0aG9kcyIsInNlbGYiLCIkcGFyZW50IiwiZ2V0VXNlckluZm8iLCJzZXRUaW1lb3V0IiwiJGFwcGx5Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUF1Qzs7SUFFbEJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYTtBQUNYQyxhQUFPQztBQURJLEssUUFJYkMsSSxHQUFPO0FBQ0xDLGFBQU8sRUFERjtBQUVMQyxnQkFBVTtBQUNSQyxrQkFBVTtBQURGLE9BRkw7QUFLTEMsbUJBQWEsSUFMUjtBQU1MQyx1QkFBaUIsSUFOWjtBQU9MQyxhQUFPLENBUEY7QUFRTEMsY0FBUTtBQVJILEssUUFXUEMsUSxHQUFXO0FBQ1RDLFNBRFMsaUJBQ0Y7QUFDTCxlQUFPLENBQUMsSUFBSUMsSUFBSixFQUFSO0FBQ0Q7QUFIUSxLLFFBTVhDLE8sR0FBVSxFOzs7Ozs2QkFJRDtBQUNQLFVBQUlDLE9BQU8sSUFBWDtBQUNBLFdBQUtDLE9BQUwsQ0FBYUMsV0FBYixDQUF5QixVQUFVWixRQUFWLEVBQW9CO0FBQzNDLFlBQUlBLFFBQUosRUFBYztBQUNaVSxlQUFLVixRQUFMLEdBQWdCQSxRQUFoQjtBQUNEO0FBQ0RVLGFBQUtSLFdBQUwsR0FBbUIsUUFBbkI7O0FBRUFRLGFBQUtQLGVBQUwsR0FBdUIsV0FBdkI7QUFDQVUsbUJBQVcsWUFBTTtBQUNmSCxlQUFLUCxlQUFMLEdBQXVCLE1BQXZCO0FBQ0FPLGVBQUtJLE1BQUw7QUFDRCxTQUhELEVBR0csSUFISDs7QUFLQUosYUFBS0ksTUFBTDtBQUNELE9BYkQ7QUFjRDs7OztFQTdDaUNDLGVBQUtDLEk7O2tCQUFwQnhCLE0iLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IFBhbmVsIGZyb20gJ0AvY29tcG9uZW50cy9wYW5lbCcgLy8gYWxpYXMgZXhhbXBsZVxuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE15aW5mbyBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ3Rlc3QnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgICBwYW5lbDogUGFuZWxcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgbXludW06IDIwLFxuICAgICAgdXNlckluZm86IHtcbiAgICAgICAgbmlja05hbWU6ICfliqDovb3kuK0uLi4nXG4gICAgICB9LFxuICAgICAgbm9ybWFsVGl0bGU6ICfpppbpobUnLFxuICAgICAgc2V0VGltZW91dFRpdGxlOiAn5oiR55qEJyxcbiAgICAgIGNvdW50OiAwLFxuICAgICAgbmV0cnN0OiAnJyxcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIG5vdyAoKSB7XG4gICAgICAgIHJldHVybiArbmV3IERhdGUoKVxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgIFxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgdGhpcy4kcGFyZW50LmdldFVzZXJJbmZvKGZ1bmN0aW9uICh1c2VySW5mbykge1xuICAgICAgICBpZiAodXNlckluZm8pIHtcbiAgICAgICAgICBzZWxmLnVzZXJJbmZvID0gdXNlckluZm9cbiAgICAgICAgfVxuICAgICAgICBzZWxmLm5vcm1hbFRpdGxlID0gJ+agh+mimOW3suiiq+S/ruaUuSdcblxuICAgICAgICBzZWxmLnNldFRpbWVvdXRUaXRsZSA9ICfmoIfpopjkuInnp5LlkI7kvJrooqvkv67mlLknXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNlbGYuc2V0VGltZW91dFRpdGxlID0gJ+WIsOS4ieenkuS6hidcbiAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgIH0sIDMwMDApXG5cbiAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==