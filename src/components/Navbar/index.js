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
import styled, { keyframes } from "styled-components";

// Keyframes for the continuous pulsing animation
const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(107, 200, 83, 0.5);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(107, 200, 83, 0.7);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 10px rgba(107, 200, 83, 0.5);
  }
`;



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

          <span className="">Hassan</span>
          <span className="text-[#854CDA]">{"/"}</span>
          <span className="">Ali</span>
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
          <NavLink href="#education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <AnimatedButton
            style={{ display: "flex", alignItems: "center" }}
            href={
              "https://www.upwork.com/freelancers/~0130423deb04b204f0?referrer_url_path=%2Fnx%2Fsearch%2Ftalent%2Fdetails%2F~0130423deb04b204f0%2Fprofile"
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
              href="https://www.upwork.com/freelancers/~0130423deb04b204f0?referrer_url_path=%2Fnx%2Fsearch%2Ftalent%2Fdetails%2F~0130423deb04b204f0%2Fprofile"
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
