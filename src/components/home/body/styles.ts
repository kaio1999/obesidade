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

export const BoxPayment = styled.div`
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

export const DivContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 4.7%;
`;

export const ModalLocation = styled.div`
  background: #cccccc;
  display: flex;
  padding: 5px 15px;
  width: 45%;

  .divTitle {
    display: flex;
  }

  .countryDiv {
    display: flex;
    align-items: center;
  }

  .playIcon {
    width: 32px;
    color: #9a0100;
  }
  
  h1 {
    color: #9a0100;
    font-size: 20px;
  }

  h2 {
    font-size: 18px;
    font-weight: bold;
  }
`;

export const ModalForm = styled.div`
   background: #cccccc;
   display: flex;
   flex-direction: column;
  width: 45%;
  .divTitle {
    display: flex;
  }

  .playIcon {
    width: 32px;
    color: #9a0100;
  }
  
  h1 {
    color: #9a0100;
    font-size: 20px;
  }

  .divInputs {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 10px;

    input {
      border-radius: 7px;
      border: 2px solid #9e9e9e;
      outline: 0;
      height: 26px;
    }

    div {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const Container = styled.form`
  display: flex;

  .divMessage {
    display: flex;
    flex-direction: column;
    padding: 0 10px;

    textarea {
      border-radius: 7px;
      border: 2px solid #9e9e9e;
      outline: 0;
      width: 250px;
      min-width: 250px;
      max-width: 250px;
      height: 140px;
      min-height: 140px;
      max-height: 140px;
    }

    button {
      background-image: linear-gradient(to bottom,#cccccc -80%,#9c0d0b 86%, #0C0C0C);
      color: white;
      border-radius: 9px;
      width: fit-content;
      padding: 5px 20px;
      border: none;
      display: flex;
      align-self: self-end;
      margin: 10px 0;
    }
  }
`;