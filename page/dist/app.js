'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      pages: ['pages/details', 'pages/addbill', 'pages/myinfo'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#3ebba3',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
      },
      tabBar: {
        color: "#333",
        selectedColor: "#18bc9c",
        list: [{
          pagePath: "pages/details",
          text: "明细",
          iconPath: "./img/item.png",
          selectedIconPath: './img/item1.png'
        }, {
          pagePath: "pages/addbill",
          text: "记一笔",
          iconPath: "./img/add.png",
          selectedIconPath: './img/add1.png'
        }, {
          pagePath: "pages/myinfo",
          text: "我的",
          iconPath: "./img/smile.png",
          selectedIconPath: './img/smile1.png'
        }]
      }
    }, _this.globalData = {
      userInfo: null,
      requestDomain: 'http://127.0.0.1:3000'
    }, _this.onLaunch = function () {
      wx.login({
        success: function success(res) {
          if (res.code) {
            //发起网络请求
            wx.request({
              url: 'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code',
              data: {
                code: res.code
              }
            });
          } else {
            console.log('登录失败！' + res.errMsg);
          }
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_default, [{
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJjb2xvciIsInNlbGVjdGVkQ29sb3IiLCJsaXN0IiwicGFnZVBhdGgiLCJ0ZXh0IiwiaWNvblBhdGgiLCJzZWxlY3RlZEljb25QYXRoIiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwicmVxdWVzdERvbWFpbiIsIm9uTGF1bmNoIiwid3giLCJsb2dpbiIsInN1Y2Nlc3MiLCJyZXMiLCJjb2RlIiwicmVxdWVzdCIsInVybCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZXJyTXNnIiwiY2IiLCJ0aGF0Iiwid2VweSIsImdldFVzZXJJbmZvIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MExBSUVBLE0sR0FBUztBQUNQQyxhQUFPLENBQ0wsZUFESyxFQUVMLGVBRkssRUFJTCxjQUpLLENBREE7QUFPUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsU0FGeEI7QUFHTkMsZ0NBQXdCLFFBSGxCO0FBSU5DLGdDQUF3QjtBQUpsQixPQVBEO0FBYVBDLGNBQVE7QUFDSkMsZUFBTyxNQURIO0FBRUpDLHVCQUFlLFNBRlg7QUFHSkMsY0FBTSxDQUFDO0FBQ0hDLG9CQUFVLGVBRFA7QUFFSEMsZ0JBQU0sSUFGSDtBQUdIQyxvQkFBUyxnQkFITjtBQUlIQyw0QkFBaUI7QUFKZCxTQUFELEVBTU47QUFDSUgsb0JBQVUsZUFEZDtBQUVJQyxnQkFBTSxLQUZWO0FBR0lDLG9CQUFTLGVBSGI7QUFJSUMsNEJBQWlCO0FBSnJCLFNBTk0sRUFXSDtBQUNDSCxvQkFBVSxjQURYO0FBRUNDLGdCQUFNLElBRlA7QUFHQ0Msb0JBQVMsaUJBSFY7QUFJQ0MsNEJBQWlCO0FBSmxCLFNBWEc7QUFIRjtBQWJELEssUUFvQ1RDLFUsR0FBYTtBQUNYQyxnQkFBVSxJQURDO0FBRVhDLHFCQUFjO0FBRkgsSyxRQWlCYkMsUSxHQUFXLFlBQVc7QUFDcEJDLFNBQUdDLEtBQUgsQ0FBUztBQUNQQyxpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCLGNBQUlBLElBQUlDLElBQVIsRUFBYztBQUNaO0FBQ0FKLGVBQUdLLE9BQUgsQ0FBVztBQUNUQyxtQkFBSyxxSEFESTtBQUVUQyxvQkFBTTtBQUNKSCxzQkFBTUQsSUFBSUM7QUFETjtBQUZHLGFBQVg7QUFNRCxXQVJELE1BUU87QUFDTEksb0JBQVFDLEdBQVIsQ0FBWSxVQUFVTixJQUFJTyxNQUExQjtBQUNEO0FBQ0Y7QUFiTSxPQUFUO0FBZUQsSzs7Ozs7Z0NBNUJXQyxFLEVBQUk7QUFDZCxVQUFNQyxPQUFPLElBQWI7QUFDQSxVQUFJLEtBQUtoQixVQUFMLENBQWdCQyxRQUFwQixFQUE4QjtBQUM1QixlQUFPLEtBQUtELFVBQUwsQ0FBZ0JDLFFBQXZCO0FBQ0Q7QUFDRGdCLHFCQUFLQyxXQUFMLENBQWlCO0FBQ2ZaLGVBRGUsbUJBQ05DLEdBRE0sRUFDRDtBQUNaUyxlQUFLaEIsVUFBTCxDQUFnQkMsUUFBaEIsR0FBMkJNLElBQUlOLFFBQS9CO0FBQ0FjLGdCQUFNQSxHQUFHUixJQUFJTixRQUFQLENBQU47QUFDRDtBQUpjLE9BQWpCO0FBTUQ7Ozs7RUFyRDBCZ0IsZUFBS0UsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gIGNvbmZpZyA9IHtcbiAgICBwYWdlczogW1xuICAgICAgJ3BhZ2VzL2RldGFpbHMnLFxuICAgICAgJ3BhZ2VzL2FkZGJpbGwnLFxuICAgICAgXG4gICAgICAncGFnZXMvbXlpbmZvJ1xuICAgIF0sXG4gICAgd2luZG93OiB7XG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyMzZWJiYTMnLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1dlQ2hhdCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snXG4gICAgfSxcbiAgICB0YWJCYXI6IHtcbiAgICAgICAgY29sb3I6IFwiIzMzM1wiLFxuICAgICAgICBzZWxlY3RlZENvbG9yOiBcIiMxOGJjOWNcIixcbiAgICAgICAgbGlzdDogW3tcbiAgICAgICAgICAgIHBhZ2VQYXRoOiBcInBhZ2VzL2RldGFpbHNcIixcbiAgICAgICAgICAgIHRleHQ6IFwi5piO57uGXCIsXG4gICAgICAgICAgICBpY29uUGF0aDpcIi4vaW1nL2l0ZW0ucG5nXCIsXG4gICAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOicuL2ltZy9pdGVtMS5wbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhZ2VQYXRoOiBcInBhZ2VzL2FkZGJpbGxcIixcbiAgICAgICAgICAgIHRleHQ6IFwi6K6w5LiA56yUXCIsXG4gICAgICAgICAgICBpY29uUGF0aDpcIi4vaW1nL2FkZC5wbmdcIixcbiAgICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6Jy4vaW1nL2FkZDEucG5nJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBwYWdlUGF0aDogXCJwYWdlcy9teWluZm9cIixcbiAgICAgICAgICAgIHRleHQ6IFwi5oiR55qEXCIsXG4gICAgICAgICAgICBpY29uUGF0aDpcIi4vaW1nL3NtaWxlLnBuZ1wiLFxuICAgICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDonLi9pbWcvc21pbGUxLnBuZydcbiAgICAgICAgfV1cbiAgICB9XG4gIH1cblxuICBnbG9iYWxEYXRhID0ge1xuICAgIHVzZXJJbmZvOiBudWxsLFxuICAgIHJlcXVlc3REb21haW46J2h0dHA6Ly8xMjcuMC4wLjE6MzAwMCdcbiAgfVxuXG4gIGdldFVzZXJJbmZvKGNiKSB7XG4gICAgY29uc3QgdGhhdCA9IHRoaXNcbiAgICBpZiAodGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XG4gICAgICByZXR1cm4gdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvXG4gICAgfVxuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgICAgICBjYiAmJiBjYihyZXMudXNlckluZm8pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBvbkxhdW5jaCA9IGZ1bmN0aW9uKCkge1xuICAgIHd4LmxvZ2luKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBpZiAocmVzLmNvZGUpIHtcbiAgICAgICAgICAvL+WPkei1t+e9kee7nOivt+axglxuICAgICAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkud2VpeGluLnFxLmNvbS9zbnMvanNjb2RlMnNlc3Npb24/YXBwaWQ9QVBQSUQmc2VjcmV0PVNFQ1JFVCZqc19jb2RlPUpTQ09ERSZncmFudF90eXBlPWF1dGhvcml6YXRpb25fY29kZScsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIGNvZGU6IHJlcy5jb2RlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygn55m75b2V5aSx6LSl77yBJyArIHJlcy5lcnJNc2cpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19