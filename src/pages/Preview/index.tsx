// src/pages/Preview/index.tsx
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Spin, message } from 'antd';
import { RollbackOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import type { ICanvasComponent } from '../../types';
import { getPageConfig } from '../../utils/storage';
import { GRID_LAYOUT_CONFIG } from '../../components/Canvas/config';
import CanvasComponent from '../../components/Canvas/CanvasComponent';

const PreviewContainer = styled.div`
  min-height: 100vh;
  background: #f5f5f5;
  padding: 20px;
`;

const BackButton = styled(Button)`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 100;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  min-height: calc(100vh - 40px);
`;

const Preview: FC = () => {
  const { pageId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [components, setComponents] = useState<ICanvasComponent[]>([]);

  useEffect(() => {
    const loadPageConfig = async () => {
      try {
        if (!pageId) {
          throw new Error('页面ID不存在');
        }
        const config = await getPageConfig(pageId);
        if (!config) {
          throw new Error('页面配置不存在');
        }
        setComponents(config.components);
      } catch (error) {
        message.error((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    loadPageConfig();
  }, [pageId]);

  const handleBack = () => {
    navigate('/');
  };

  if (loading) {
    return (
      <PreviewContainer>
        <Spin size="large" />
      </PreviewContainer>
    );
  }

  return (
    <PreviewContainer>
      <BackButton 
        icon={<RollbackOutlined />}
        onClick={handleBack}
      >
        返回编辑
      </BackButton>
      <ContentWrapper>
        {components.length > 0 && (
          <GridLayout
            className="layout"
            layout={components.map(c => c.layout)}
            {...GRID_LAYOUT_CONFIG}
            isDraggable={false}
            isResizable={false}
            useCSSTransforms={true}
            preventCollision={false}
            compactType={null}
            margin={[10, 10]}
            containerPadding={[0, 0]}
          >
            {components.map((component) => (
              <div key={component.layout.i}>
                <CanvasComponent 
                  component={component} 
                  isPreview={true}
                />
              </div>
            ))}
          </GridLayout>
        )}
      </ContentWrapper>
    </PreviewContainer>
  );
};

export default Preview;