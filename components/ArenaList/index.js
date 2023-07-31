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
          <StyledArenaListWrapper key={arena._id}>
            <StyledArenaList>
              <StyledArenaListName>{arena.arenaName}</StyledArenaListName>
            </StyledArenaList>
          </StyledArenaListWrapper>
        );
      })}
    </>
  );
};

export default ListArenas;

const StyledArenaListWrapper = styled.ul`
  padding: 0px;
`;

const StyledArenaList = styled.li`
  background-color: #a4b9a0;
  border-radius: 10px;
  padding: 20px;
  margin: 30px 70px;
  width: 180px;
  height: 180px;
  list-style: none;
`;

const StyledArenaListName = styled.p`
  font-weight: bold;
`;
