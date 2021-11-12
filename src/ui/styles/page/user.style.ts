import styled from "styled-components";

export const UserPageContainer = styled.main`
  height: calc(100vh - 62px);
  display: grid;
  grid-template-columns: 30vw 70vw;
`;

export const RepositoriesContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary.main};
  padding-bottom: auto;
`;

export const EventsContainer = styled.div`
  width: 100%;
  padding-bottom: auto;
`;
