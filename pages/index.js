import Heading from "../components/Heading";
import BookedArenas from "../components/HomeArenaList";
import Navigation from "../components/Navigation";
import BookArenaButton from "../components/BookArenaButton";

export default function Home() {
  return (
    <main>
      <Heading>Hello, Ally!</Heading>
      <BookArenaButton />
      <BookedArenas />
      <Navigation />
    </main>
  );
}
