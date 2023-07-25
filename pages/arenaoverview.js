import ListArenas from "../components/ArenaList";
import styled from "styled-components";
import Heading from "../components/Heading";
import Navigation from "../components/Navigation";

export default function ArenaList() {
  return (
    <>
      <Heading>Arena Overview</Heading>
      <GridWrapper>
        <ListArenas />
      </GridWrapper>
      <Navigation />
    </>
  );
}

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  max-width: 1200px;
  margin: 0 auto;
  gap: 1rem;
  padding-bottom: 70px;
`;
