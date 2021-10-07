/*
 Navicat Premium Data Transfer
 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 50611
 Source Host           : localhost
 Source Database       : demo_all
 Target Server Type    : MySQL
 Target Server Version : 50611
 File Encoding         : utf-8
 Date: 05/01/2020 14:12:27 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS  0;

-- ----------------------------
--  Table structure for `posts`
-- ----------------------------
DROP TABLE IF EXISTS posts;
CREATE TABLE posts (
  id int(11) NOT NULL,
  title varchar(250) DEFAULT NULL,
  description varchar(250) DEFAULT NULL,
  image_url varchar(250) DEFAULT NULL,
  detail text,
  status tinyint(2) DEFAULT '1',
  created_at timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp NULL DEFAULT NULL,
  deleted_at timestamp NULL DEFAULT NULL,
  PRIMARY KEY (id)
) 
-- ----------------------------
--  Records of `posts`
-- ----------------------------
