import styled from 'styled-components'

export const ContainerBody = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .ContainerPhone{
    display: flex;
    justify-content: center;
  }

  .playIcon{
    width: 35px;
    color: #000165;
  }

  .avaibleParagraph {
    font-weight: bold;
  }

  .divFirst {
    display: flex;
    align-items: center;

    h2 {
      color: #333464;
      text-align: center;
      font-size: 20px;
    }
  }

  .divSecond {
    display: flex;
    flex-direction: column;
    align-items: center;

  p {
    margin: 0;
  }

    p:first-child {
      font-weight: 500;
    }
  }

  .divThree {
    display: flex;

    svg {
      width: 25px;
    }
  }

`;

export const BoxPayment = styled.div `
  background: #333367;
  color: #fffffe;
  border-radius: 8px;
  padding: 15px 25px;
  text-align: center;

  h2 {
    font-size: 13px;
    margin: 0;
  }

  
  h1 {
    font-size: 20px;
    
    margin: 0;
  }
`;