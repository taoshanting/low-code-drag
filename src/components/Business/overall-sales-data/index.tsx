/**
 * 直销：整体销售数据组件
 */
import React, { useState, useEffect } from 'react';
import { Skeleton, Tooltip} from 'antd';
import { Constant } from '@/common';
import LeftRightCard from '../left-right-card'
import NothingContent from '../nothing-content'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import './index.less';

interface OTProps {
  overallData: any;
  mytdData: any;
  startDate: string;
  endDate: string;
  noDataMtd?: boolean;
  noData?: boolean;
  unit: any;
  isToday?: boolean;
  isAfter2412?: boolean;
  [key: string]: any;
}

const cardMap = {
  outAmt: '出额',
  sign: '签约',
  preLoan: '待放',
  loan: '放款'
};

const overallData = {
  loanInfo:{
    "allOutAmtCnt": "66,016",
    "allSignPsCnt": "20,424",
    "allSignPsAmt": "62,593",
    "allPreLoanCnt": "88,003",
    "allPreLoanAmt": "39,647",
    "allLoanCnt": "10,126",
    "allLoanAmt": "77,760",
    "workDayKpi": "2,330",
    "workDayRate": "41.6%",
    "newlawWorkDayRate": "148.3%",
    "mainLoanCnt": "34,785",
    "mainLoanAmt": "42,820",
    "xcgLoanCnt": "60,562",
    "xcgLoanAmt": "10,413",
    "lyhLoanCnt": "7,797",
    "lyhLoanAmt": "13,935",
    "bdOutAmtCnt": "26,968",
    "bdSignPsCnt": "82,184",
    "bdSignPsAmt": "63,332",
    "bdLoanCnt": "72,666",
    "bdLoanAmt": "86,655",
    "bdPhAllOutAmtCnt": "87,188",
    "bdPhNewOutAmtCnt": "86,123",
    "bdPhTPOutAmtCnt": "70,004",
    "bdPhRlOutAmtCnt": "65,222",
    "bdPhAllSignPsCnt": "5,375",
    "bdPhAllSignPsAmt": "75,419",
    "bdPhNewSignPsCnt": "13,794",
    "bdPhNewSignPsAmt": "64,357",
    "bdPhTpSignPsCnt": "99,320",
    "bdPhTpSignPsAmt": "46,270",
    "bdPhRlSignPsCnt": "31,454",
    "bdPhRlSignPsAmt": "40,524",
    "bdPhAllLoanCnt": "76,224",
    "bdPhAllLoanAmt": "92,656",
    "bdPhNewLoanCnt": "26,038",
    "bdPhNewLoanAmt": "6,819",
    "bdPhTpLoanCnt": "12,874",
    "bdPhTpLoanAmt": "97,841",
    "bdPhRlLoanCnt": "44,358",
    "bdPhRlLoanAmt": "87,722",
    "bdXjAllLoanCnt": "82,318",
    "bdXjAllLoanAmt": "12,537",
    "bdXjLyhLoanCnt": "14,754",
    "bdXjLyhLoanAmt": "76,889",
    "bdXjXcgLoanCnt": "23,161",
    "bdXjXcgLoanAmt": "25,465",
    "bdXjXeLoanCnt": "84,888",
    "bdXjXeLoanAmt": "37,824",
    "houseOutAmtCnt": "13,049",
    "houseSignPsCnt": "83,153",
    "houseSignPsAmt": "87,096",
    "houseLoanCnt": "94,437",
    "houseLoanAmt": "62,421",
    "houseNewLoanCnt": "86,570",
    "houseNewLoanAmt": "23,792",
    "houseRecurLoanCnt": "28,526",
    "houseRecurLoanAmt": "6,743",
    "houseRlLoanCnt": "68,070",
    "houseRlLoanAmt": "85,881",
    "carOutAmtCnt": "351",
    "carSignPsCnt": "58,362",
    "carSignPsAmt": "10,297",
    "carLoanCnt": "17,300",
    "carLoanAmt": "32,827",
    "carNewLoanCnt": "23,176",
    "carNewLoanAmt": "54,027",
    "carTpLoanCnt": "7,885",
    "carTpLoanAmt": "19,084",
    "carRlLoanCnt": "44,436",
    "carRlLoanAmt": "93,751",
    "carPlusPrepLoanAmt": "16,702",
    "carPlusPrepLoanAmtRate": "39.1%",
    "easyLoanCnt": "73,270",
    "easyLoanAmt": "98,321",
    "stdlRightLoanCnt": "38,632",
    "stdlRightLoanAmt": "194.7%"
}
}

const OverallSalesData = (props: OTProps) => {
  const {
    startDate,
    endDate,
    isToday,
    mytdData,
    // overallData = {},
    noDataMtd,
    noData,
    isShowBasicLaw,
    unit,
    batchStatus,
    easyLoanAndStdRightDisplay
  } = props;

  const [cardData, setCardData] = useState([] as Array<any>);
  const unitMap: any = Constant.UNIT_CONFIG_NAME;
  const unitName: any = unitMap[unit];
 
  // 添加 icon 图标和浮层文案,iconItem 表示用来区分是否添加 icon
  const renderTooltip = (iconItem: any) => {
    const {
      carPlusPrepLoanAmt,
      carPlusPrepLoanAmtRate,
      allLoanCnt,
      allLoanAmt,
      lyhLoanCnt,
      lyhLoanAmt,
      easyLoanCnt,
      easyLoanAmt,
      stdlLoanAmt,
      stdlLoanCnt
    } = overallData.loanInfo;
    let tooltipTitle;
    switch (iconItem.title) {
      case 'preLoan': // 待放
        tooltipTitle = (
          <>
            含车抵1+1待办押：{carPlusPrepLoanAmt || '--'}
            {unitName} (占比 {carPlusPrepLoanAmtRate})
          </>
        );
        break;
      case 'loan': // 放款
        tooltipTitle = (
          <div>
            <div>
              放款合计共
              <span>{allLoanCnt}件，</span>
              <span style={{ marginLeft: '5px' }}>
                {allLoanAmt}
                {unitName}
              </span>
              ，其中：
            </div>
            {easyLoanAndStdRightDisplay === '1' && (
              <div>
                - 融易放款：<span>{easyLoanCnt}件，</span>
                <span style={{ marginLeft: '5px' }}>
                  {easyLoanAmt}
                  {unitName}
                </span>
              </div>
            )}
            <div>
              - 陆易花放款：<span>{lyhLoanCnt}件，</span>
              <span style={{ marginLeft: '5px' }}>
                {lyhLoanAmt}
                {unitName}
              </span>
            </div>
            {easyLoanAndStdRightDisplay === '1' && (
              <div>
                - 生态项目放款：<span>{stdlLoanCnt}件，</span>
                <span style={{ marginLeft: '5px' }}>
                  {stdlLoanAmt}
                  {unitName}
                </span>
              </div>
            )}
            {!isToday && (
              <div className="remark">
                总部至四级机构层级无抵TP、陆易花追加产品以放款时间统计
                <br />
                业绩，不考虑动用情况；咨询中心及以下层级无抵TP、陆易花
                <br />
                追加产品以放款时间统计业绩，若动用未满30天则回溯核减。
              </div>
            )}
          </div>
        );
        break;
      default:
        break;
    }
    return (
      tooltipTitle && (
        <Tooltip
          placement="top"
          trigger="hover"
          overlayClassName="ds-tool-tip"
          title={tooltipTitle}
          arrowPointAtCenter>
          <ExclamationCircleOutlined />
        </Tooltip>
      )
    );
  };

 
  

  /**
   * 提示文案特殊场景说明：如当日实时页面下历史数据未跑完时：
   *    每年 1 月 1 日，页面不做提示，数据均为当日实时数据。
   *    每年 1 月 2 日，异常文案：T-1 日历史数据计算中，当前数据为今日实时数据。
   *    每月 1 号（非 1 月），异常文案：T-1日历史数据计算中，YTD当前数据为截至T-2日历史数据。
   *    每月 2 号（非 1 月），异常文案：T-1日历史数据计算中，YTD当前数据为截至T-2日历史数据。
   *    其他常规日期时，异常文案：T-1 日历史数据计算中，当前数据为截至 T-2 日历史数据
   */
 

 
  // 处理卡片数据
  useEffect(() => {
    const data = overallData?.loanInfo || {};
    let cardList = [
      {
        title: 'outAmt',
        colors: ['#5E7DB9', '#3C5B98'],
        countUnit: '件',
        countNum: data.allOutAmtCnt || ''
      },
      {
        title: 'sign',
        colors: ['#6EA5C8', '#5D8CAA'],
        countUnit: '件',
        countNum: data.allSignPsCnt || '',
        amountUnit: unitName,
        amountNum: data.allSignPsAmt || ''
      },
      {
        title: 'preLoan',
        colors: ['#E2B76C', '#CF993D'],
        countUnit: '件',
        countNum: data.allPreLoanCnt || '',
        amountUnit: unitName,
        amountNum: data.allPreLoanAmt || ''
      },
      {
        title: 'loan',
        colors: ['#59AFA8', '#008378'],
        countUnit: '件',
        countNum: data.allLoanCnt || '',
        amountUnit: unitName,
        amountNum: data.allLoanAmt || ''
      }
    ];
    // 选择时间段时  不展示待放卡片
    if (startDate !== endDate) {
      cardList = cardList.filter((item: any) => {
        return item.title !== 'preLoan';
      });
    }
    setCardData(cardList);
  }, [overallData, unitName, startDate, endDate]);

 

  return (
    <div className="new-ds-overall-sales-data-section">
      <h3 className="td-chart-section-title">整体销售数据</h3>
      {!noData ? (
        <div className="td-card-list">
          {Object.keys(overallData).length > 0 ? (
            cardData.length > 0 &&
            cardData.map((item, i) => {
              return (
                <LeftRightCard
                  data={item}
                  key={i}
                  cardMap={cardMap}
                  fontSize="card-num-m"
                  flexDirection="row"
                  renderTooltip={renderTooltip(item)}
                />
              );
            })
          ) : (
            <Skeleton active />
          )}
        </div>
      ) : (
        <NothingContent />
      )}
 
    </div>
  );
};

export default OverallSalesData;
