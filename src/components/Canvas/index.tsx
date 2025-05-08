// src/components/Canvas/index.tsx
import type { FC } from 'react';
import { useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import type { Layout } from 'react-grid-layout';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import styled from 'styled-components';
import { GRID_LAYOUT_CONFIG } from './config';
import type { IComponentMeta, ICanvasComponent } from '../../types';
import { addComponent, updateComponentLayout } from '../../store/componentsSlice';
import CanvasComponent from './CanvasComponent';
import type { RootState } from '../../store';
import { v4 as uuidv4 } from 'uuid';
// src/components/Canvas/index.tsx
// ... 其他导入保持不变 ...

const CanvasContainer = styled.div`
  height: 100%;
  width: 100%;
  background: #f5f5f5;
  overflow: auto;
  position: relative;
  padding: 20px;
  box-sizing: border-box;

  .react-grid-layout {
    background: #fff;
  }
`;

// ... 其他代码保持不变 ...
const Canvas: FC = () => {
  const dispatch = useDispatch();
  const components = useSelector((state: RootState) => state.components.components);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'COMPONENT',
    drop: (item: { component: IComponentMeta }, monitor) => {
      const offset = monitor.getClientOffset();
      if (offset) {
        const containerRect = document.getElementById('canvas-container')?.getBoundingClientRect();
        if (containerRect) {
          const x = Math.floor((offset.x - containerRect.left) / (GRID_LAYOUT_CONFIG.rowHeight + GRID_LAYOUT_CONFIG.margin[0]));
          const y = Math.floor((offset.y - containerRect.top) / (GRID_LAYOUT_CONFIG.rowHeight + GRID_LAYOUT_CONFIG.margin[1]));
          
          const newComponent: ICanvasComponent = {
            id: uuidv4(),
            type: item.component.type,
            name: item.component.name,
            category: 'canvas',
            props: item.component.defaultProps || {},
            style: item.component.defaultStyle || {},
            layout: {
              i: uuidv4(),
              x: Math.min(x, GRID_LAYOUT_CONFIG.cols - 4),
              y: Math.max(0, y),
              w: 4,
              h: 4
            }
          };
          
          dispatch(addComponent(newComponent));
        }
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const handleLayoutChange = (layout: Layout[]) => {
    layout.forEach((item) => {
      const component = components.find((c) => c.layout.i === item.i);
      if (component) {
        dispatch(updateComponentLayout({
          id: component.id,
          layout: item
        }));
      }
    });
  };

  return (
    <CanvasContainer
      ref={drop}
      id="canvas-container"
      style={{
        backgroundColor: isOver ? '#e6f7ff' : '#f5f5f5'
      }}
    >
      {components.length > 0 ? (
        <GridLayout
          className="layout"
          layout={components.map(c => c.layout)}
          {...GRID_LAYOUT_CONFIG}
          onLayoutChange={handleLayoutChange}
          useCSSTransforms={true}
        >
          {components.map((component) => (
            <div key={component.layout.i}>
              <CanvasComponent component={component} />
            </div>
          ))}
        </GridLayout>
      ) : (
        <div style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#999',
          fontSize: '16px'
        }}>
          将组件拖拽到此处
        </div>
      )}
    </CanvasContainer>
  );
};

export default Canvas;