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
  top: 17px;
`;

const StyledBookedArena = styled.p`
  position: absolute;
  right: 25px;
  top: 0px;
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
  padding-bottom: 70px;
  border: 1px solid #354531;
  position: relative;
`;

const StyledCancelButton = styled.button`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  height: 40px;
  width: 150px;
  border: thin solid #354531;
  left: 20px;

  &:hover {
    box-shadow: 1px 1px 10px #354531;
  }
`;

const StyledDeleteButton = styled.button`
  background-color: #880000;
  color: white;
  border-radius: 10px;
  border: thin solid #000000;
  height: 40px;
  width: 150px;
  border: thin solid #880000;
  position: absolute;
  top: 70px;
  right: 20px;

  &:hover {
    box-shadow: 1px 1px 10px #354531;
  }
`;

const StyledEmptyBookings = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
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
  StyledDeleteButton,
  StyledEmptyBookings,
};
