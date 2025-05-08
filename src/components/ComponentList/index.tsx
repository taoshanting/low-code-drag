// src/components/ComponentList/index.tsx
import type { FC } from 'react';
import { Collapse } from 'antd';
import styled from 'styled-components';
import { componentCategories } from './config';
import DraggableItem from './DraggableItem';

const { Panel } = Collapse;

const ListContainer = styled.div`
  padding: 12px;

  .ant-collapse {
    border: none;
    background: transparent;

    > .ant-collapse-item {
      border-radius: 2px;
      margin-bottom: 8px;
      border: 1px solid #f0f0f0;
      
      > .ant-collapse-header {
        padding: 8px 12px;
      }
      
      > .ant-collapse-content {
        border-top: 1px solid #f0f0f0;
        
        > .ant-collapse-content-box {
          padding: 12px;
        }
      }
    }
  }
`;

const ComponentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
`;

const ComponentList: FC = () => {
  return (
    <ListContainer>
      <Collapse defaultActiveKey={['form']} ghost>
        {componentCategories.map((category) => (
          <Panel header={category.title} key={category.key}>
            <ComponentsGrid>
              {category.components.map((component) => (
                <DraggableItem
                  key={component.type}
                  component={component}
                />
              ))}
            </ComponentsGrid>
          </Panel>
        ))}
      </Collapse>
    </ListContainer>
  );
};

export default ComponentList;