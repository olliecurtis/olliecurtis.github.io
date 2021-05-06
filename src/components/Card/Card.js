import React from 'react';
import './Card.scss';

const Card = props => {
  const { title, subtitle, href, blank, ...rest } = props;
  const blankProps = { target: '_blank', rel: 'noopener noreferrer' };

  return (
    <div className="Card_wrapper">
      <a href={href} className="Card" {...blankProps} {...rest}>
        <div className="Card_Title">{title}</div>
        <br />
        <div className="Card_Subtitle">{subtitle}</div>
      </a>
    </div>
  );
};

export default Card;
