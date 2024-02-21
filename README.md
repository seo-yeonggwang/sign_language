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

INSERT INTO CLASS (difficulty, URL, title, detail) VALUES ('1', 'pQUWOFbL10g', "수어 기초1", "수어 기초 테스트 영상입니다.");

SELECT * FROM USER;


# USER TABLE 구조 변경
: server.js -> postUserData 수정
: UserData.js 수정



# etc

홈 화면에서 유튜브 URL 뒤의 id를 이용해서 임의로 강의 추가 가능

추가한 강의는 로그인 후, 학습하기 페이지로 이동해서 조회 가능