import type { FC } from 'react';
import { Card } from 'antd';
import styled from 'styled-components';
import type { ICanvasComponent } from '../../types';

interface CanvasComponentProps {
  component: ICanvasComponent;
}

const ComponentWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const StyledCard = styled(Card)`
  height: 100%;
  width: 100%;
  .ant-card-body {
    height: 100%;
    padding: 12px;
  }
`;

const CanvasComponent: FC<CanvasComponentProps> = ({ component }) => {
  return (
    <ComponentWrapper>
      <StyledCard size="small" title={component.name}>
        {component.type}组件
      </StyledCard>
    </ComponentWrapper>
  );
};

export default CanvasComponent;