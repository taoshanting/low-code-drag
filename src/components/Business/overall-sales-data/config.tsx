import React from 'react';
import { Tooltip } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Utils } from '@/common';
import './index.less';

// YTD(有icon提示)
const ytdIcon = (month?: string) => (
  <Tooltip
    placement="top"
    trigger="hover"
    overlayClassName="ytd-tool-tip"
    title={`统计范围${Utils.getYtdTips(month)?.ytdTip}`}
    arrowPointAtCenter>
    <ExclamationCircleOutlined className="tool-tips-icon" />
  </Tooltip>
);

//  YTD截至本月提示
const ytdIconCutoffMonth = (month?: string) => (
  <Tooltip
    placement="top"
    trigger="hover"
    overlayClassName="ytd-tool-tip"
    title={`统计范围${Utils.getYtdTips(month)?.ytdStart}~${month}`}
    arrowPointAtCenter>
    <ExclamationCircleOutlined className="tool-tips-icon" />
  </Tooltip>
);
// mtd/ytd表头
const mYtdHeaderList = (cutoffMonth: string) => [
  {
    title: '整体',
    children: [
      {
        title: '日平台',
        children: [
          {
            title: '实际放款',
            dataIndex: 'loanAmt',
            key: 'loanAmt',
            width: 60
          },
          {
            title: 'KPI',
            dataIndex: 'workDayKpi',
            key: 'workDayKpi',
            width: 60
          },
          {
            className: 'border-deep',
            title: '达成率',
            dataIndex: 'workDayRate',
            key: 'workDayRate',
            width: 60
          }
        ]
      },
      {
        title: '月平台',
        children: [
          {
            title: '实际放款',
            dataIndex: 'loanAmtMtd',
            key: 'loanAmtMtd',
            width: 70
          },
          {
            title: 'KPI',
            dataIndex: 'kpiMtd',
            key: 'kpiMtd',
            width: 80
          },
          {
            className: 'border-deep',
            title: '达成率',
            dataIndex: 'mtdRate',
            key: 'mtdRate',
            width: 60
          }
        ]
      },
      {
        title: 'YTD',
        children: [
          {
            title: '实际放款',
            dataIndex: 'loanAmtYtd',
            key: 'loanAmtYtd',
            width: 80
          },
          {
            title: 'KPI',
            dataIndex: 'kpiYtd',
            key: 'kpiYtd',
            width: 80
          },
          {
            title: <>达成率{ytdIcon(cutoffMonth)}</>,
            dataIndex: 'ytdRate',
            key: 'ytdRate',
            width: 60
          },
          {
            title: '截至本月KPI',
            dataIndex: 'kpiYtdEndMtd',
            key: 'kpiYtdEndMtd',
            width: 80
          },
          {
            className: 'border-deep',
            title: (
              <>
                <div>截至本月</div>
                <div>达成率{ytdIconCutoffMonth(cutoffMonth)}</div>
              </>
            ),
            dataIndex: 'ytdEndMtdRate',
            key: 'ytdEndMtdRate',
            width: 80
          }
        ]
      }
    ]
  },
  {
    title: '无抵押',
    rowSpan: 2,
    children: [
      {
        rowSpan: 0,
        children: [
          {
            title: '当日',
            dataIndex: 'bdLoanAmt',
            key: 'bdLoanAmt',
            width: 60
          },
          {
            title: 'MTD',
            dataIndex: 'bdLoanAmtMtd',
            key: 'bdLoanAmtMtd',
            width: 80
          },
          {
            className: 'border-deep',
            title: 'YTD',
            dataIndex: 'bdLoanAmtYtd',
            key: 'bdLoanAmtYtd',
            width: 80
          }
        ]
      }
    ]
  },
  {
    title: '车抵押',
    rowSpan: 2,
    children: [
      {
        rowSpan: 0,
        children: [
          {
            title: '当日',
            dataIndex: 'carLoanAmt',
            key: 'carLoanAmt',
            width: 60
          },
          {
            title: 'MTD',
            dataIndex: 'carLoanAmtMtd',
            key: 'carLoanAmtMtd',
            width: 60
          },
          {
            className: 'border-deep',
            title: 'YTD',
            dataIndex: 'carLoanAmtYtd',
            key: 'carLoanAmtYtd',
            width: 60
          }
        ]
      }
    ]
  },
  {
    key: 'houseData',
    title: '房抵押',
    rowSpan: 2,
    children: [
      {
        rowSpan: 0,
        children: [
          {
            title: '当日',
            dataIndex: 'houseLoanAmt',
            key: 'houseLoanAmt',
            width: 60
          },
          {
            title: 'MTD',
            dataIndex: 'houseLoanAmtMtd',
            key: 'houseLoanAmtMtd',
            width: 60
          },
          {
            title: 'YTD',
            dataIndex: 'houseLoanAmtYtd',
            key: 'houseLoanAmtYtd',
            width: 60
          }
        ]
      }
    ]
  }
];
// 基本法mtd/ytd表头
const newLawMYtdHeaderList = (cutoffMonth: string) => [
  {
    title: '整体',
    children: [
      {
        title: '日平台',
        children: [
          {
            title: '实际放款',
            dataIndex: 'newlawLoanAmt',
            key: 'newlawLoanAmt',
            width: 60
          },
          {
            title: 'KPI',
            dataIndex: 'workDayKpi',
            key: 'workDayKpi',
            width: 60
          },
          {
            className: 'border-deep',
            title: '达成率',
            dataIndex: 'newlawWorkDayRate',
            key: 'newlawWorkDayRate',
            width: 60
          }
        ]
      },
      {
        title: '月平台',
        children: [
          {
            title: '实际放款',
            dataIndex: 'newlawLoanAmtMtd',
            key: 'newlawLoanAmtMtd',
            width: 60
          },
          {
            title: 'KPI',
            dataIndex: 'kpiMtd',
            key: 'kpiMtd',
            width: 80
          },
          {
            className: 'border-deep',
            title: '达成率',
            dataIndex: 'newlawMtdRate',
            key: 'newlawMtdRate',
            width: 60
          }
        ]
      },
      {
        title: 'YTD',
        children: [
          {
            title: '实际放款',
            dataIndex: 'newlawLoanAmtYtd',
            key: 'newlawLoanAmtYtd',
            width: 60
          },
          {
            title: 'KPI',
            dataIndex: 'kpiYtd',
            key: 'kpiYtd',
            width: 80
          },
          {
            title: <>达成率{ytdIcon}</>,
            dataIndex: 'newlawYtdRate',
            key: 'newlawYtdRate',
            width: 60
          },
          {
            title: '截至本月KPI',
            dataIndex: 'kpiYtdEndMtd',
            key: 'kpiYtdEndMtd',
            width: 60
          },
          {
            className: 'border-deep',
            title: <>截至本月达成率{ytdIconCutoffMonth(cutoffMonth)}</>,
            dataIndex: 'newlawYtdEndMtdRate',
            key: 'newlawYtdEndMtdRate',
            width: 80
            // width: 190
          }
        ]
      }
    ]
  },
  {
    title: '无抵押',
    rowSpan: 2,
    children: [
      {
        rowSpan: 0,
        children: [
          {
            title: '当日',
            dataIndex: 'bdNewlawLoanAmt',
            key: 'bdNewlawLoanAmt',
            width: 60
          },
          {
            title: 'MTD',
            dataIndex: 'bdNewlawLoanAmtMtd',
            key: 'bdNewlawLoanAmtMtd',
            width: 80
          },
          {
            className: 'border-deep',
            title: 'YTD',
            dataIndex: 'bdNewlawLoanAmtYtd',
            key: 'bdNewlawLoanAmtYtd',
            width: 80
          }
        ]
      }
    ]
  },
  {
    title: '车抵押',
    rowSpan: 2,
    children: [
      {
        rowSpan: 0,
        children: [
          {
            title: '当日',
            dataIndex: 'carNewlawLoanAmt',
            key: 'carNewlawLoanAmt',
            width: 60
          },
          {
            title: 'MTD',
            dataIndex: 'carNewlawLoanAmtMtd',
            key: 'carNewlawLoanAmtMtd',
            width: 60
          },
          {
            className: 'border-deep',
            title: 'YTD',
            dataIndex: 'carNewlawLoanAmtYtd',
            key: 'carNewlawLoanAmtYtd',
            width: 60
          }
        ]
      }
    ]
  },
  {
    key: 'houseData',
    title: '房抵押',
    rowSpan: 2,
    children: [
      {
        rowSpan: 0,
        children: [
          {
            title: '当日',
            dataIndex: 'houseNewlawLoanAmt',
            key: 'houseNewlawLoanAmt',
            width: 60
          },
          {
            title: 'MTD',
            dataIndex: 'houseNewlawLoanAmtMtd',
            key: 'houseNewlawLoanAmtMtd',
            width: 60
          },
          {
            title: 'YTD',
            dataIndex: 'houseNewlawLoanAmtYtd',
            key: 'houseNewlawLoanAmtYtd',
            width: 60
          }
        ]
      }
    ]
  }
];
// 基本法配置
const options = [
  { label: '非基本法', value: '1' },
  { label: '基本法', value: '2' }
];
// [余额表头]
const balanceHeader = [
  {
    title: '实际值',
    dataIndex: 'balanceAmt',
    key: 'balanceAmt',
    ellipsis: true
  },
  {
    title: '目标值',
    dataIndex: 'balanceKpi',
    key: 'balanceKpi',
    ellipsis: true
  },
  {
    title: '达成率',
    dataIndex: 'balanceRate',
    key: 'balanceRate',
    ellipsis: true
  }
];
export { mYtdHeaderList, options, newLawMYtdHeaderList, balanceHeader };
