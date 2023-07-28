
import styled from "styled-components";
import useSWR from "swr";
import { useState } from "react";

const BookedArenas = () => {
  const { data: bookings, error } = useSWR("/api/bookings/index");
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
          </StyledArena>
        );
      })}
    </>
  );
};

export default BookedArenas;

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
    right: 25px;
  }

  .entry_date {
    position: absolute;
    right: 25px;
    margin-top: -15px;
  }
`;
