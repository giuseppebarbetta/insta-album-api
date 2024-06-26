import styled, { css } from "styled-components";

export const Container = styled.header`
  width: 100%;
  padding: 20px 20px 10px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 100px;

  @media (max-width: 915px) {
    padding: 20px 20px 10px 20px;
  }

  @media (max-width: 505px) {
    gap: 26px;
  }

  @media (max-width: 435px) {
    display: none;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;

  outline: none;
  border-radius: 20px;
  padding: 13px 38px;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  ${(props) => css`
    background-color: ${props.theme.primary};
    border: 1px solid ${props.theme.secondary};
    box-shadow: 0px 0px 13px 2px ${props.theme.boxShadow};
    color: ${props.theme.textSecondary};
  `}

  &::placeholder {
    color: ${(props) => props.theme.textSecondary};
  }
`;

export const ContainerActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  .icon {
    font-size: 24px;
    color: ${(props) => props.theme.textPrimary};
    cursor: pointer;

    &:hover {
      opacity: 0.6;
    }
  }
`;

export const Button = styled.button`
    width: 110px;
    height: 40px;

    background: linear-gradient(90deg, #F093FB 0%, #F5576C 100%);
    border-radius: 22.5px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    color: #ffffff;
    border: none;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }
`;
