import styled from "styled-components";
import useSWR from "swr";
import { useState } from "react";
import { BsTrash3Fill } from "react-icons/bs";
import {StyledArena, ModalOverlay, Modal, StyledCancelButton} from "./styles";

const BookedArenas = () => {
  //Delete confirmation
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);

  const handleOpenConfirmation = (entry) => {
    setSelectedEntry(entry._id);
    setShowConfirmation(true);
  };

  // Connection DB
  const { data: bookings, error } = useSWR("/api/bookings");
  const [isReady, setIsReady] = useState(false);

  if (!bookings && !error) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  if (!isReady) {
    setIsReady(true);
  }

  function formatDate(bookingDate) {
    const dateObject = new Date(bookingDate);
    //format to german date:
    const germanDate = dateObject.toLocaleString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    return germanDate;
  }

  return (
    <>
      {bookings.map((entry) => {
        return (
          <StyledArena key={entry._id} className="entry">
            <h3>{entry.title}</h3>
            <h4>{entry.bookedArena}</h4>
            <p>{entry.bookedPerson}</p>
            <p className="entry_time">
              {entry.sTime}-{entry.eTime}
            </p>
            <p className="entry_date">{formatDate(entry.date)}</p>
            <BsTrash3Fill onClick={() => handleOpenConfirmation(entry)} />
          </StyledArena>
        );
      })}
      {showConfirmation && (
        <ModalOverlay>
          <Modal>
            <p>Are you sure you want to delete this booking?</p>
            <StyledCancelButton onClick={() => setShowConfirmation(false)}>
              Cancel
            </StyledCancelButton>
          </Modal>
        </ModalOverlay>
      )}
    </>
  );
};

export default BookedArenas;

