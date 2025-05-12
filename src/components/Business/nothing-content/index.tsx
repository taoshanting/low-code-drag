/**
 * 数据统计中
 */
import React from 'react';
import './index.less';
import nothingImg from '@/assets/img/nothing_load.png';

const NothingContent = (props: any) => {
  const {
    img = nothingImg,
    color = '#fff',
    nothingText = '数据统计中'
  } = props;
  return (
    <div className="nothing-content" style={{ backgroundColor: `${color}` }}>
      <div className="nothing-content-main">
        < img src={img} className="nothing-img" alt="" />
        <p className="nothing-text">{nothingText}</p >
      </div>
    </div>
  );
};

export default NothingContent;