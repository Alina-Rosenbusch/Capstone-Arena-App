import Heading from "../components/Heading";
import BookedArenas from "../components/HomeArenaList";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <main>
      <Heading>Hello, Ally!</Heading>
      <BookedArenas />
      <Navigation />
    </main>
  );
}
