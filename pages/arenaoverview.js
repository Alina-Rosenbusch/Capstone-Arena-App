import ListArenas from "../components/ArenaList";
import Router from "next/router";
import styled from "styled-components";
import Heading from "../components/Heading";

export default function ArenaList() {
  return (
    <>
      <Heading>Arena Overview</Heading>
      <GridWrapper>
        <ListArenas />
      </GridWrapper>
    </>
  );
}

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  max-width: 1200px;
  margin: 0 auto;
  gap: 1rem;
`;
