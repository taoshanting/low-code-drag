// src/types/index.ts

// 组件基础属性接口
export interface IComponentBase {
  id: string;
  type: string;
  name: string;
  category: string;
  props: Record<string, any>;
  style: {
    width: number;
    height: number;
    x: number;
    y: number;
    [key: string]: any;
  };
}

// 组件分类接口
export interface IComponentCategory {
  key: string;
  title: string;
  components: IComponentMeta[];
}

// 组件元数据接口
export interface IComponentMeta {
  type: string;
  name: string;
  icon?: string;
  defaultProps?: Record<string, any>;
  defaultStyle?: Record<string, any>;
}

// 拖拽项类型
export interface DragItem {
  type: string;
  component: IComponentMeta;
}


export interface ILayoutItem {
    i: string;        // 组件ID
    x: number;        // 网格中的x坐标
    y: number;        // 网格中的y坐标
    w: number;        // 宽度（以网格单位计）
    h: number;        // 高度（以网格单位计）
    static?: boolean; // 是否可拖拽/调整大小
  }
  
  // 画布中的组件完整信息
  export interface ICanvasComponent extends IComponentBase {
    layout: ILayoutItem;
  }
