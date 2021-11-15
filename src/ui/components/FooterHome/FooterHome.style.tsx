import styled from "styled-components";

export const FooterContainer = styled.footer`
  height: 7.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 1rem;
  margin-top: auto;
  position: relative;

  @media (max-width: 1000px) {
    height: 10rem;
    margin-top: -10rem;
    flex-direction: column;
    justify-content: space-evenly;
  }

  @media (max-width: 500px) {
    height: 20rem;
    margin-top: -20rem;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export const BorderFooter = styled.img`
  position: absolute;
  bottom: 120px;
  left: 0;

  @media (max-width: 1000px) {
    left: 50%;
    top: -10px;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 30px;
  }
`;

export const AtroMona = styled.img`
  position: absolute;
  height: 500px;
  bottom: 70px;
  right: 0;

  @media (max-width: 1000px) {
    left: 50%;
    top: -100px;
    transform: translate(-50%, -50%);
    width: 250px;
  }
`;
