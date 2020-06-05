use forum;
create table if not exists user (
    id int auto_increment,
    username varchar(50) not null,
    password varchar(50) not null,
    avatar varchar(50) default '',
    state int default 0,
    admin int default 0,
    doctor int default 0,
    user_url varchar(50) default '',
    create_date timestamp default CURRENT_TIMESTAMP ,
    update_date timestamp default CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    primary key (id)
);

create table if not exists post (
    id int auto_increment,
    title varchar(100) not null,
    type int default 0,
    user_id int not null,
    content varchar(200) not null,
    view_num int default 0,
    reply_num int default 0,
    favor_num int default 0,
    post_url varchar(50) default '',
    create_date timestamp default CURRENT_TIMESTAMP ,
    update_date timestamp default CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    primary key (id)
);

create table if not exists reply (
    id int auto_increment,
    post_id int not null,
    user_id int not null,
    level int not null,
    reference int default 0,
    reference_id int default 0,
    content varchar(200) not null,
    like_num int default 0,
    dislike_num int default 0,
    create_date timestamp default CURRENT_TIMESTAMP ,
    update_date timestamp default CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    primary key (id)
);

create table if not exists mail (
    id int auto_increment,
    user_id int not null,
    receiver int not null,
    content varchar(200) not null,
    create_date timestamp default CURRENT_TIMESTAMP ,
    update_date timestamp default CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    primary key (id)
);

create table if not exists favor (
    id int auto_increment,
    user_id int not null,
    post_id int not null,
    create_date timestamp default CURRENT_TIMESTAMP ,
    update_date timestamp default CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    primary key (id)
);

create table if not exists favor (
    id int auto_increment,
    user_id int not null,
    post_id int not null,
    create_date timestamp default CURRENT_TIMESTAMP ,
    update_date timestamp default CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    primary key (id)
);

create table if not exists attention (
    id int auto_increment,
    user_id int not null,
    attention_user_id int not null,
    create_date timestamp default CURRENT_TIMESTAMP ,
    update_date timestamp default CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    primary key (id)
);

create table if not exists report (
    id int auto_increment,
    user_id int not null,
    target_type varchar(20) not null,
    target_id int not null,
    reason varchar(100) default '',
    result varchar(100) default '',
    state int default 0,
    admin_id int default 0,
    create_date timestamp default CURRENT_TIMESTAMP ,
    update_date timestamp default CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    primary key (id)
);

create table if not exists blacklist (
    id int auto_increment,
    target_id int not null,
    admin_id int default 0,
    start_time varchar(30) not null,
    end_time varchar(30) not null,
    reason varchar(50) not null,
    create_date timestamp default CURRENT_TIMESTAMP ,
    update_date timestamp default CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    primary key (id)
);

create table if not exists operation (
    id int auto_increment,
    reply_id int not null,
    user_id int not null,
    type int not null,
    create_date timestamp default CURRENT_TIMESTAMP ,
    update_date timestamp default CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    primary key (id)
);





