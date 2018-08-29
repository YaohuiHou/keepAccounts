'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _d3TimeFormat = require('./../npm/d3-time-format/build/d3-time-format.js');

var d3TimeFormat = _interopRequireWildcard(_d3TimeFormat);

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _addexample = require('./../components/addexample.js');

var _addexample2 = _interopRequireDefault(_addexample);

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
            navigationBarTitleText: '记一笔'
        }, _this.$repeat = {}, _this.$props = { "outmoney": { "xmlns:v-bind": "", "v-bind:classification.sync": "outclassification", "v-bind:currenttime.sync": "currenttime", "v-bind:money.once": "money" }, "inmoney": { "v-bind:classification.sync": "inclassification", "v-bind:currenttime.sync": "currenttime" } }, _this.$events = {}, _this.components = {
            outmoney: _addexample2.default,
            inmoney: _addexample2.default
        }, _this.data = {
            selected: true,
            selected1: false,
            outclassification: [],
            inclassification: [],
            currenttime: null,
            money: 0
        }, _this.methods = {
            selected: function selected(e) {
                this.selected1 = false, this.selected = true;
            },
            selected1: function selected1(e) {
                this.selected = false, this.selected1 = true;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Myinfo, [{
        key: 'onLoad',
        value: function onLoad() {
            var _this2 = this;

            var time = d3TimeFormat.timeFormat('%Y-%m-%d');
            this.currenttime = time(new Date());
            wx.request({
                url: this.$parent.globalData.requestDomain + '/bills/listSort', //仅为示例，并非真实的接口地址
                header: {
                    'content-type': 'application/json' // 默认值
                },
                success: function success(res) {
                    res.data.data.forEach(function (ele) {
                        if (ele.type == "1") {
                            _this2.inclassification.unshift(ele);
                        } else {
                            _this2.outclassification.unshift(ele);
                        }
                    });
                    _this2.$apply();
                }
            });
        }
    }]);

    return Myinfo;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Myinfo , 'pages/addbill'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZGJpbGwuanMiXSwibmFtZXMiOlsiZDNUaW1lRm9ybWF0IiwiTXlpbmZvIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm91dG1vbmV5IiwiQWRkZXhhbXBsZSIsImlubW9uZXkiLCJkYXRhIiwic2VsZWN0ZWQiLCJzZWxlY3RlZDEiLCJvdXRjbGFzc2lmaWNhdGlvbiIsImluY2xhc3NpZmljYXRpb24iLCJjdXJyZW50dGltZSIsIm1vbmV5IiwibWV0aG9kcyIsImUiLCJ0aW1lIiwidGltZUZvcm1hdCIsIkRhdGUiLCJ3eCIsInJlcXVlc3QiLCJ1cmwiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInJlcXVlc3REb21haW4iLCJoZWFkZXIiLCJzdWNjZXNzIiwicmVzIiwiZm9yRWFjaCIsImVsZSIsInR5cGUiLCJ1bnNoaWZ0IiwiJGFwcGx5Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOztJQUFZQSxZOztBQUNaOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQyxNOzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLE0sR0FBUztBQUNQQyxvQ0FBd0I7QUFEakIsUyxRQUdWQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxZQUFXLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsOEJBQTZCLG1CQUFoRCxFQUFvRSwyQkFBMEIsYUFBOUYsRUFBNEcscUJBQW9CLE9BQWhJLEVBQVosRUFBcUosV0FBVSxFQUFDLDhCQUE2QixrQkFBOUIsRUFBaUQsMkJBQTBCLGFBQTNFLEVBQS9KLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ05DLHNCQUFVQyxvQkFESjtBQUVOQyxxQkFBU0Q7QUFGSCxTLFFBSVZFLEksR0FBTztBQUNIQyxzQkFBUyxJQUROO0FBRUhDLHVCQUFVLEtBRlA7QUFHSEMsK0JBQWtCLEVBSGY7QUFJSEMsOEJBQWlCLEVBSmQ7QUFLSEMseUJBQVksSUFMVDtBQU1IQyxtQkFBTTtBQU5ILFMsUUFRUEMsTyxHQUFVO0FBQ05OLG9CQURNLG9CQUNHTyxDQURILEVBQ0s7QUFDUCxxQkFBS04sU0FBTCxHQUFlLEtBQWYsRUFDQSxLQUFLRCxRQUFMLEdBQWMsSUFEZDtBQUVILGFBSks7QUFLTkMscUJBTE0scUJBS0lNLENBTEosRUFLTTtBQUNSLHFCQUFLUCxRQUFMLEdBQWMsS0FBZCxFQUNBLEtBQUtDLFNBQUwsR0FBZSxJQURmO0FBRUg7QUFSSyxTOzs7OztpQ0FXRDtBQUFBOztBQUNMLGdCQUFJTyxPQUFPcEIsYUFBYXFCLFVBQWIsQ0FBd0IsVUFBeEIsQ0FBWDtBQUNBLGlCQUFLTCxXQUFMLEdBQW1CSSxLQUFLLElBQUlFLElBQUosRUFBTCxDQUFuQjtBQUNBQyxlQUFHQyxPQUFILENBQVc7QUFDaEJDLHFCQUFLLEtBQUtDLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkMsYUFBeEIsR0FBc0MsaUJBRDNCLEVBQzhDO0FBQzlEQyx3QkFBUTtBQUNQLG9DQUFnQixrQkFEVCxDQUM0QjtBQUQ1QixpQkFGUTtBQUtoQkMseUJBQVMsaUJBQUNDLEdBQUQsRUFBUztBQUNMQSx3QkFBSXBCLElBQUosQ0FBU0EsSUFBVCxDQUFjcUIsT0FBZCxDQUFzQixlQUFPO0FBQ3pCLDRCQUFHQyxJQUFJQyxJQUFKLElBQVksR0FBZixFQUFtQjtBQUNmLG1DQUFLbkIsZ0JBQUwsQ0FBc0JvQixPQUF0QixDQUE4QkYsR0FBOUI7QUFDSCx5QkFGRCxNQUVLO0FBQ0QsbUNBQUtuQixpQkFBTCxDQUF1QnFCLE9BQXZCLENBQStCRixHQUEvQjtBQUNIO0FBQ0oscUJBTkQ7QUFPWiwyQkFBS0csTUFBTDtBQUNBO0FBZGUsYUFBWDtBQWdCSDs7OztFQWpEaUNDLGVBQUtDLEk7O2tCQUFwQnJDLE0iLCJmaWxlIjoiYWRkYmlsbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgKiBhcyBkM1RpbWVGb3JtYXQgZnJvbSAnZDMtdGltZS1mb3JtYXQnXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBBZGRleGFtcGxlIGZyb20gJ0AvY29tcG9uZW50cy9hZGRleGFtcGxlJyBcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNeWluZm8gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICforrDkuIDnrJQnXG4gICAgfVxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJvdXRtb25leVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6Y2xhc3NpZmljYXRpb24uc3luY1wiOlwib3V0Y2xhc3NpZmljYXRpb25cIixcInYtYmluZDpjdXJyZW50dGltZS5zeW5jXCI6XCJjdXJyZW50dGltZVwiLFwidi1iaW5kOm1vbmV5Lm9uY2VcIjpcIm1vbmV5XCJ9LFwiaW5tb25leVwiOntcInYtYmluZDpjbGFzc2lmaWNhdGlvbi5zeW5jXCI6XCJpbmNsYXNzaWZpY2F0aW9uXCIsXCJ2LWJpbmQ6Y3VycmVudHRpbWUuc3luY1wiOlwiY3VycmVudHRpbWVcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgICAgICBvdXRtb25leTogQWRkZXhhbXBsZSxcbiAgICAgICAgaW5tb25leTogQWRkZXhhbXBsZVxuICAgIH07XG4gICAgZGF0YSA9IHtcbiAgICAgICAgc2VsZWN0ZWQ6dHJ1ZSxcbiAgICAgICAgc2VsZWN0ZWQxOmZhbHNlLFxuICAgICAgICBvdXRjbGFzc2lmaWNhdGlvbjpbXSxcbiAgICAgICAgaW5jbGFzc2lmaWNhdGlvbjpbXSxcbiAgICAgICAgY3VycmVudHRpbWU6bnVsbCxcbiAgICAgICAgbW9uZXk6MFxuICAgIH1cbiAgICBtZXRob2RzID0ge1xuICAgICAgICBzZWxlY3RlZChlKXtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQxPWZhbHNlLFxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZD10cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHNlbGVjdGVkMShlKXtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQ9ZmFsc2UsXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkMT10cnVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHZhciB0aW1lID0gZDNUaW1lRm9ybWF0LnRpbWVGb3JtYXQoJyVZLSVtLSVkJylcbiAgICAgICAgdGhpcy5jdXJyZW50dGltZSA9IHRpbWUobmV3IERhdGUoKSlcbiAgICAgICAgd3gucmVxdWVzdCh7XG5cdFx0XHR1cmw6IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnJlcXVlc3REb21haW4rJy9iaWxscy9saXN0U29ydCcsIC8v5LuF5Li656S65L6L77yM5bm26Z2e55yf5a6e55qE5o6l5Y+j5Zyw5Z2AXG5cdFx0XHRoZWFkZXI6IHtcblx0XHRcdFx0J2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyAvLyDpu5jorqTlgLxcblx0XHRcdH0sXG5cdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzLmRhdGEuZGF0YS5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGVsZS50eXBlID09IFwiMVwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5jbGFzc2lmaWNhdGlvbi51bnNoaWZ0KGVsZSlcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm91dGNsYXNzaWZpY2F0aW9uLnVuc2hpZnQoZWxlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cdFx0XHRcdHRoaXMuJGFwcGx5KClcblx0XHRcdH1cblx0XHR9KVxuICAgIH1cbiAgfVxuIl19