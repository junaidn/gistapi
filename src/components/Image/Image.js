import React, { useRef } from "react";
import { IMAGE_ALT } from "../../locales/common";
import { DEFAULT_IMAGE } from "../../utils/images";
import { Img } from "../StyledComponents";

export const Image = ({ src, alt = IMAGE_ALT, ...props }) => {
  const ref = useRef(null);
  return (
    <Img
      {...props}
      ref={ref}
      src={src || DEFAULT_IMAGE}
      alt={alt}
      onError={() => {
        if (ref.current) {
          ref.current.src = DEFAULT_IMAGE;
        }
      }}
    />
  );
};
