import styled from "styled-components";

const StyledHomeArenaWrapper = styled.ul`
  padding: 0;
`;

const StyledArena = styled.li`
  background-color: #a4b9a0;
  border-radius: 10px;
  padding: 11px;
  margin: 10px;
  height: 160px;
  position: relative;
  text-decoration: none;
  list-style: none;
`;

const StyledTrashButton = styled.button`
  font-size: 25px;
  color: #354531;
  position: absolute;
  right: 25px;
  top: 100px;
  border: none;
  background-color: transparent;

  &:hover {
    color: #880000;
  }
`;

const StyledBookedArenaTitle = styled.p`
  font-weight: bold;
  font-size: larger;
  position: absolute;
  left: 20px;
`;

const StyledBookedArena = styled.p`
  position: absolute;
  right: 25px;
  font-weight: bold;
`;

const StyledBookedPerson = styled.p`
  position: absolute;
  left: 20px;
  margin-top: 60px;
`;

const StyledArenaListItemDate = styled.p`
  position: absolute;
  left: 20px;
  margin-top: 90px;
`;

const StyledArenaListItemTime = styled.p`
  position: absolute;
  left: 20px;
  margin-top: 115px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Modal = styled.div`
  background: #a4b9a0;
  border-radius: 10px;
  padding: 20px;
  border: 1px solid #354531;
`;

const StyledCancelButton = styled.button`
  border-radius: 10px;
  height: 40px;
  width: 40%;
  border: thin solid #354531;

  &:hover {
    box-shadow: 1px 1px 10px #354531;
  }
`;

export {
  StyledArena,
  ModalOverlay,
  Modal,
  StyledCancelButton,
  StyledArenaListItemTime,
  StyledArenaListItemDate,
  StyledBookedArena,
  StyledBookedArenaTitle,
  StyledHomeArenaWrapper,
  StyledBookedPerson,
  StyledTrashButton,
};
