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
      <StyledArenaListWrapper>
        {arenas.map((arena) => {
          return (
            <StyledArenaList key={arena._id}>
              <StyledArenaListName>{arena.arenaName}</StyledArenaListName>
            </StyledArenaList>
          );
        })}
      </StyledArenaListWrapper>
    </>
  );
};

export default ListArenas;

const StyledArenaListWrapper = styled.ul`
  padding: 0px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  max-width: 800px;
  margin: 0 auto;
  gap: 1rem;
  padding-bottom: 70px;
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
