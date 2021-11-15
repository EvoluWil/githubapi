import styled, { css } from "styled-components";

export const RepositoryPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const TitleRepositoryDetail = styled.div`
  display: flex;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 2rem;

  h2 {
    color: ${({ theme }) => theme.colors.text.link};
    font-size: 1.25rem;
  }

  i {
    font-size: 1.25rem;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    height: 1.25rem;
    padding: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.text.secondary};
    border-radius: 2em;
  }
`;

export const RepositoryData = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  flex: 1;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;

export const RepositoryTreeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;

  > div {
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${({ theme }) => theme.colors.primary.main};
    overflow-x: hidden;
  }

  ul {
    width: 100%;
    list-style: none;
  }
  li > a {
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    width: 100%;
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    overflow-x: hidden;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
    }

    h3 {
      width: 30%;
      color: ${({ theme }) => theme.colors.text.primary};

      @media (max-width: 1000px) {
        width: 70%;
      }
    }
    p {
      width: 50%;
      @media (max-width: 1000px) {
        display: none;
      }
    }

    span {
      white-space: nowrap;
    }
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const CommitContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  white-space: nowrap;

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.text.secondary};

    &:first-child {
      font-size: 0.75rem;
    }

    @media (max-width: 1000px) {
      &:nth-child(2) {
        display: none;
      }
    }
  }

  a {
    color: ${({ theme }) => theme.colors.text.primary};

    transition: color 0.2s;
    &:hover {
      color: ${({ theme }) => theme.colors.text.link};
    }
  }
`;

export const RepositoryInfo = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const ReleasesContainer = styled.div`
  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    div {
      padding: 0.125rem 0.5rem;
      border: 1px solid ${({ theme }) => theme.colors.success.main};
      border-radius: 1em;
    }
    i,
    div {
      color: ${({ theme }) => theme.colors.success.main};
    }
  }
  span {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 0.75rem;
    margin-left: 20;
  }
`;

interface ProgressLanguageProps {
  color?: string;
}

export const ProgressLanguage = styled.div<ProgressLanguageProps>`
  p {
    margin-top: 0.25rem;
    font-size: 0.875rem;
  }

  progress {
    display: block;
    -webkit-appearance: none;

    &::-webkit-progress-bar {
      background: black;
      border-radius: 50px;
      padding: 2px;
      height: 0.75rem;
    }

    &::-webkit-progress-value {
      border-radius: 50px;
      ${({ color }) => css`
        background-color: ${color};
      `}
    }
  }

  div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`;

export const Tag = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  height: 1.25rem;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.text.secondary};
  border-radius: 2em;
`;

export const RepositoryRouteLink = styled.a`
  color: ${({ theme }) => theme.colors.text.link};
  transition: text-decoration 0.2s;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const LoadingContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 3rem;
`;

export const Display = styled.a`
  @media (max-width: 1000px) {
  }
`;
