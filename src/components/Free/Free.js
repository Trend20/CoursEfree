import React from 'react'
import styled from 'styled-components';

const Free = () =>{
  return (
    <FreeContext className='free'>
      <FreeImage className="free-image">
        <img src="/img/free.png" alt="free" />
      </FreeImage>
      <FreeText className="free-text">
        <FreeHeader>Win a FREE COURSE!</FreeHeader>
        <FreeDescription>Free courses contain industry-relevant content and practical tasks and projects.</FreeDescription>
        <FreeButton>Good Luck!</FreeButton>
      </FreeText>
    </FreeContext>
  )
}

const FreeContext = styled.div`
  padding: 100px 0px;
  width: 70%;
  margin: auto;
  justify-content: center;
  display: flex;
`

const FreeImage = styled.div`
  display: flex;
  width: 40%;
  align-items: center;
  justify-content: center;
`

const FreeText = styled.div`
  display: flex;
  margin-top: 30px;
  width: 50%;
  padding: 0px 30px;
  flex-direction: column;
`

const FreeHeader = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  width: 100%;
`

const FreeDescription = styled.p`
  display: flex;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.5;
`

const FreeButton = styled.button`
  display: flex;
  margin-top: 30px;
  padding: 20px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  width: 30%;
  justify-content: center;
  font-weight: 700;
  background-color: #817dea;
  border-radius: 10px;

  &:hover{
    background-color: #0bce97;
  }
`
export default Free;