import React from "react";
import { IconButton } from "../IconButton/IconButton";
import { Image } from "../Image/Image";
import { Container, Row } from "../StyledComponents";
import { gistStyle } from "./Styles";
import {
  RiCodeSFill,
  TbGitFork,
  BiMessage,
  BsStarFill,
  RiFileTextLine,
} from "react-icons/all";
import { formatDate } from "../../utils/date";

export const Gist = (props) => {
  return (
    <Container>
      <Row>
        <div style={gistStyle.flexGap}>
          <Image src={props.image} />
          <h3 title={props.userName}>{props.userName}</h3>
        </div>
        <div style={gistStyle.flexGap}>
          <IconButton
            title="File count"
            text={`${Object.keys(props.files).length} Files`}
            icon={<RiCodeSFill size={16} />}
          />
          <IconButton
            title="Forks"
            text="Forks"
            icon={<TbGitFork size={16} />}
          />
          <IconButton
            title="Comments"
            text="Comments"
            icon={<BiMessage size={16} />}
          />
          <IconButton
            title="Stars"
            text="Stars"
            icon={<BsStarFill size={16} />}
          />
        </div>
      </Row>
      <Row>
        <div style={gistStyle.flexGap}>
          <p>Created at: {formatDate(props.createdAt)}</p>
          <p>Last updated: {formatDate(props.updatedAt)}</p>
        </div>
      </Row>
      <Row>
        <h4>{props.description}</h4>
      </Row>
      <Row>
        {/** To check object length, we use Object.keys */}
        {/** To iterate through object keys and get values, we user Object.values*/}
        {Object.keys(props.files).length > 0 &&
          Object.values(props.files).map((file, index) => (
            <IconButton
              key={index}
              title={file.filename}
              text={file.filename}
              icon={<RiFileTextLine size={16} />}
            />
          ))}
      </Row>
    </Container>
  );
};
