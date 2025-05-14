// src/components/RegisterComponents/index.tsx
import type { FC } from 'react';
import { Input, Select, Button } from 'antd';
import styled from 'styled-components';
import type { IComponentMeta } from '../../types';
import OverallSalesData from '../Business/overall-sales-data';

const StyledInput = styled(Input)`
  width: 100%;
`;

const StyledSelect = styled(Select)`
  width: 100%;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

// 组件映射表
export const ComponentMap: Record<string, FC<any>> = {
  input: StyledInput,
  select: StyledSelect,
  button: StyledButton,
  'overall-sales-data': OverallSalesData,
};

// 组件属性配置
export const ComponentConfigs: Record<string, IComponentMeta> = {
  input: {
    type: 'input',
    name: '输入框',
    defaultProps: {
      placeholder: '请输入',
    },
    propertyConfig: {
      props: [
        {
          name: 'placeholder',
          label: '占位符',
          type: 'string',
        },
        {
          name: 'disabled',
          label: '禁用',
          type: 'boolean',
        },
      ],
      styles: [
        {
          name: 'width',
          label: '宽度',
          type: 'number',
        },
        {
          name: 'height',
          label: '高度',
          type: 'number',
        },
      ],
    },
  },
  select: {
    type: 'select',
    name: '下拉选择',
    defaultProps: {
      placeholder: '请选择',
      options: [
        { label: '选项1', value: '1' },
        { label: '选项2', value: '2' },
      ],
    },
    propertyConfig: {
      props: [
        {
          name: 'placeholder',
          label: '占位符',
          type: 'string',
        },
        {
          name: 'options',
          label: '选项',
          type: 'array',
          subType: 'option',
        },
      ],
    },
  },
  'overall-sales-data': {
    type: 'overall-sales-data',
    name: '整体销售数据',
    propertyConfig: {
      props: [
        
            {
                "type": "date",
                "name": "数据日期",
                "range": "N",
                "format": "YYYY-MM-DD",
                "defaultValue": {
                    "自定义": "customDate",
                    "今日": "today",
                    "昨日": "yesterday"
                },
                "requestBodyKey": "startDate,endDate"
            },
      
            {
                "type": "selectBox",
                "name": "ds分类",
                "defaultValue": [
                   {value:"0",label:'整体'},
                   {value:"1",label:'新人'},
                   {value:"2",label:'存量'}
                  ],
                "requestBodyKey": "isFarmer"
            },
            {
                "type": "selectBox",
                "name": "农夫或传统",
                "defaultValue": [
                    {value:"0",label:'整体'},
                    {value:"2",label:'传统'},
                    {value:"1",label:'农夫'}
                ],
                "requestBodyKey": "dsTypeCode"
            },
            {
                "type": "selectBox",
                "name": "业绩目标类型",
                "defaultValue": [
                  {value:"0",label:'整体'},
                  {value:"2",label:'传统'},
                  {value:"1",label:'农夫'}
                ],
                "requestBodyKey": "achievementType"
            }
        
      ],
    },
  },
};