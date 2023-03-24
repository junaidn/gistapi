import styled from "styled-components";
import { COLORS } from "../utils/colors";

// Styled and common components will be here

export const Container = styled.div`
  width: 630px;
  height: auto;
  padding: 12px 6px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const Img = styled.img`
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const Button = styled.button`
  height: 30px;
  background: ${COLORS.white};
  border: 0;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.onahau};
  }
`;
