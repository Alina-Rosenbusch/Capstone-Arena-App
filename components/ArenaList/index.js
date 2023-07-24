import { arenaList } from "../../lib/mock";
import styled from "styled-components";

export default function ListArenas() {
  return (
    <>
      {arenaList.map((arena) => {
        return (
          <StyledArenaList key={arena.id} className="arenaListEntry">
            <p className="arena">{arena.arenaName}</p>
          </StyledArenaList>
        );
      })}
    </>
  );
}

const StyledArenaList = styled.div`
  background-color: #a4b9a0;
  border-radius: 10px;
  padding: 20px;
  margin: 30px 70px;
  width: 180px;
  height: 180px;
`;
