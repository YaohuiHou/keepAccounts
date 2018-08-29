var AddBillSQL = {
    insert: 'INSERT INTO db_bill(DB_BILL_HASHID,DB_BILL_MONEY,DB_BILL_VAL,DB_BILL_TIME,DB_BILL_USER,DB_BILL_TYPE) VALUES(?,?,?,?,?,?)',
    queryAll2: 'SELECT DB_BILL_TIME time FROM db_bill group by DB_BILL_TIME desc',
    queryAll3: 'SELECT DB_BILL_TIME time, DB_BILL_MONEY money ,DB_BILL_TYPE type, DB_BILL_VAL val FROM db_bill where DB_BILL_TIME = ? order by DB_BILL_TIME desc',
    queryAll: 'SELECT DB_BILL_TIME time, DB_BILL_MONEY money ,DB_BILL_TYPE type, DB_BILL_VAL val FROM db_bill WHERE DB_BILL_TIME LIKE "?%" order by DB_BILL_TIME desc',
    getBillsByHashId: 'SELECT * FROM db_bill WHERE DB_BILL_HASHID = ? ',
    getTodayMoney: 'SELECT DB_BILL_TIME time, DB_BILL_MONEY money ,DB_BILL_TYPE type from db_bill  group by DB_BILL_TIME,DB_BILL_TYPE',
    getBillsGroupByTime: 'SELECT convert(varchar(10),DB_BILL_TIME,120) time, DB_BILL_MONEY money from db_bill  group by convert(varchar(10),DB_BILL_TIME,120)',
    changeMonth: 'SELECT sum(DB_BILL_MONEY) money FROM db_bill WHERE DB_BILL_TIME LIKE "?%" GROUP BY DB_BILL_TYPE'
};
module.exports = AddBillSQL;