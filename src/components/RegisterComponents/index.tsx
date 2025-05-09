// src/components/RegisterComponents/index.tsx
import type { FC } from 'react';
import { Input, Select, Button } from 'antd';
import styled from 'styled-components';
import type { IComponentMeta } from '../../types';

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
  button: {
    type: 'button',
    name: '按钮',
    defaultProps: {
      children: '按钮',
      type: 'primary',
    },
    propertyConfig: {
      props: [
        {
          name: 'children',
          label: '文本',
          type: 'string',
        },
        {
          name: 'type',
          label: '类型',
          type: 'enum',
          options: [
            { label: '主按钮', value: 'primary' },
            { label: '次按钮', value: 'default' },
            { label: '虚线按钮', value: 'dashed' },
            { label: '文本按钮', value: 'text' },
            { label: '链接按钮', value: 'link' },
          ],
        },
      ],
    },
  },
};