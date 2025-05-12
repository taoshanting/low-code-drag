import type { ReactNode } from 'react';
export interface LeftRightCardProps {
  data: any;
  cardMap?: any;
  fontSize?: FontSize;
  flexDirection?: Direction;
  renderTooltip?: ReactNode; // tooltip展示的内容
}
export type Direction = 'row' | 'column';
export type FontSize = 'card-num-m' | 'card-num-s';
