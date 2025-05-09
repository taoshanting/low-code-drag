// src/pages/Preview/PreviewComponent.tsx
import type { FC } from 'react';
import styled from 'styled-components';
import type { ICanvasComponent } from '../../types';
import { ComponentMap } from '../../components/RegisterComponents';

interface PreviewComponentProps {
  component: ICanvasComponent;
}

const ComponentWrapper = styled.div<{ layout: any }>`
  position: absolute;
  left: ${props => props.layout.x * 30}px;
  top: ${props => props.layout.y * 30}px;
  width: ${props => props.layout.w * 30}px;
  height: ${props => props.layout.h * 30}px;
`;

const PreviewComponent: FC<PreviewComponentProps> = ({ component }) => {
  const Component = ComponentMap[component.type];
  console.log("组件---",component)
  if (!Component) {
    return null;
  }

  return (
    <ComponentWrapper layout={component.layout}>
      <Component {...component.props} style={component.style} />
    </ComponentWrapper>
  );
};

export default PreviewComponent;