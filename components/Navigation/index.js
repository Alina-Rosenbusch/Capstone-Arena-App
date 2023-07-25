import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { GoHome } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import { PiHorse } from "react-icons/pi";

export default function Navigation() {
  const router = useRouter();

  return (
    <Nav>
      <Link
        className={router.pathname === "/" ? "active" : "navLink"}
        href="/"
        alt="home"
      >
        <GoHome />
      </Link>
      <Link
        className={router.pathname === "/arenaoverview" ? "active" : "navLink"}
        href="/arenaoverview"
        alt="arenas"
      >
        <PiHorse />
      </Link>
      <Link
        className={router.pathname === "/profil" ? "active" : "navLink"}
        href="#"
        alt="profil"
      >
        <AiOutlineUser />
      </Link>
    </Nav>
  );
}

const Nav = styled.nav`
  background-color: #999999;
  padding: 1rem;
  position: fixed;
  height: 70px;
  bottom: 0px;
  right: 0;
  left: 0;
  text-decoration: none;
  display: flex;
  justify-content: space-around;

  .navLink {
    color: #6e4864;
    text-decoration: none;
  }

  .active {
    color: #354531;
  }

  svg {
    font-size: 50px;
  }
`;
