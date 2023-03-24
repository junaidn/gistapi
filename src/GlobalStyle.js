import { createGlobalStyle } from "styled-components";
import { COLORS } from "./utils/colors";

const GlobalStyles = createGlobalStyle`
  body{
    margin: 0;
    font-family: Helvetica Neue,Helvetica,Segoe UI,Arial,freesans,sans-serif;
    color: #626465;
  }
  *{
    box-sizing: border-box;
  }
  h3{
    color: ${COLORS.blue};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 200px;
  }
`;

export default GlobalStyles;
