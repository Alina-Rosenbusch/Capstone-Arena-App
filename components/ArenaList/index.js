// import { arenaList } from "../../lib/mock";
import styled from "styled-components";
import useSWR from "swr";
import { useState } from "react";


const ListArenas = () => {
  const { data: arenas, error } = useSWR("/api/arenas");
  const [isReady, setIsReady] = useState(false);

  if (!arenas && !error) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  if (!isReady) {
    setIsReady(true);
  }

  return (
    <>
      {arenas.map((arena) => {
        return (
          <StyledArenaList key={arena._id} className="arenaListEntry">
            <p className="arena">{arena.arenaName}</p>
          </StyledArenaList>
        );
      })}
    </>
  );
};

export default ListArenas;

const StyledArenaList = styled.div`
  background-color: #a4b9a0;
  border-radius: 10px;
  padding: 20px;
  margin: 30px 70px;
  width: 180px;
  height: 180px;
`;
