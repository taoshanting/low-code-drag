// src/App.tsx
import type { FC } from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ComponentList from './components/ComponentList';
import Canvas from './components/Canvas';
import PropertyPanel from './components/PropertyPanel';
import 'antd/dist/antd.css'; // 注意：antd 4.x 使用这个样式文件

const { Sider, Content } = Layout;

const StyledLayout = styled(Layout)`
  height: 100vh;
`;

const StyledContent = styled(Content)`
  flex: 1;
  padding: 0;
  background: #fff;
  position: relative;
  overflow: hidden;
`;

const StyledSider = styled(Sider)`
  background: #fff;
  border-right: 1px solid #f0f0f0;
  overflow: auto;
  height: 100vh;
  position: fixed;
  left: 0;
  &.right {
    right: 0;
    left: auto;
  }
`;

const MainLayout = styled(Layout)`
  margin-left: 300px;
  margin-right: 300px;
`;

const App: FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <StyledLayout>
        <StyledSider width={300}>
          <ComponentList />
        </StyledSider>
        <MainLayout>
          <StyledContent>
            <Canvas />
          </StyledContent>
        </MainLayout>
        <StyledSider className="right" width={300}>
          <PropertyPanel />
        </StyledSider>
      </StyledLayout>
    </DndProvider>
  );
};

export default App;