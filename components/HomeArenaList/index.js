import useSWR from "swr";
import { useState } from "react";
import { BsTrash3Fill } from "react-icons/bs";
import {
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
} from "./styles";

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
          <StyledHomeArenaWrapper key={entry._id}>
            <StyledArena>
              <StyledBookedArenaTitle>{entry.title}</StyledBookedArenaTitle>
              <StyledBookedArena>{entry.bookedArena}</StyledBookedArena>
              <StyledBookedPerson>{entry.bookedPerson}</StyledBookedPerson>
              <StyledArenaListItemTime>
                {entry.sTime}-{entry.eTime}
              </StyledArenaListItemTime>
              <StyledArenaListItemDate>
                {formatDate(entry.date)}
              </StyledArenaListItemDate>

              <StyledTrashButton onClick={() => handleOpenConfirmation(entry)}>
                <BsTrash3Fill />
              </StyledTrashButton>
            </StyledArena>
          </StyledHomeArenaWrapper>
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
