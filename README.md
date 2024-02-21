# 실행 방법

npm install -g yarn

yarn dev

실행 안된다면 리액트/노드js/Express 등 설치 확인

# 리액트 css 디자인: Material-UI


# alert() 2회 실행하는 이유

index.js의 <React.StrictMode> 때문



# HeidiSQL

USE userDatabase;

DROP TABLE LEARNING;
DROP TABLE USER;
DROP TABLE CLASS;

CREATE TABLE USER (
	id VARCHAR(64) PRIMARY KEY,
	pswd VARCHAR(256) NOT null,
	name VARCHAR(64) NOT null
) DEFAULT CHARACTER SET UTF8MB3 COLLATE UTF8_GENERAL_CI;

CREATE TABLE CLASS (
	id INT AUTO_INCREMENT PRIMARY KEY ,
	difficulty ENUM('1', '2',' 3') NOT null,
	title VARCHAR(128) ,
	detail VARCHAR(256) , 
	URL VARCHAR(128) NOT null
) DEFAULT CHARACTER SET UTF8MB3 COLLATE UTF8_GENERAL_CI;

CREATE TABLE LEARNING (
	id INT AUTO_INCREMENT PRIMARY KEY ,
	member_id VARCHAR(64) NOT null,
	class_id INT NOT null,
	completed ENUM('true', 'false') NOT null, 
	FOREIGN KEY (member_id) REFERENCES USER(id) ON DELETE CASCADE,
	FOREIGN KEY (class_id) REFERENCES CLASS(id) ON DELETE CASCADE
) DEFAULT CHARACTER SET UTF8MB3 COLLATE UTF8_GENERAL_CI;

INSERT INTO USER VALUES ('123','123','123');
INSERT INTO CLASS (difficulty, URL) VALUES ('초급', 'pQUWOFbL10g');

SELECT * FROM USER;


# USER TABLE 구조 변경
: server.js -> postUserData 수정
: UserData.js 수정