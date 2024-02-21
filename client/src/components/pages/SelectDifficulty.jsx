import React from 'react'
import styled from 'styled-components';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

function LearningContentCard(props){
  const link = "/select-chapter/" + props.difficulty;
  return (
    <Section>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <Link to={link}><Button>강의 보기</Button></Link>
    </Section>
  )
}

function SelectDifficulty() {

  return (
    <Container>
      <Header>
        <h1>sign_language</h1>
      </Header>
      <Main>
        <LearningContentCard
        title = "초급 수어 강의"
        description="수어의 기초를 배우고 싶으신 분들을 위한 강좌입니다."
        difficulty = "1">
        </LearningContentCard>
        <LearningContentCard
        title = "중급 수어 강의"
        description="초급을 마스터한 분들을 위한 중급 강좌입니다."
        difficulty = "2">
        </LearningContentCard>
        <LearningContentCard
        title = "고급 수어 강의"
        description="수어에 더 깊게 파고들고 싶으신 분들을 위한 고급 강좌입니다."
        difficulty = "3">
        </LearningContentCard>
      </Main>
    </Container>
  )
}
export default SelectDifficulty


const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
  max-width: 1000px;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
`;

const Main = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Section = styled.section`
  text-align: center;
  margin-right: 40px;
  margin-left: 40px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #0056b3;
  }
`;