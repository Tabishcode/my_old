import React from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  NavLogo,
  NavItems,
  CallButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
} from "./NavbarStyledComponent";
import { FaBars } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { useTheme } from "styled-components";
import styled from "styled-components";





// Styled component for the button with continuous pulsing effect
const AnimatedButton = styled(CallButton)`
  display: flex;
  align-items: center;
  padding: 10px 20px;
   /* Upwork's green color */
  color: white;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: bold;
  &:hover { /* Continuous pulsing animation */
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(107, 200, 83, 0.5);
}

  /* On hover, apply bounce effect and change shadow/scale */
  
`;

// Upwork Text styling
const UpworkText = styled.span`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 1rem;
  color: white;
  transition: color 0.3s ease;

  /* Hover color effect */
  &:hover {
    color: #ffffff;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/" className="text-white text-3xl font-bold space-x-1">
          <span className="text-[#854CDA] text-3xl">{"<"}</span>

          <span className="">Tabish</span>
          <span className="text-[#854CDA]">{"/"}</span>
          <span className="">Akhtar</span>
          <span className="text-[#854CDA] text-3xl">{">"}</span>
          {/* <DiCssdeck size="3rem" /> <Span>Portfolio</Span> */}
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavItems>
        <ButtonContainer>
          <AnimatedButton
            style={{ display: "flex", alignItems: "center" }}
            href={
              " "
            }
            target="_blank"
          >
            <FaSquareUpwork style={{ marginRight: "8px" }} />
            <UpworkText>
              HIRE me @<span className="font-montserrat">Upwork</span>
            </UpworkText>
          </AnimatedButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => setIsOpen(!isOpen)}>
              About
            </MobileLink>
            <MobileLink href="#skills" onClick={() => setIsOpen(!isOpen)}>
              Skills
            </MobileLink>
            <MobileLink href="#experience" onClick={() => setIsOpen(!isOpen)}>
              Experience
            </MobileLink>
            <MobileLink href="#projects" onClick={() => setIsOpen(!isOpen)}>
              Projects
            </MobileLink>
            <MobileLink href="#education" onClick={() => setIsOpen(!isOpen)}>
              Education
            </MobileLink>
            <AnimatedButton
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href=" "
              target="_blank"
            >
              Hire Me @ Upwork
            </AnimatedButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
