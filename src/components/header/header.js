/** @jsx jsx */
import { jsx, Container, Flex, Button, Text } from "theme-ui";
import { keyframes } from "@emotion/core";
import { Link as Scroll } from "react-scroll";
import Link from "next/link";
import Logo from "components/logo";
import LogoDark from "assets/logo.png";
import MobileDrawer from "./mobile-drawer";

export default function Header({ className }) {
  return (
    <header sx={styles.header} className={className} id="header">
      <Container sx={styles.container}>
        <Logo src={LogoDark} />
        <Flex as="nav" sx={styles.nav}>
          <Scroll
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            Home
          </Scroll>
          <Scroll
            activeClass="active"
            to="feature"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            Features
          </Scroll>
          <Scroll
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            Services
          </Scroll>
          <Scroll
            activeClass="active"
            to="pricing"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            Pricing
          </Scroll>
          <Scroll to="#" activeClass="active">
            <Link href="/blog">
              <span sx={{ color: "white" }}>Blog</span>
            </Link>
          </Scroll>
        </Flex>
        <Link href="/contact">
          <Button
            className="contact__btn"
            variant="secondary"
            aria-label="contact">
            Contact
          </Button>
        </Link>
        <MobileDrawer />
      </Container>
    </header>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: "white",
    fontWeight: "body",
    py: 4,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    transition: "all 0.4s ease",
    animation: `${positionAnim} 0.4s ease`,
    ".contact__btn": {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ["auto", null, null, null, 0],
    },
    "&.sticky": {
      position: "fixed",
      backgroundColor: "background",
      color: "cornflower-blue",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
      py: 3,
      "nev > a": {
        color: "text",
      },
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nav: {
    mx: "auto",
    display: "none",
    "@media screen and (min-width: 1024px)": {
      display: "block",
    },
    a: {
      fontSize: 2,
      fontWeight: "body",
      px: 5,
      cursor: "pointer",
      lineHeight: "1.2",
      transition: "all 0.15s",
      "&:hover": {
        color: "primary",
      },
      "&.active": {
        color: "primary",
      },
    },
  },
};
