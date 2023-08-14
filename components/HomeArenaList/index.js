import useSWR, { mutate } from "swr";
import { useState, useEffect } from "react";
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
  StyledEmptyBookings,
} from "./styles";
import router from "next/router";

const BookedArenas = () => {
  //Delete confirmation
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);

  const handleOpenConfirmation = (e) => {
    setSelectedEntry(e._id);
    setShowConfirmation(true);
  };

  console.log(selectedEntry);

  // Connection DB
  const { data: bookings, error, isLoading } = useSWR("/api/bookings/");
  const [isReady, setIsReady] = useState(false);

  // Delete past bookings
  async function deletePastBookings(items) {
    const currentDate = new Date();
    items.forEach(async (entry) => {
      const entryDate = new Date(entry.date);
      console.log("Entry:", entry);
      console.log("Entry Date:", entryDate);
      if (entryDate < currentDate) {
        console.log("Deleting entry:", entry._id);
        await handleDeleteRandom(entry._id);
      }
    });
  }

  async function handleDeleteRandom(item) {
    const response = await fetch(`/api/bookings/${item}`, {
      method: "DELETE",
    });
    if (response.ok) {
      await response.json();
      mutate("/api/bookings/");
    } else {
      console.error(response.status);
    }
  }
  console.log(new Date());

  useEffect(() => {
    const targetHour = 0o1;
    const targetMinute = 11;
    const calculateTimeUntilTarget = () => {
      const now = new Date();
      const targetTime = new Date(now);
      targetTime.setHours(targetHour);
      targetTime.setMinutes(targetMinute);
      targetTime.setSeconds(0);
      if (now > targetTime) {
        // Wenn die gewünschte Zeit heute bereits vergangen ist, setze es auf morgen
        targetTime.setDate(targetTime.getDate() + 1);
      }
      return targetTime.getTime() - now.getTime();
    };
    const timeoutId = setTimeout(() => {
      deletePastBookings(bookings); // Führe die Funktion aus
      const timeUntilNextExecution = calculateTimeUntilTarget();
      setTimeout(checkAndExecute, timeUntilNextExecution);
    }, calculateTimeUntilTarget());
    const checkAndExecute = () => {
      deletePastBookings(bookings); // Führe die Funktion aus
      const timeUntilNextExecution = calculateTimeUntilTarget();
      setTimeout(checkAndExecute, timeUntilNextExecution);
    };
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  //showing list
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

  if (bookings.length === 0) {
    return (
      <StyledEmptyBookings>
        No Bookings, go and plan your training 🐴🥳!
      </StyledEmptyBookings>
    );
  }

  //Delete Booking
  async function handleDeleteBooking() {
    const response = await fetch(`/api/bookings/${selectedEntry}`, {
      method: "DELETE",
    });
    if (response.ok) {
      await response.json();
      mutate("/api/bookings/");
    } else {
      console.error(response.status);
    }
    setShowConfirmation(false);
  }

  // Sorting the bookings
  const sortedBookings = [...bookings].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA - dateB;
  });

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
        {sortedBookings.map((entry) => {
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
