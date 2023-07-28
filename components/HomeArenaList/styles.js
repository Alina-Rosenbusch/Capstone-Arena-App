import { BsEye } from "react-icons/bs";
import styled from "styled-components";

const StyledArena = styled.div`
  background-color: #a4b9a0;
  border-radius: 10px;
  padding: 11px;
  margin: 10px;
  height: 160px;

  .entry {
    position: relative;
  }

  h4 {
    position: absolute;
    right: 25px;
    margin-top: -40px;
  }

  .entry_time {
    position: absolute;
    left: 20px;
  }

  .entry_date {
    position: absolute;
    left: 20px;
    margin-top: -10px;
  }

  svg {
    font-size: 25px;
    color: #354531;
    position: absolute;
    right: 25px;
  }

  svg:hover {
    color: #880000;
  }
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

export {StyledArena, ModalOverlay, Modal, StyledCancelButton}