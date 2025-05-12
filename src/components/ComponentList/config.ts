import type { IComponentCategory } from '../../types';
import {
  FormOutlined,
  LayoutOutlined,
  TableOutlined,
  BarChartOutlined,
  PictureOutlined,
  FileTextOutlined
} from '@ant-design/icons';

export const componentCategories: IComponentCategory[] = [
  {
    key: 'form',
    title: '表单组件',
    components: [
      {
        type: 'input',
        name: '输入框',
        icon: 'FormOutlined',
        defaultProps: {
          placeholder: '请输入',
        },
        defaultStyle: {
          width: '100%',
          height: '100%',
        },
      },
      {
        type: 'select',
        name: '下拉选择',
        icon: 'FormOutlined',
        defaultProps: {
          placeholder: '请选择',
        },
        defaultStyle: {
          width: '100%',
        },
      },
    ],
  },
  {
    key: 'layout',
    title: '布局组件',
    components: [
      {
        type: 'container',
        name: '容器',
        icon: 'LayoutOutlined',
        defaultStyle: {
          width: 400,
          height: 300,
        },
      },
      {
        type: 'grid',
        name: '栅格',
        icon: 'TableOutlined',
        defaultStyle: {
          width: 400,
          height: 300,
        },
      },
    ],
  },
  {
    key: 'display',
    title: '展示组件',
    components: [
      {
        type: 'chart',
        name: '图表',
        icon: 'BarChartOutlined',
        defaultStyle: {
          width: 400,
          height: 300,
        },
      },
      {
        type: 'image',
        name: '图片',
        icon: 'PictureOutlined',
        defaultStyle: {
          width: 200,
          height: 200,
        },
      },
      {
        type: 'text',
        name: '文本',
        icon: 'FileTextOutlined',
        defaultProps: {
          content: '文本内容',
        },
        defaultStyle: {
          width: 200,
          height: 40,
        },
      },
    ],
  },
  {
    key: 'business',
    title: '业务组件',
    components: [
      {
        type: 'overall-sales-data',
        name: '整体销售数据',
        icon: 'BarChartOutlined',
        defaultProps: {},
        defaultStyle: {
          width: 400,
          height: 200,
        },
      },
    ],
  },
];

