import styled from "styled-components";

export const Container = styled.div`
  width: calc(100vw - 340px);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  overflow-x: scroll;
  padding: 8px 12px;

  &::-webkit-scrollbar {
    width: 4px; 
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent; 
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.textPrimary}; 
    border-radius: 20px; 
  }

  @media (max-width: 794px) {
    width: 90vw;
  }
`;

export const Profile = styled.div`
  position: relative;
  width: 74px;
  height: 74px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
`;
