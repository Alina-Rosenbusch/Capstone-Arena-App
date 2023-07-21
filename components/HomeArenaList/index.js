import trainingData from "../../public/mock.js";
import styled from "styled-components";

export default function BookedArenas() {
  return (
    <>
      {trainingData.map((entry) => {
        return (
          <StyledArena key={entry.id} className="entry">
            <h3>{entry.title}</h3>
            <h4>{entry.bookedArena}</h4>
            <p>{entry.bookedPerson}</p>
            <p className="entry_time">{entry.time}</p>
            <p className="entry_date">{entry.date}</p>
          </StyledArena>
        );
      })}
    </>
  );
}

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
