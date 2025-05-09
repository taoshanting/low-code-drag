// src/components/Canvas/CanvasComponent.tsx
import type { FC } from 'react';
import { Card } from 'antd';
import styled from 'styled-components';
import type { ICanvasComponent } from '../../types';
import { ComponentMap } from '../RegisterComponents';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedId } from '../../store/componentsSlice';
import type { RootState } from '../../store';

interface CanvasComponentProps {
  component: ICanvasComponent;
  isPreview?: boolean;
}

const ComponentWrapper = styled.div<{ isSelected: boolean; isPreview?: boolean }>`
  height: 100%;
  width: 100%;
  position: relative;
  cursor: ${props => props.isPreview ? 'default' : 'move'};
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: ${props => props.isSelected && !props.isPreview ? '2px solid #1890ff' : 'none'};
    pointer-events: none;
    z-index: 1;
  }
`;

const StyledCard = styled(Card)`
  height: 100%;
  width: 100%;
  .ant-card-body {
    height: 100%;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ComponentContent = styled.div`
  width: 100%;
  height: 100%;
`;

const CanvasComponent: FC<CanvasComponentProps> = ({ component, isPreview = false }) => {
  const dispatch = useDispatch();
  const selectedId = useSelector((state: RootState) => state.components.selectedId);
  const Component = ComponentMap[component.type];

  const handleClick = (e: React.MouseEvent) => {
    if (!isPreview) {
      e.stopPropagation();
      dispatch(setSelectedId(component.id));
    }
  };

  return (
    <ComponentWrapper 
      isSelected={selectedId === component.id}
      isPreview={isPreview}
      onClick={handleClick}
    >
      <StyledCard 
        size="small" 
        bordered={false}
      >
        <ComponentContent>
          {Component ? (
            <Component {...component.props} style={component.style} />
          ) : (
            <div>未知组件类型：{component.type}</div>
          )}
        </ComponentContent>
      </StyledCard>
    </ComponentWrapper>
  );
};

export default CanvasComponent;