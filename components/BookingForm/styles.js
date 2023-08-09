import styled from "styled-components";

const StyledBackButton = styled.a`
  color: #ffffff;
  background-color: #354531;
  padding: 10px;
  padding-top: 15px;
  position: relative;
  top: 40px;
  left: 40px;
  font-size: 30px;
  text-align: center;
  border-radius: 10px;
`;

const StyledTitle = styled.input`
  display: flex;
  width: 80%;
  height: 54px;
  border-radius: 10px;
  background: #a4b9a0;
  border: none;
  margin: 20px 40px;
  position: relative;
  margin-top: 100px;
  align-items: stretch;
  text-align: center;
  font-size: large;

  ::placeholder {
    text-align: center;
    font-size: large;
    font-style: italic;
  }
`;

const StyledBookedPerson = styled.input`
  display: flex;
  width: 80%;
  height: 54px;
  border-radius: 10px;
  background: #a4b9a0;
  border: none;
  margin: 20px 40px;
  position: absolute;
  top: 200px;
  text-align: center;
  font-size: large;

  ::placeholder {
    text-align: center;
    font-size: large;
    font-style: italic;
  }
`;

const StyledDate = styled.input`
  display: flex;
  width: 80%;
  height: 54px;
  border-radius: 10px;
  background: #a4b9a0;
  border: none;
  margin: 20px 40px;
  text-align: center;
  padding-right: 20px;
  font-size: large;
  position: absolute;
  top: 280px;
`;

const StyledStartTime = styled.input`
  display: flex;
  flex-direction: row;
  width: 35%;
  height: 54px;
  border-radius: 10px;
  background: #a4b9a0;
  border: none;
  margin: 20px 40px;
  text-align: center;
  padding-right: 20px;
  font-size: large;
  position: relative;
  top: 174px;
`;

const StyledEndTime = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 35%;
  height: 54px;
  border-radius: 10px;
  background: #a4b9a0;
  border: none;
  margin: 20px 40px;
  text-align: center;
  padding-right: 20px;
  font-size: large;
  position: relative;
  left: 45%;
  top: 100px;
`;

const StyledChooseArena = styled.select`
  display: flex;
  width: 80%;
  height: 54px;
  border-radius: 10px;
  background: #a4b9a0;
  border: none;
  margin: 20px 40px;
  text-align: center;
  padding-right: 20px;
  font-size: large;
  position: absolute;
  top: 440px;
  padding-right: 20px;
`;

const StyledLabel = styled.label`
  display: flex;
  position: absolute;
  top: 550px;
  left: 15%;
  font-size: large;
`;

const StyledCheckbox = styled.input`
  display: flex;
  position: absolute;
  top: 547px;
  background: #a4b9a0;
  left: 50%;
  width: 30px;
  height: 1.3rem;
  border: 2px solid #ccc;
  border-radius: 3px;
`;

const ButtonContainer = styled.div`
  display: flex;
  position: relative;
  top: 350px;
  align-items: center;
  justify-content: center;
`;

const BookArenaButton = styled.button`
  position: relative;
  bottom: 90px;
  width: 287px;
  height: 54px;
  border: none;
  border-radius: 10px;
  background: #6e4864;
  color: #ffffff;
  font-size: large;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: 1px 1px 10px #000;
  }
`;

const Form = styled.form`
  margin-bottom: 10px;
`;

export {
  StyledTitle,
  StyledBookedPerson,
  StyledDate,
  StyledStartTime,
  StyledEndTime,
  StyledChooseArena,
  StyledLabel,
  StyledCheckbox,
  BookArenaButton,
  StyledBackButton,
  ButtonContainer,
  Form,
};
