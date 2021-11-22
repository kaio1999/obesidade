import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
   
    .number {
    position: relative;
    right: 33px;
    bottom: 50px;
    color: #f4e7e7;
  }

  .paragraph {
    position: relative;
    left: 51px;
    bottom: 70px;
    color: #f4e7e7;
  }
  
`;

export const DivTextHeader = styled.div`
  text-align: center;

  .editUrl {
    color: #990000;
  }

  a {
    font-weight: bold;
    font-size: 16px;
    text-decoration: underline;
    color: #990000;
    cursor: pointer;
  }

  p {
    margin-left: 30px;
    text-align: start;
    padding: 0 2px;
  }
`;