// src/hooks/useDeleteComponent.ts
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { removeComponent, setSelectedId } from '../store/componentsSlice';
import type { RootState } from '../store';
console.log(Modal.confirm)
export const useDeleteComponent = () => {
  const dispatch = useDispatch();
  const selectedId = useSelector((state: RootState) => state.components.selectedId);
  const components = useSelector((state: RootState) => state.components.components);

  const handleDelete = useCallback(() => {
    if (selectedId) {
      const component = components.find(c => c.id === selectedId);
      if (component) {
        Modal.confirm({
          title: '确认删除',
          content: `确定要删除 ${component.name} 组件吗？`,
          okText: '确定',
          cancelText: '取消',
          onOk: () => {
            dispatch(removeComponent(selectedId));
            dispatch(setSelectedId(null));
          }
        });
      }
    }
  }, [dispatch, selectedId, components]);

  // 添加键盘快捷键支持
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Delete' && selectedId) {
        handleDelete();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleDelete, selectedId]);

  return {
    handleDelete,
    canDelete: !!selectedId
  };
};