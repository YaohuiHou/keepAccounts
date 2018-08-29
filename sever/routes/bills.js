var express = require('express');
var router = express.Router();
// 导入MySQL模块
var mysql = require('mysql');
var dbConfig = require('../db/DBConfig');
var addbillSQL = require('../db/addbillsql');
var moment = require('moment');

// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool(dbConfig.mysql);
// 响应一个JSON数据
var responseJSON = function(res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '-200',
            msg: '操作失败'
        });
    } else {
        res.json({
            code: '200',
            data: ret
        });
    }
};
// 添加账单 
router.get('/addBill', function(req, res, next) {
    // 从连接池获取连接 
    pool.getConnection(function(err, connection) {
        // 获取前台页面传过来的参数  
        var param = req.query || req.params;
        // 建立连接 增加一个用户信息 
        connection.query(addbillSQL.insert, [param.hashid, param.money, param.val, param.time, param.user, param.type], function(err, result) {
            if (result) {
                result = {
                    msg: '增加成功'
                };
            }
            // 以json形式，把操作结果返回给前台页面     
            responseJSON(res, result);
            // 释放连接  
            connection.release();

        });
    });
});
//根据hashid查询账单信息 eq:http://localhost:3000/bills/searchBill?hashid=2017.12.1
router.get('/searchBill', function(req, res, next) {
    // 从连接池获取连接 
    pool.getConnection(function(err, connection) {
        var param = req.query || req.params;

        // 建立连接 增加一个用户信息 
        connection.query(addbillSQL.getBillsByHashId, [param.hashid], function(err, result) {
            responseJSON(res, result);
            // 释放连接  
            connection.release();
            // }
        });
    });
});
//查询所有的账单 eq:http://localhost:3000/bills/searchBill?hashid=2017.12.1
router.get('/listBill', function(req, res, next) {
    // 从连接池获取连接 
    pool.getConnection(function(err, connection) {

        var param = req.query || req.params;
        // 建立连接 增加一个用户信息 
        connection.query('SELECT DB_BILL_TIME time, DB_BILL_MONEY money ,DB_BILL_TYPE type, DB_BILL_VAL val FROM db_bill WHERE DB_BILL_TIME LIKE "' + param.datemonth + '%" order by DB_BILL_TIME desc', function(err, result) {

            // var arr = []
            let dataTemp = {}
            let formalObj = {
                list: [],
                pay: 0,
                income: 0
            }
            result.forEach(ele => {
                moment.locale('zh-cn');
                if (ele.type == 0) {
                    formalObj.pay += parseInt(ele.money)
                } else {
                    formalObj.income += parseInt(ele.money)
                }
                let time = moment(ele.time).format('MM月DD日 dddd')
                if (Object.keys(dataTemp).includes(time)) {
                    dataTemp[time].push(ele)
                } else {
                    dataTemp[time] = []
                    dataTemp[time].push(ele)
                }

            });
            for (key in dataTemp) {
                let pay = 0
                let income = 0
                dataTemp[key].forEach(ele => {
                    if (ele.type == 0) {
                        pay += ~~ele.money
                    } else {
                        income += ~~ele.money
                    }
                })
                formalObj.list.push({ time: key, list: dataTemp[key], pay: pay, income: income })
            }
            responseJSON(res, formalObj);
            // 释放连接  
            connection.release();
            // }
        });

    });
});

//添加分类
router.get('/addSort', function(req, res, next) {
    var param = req.query || req.params;
    // 从连接池获取连接 
    pool.getConnection(function(err, connection) {
        var sql = 'INSERT INTO db_spend_sort(DB_SPEND_SORT_VAL,DB_SPEND_SORT_TYPE,DB_SPEND_SORT_USER) VALUES(?,?,?)'
            // 建立连接 增加一个用户信息 
        connection.query(sql, [param.val, param.type, param.user], function(err, result) {
            responseJSON(res, result);
            // 释放连接  
            connection.release();
            // }
        });
    });
});
//查询分类
router.get('/listSort', function(req, res, next) {
    var param = req.query || req.params;
    // 从连接池获取连接 
    pool.getConnection(function(err, connection) {
        var sql = 'select DB_SPEND_SORT_ID id,DB_SPEND_SORT_VAL name,DB_SPEND_SORT_TYPE type from db_spend_sort'
            // 建立连接 增加一个用户信息 
        connection.query(sql, function(err, result) {
            responseJSON(res, result);
            // 释放连接  
            connection.release();
            // }
        });
    });
});
// 
router.get('/billsGroupBytime', function(req, res, next) {
    // 从连接池获取连接 
    pool.getConnection(function(err, connection) {
        // 建立连接 增加一个用户信息 
        connection.query(addbillSQL.getTodayMoney, function(err, result) {
            responseJSON(res, result);
            // 释放连接  
            connection.release();
            // }
        });
    });
});


//查询本年账单
router.get('/currentYear', function(req, res, next) {
    // 从连接池获取连接 
    pool.getConnection(function(err, connection) {
        // 建立连接 增加一个用户信息 
        connection.query('SELECT DB_BILL_TIME time, DB_BILL_MONEY money ,DB_BILL_TYPE type, DB_BILL_VAL val FROM db_bill  order by DB_BILL_TIME desc', function(err, result) {
            let currentDetail = [{ name: "本年账单", num: 0 }, { name: "本年总收入", num: 0 }, { name: "本年总支出", num: 0 }]
            result.forEach(ele => {
                if (ele.type == 0) {
                    currentDetail[2].num += ~~ele.money
                } else {
                    currentDetail[1].num += ~~ele.money
                }
            })
            currentDetail[0].num = result.length
            responseJSON(res, currentDetail);
            // 释放连接  
            connection.release();
            // }
        });
    });
});


module.exports = router;