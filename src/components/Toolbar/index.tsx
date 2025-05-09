// src/components/Toolbar/index.tsx
import type { FC } from 'react';
import { Button, Space, Tooltip } from 'antd';
import styled from 'styled-components';
import {
  SaveOutlined,
  EyeOutlined,
  UndoOutlined,
  RedoOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import { useDeleteComponent } from '../../hooks/useDeleteComponent';

const ToolbarContainer = styled.div`
  top: 0;
  left: 300px;
  right: 300px;
  height: 48px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  padding: 0 16px;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`;

interface ToolbarProps {
    onPreview: () => void;
  }

const Toolbar: FC<ToolbarProps>= ({onPreview}) => {

  const { handleDelete, canDelete } = useDeleteComponent();

  return (
    <ToolbarContainer>
      <Space>
        <Tooltip title="保存">
          <Button icon={<SaveOutlined />}>保存</Button>
        </Tooltip>
        <Tooltip title="预览">
          <Button icon={<EyeOutlined />}
          onClick={onPreview}
          >预览</Button>
        </Tooltip>
        <Tooltip title="撤销 (Ctrl+Z)">
          <Button icon={<UndoOutlined />}>撤销</Button>
        </Tooltip>
        <Tooltip title="重做 (Ctrl+Y)">
          <Button icon={<RedoOutlined />}>重做</Button>
        </Tooltip>
        <Tooltip title="删除 (Delete)">
          <Button 
            icon={<DeleteOutlined />} 
            danger 
            disabled={!canDelete}
            onClick={handleDelete}
          >
            删除
          </Button>
        </Tooltip>
      </Space>
    </ToolbarContainer>
  );
};

export default Toolbar;