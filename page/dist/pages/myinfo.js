'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _panel = require('./../components/panel.js');

var _panel2 = _interopRequireDefault(_panel);

var _wepyList = require('./../components/wepy-list.js');

var _wepyList2 = _interopRequireDefault(_wepyList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // alias example


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
      navigationBarTitleText: '狗子账单'
    }, _this.$repeat = {}, _this.$props = { "list": { "xmlns:v-bind": "", "v-bind:list.once": "list" } }, _this.$events = {}, _this.components = {
      panel: _panel2.default,
      list: _wepyList2.default
    }, _this.data = {
      mynum: 20,
      userInfo: {
        nickName: '加载中...'
      },
      normalTitle: '首页',
      setTimeoutTitle: '我的',
      count: 0,
      netrst: '',
      numlist: [],
      list: [{
        id: '叶',
        title: '收支分类'
      }, {
        id: '星',
        title: '联系我们'
      }, {
        id: '联',
        title: '意见反馈'
      }],
      loadingShow: false
    }, _this.computed = {
      now: function now() {
        return +new Date();
      }
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Myinfo, [{
    key: 'onShow',
    value: function onShow() {
      var _this2 = this;

      this.userInfo = this.$parent.globalData.userInfo;
      wx.request({
        url: this.$parent.globalData.requestDomain + '/bills/currentYear', //仅为示例，并非真实的接口地址
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function success(res) {
          _this2.numlist = res.data.data;
          _this2.$apply();
        }
      });
    }
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(res) {
      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target, this.$parent.globalData.userInfo);
      }
      return {
        title: '生活从点滴开始~~',
        path: '/page/user?id=111'
      };
    }
  }]);

  return Myinfo;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Myinfo , 'pages/myinfo'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15aW5mby5qcyJdLCJuYW1lcyI6WyJNeWluZm8iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwicGFuZWwiLCJQYW5lbCIsImxpc3QiLCJMaXN0IiwiZGF0YSIsIm15bnVtIiwidXNlckluZm8iLCJuaWNrTmFtZSIsIm5vcm1hbFRpdGxlIiwic2V0VGltZW91dFRpdGxlIiwiY291bnQiLCJuZXRyc3QiLCJudW1saXN0IiwiaWQiLCJ0aXRsZSIsImxvYWRpbmdTaG93IiwiY29tcHV0ZWQiLCJub3ciLCJEYXRlIiwibWV0aG9kcyIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwid3giLCJyZXF1ZXN0IiwidXJsIiwicmVxdWVzdERvbWFpbiIsImhlYWRlciIsInN1Y2Nlc3MiLCJyZXMiLCIkYXBwbHkiLCJmcm9tIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInBhdGgiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7OytlQUR1Qzs7O0FBQ0c7O0lBRXJCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxRQUFPLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsb0JBQW1CLE1BQXRDLEVBQVIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDWEMsYUFBT0MsZUFESTtBQUVYQyxZQUFNQztBQUZLLEssUUFLVkMsSSxHQUFPO0FBQ0xDLGFBQU8sRUFERjtBQUVMQyxnQkFBVTtBQUNSQyxrQkFBVTtBQURGLE9BRkw7QUFLTEMsbUJBQWEsSUFMUjtBQU1MQyx1QkFBaUIsSUFOWjtBQU9MQyxhQUFPLENBUEY7QUFRUkMsY0FBUSxFQVJBO0FBU1JDLGVBQVEsRUFUQTtBQVVSVixZQUFNLENBQ0Q7QUFDRVcsWUFBSSxHQUROO0FBRUVDLGVBQU87QUFGVCxPQURDLEVBS1A7QUFDUUQsWUFBSSxHQURaO0FBRVFDLGVBQU87QUFGZixPQUxPLEVBU1A7QUFDUUQsWUFBSSxHQURaO0FBRVFDLGVBQU87QUFGZixPQVRPLENBVkU7QUF3QlJDLG1CQUFZO0FBeEJKLEssUUEyQlBDLFEsR0FBVztBQUNUQyxTQURTLGlCQUNGO0FBQ0wsZUFBTyxDQUFDLElBQUlDLElBQUosRUFBUjtBQUNEO0FBSFEsSyxRQU1YQyxPLEdBQVUsRTs7Ozs7NkJBR0Q7QUFBQTs7QUFDVixXQUFLYixRQUFMLEdBQWdCLEtBQUtjLE9BQUwsQ0FBYUMsVUFBYixDQUF3QmYsUUFBeEM7QUFDQWdCLFNBQUdDLE9BQUgsQ0FBVztBQUNWQyxhQUFLLEtBQUtKLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkksYUFBeEIsR0FBc0Msb0JBRGpDLEVBQ3VEO0FBQ2pFQyxnQkFBUTtBQUNQLDBCQUFnQixrQkFEVCxDQUM0QjtBQUQ1QixTQUZFO0FBS1ZDLGlCQUFTLGlCQUFDQyxHQUFELEVBQVM7QUFDakIsaUJBQUtoQixPQUFMLEdBQWVnQixJQUFJeEIsSUFBSixDQUFTQSxJQUF4QjtBQUNBLGlCQUFLeUIsTUFBTDtBQUNBO0FBUlMsT0FBWDtBQVVBOzs7c0NBQ2dCRCxHLEVBQUs7QUFDaEIsVUFBSUEsSUFBSUUsSUFBSixLQUFhLFFBQWpCLEVBQTJCO0FBQ3ZCO0FBQ0FDLGdCQUFRQyxHQUFSLENBQVlKLElBQUlLLE1BQWhCLEVBQXVCLEtBQUtiLE9BQUwsQ0FBYUMsVUFBYixDQUF3QmYsUUFBL0M7QUFDSDtBQUNELGFBQU87QUFDSFEsZUFBTyxXQURKO0FBRUhvQixjQUFNO0FBRkgsT0FBUDtBQUlOOzs7O0VBdEVvQ0MsZUFBS0MsSTs7a0JBQXBCM0MsTSIsImZpbGUiOiJteWluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IFBhbmVsIGZyb20gJ0AvY29tcG9uZW50cy9wYW5lbCcgLy8gYWxpYXMgZXhhbXBsZVxuICBpbXBvcnQgTGlzdCBmcm9tICdAL2NvbXBvbmVudHMvd2VweS1saXN0JyAvLyBhbGlhcyBleGFtcGxlXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlpbmZvIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn54uX5a2Q6LSm5Y2VJ1xuICAgIH1cbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wibGlzdFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bGlzdC5vbmNlXCI6XCJsaXN0XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcblx0ICBwYW5lbDogUGFuZWwsXG5cdCAgbGlzdDogTGlzdFxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBteW51bTogMjAsXG4gICAgICB1c2VySW5mbzoge1xuICAgICAgICBuaWNrTmFtZTogJ+WKoOi9veS4rS4uLidcbiAgICAgIH0sXG4gICAgICBub3JtYWxUaXRsZTogJ+mmlumhtScsXG4gICAgICBzZXRUaW1lb3V0VGl0bGU6ICfmiJHnmoQnLFxuICAgICAgY291bnQ6IDAsXG5cdCAgbmV0cnN0OiAnJyxcblx0ICBudW1saXN0OltdLFxuXHQgIGxpc3Q6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAn5Y+2JyxcbiAgICAgICAgICB0aXRsZTogJ+aUtuaUr+WIhuexuydcblx0XHR9LFxuXHRcdHtcbiAgICAgICAgICBpZDogJ+aYnycsXG4gICAgICAgICAgdGl0bGU6ICfogZTns7vmiJHku6wnXG5cdFx0fSxcblx0XHR7XG4gICAgICAgICAgaWQ6ICfogZQnLFxuICAgICAgICAgIHRpdGxlOiAn5oSP6KeB5Y+N6aaIJ1xuICAgICAgICB9XG5cdCAgXSxcblx0ICBsb2FkaW5nU2hvdzpmYWxzZSxcbiAgICB9XG5cbiAgICBjb21wdXRlZCA9IHtcbiAgICAgIG5vdyAoKSB7XG4gICAgICAgIHJldHVybiArbmV3IERhdGUoKVxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgIFxuICAgIH1cbiAgICBvblNob3coKSB7XG5cdFx0XHR0aGlzLnVzZXJJbmZvID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlckluZm9cblx0XHRcdHd4LnJlcXVlc3Qoe1xuXHRcdFx0XHR1cmw6IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnJlcXVlc3REb21haW4rJy9iaWxscy9jdXJyZW50WWVhcicsIC8v5LuF5Li656S65L6L77yM5bm26Z2e55yf5a6e55qE5o6l5Y+j5Zyw5Z2AXG5cdFx0XHRcdGhlYWRlcjoge1xuXHRcdFx0XHRcdCdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgLy8g6buY6K6k5YC8XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcblx0XHRcdFx0XHR0aGlzLm51bWxpc3QgPSByZXMuZGF0YS5kYXRhXG5cdFx0XHRcdFx0dGhpcy4kYXBwbHkoKVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH1cblx0b25TaGFyZUFwcE1lc3NhZ2UocmVzKSB7XG4gICAgICAgIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgICAgICAgIC8vIOadpeiHqumhtemdouWGhei9rOWPkeaMiemSrlxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLnRhcmdldCx0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VySW5mbylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGU6ICfnlJ/mtLvku47ngrnmu7TlvIDlp4t+ficsXG4gICAgICAgICAgICBwYXRoOiAnL3BhZ2UvdXNlcj9pZD0xMTEnXG4gICAgICAgIH1cblx0fVxuICB9XG4iXX0=