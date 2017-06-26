create database burgers_db;
use burgers_db;

create table burgers(
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`burger_name` VARCHAR( 255) NOT NULL,
	`devoured` BOOLEAN NOT NULL,
    date timestamp,
	PRIMARY KEY ( `id` ) /* Set ID as primary key */
);

select *  from burgers;