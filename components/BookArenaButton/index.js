import styled from "styled-components";

export default function BookArenaButton() {
  return (
    <BookingButton href="/booking" alt="booking">
      Booking
    </BookingButton>
  );
}

const BookingButton = styled.a`
  display: inline-block;
  padding: 15px 90px;
  border-radius: 10px;
  background: #6e4864;
  color: #ffffff;
  font-size: large;
  margin: 50px;
  text-decoration: none;

  &:hover {
    box-shadow: 1px 1px 10px #000;
  }
`;
