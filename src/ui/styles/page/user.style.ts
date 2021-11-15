import styled, { css } from "styled-components";

export const UserPageContainer = styled.main`
  display: grid;
  grid-template-columns: 28vw 1fr;
  height: auto;
  min-height: 100vh;

  @media (max-width: 1000px) {
    max-width: 100vw;
    grid-template-columns: 1fr;

    section {
      max-width: calc(100vw - 1rem);
    }
  }
`;

export const RepositoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary.main};
  padding: 3rem 1.5rem;

  @media (max-width: 1000px) {
    max-width: 100%;
    background: ${({ theme }) => theme.colors.background};
    padding: 1rem;
  }
`;

export const RepositoriesTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  h2 {
    font-size: 1rem;
  }

  @media (max-width: 1000px) {
    h2 {
      font-weight: normal;
    }
  }
`;

export const RepositoriesList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 1rem;

  p {
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 1000px) {
    background: ${({ theme }) => theme.colors.primary.main};
    border-radius: 6px;
    margin: 0;
    padding: 1rem;
    width: 100%;

    img {
      width: 1rem;
      height: 1rem;
    }
  }
`;

export const EventsContainer = styled.div`
  width: 100%;
  padding-bottom: auto;
`;

export const EventsTitle = styled.h2`
  font-size: 1rem;
  padding: 3rem 0 0 2rem;
  font-weight: normal;

  @media (max-width: 1000px) {
    padding: 1rem;
  }
`;

export const ShowMore = styled.h2`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-top: 1rem;
  cursor: pointer;

  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.text.link};
  }

  @media (max-width: 1000px) {
    margin: 0;
    margin-bottom: 1rem;
  }
`;
