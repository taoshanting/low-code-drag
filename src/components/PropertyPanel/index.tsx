// src/components/PropertyPanel/index.tsx
import type { FC } from 'react';
import { Form, Input, Switch, Select, InputNumber } from 'antd';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store';
import { updateComponent } from '../../store/componentsSlice';
import { ComponentConfigs } from '../RegisterComponents';

const PanelContainer = styled.div`
  padding: 16px;
`;

const PropertyPanel: FC = () => {
  const dispatch = useDispatch();
  const selectedId = useSelector((state: RootState) => state.components.selectedId);
  const components = useSelector((state: RootState) => state.components.components);
  const selectedComponent = components.find(c => c.id === selectedId);

  const [form] = Form.useForm();

  if (!selectedComponent) {
    return (
      <PanelContainer>
        <div style={{ textAlign: 'center', color: '#999' }}>
          请选择组件
        </div>
      </PanelContainer>
    );
  }

  const componentConfig = ComponentConfigs[selectedComponent.type];

  const handleValuesChange = (changedValues: any) => {
    const newComponent = {
      ...selectedComponent,
      props: {
        ...selectedComponent.props,
        ...changedValues,
      },
    };
    dispatch(updateComponent(newComponent));
  };

  return (
    <PanelContainer>
      <Form
        form={form}
        layout="vertical"
        initialValues={selectedComponent.props}
        onValuesChange={handleValuesChange}
      >
        {componentConfig?.propertyConfig.props.map(prop => {
          switch (prop.type) {
            case 'string':
              return (
                <Form.Item
                  key={prop.name}
                  label={prop.label}
                  name={prop.name}
                >
                  <Input />
                </Form.Item>
              );
            case 'boolean':
              return (
                <Form.Item
                  key={prop.name}
                  label={prop.label}
                  name={prop.name}
                  valuePropName="checked"
                >
                  <Switch />
                </Form.Item>
              );
            case 'number':
              return (
                <Form.Item
                  key={prop.name}
                  label={prop.label}
                  name={prop.name}
                >
                  <InputNumber style={{ width: '100%' }} />
                </Form.Item>
              );
            case 'enum':
              return (
                <Form.Item
                  key={prop.name}
                  label={prop.label}
                  name={prop.name}
                >
                  <Select options={prop.options} />
                </Form.Item>
              );
            default:
              return null;
          }
        })}
      </Form>
    </PanelContainer>
  );
};

export default PropertyPanel;