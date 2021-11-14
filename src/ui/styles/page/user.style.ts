import styled, { css } from "styled-components";

export const UserPageContainer = styled.main`
  height: calc(100vh - 62px);
  display: grid;
  grid-template-columns: 28vw 1fr;
`;

export const RepositoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary.main};
  padding: 3rem 1.5rem;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
`;

export const RepositoriesTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  h2 {
    font-size: 16px;
  }

  div {
    background-color: ${({ theme }) => theme.colors.success.main};
    border: 0;
    color: ${({ theme }) => theme.colors.background};
  }
`;

interface RepositoriesListProps {
  loading: string;
}

export const RepositoriesList = styled.div<RepositoriesListProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 1rem;

  ${({ loading }) =>
    !loading &&
    css`
      align-items: center;
    `}

  p {
    &:hover {
      text-decoration: underline;
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
`;
