import styled from "styled-components";

export const EventCardContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;
  width: 100%;

  hr {
    width: calc(100% - 2rem);
    margin-top: 1rem;
  }

  @media (max-width: 1000px) {
    width: calc(100% - 1rem);
    padding: 1rem;
  }
`;

export const ContentContainer = styled.footer`
  width: calc(100% - 2rem - 3rem);
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 1rem;
  padding-right: 6rem;
  gap: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  margin-left: 3rem;
  background: ${({ theme }) => theme.colors.primary.main};
  overflow-x: hidden;
  white-space: nowrap;

  h2 {
    font-size: 1rem;
  }

  p {
    font-size: 0.875rem;
  }

  div:first-child {
    position: absolute;
    right: 1rem;
    background: ${({ theme }) => theme.colors.primary.light};
    border-color: ${({ theme }) => theme.colors.border};
  }

  div:not(:first-child) {
    display: flex;
    align-items: center;
    gap: 1rem;
    max-width: 100%;
    white-space: nowrap;
    flex-wrap: wrap;
    flex-direction: row;
  }

  span {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  @media (max-width: 1000px) {
    margin-top: 1rem;
    margin-left: 2rem;
    width: calc(100%);
  }
`;

export const LanguageContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;
