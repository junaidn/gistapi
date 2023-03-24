import React from "react";
import { Button } from "../StyledComponents";
import { iconButtonStyles } from "./Styles";

export const IconButton = ({ text, icon, onClick, title, ...props }) => {
  return (
    <Button {...props} onClick={onClick} title={title}>
      <div style={iconButtonStyles.content}>
        {icon}
        <span>{text}</span>
      </div>
    </Button>
  );
};
