import styled from 'styled-components'

export const ContainerBody = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 42px 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .divButton {
    display: flex;
    justify-content: space-around;
    width: 50%;
    margin: 18px 0;

    button {
      background-image: linear-gradient(to bottom,#cccccc -80%,#008C28 86%, #0C0C0C);
      color: white;
      border-radius: 9px;
      width: fit-content;
      padding: 5px 30px;
      border: none;
      display: flex;
      align-self: self-end;
      margin: 10px 0;
      cursor: pointer;

      :hover {
        font-size: 15px;
        transition: all ease 1s;
      }
    }
  }

  div.invite {
    background: #f1edf1;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 13px #d1d2d2;
    border: 2px solid #008C28;
    border-radius: 3px;
    padding: 5px 10px;

    h3 {
      margin: 10px 0;
    }

    span {
      margin: 10px 0;
    }
  }

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
  margin-bottom: 42px;


  span.error {
    display: flex;
    margin: 4px 0;
    padding: 2px 10px;
    background: #D90000;
    border: 1px solid #591B1B;
    border-radius: 8px;
    text-align: left;
    color: #fefdfd;
    font-size: 14px;
  }
`;

export const ModalLocation = styled.div`
  background: #cccccc;
  display: flex;
  padding: 5px 15px;
  width: 45%;
  justify-content: space-between;

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
   padding: 5px 15px;
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
  justify-content: space-between;

  .divMessage {
    display: flex;
    flex-direction: column;

    textarea {
      border-radius: 7px;
      border: 2px solid #9e9e9e;
      outline: 0;
      width: 14vw;
      min-width: 250px;
      max-width: 350px;
      height: 100%;
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
      cursor: pointer;

      :hover {
        font-size: 15px;
        transition: all ease 1s;
      }
    }
  }
`;