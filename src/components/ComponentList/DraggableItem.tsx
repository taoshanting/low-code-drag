import type { FC } from 'react';
import { useDrag } from 'react-dnd';
import type { IComponentMeta } from '../../types';
import { Card } from 'antd';
import * as Icons from '@ant-design/icons';
import styled from 'styled-components';

interface DraggableItemProps {
  component: IComponentMeta;
}

const ItemCard = styled(Card)`
  margin: 8px;
  cursor: move;
  &:hover {
    border-color: #1890ff;
  }
`;

const ItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const DraggableItem: FC<DraggableItemProps> = ({ component }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'COMPONENT',
    item: { type: 'COMPONENT', component },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const IconComponent = Icons[component.icon as keyof typeof Icons];

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <ItemCard size="small" hoverable>
        <ItemContent>
          {IconComponent && <IconComponent />}
          <span>{component.name}</span>
        </ItemContent>
      </ItemCard>
    </div>
  );
};

export default DraggableItem;
