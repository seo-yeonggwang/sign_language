# 실행 방법

npm install -g yarn

yarn dev

실행 안된다면 리액트/노드js/Express 등 설치 확인

# 리액트 css 디자인: Material-UI




# HeidiSQL

USE userDatabase;

/*
DROP TABLE LEARNING;
DROP TABLE USER;
CREATE TABLE USER (
	id VARCHAR(64) PRIMARY KEY,
	pswd VARCHAR(256),
	name VARCHAR(64)
) DEFAULT CHARACTER SET UTF8MB3 COLLATE UTF8_GENERAL_CI;



CREATE TABLE LEARNING (
	id INT AUTO_INCREMENT PRIMARY KEY ,
	member_id VARCHAR(64),
	FOREIGN KEY (member_id) REFERENCES USER(id) ON DELETE CASCADE
) DEFAULT CHARACTER SET UTF8MB3 COLLATE UTF8_GENERAL_CI;
*/

/*
INSERT INTO USER VALUES ('abc', 'pass', '길동', '초급과정');
INSERT INTO USER VALUES ('abcdef', 'pass', '영광', '중급과정');
*/

SELECT * FROM USER;

# DB 구조 변경
: server.js -> postUserData 수정
: UserData.js 수정