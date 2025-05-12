/**
 * 卡片-左右布局
 */
import React from 'react';
import type { LeftRightCardProps } from './config';
import './index.less';

const LeftRightCard = (props: LeftRightCardProps) => {
  const {
    data,
    cardMap,
    fontSize = 'card-num-m',
    flexDirection = 'row',
    renderTooltip
  } = props;

  return (
    <>
      {data && (
        <div
          className={`td-card ${flexDirection}`}
          style={{
            background: `linear-gradient(to right, ${data.colors[0]}, ${data.colors[1]})`,
            flexDirection
          }}>
          <div className="card-title">
            {cardMap[data.title]}
            {renderTooltip}
          </div>
          <div className="card-sc">
            {data.countNum ? (
              <div className="card-count">
                <span className={`card-number ${fontSize}`}>
                  {data.countNum}
                </span>
                {data.countUnit && (
                  <span className="card-unit">({data.countUnit})</span>
                )}
              </div>
            ) : null}
            {data.amountNum ? (
              <div className="card-count">
                <span className={`card-number ${fontSize}`}>
                  {data.amountNum}
                </span>
                <span className="card-unit amount-unit">
                  ({data.amountUnit})
                </span>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};

export default LeftRightCard;
