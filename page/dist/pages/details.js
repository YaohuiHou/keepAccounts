'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _d3TimeFormat = require('./../npm/d3-time-format/build/d3-time-format.js');

var d3TimeFormat = _interopRequireWildcard(_d3TimeFormat);

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _panel = require('./../components/panel.js');

var _panel2 = _interopRequireDefault(_panel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      navigationBarTitleText: '明细'
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
      netrst: '',
      currenttime: null,
      listContent: null,
      dateinfo: [],
      monthMoney: null
    }, _this.computed = {
      list: function list() {}
    }, _this.methods = {
      //本月消费总额
      monthMoneyInfo: function monthMoneyInfo(date) {
        wx.request({
          url: _this.$parent.globalData.requestDomain + '/bills/listBill', //仅为示例，并非真实的接口地址
          header: {
            'content-type': 'application/json' // 默认值
          },
          data: {
            datemonth: date[0] + '-' + date[1]
          },
          success: function success(res) {
            _this.listContent = res.data.data;
            _this.$apply();
          }
        });
      },
      //查看每月消费情况
      bindDateChange: function bindDateChange(e) {
        this.currenttime = e.detail.value.split("-");
        this.methods.monthMoneyInfo(this.currenttime);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Myinfo, [{
    key: 'onShow',
    value: function onShow() {
      var time = d3TimeFormat.timeFormat('%Y-%m-%d');
      this.currenttime = time(new Date()).split("-");
      this.methods.monthMoneyInfo(this.currenttime);
    }
  }]);

  return Myinfo;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Myinfo , 'pages/details'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMuanMiXSwibmFtZXMiOlsiZDNUaW1lRm9ybWF0IiwiTXlpbmZvIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJwYW5lbCIsIlBhbmVsIiwiZGF0YSIsIm15bnVtIiwidXNlckluZm8iLCJuaWNrTmFtZSIsIm5vcm1hbFRpdGxlIiwic2V0VGltZW91dFRpdGxlIiwiY291bnQiLCJuZXRyc3QiLCJjdXJyZW50dGltZSIsImxpc3RDb250ZW50IiwiZGF0ZWluZm8iLCJtb250aE1vbmV5IiwiY29tcHV0ZWQiLCJsaXN0IiwibWV0aG9kcyIsIm1vbnRoTW9uZXlJbmZvIiwiZGF0ZSIsInd4IiwicmVxdWVzdCIsInVybCIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwicmVxdWVzdERvbWFpbiIsImhlYWRlciIsImRhdGVtb250aCIsInN1Y2Nlc3MiLCJyZXMiLCIkYXBwbHkiLCJiaW5kRGF0ZUNoYW5nZSIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsInNwbGl0IiwidGltZSIsInRpbWVGb3JtYXQiLCJEYXRlIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVFOztJQUFZQSxZOztBQUNaOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQyxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWE7QUFDWEMsYUFBT0M7QUFESSxLLFFBSWJDLEksR0FBTztBQUNMQyxhQUFPLEVBREY7QUFFTEMsZ0JBQVU7QUFDUkMsa0JBQVU7QUFERixPQUZMO0FBS0xDLG1CQUFhLElBTFI7QUFNTEMsdUJBQWlCLElBTlo7QUFPTEMsYUFBTyxDQVBGO0FBUUxDLGNBQVEsRUFSSDtBQVNSQyxtQkFBWSxJQVRKO0FBVVJDLG1CQUFZLElBVko7QUFXUkMsZ0JBQVMsRUFYRDtBQVlSQyxrQkFBVztBQVpILEssUUFlUEMsUSxHQUFXO0FBQ1RDLFVBRFMsa0JBQ0gsQ0FFUjtBQUhXLEssUUFNWEMsTyxHQUFVO0FBQ1o7QUFDSUMsc0JBQWUsd0JBQUNDLElBQUQsRUFBUTtBQUNyQkMsV0FBR0MsT0FBSCxDQUFXO0FBQ1RDLGVBQUssTUFBS0MsT0FBTCxDQUFhQyxVQUFiLENBQXdCQyxhQUF4QixHQUFzQyxpQkFEbEMsRUFDcUQ7QUFDOURDLGtCQUFRO0FBQ04sNEJBQWdCLGtCQURWLENBQzZCO0FBRDdCLFdBRkM7QUFLVHZCLGdCQUFLO0FBQ0h3Qix1QkFBVVIsS0FBSyxDQUFMLElBQVEsR0FBUixHQUFZQSxLQUFLLENBQUw7QUFEbkIsV0FMSTtBQVFUUyxtQkFBUyxpQkFBQ0MsR0FBRCxFQUFTO0FBQ2hCLGtCQUFLakIsV0FBTCxHQUFvQmlCLElBQUkxQixJQUFKLENBQVNBLElBQTdCO0FBQ0Esa0JBQUsyQixNQUFMO0FBQ0Q7QUFYUSxTQUFYO0FBY0QsT0FqQk87QUFrQlo7QUFDS0Msb0JBbkJPLDBCQW1CUUMsQ0FuQlIsRUFtQlc7QUFDZixhQUFLckIsV0FBTCxHQUFtQnFCLEVBQUVDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlQyxLQUFmLENBQXFCLEdBQXJCLENBQW5CO0FBQ0EsYUFBS2xCLE9BQUwsQ0FBYUMsY0FBYixDQUE0QixLQUFLUCxXQUFqQztBQUNIO0FBdEJPLEs7Ozs7OzZCQXlCQTtBQUNOLFVBQUl5QixPQUFPeEMsYUFBYXlDLFVBQWIsQ0FBd0IsVUFBeEIsQ0FBWDtBQUNBLFdBQUsxQixXQUFMLEdBQW1CeUIsS0FBSyxJQUFJRSxJQUFKLEVBQUwsRUFBaUJILEtBQWpCLENBQXVCLEdBQXZCLENBQW5CO0FBQ0EsV0FBS2xCLE9BQUwsQ0FBYUMsY0FBYixDQUE0QixLQUFLUCxXQUFqQztBQUNIOzs7O0VBMURpQzRCLGVBQUtDLEk7O2tCQUFwQjNDLE0iLCJmaWxlIjoiZGV0YWlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gIGltcG9ydCAqIGFzIGQzVGltZUZvcm1hdCBmcm9tICdkMy10aW1lLWZvcm1hdCdcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IFBhbmVsIGZyb20gJ0AvY29tcG9uZW50cy9wYW5lbCcgXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlpbmZvIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5piO57uGJ1xuICAgIH1cbiAgICBjb21wb25lbnRzID0ge1xuICAgICAgcGFuZWw6IFBhbmVsXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIG15bnVtOiAyMCxcbiAgICAgIHVzZXJJbmZvOiB7XG4gICAgICAgIG5pY2tOYW1lOiAn5Yqg6L295LitLi4uJ1xuICAgICAgfSxcbiAgICAgIG5vcm1hbFRpdGxlOiAn6aaW6aG1JyxcbiAgICAgIHNldFRpbWVvdXRUaXRsZTogJ+aIkeeahCcsXG4gICAgICBjb3VudDogMCxcbiAgICAgIG5ldHJzdDogJycsXG5cdCAgY3VycmVudHRpbWU6bnVsbCxcblx0ICBsaXN0Q29udGVudDpudWxsLFxuXHQgIGRhdGVpbmZvOltdLFxuXHQgIG1vbnRoTW9uZXk6bnVsbFxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgbGlzdCgpe1xuXHRcdCAgXG5cdCAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG5cdFx0Ly/mnKzmnIjmtojotLnmgLvpop1cbiAgICAgIG1vbnRoTW9uZXlJbmZvOihkYXRlKT0+e1xuICAgICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnJlcXVlc3REb21haW4rJy9iaWxscy9saXN0QmlsbCcsIC8v5LuF5Li656S65L6L77yM5bm26Z2e55yf5a6e55qE5o6l5Y+j5Zyw5Z2AXG4gICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIC8vIOm7mOiupOWAvFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGF0YTp7XG4gICAgICAgICAgICBkYXRlbW9udGg6ZGF0ZVswXSsnLScrZGF0ZVsxXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5saXN0Q29udGVudCA9ICByZXMuZGF0YS5kYXRhXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgIH0sXG5cdFx0Ly/mn6XnnIvmr4/mnIjmtojotLnmg4XlhrVcbiAgICAgICBiaW5kRGF0ZUNoYW5nZShlKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50dGltZSA9IGUuZGV0YWlsLnZhbHVlLnNwbGl0KFwiLVwiKVx0XG4gICAgICAgICAgdGhpcy5tZXRob2RzLm1vbnRoTW9uZXlJbmZvKHRoaXMuY3VycmVudHRpbWUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgIG9uU2hvdygpIHtcbiAgICAgICAgdmFyIHRpbWUgPSBkM1RpbWVGb3JtYXQudGltZUZvcm1hdCgnJVktJW0tJWQnKVxuICAgICAgICB0aGlzLmN1cnJlbnR0aW1lID0gdGltZShuZXcgRGF0ZSgpKS5zcGxpdChcIi1cIilcbiAgICAgICAgdGhpcy5tZXRob2RzLm1vbnRoTW9uZXlJbmZvKHRoaXMuY3VycmVudHRpbWUpXG4gICAgfVxuICB9XG4iXX0=