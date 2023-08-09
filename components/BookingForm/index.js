import { useState } from "react";
import {
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
} from "./styles";
import { FaArrowLeft } from "react-icons/fa";
import Router from "next/router";
import Navigation from "../Navigation";

const ArenaBookingForm = () => {
  const [bookingData, setBookingData] = useState({
    bookedArena: "",
    bookedPerson: "",
    title: "",
    sTime: "",
    eTime: "",
    date: "",
    singleRider: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setBookingData((prevBookingData) => ({
      ...prevBookingData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (bookingData.sTime >= bookingData.eTime) {
      alert("End time must be later than start time");
      return;
    }

    try {
      const response = await fetch("/api/bookings/", {
        method: "POST",

        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        Router.push("/");
      } else {
        alert(
          "Nope, didn't work, please check if you filled in everything completely"
        );
      }
    } catch (error) {
      alert("An error ocurred");
    }
  };

  return (
    <>
      <StyledBackButton href="/" alt="home">
        <FaArrowLeft />
      </StyledBackButton>
      <Form onSubmit={handleSubmit}>
        <div>
          <StyledTitle
            placeholder="Give your training a title"
            type="text"
            id="title"
            name="title"
            value={bookingData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <StyledBookedPerson
            placeholder="Who is training?"
            type="text"
            id="bookedPerson"
            name="bookedPerson"
            value={bookingData.bookedPerson}
            onChange={handleChange}
          />
        </div>
        <div>
          <StyledDate
            type="date"
            id="date"
            name="date"
            value={bookingData.date}
            onChange={handleChange}
          />
        </div>
        <div>
          <StyledStartTime
            type="time"
            id="sTime"
            name="sTime"
            value={bookingData.sTime}
            onChange={handleChange}
          />
        </div>
        <div>
          <StyledEndTime
            type="time"
            id="eTime"
            name="eTime"
            value={bookingData.eTime}
            onChange={handleChange}
          />
        </div>
        <div>
          <StyledChooseArena
            placeholder="Choose Arena"
            id="bookedArena"
            name="bookedArena"
            value={bookingData.bookedArena}
            onChange={handleChange}
          >
            <option value="">Choose Arena</option>
            <option value="Dressage Arena">Dressage Arena</option>
            <option value="Dressage Arena outside">
              Dressage Arena outside
            </option>
            <option value="Jumping Arena">Jumping Arena</option>
            <option value="Military Arena">Military Arena</option>
            <option value="Round Pen">Round Pen</option>
          </StyledChooseArena>
        </div>
        <div>
          <StyledLabel htmlFor="singleRiderCheck">Single Rider</StyledLabel>
          <StyledCheckbox
            type="checkbox"
            id="singleRider"
            name="singleRider"
            checked={bookingData.singleRider}
            onChange={handleChange}
          />
        </div>
        <ButtonContainer>
          <BookArenaButton type="submit">Book Arena</BookArenaButton>
        </ButtonContainer>
      </Form>
      <Navigation />
    </>
  );
};

export default ArenaBookingForm;
