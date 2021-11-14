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
`;

export const ContentContainer = styled.footer`
  width: calc(100% - 2rem - 48px);
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 1rem;
  padding-right: 6rem;
  gap: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  margin-left: 48px;
  background: ${({ theme }) => theme.colors.primary.main};

  h2 {
    font-size: 1rem;
  }

  p {
    font-size: 0.875rem;
  }

  div:not(:first-child) {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  div:first-child {
    position: absolute;
    right: 1rem;
    background: ${({ theme }) => theme.colors.primary.light};
    border-color: ${({ theme }) => theme.colors.border};
  }

  span {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const LanguageContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;
