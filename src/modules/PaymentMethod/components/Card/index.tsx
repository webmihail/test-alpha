import { FC, useState } from "react";

import { ICardProps } from "modules/PaymentMethod/interfaces";
import Tag from "modules/PaymentMethod/components/Tag";
import CardModal from "modules/PaymentMethod/components/CardModal";

import "./card.scss";

const Card: FC<ICardProps> = (props) => {
  const { tagType, name, commission, hasTag, image, items } = props || {};
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="card-container" onClick={() => setIsModalOpen(true)}>
      <img className="card-image" src={image} alt={`${name} icon`} />
      <div className="card-name">{name}</div>
      <div className="card-description">{`Commission ${commission}%`}</div>
      {hasTag && <Tag type={tagType} />}
      <CardModal
        {...props}
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        items={items}
        backButtonName="Back to Payment Methods"
      />
    </div>
  );
};

export default Card;
