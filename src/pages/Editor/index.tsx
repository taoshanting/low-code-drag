// src/pages/Editor/index.tsx
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from 'antd';
import styled from 'styled-components';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ComponentList from '../../components/ComponentList';
import Canvas from '../../components/Canvas';
import PropertyPanel from '../../components/PropertyPanel';
import Toolbar from '../../components/Toolbar';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { savePageConfig } from '../../utils/storage';  // 添加这行导入



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
  margin-right: 0;
`;

const Editor: FC = () => {

    const navigate = useNavigate();
    const components = useSelector((state: RootState) => state.components.components);
    const selectedId = useSelector((state: RootState) => state.components.selectedId);
    const handlePreview = async () => {
      // 这里使用一个临时的页面ID，实际项目中应该由后端生成
      const pageId = 'temp';
      // 保存当前配置
      await savePageConfig(pageId, components);
      // 跳转到预览页面
      navigate(`/preview/${pageId}`);
    };
 
  return (
    <>
    <DndProvider backend={HTML5Backend}>
      <StyledLayout>
        <StyledSider width={300}>
          <ComponentList />
        </StyledSider>
        <MainLayout>
        <Toolbar onPreview={handlePreview} />
          <StyledContent>
            <Canvas />
          </StyledContent>
        </MainLayout>
        {selectedId && 
        <StyledSider className="right" width={300}>
          <PropertyPanel />
        </StyledSider>
        }
      </StyledLayout>
    </DndProvider>
    </>
  );
};

export default Editor;