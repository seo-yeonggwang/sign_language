# 실행 방법

cd server

npm install -g yarn

yarn dev
or
npm run dev


# alert() 2회 실행하는 이유

index.js의 <React.StrictMode> 때문


# HeidiSQL

USE user;

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
	level ENUM('1', '2',' 3') NOT null,
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

INSERT INTO CLASS (level, URL, title, detail) VALUES ('1', 'pQUWOFbL10g', "수어 기초1", "수어 기초 테스트 영상입니다.");

SELECT * FROM USER;



# 홈 화면에서 유튜브 URL 뒤의 id를 이용해서 임시로 강의 추가 가능

# 추가한 강의는 로그인 후 학습하기 페이지로 이동해서 조회 가능