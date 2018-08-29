'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _d3TimeFormat = require('./../npm/d3-time-format/build/d3-time-format.js');

var d3TimeFormat = _interopRequireWildcard(_d3TimeFormat);

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

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

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Myinfo.__proto__ || Object.getPrototypeOf(Myinfo)).call.apply(_ref, [this].concat(args))), _this), _this.data = {}, _this.props = {
            classification: {
                twoWay: true
            },
            currenttime: {},
            money: {},
            classify: {}
        }, _this.methods = {
            bindDateChange: function bindDateChange(e) {
                this.currenttime = e.detail.value;
                this.$emit('childFn', this.currenttime);
            },
            changebackground: function changebackground(index) {
                this.classification.forEach(function (e, i) {
                    if (i == index) {
                        e.selected = true;
                    } else {
                        e.selected = false;
                    }
                });
                this.classifyname = this.classification[index].name;
                this.classifyid = this.classification[index].id;
                this.classifytype = this.classification[index].type;
            },
            Input: function Input(e) {
                this.money = e.detail.value;
            },

            //添加数据库
            sure: function sure() {
                var time = d3TimeFormat.timeFormat('%Y-%m-%d');
                var id = 'DB-BILL-' + time(new Date());
                if (this.money == undefined || this.classifytype == undefined) {
                    wx.showModal({
                        title: '提示',
                        content: '请将信息填写完整',
                        showCancel: false,
                        confirmText: '我知道了',
                        confirmColor: '#3ebba3'
                    });
                } else {
                    wx.request({
                        url: this.$parent.$parent.globalData.requestDomain + '/bills/addBill', //仅为示例，并非真实的接口地址
                        data: {
                            hashid: this.classifyid,
                            user: this.$parent.$parent.globalData.userInfo,
                            money: this.money,
                            val: this.classifyname,
                            time: this.currenttime,
                            type: this.classifytype
                        },
                        header: {
                            'content-type': 'application/json' // 默认值
                        },
                        success: function success(res) {
                            wx.switchTab({
                                url: '/pages/details'
                            });
                        }
                    });
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Myinfo, [{
        key: 'onShow',
        value: function onShow() {

            console.log(this.$parent.$parent.globalData);
        }
    }]);

    return Myinfo;
}(_wepy2.default.page);

exports.default = Myinfo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZGV4YW1wbGUuanMiXSwibmFtZXMiOlsiZDNUaW1lRm9ybWF0IiwiTXlpbmZvIiwiZGF0YSIsInByb3BzIiwiY2xhc3NpZmljYXRpb24iLCJ0d29XYXkiLCJjdXJyZW50dGltZSIsIm1vbmV5IiwiY2xhc3NpZnkiLCJtZXRob2RzIiwiYmluZERhdGVDaGFuZ2UiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCIkZW1pdCIsImNoYW5nZWJhY2tncm91bmQiLCJpbmRleCIsImZvckVhY2giLCJpIiwic2VsZWN0ZWQiLCJjbGFzc2lmeW5hbWUiLCJuYW1lIiwiY2xhc3NpZnlpZCIsImlkIiwiY2xhc3NpZnl0eXBlIiwidHlwZSIsIklucHV0Iiwic3VyZSIsInRpbWUiLCJ0aW1lRm9ybWF0IiwiRGF0ZSIsInVuZGVmaW5lZCIsInd4Iiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsImNvbmZpcm1UZXh0IiwiY29uZmlybUNvbG9yIiwicmVxdWVzdCIsInVybCIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwicmVxdWVzdERvbWFpbiIsImhhc2hpZCIsInVzZXIiLCJ1c2VySW5mbyIsInZhbCIsImhlYWRlciIsInN1Y2Nlc3MiLCJyZXMiLCJzd2l0Y2hUYWIiLCJjb25zb2xlIiwibG9nIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOztJQUFZQSxZOztBQUNaOzs7Ozs7Ozs7Ozs7OztJQUVxQkMsTTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxJLEdBQU8sRSxRQUdQQyxLLEdBQVE7QUFDSkMsNEJBQWU7QUFDWEMsd0JBQU87QUFESSxhQURYO0FBSUpDLHlCQUFZLEVBSlI7QUFPSkMsbUJBQU0sRUFQRjtBQVFKQyxzQkFBUztBQVJMLFMsUUFVUkMsTyxHQUFVO0FBQ0xDLDBCQURLLDBCQUNVQyxDQURWLEVBQ2E7QUFDZixxQkFBS0wsV0FBTCxHQUFtQkssRUFBRUMsTUFBRixDQUFTQyxLQUE1QjtBQUNBLHFCQUFLQyxLQUFMLENBQVcsU0FBWCxFQUFzQixLQUFLUixXQUEzQjtBQUNILGFBSks7QUFLTlMsNEJBTE0sNEJBS1dDLEtBTFgsRUFLaUI7QUFDbkIscUJBQUtaLGNBQUwsQ0FBb0JhLE9BQXBCLENBQTRCLFVBQUNOLENBQUQsRUFBR08sQ0FBSCxFQUFTO0FBQ2pDLHdCQUFHQSxLQUFLRixLQUFSLEVBQWM7QUFDVEwsMEJBQUVRLFFBQUYsR0FBYSxJQUFiO0FBQ0oscUJBRkQsTUFFSztBQUNBUiwwQkFBRVEsUUFBRixHQUFhLEtBQWI7QUFDSjtBQUNKLGlCQU5EO0FBT0EscUJBQUtDLFlBQUwsR0FBb0IsS0FBS2hCLGNBQUwsQ0FBb0JZLEtBQXBCLEVBQTJCSyxJQUEvQztBQUNBLHFCQUFLQyxVQUFMLEdBQWtCLEtBQUtsQixjQUFMLENBQW9CWSxLQUFwQixFQUEyQk8sRUFBN0M7QUFDQSxxQkFBS0MsWUFBTCxHQUFvQixLQUFLcEIsY0FBTCxDQUFvQlksS0FBcEIsRUFBMkJTLElBQS9DO0FBQ0gsYUFoQks7QUFpQk5DLGlCQWpCTSxpQkFpQkFmLENBakJBLEVBaUJFO0FBQ0oscUJBQUtKLEtBQUwsR0FBYUksRUFBRUMsTUFBRixDQUFTQyxLQUF0QjtBQUNILGFBbkJLOztBQW9CTjtBQUNBYyxnQkFyQk0sa0JBcUJBO0FBQ0Ysb0JBQUlDLE9BQU81QixhQUFhNkIsVUFBYixDQUF3QixVQUF4QixDQUFYO0FBQ0Esb0JBQUlOLEtBQUssYUFBWUssS0FBSyxJQUFJRSxJQUFKLEVBQUwsQ0FBckI7QUFDQSxvQkFBRyxLQUFLdkIsS0FBTCxJQUFjd0IsU0FBZCxJQUF5QixLQUFLUCxZQUFMLElBQXFCTyxTQUFqRCxFQUEyRDtBQUN2REMsdUJBQUdDLFNBQUgsQ0FBYTtBQUNUQywrQkFBTyxJQURFO0FBRVRDLGlDQUFTLFVBRkE7QUFHVEMsb0NBQVcsS0FIRjtBQUlUQyxxQ0FBWSxNQUpIO0FBS1RDLHNDQUFhO0FBTEoscUJBQWI7QUFPSCxpQkFSRCxNQVFLO0FBQ0ROLHVCQUFHTyxPQUFILENBQVc7QUFDUEMsNkJBQUssS0FBS0MsT0FBTCxDQUFhQSxPQUFiLENBQXFCQyxVQUFyQixDQUFnQ0MsYUFBaEMsR0FBOEMsZ0JBRDVDLEVBQzhEO0FBQ3JFekMsOEJBQU07QUFDRjBDLG9DQUFRLEtBQUt0QixVQURYO0FBRUZ1QixrQ0FBTSxLQUFLSixPQUFMLENBQWFBLE9BQWIsQ0FBcUJDLFVBQXJCLENBQWdDSSxRQUZwQztBQUdGdkMsbUNBQU8sS0FBS0EsS0FIVjtBQUlGd0MsaUNBQUksS0FBSzNCLFlBSlA7QUFLRlEsa0NBQUssS0FBS3RCLFdBTFI7QUFNRm1CLGtDQUFLLEtBQUtEO0FBTlIseUJBRkM7QUFVUHdCLGdDQUFRO0FBQ0osNENBQWdCLGtCQURaLENBQytCO0FBRC9CLHlCQVZEO0FBYVBDLGlDQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDbkJsQiwrQkFBR21CLFNBQUgsQ0FBYTtBQUNUWCxxQ0FBSztBQURJLDZCQUFiO0FBR0g7QUFqQk0scUJBQVg7QUFtQkg7QUFDSjtBQXJESyxTOzs7OztpQ0F1REY7O0FBRUpZLG9CQUFRQyxHQUFSLENBQVksS0FBS1osT0FBTCxDQUFhQSxPQUFiLENBQXFCQyxVQUFqQztBQUNIOzs7O0VBeEVpQ1ksZUFBS0MsSTs7a0JBQXBCdEQsTSIsImZpbGUiOiJhZGRleGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCAqIGFzIGQzVGltZUZvcm1hdCBmcm9tICdkMy10aW1lLWZvcm1hdCdcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNeWluZm8gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGRhdGEgPSB7XG4gICAgICAgXG4gICAgfVxuICAgIHByb3BzID0ge1xuICAgICAgICBjbGFzc2lmaWNhdGlvbjp7XG4gICAgICAgICAgICB0d29XYXk6dHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBjdXJyZW50dGltZTp7XG4gICAgICAgICAgICBcbiAgICAgICAgfSxcbiAgICAgICAgbW9uZXk6e30sXG4gICAgICAgIGNsYXNzaWZ5Ont9XG4gICAgfTtcbiAgICBtZXRob2RzID0ge1xuICAgICAgICAgYmluZERhdGVDaGFuZ2UoZSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50dGltZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGlsZEZuJywgdGhpcy5jdXJyZW50dGltZSlcbiAgICAgICAgfSxcbiAgICAgICAgY2hhbmdlYmFja2dyb3VuZChpbmRleCl7XG4gICAgICAgICAgICB0aGlzLmNsYXNzaWZpY2F0aW9uLmZvckVhY2goKGUsaSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGkgPT0gaW5kZXgpe1xuICAgICAgICAgICAgICAgICAgICAgZS5zZWxlY3RlZCA9IHRydWVcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgIGUuc2VsZWN0ZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY2xhc3NpZnluYW1lID0gdGhpcy5jbGFzc2lmaWNhdGlvbltpbmRleF0ubmFtZSBcbiAgICAgICAgICAgIHRoaXMuY2xhc3NpZnlpZCA9IHRoaXMuY2xhc3NpZmljYXRpb25baW5kZXhdLmlkXG4gICAgICAgICAgICB0aGlzLmNsYXNzaWZ5dHlwZSA9IHRoaXMuY2xhc3NpZmljYXRpb25baW5kZXhdLnR5cGVcbiAgICAgICAgfSxcbiAgICAgICAgSW5wdXQoZSl7XG4gICAgICAgICAgICB0aGlzLm1vbmV5ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgfSxcbiAgICAgICAgLy/mt7vliqDmlbDmja7lupNcbiAgICAgICAgc3VyZSgpe1xuICAgICAgICAgICAgdmFyIHRpbWUgPSBkM1RpbWVGb3JtYXQudGltZUZvcm1hdCgnJVktJW0tJWQnKVxuICAgICAgICAgICAgdmFyIGlkID0gJ0RCLUJJTEwtJysgdGltZShuZXcgRGF0ZSgpKTsgXG4gICAgICAgICAgICBpZih0aGlzLm1vbmV5ID09IHVuZGVmaW5lZHx8dGhpcy5jbGFzc2lmeXR5cGUgPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfor7flsIbkv6Hmga/loavlhpnlrozmlbQnLFxuICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOmZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb25maXJtVGV4dDon5oiR55+l6YGT5LqGJyxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUNvbG9yOicjM2ViYmEzJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiB0aGlzLiRwYXJlbnQuJHBhcmVudC5nbG9iYWxEYXRhLnJlcXVlc3REb21haW4rJy9iaWxscy9hZGRCaWxsJywgLy/ku4XkuLrnpLrkvovvvIzlubbpnZ7nnJ/lrp7nmoTmjqXlj6PlnLDlnYBcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFzaGlkOiB0aGlzLmNsYXNzaWZ5aWQgLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcjogdGhpcy4kcGFyZW50LiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VySW5mbyAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtb25leTogdGhpcy5tb25leSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbDp0aGlzLmNsYXNzaWZ5bmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6dGhpcy5jdXJyZW50dGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6dGhpcy5jbGFzc2lmeXR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIC8vIOm7mOiupOWAvFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LnN3aXRjaFRhYih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2RldGFpbHMnXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBvblNob3coKXtcbiAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2codGhpcy4kcGFyZW50LiRwYXJlbnQuZ2xvYmFsRGF0YSlcbiAgICB9XG4gICAgXG4gIH1cbiJdfQ==