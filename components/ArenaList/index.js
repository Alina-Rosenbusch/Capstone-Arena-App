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
  padding: 0 0 70px 0;
  display: grid;
  position: relative;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  max-width: 375px;
  margin: 0 0 0 -45px;
  gap: 1rem;
`;

const StyledArenaList = styled.li`
  background-color: #a4b9a0;
  border-radius: 10px;
  padding: 20px;
  margin: 30px 70px;
  width: 130px;
  height: 130px;
  list-style: none;
`;

const StyledArenaListName = styled.p`
  font-size: medium;
  font-weight: bold;
`;
