import styled from "styled-components";

export const HeaderContainer = styled.div``;

export const HeaderContent = styled.div`
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  margin: 0 auto;

  > img {
    width: 32px;
    height: 32px;
  }
`;

export const Avatar = styled.div`
  padding: 2px;
  background: linear-gradient(100deg, #fff 0.48%, #000 100%);
  border-radius: 50%;
  line-height: 0;

  img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 2px solid #121214;
  }
`;
