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
  StyledDeleteButton,
} from "./styles";
import router from "next/router";

const BookedArenas = () => {
  //Delete confirmation
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);
  console.log(selectedEntry);

  const handleOpenConfirmation = (e) => {
    setSelectedEntry(e._id);
    setShowConfirmation(true);
  };

  // Connection DB
  const { data: bookings, error, isLoading } = useSWR("/api/bookings/");
  const [isReady, setIsReady] = useState(false);

  if (!bookings && !error) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  if (isLoading) {
    return <h2>is Loading...</h2>;
  }

  if (!isReady) {
    setIsReady(true);
  }

  //Delete Booking
  async function handleDeleteBooking() {
    const response = await fetch(`/api/bookings/${selectedEntry}`, {
      method: "DELETE",
    });
    if (response.ok) {
      await response.json();
      router.push("/");
    } else {
      console.error(response.status);
    }
    setShowConfirmation(false);
  }

  //format to german date:
  function formatDate(bookingDate) {
    const dateObject = new Date(bookingDate);
    const germanDate = dateObject.toLocaleString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    return germanDate;
  }

  return (
    <>
      <StyledHomeArenaWrapper>
        {bookings.map((entry) => {
          return (
            <StyledArena key={entry._id}>
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
          );
        })}
      </StyledHomeArenaWrapper>
      {showConfirmation && (
        <ModalOverlay>
          <Modal>
            <p>Are you sure you want to delete this booking?</p>
            <StyledCancelButton onClick={() => setShowConfirmation(false)}>
              Cancel
            </StyledCancelButton>
            <StyledDeleteButton onClick={handleDeleteBooking}>
              Delete
            </StyledDeleteButton>
          </Modal>
        </ModalOverlay>
      )}
    </>
  );
};

export default BookedArenas;
