--账单详情
create table db_bill(
	DB_BILL_ID int(11) primary key auto_increment,
	DB_BILL_TIME datetime not null DEFAULT CURRENT_TIMESTAMP  comment '创建时间',
	DB_BILL_USER varchar(64) not null comment '添加人',
	DB_BILL_MONEY char(32) not null comment '金额',
    DB_BILL_TYPE char(32) not null comment '分类 1收入 0支出',
    DB_BILL_VAL varchar(64) not null comment '类别',
	DB_BILL_HASHID char(32) not null comment '绑定类别id'
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT='账单详情';

--消费分类
create table db_spend_sort(
	DB_SPEND_SORT_ID int(11) primary key auto_increment,
	DB_SPEND_SORT_TIME datetime not null DEFAULT CURRENT_TIMESTAMP  comment '创建时间',
	DB_SPEND_SORT_USER varchar(64) not null comment '添加人',
    DB_SPEND_SORT_TYPE char(32) not null comment '所属类型 1收入 0支出',
    DB_SPEND_SORT_VAL varchar(64) not null comment '类别名称',
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT='消费分类';