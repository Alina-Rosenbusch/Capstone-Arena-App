import ListArenas from "../components/ArenaList";
import styled from "styled-components";
import Heading from "../components/Heading";
import Navigation from "../components/Navigation";

export default function ArenaList() {
  return (
    <main>
      <Heading>Arena Overview</Heading>
      <ListArenas />
      <Navigation />
    </main>
  );
}
