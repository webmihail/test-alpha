import { FC } from "react";

import { TagType } from "modules/PaymentMethod/enums";
import { ITagProps } from "modules/PaymentMethod/interfaces";

import "./tag.scss";

const Tag: FC<ITagProps> = ({ type }) => {
  return (
    <div className={type === TagType.Popular ? "tag-popular" : "tag-trusted"}>
      {type.toUpperCase()}
    </div>
  );
};

export default Tag;
