// src/components/PropertyPanel/index.tsx
import type { FC } from 'react';
import { Form, DatePicker, Select, InputNumber } from 'antd';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store';
import { updateComponent } from '../../store/componentsSlice';
import { ComponentConfigs } from '../RegisterComponents';
import 'dayjs/locale/zh-cn'
import locale from 'antd/es/date-picker/locale/zh_CN';

console.log('locale',locale)

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
  console.log('componentConfig',componentConfig)
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
            case 'selectBox':
              return (
                <Form.Item
                key={prop.name}
                label={prop.name}
                name={prop.requestBodyKey}
              >
                <Select options={prop.defaultValue} />
              </Form.Item>
              );
            case 'date':
              return (
                <Form.Item label={prop.name} name="date">
                {prop.range === 'Y' ? (
                  <DatePicker.RangePicker
                    format={prop.format || 'YYYY-MM-DD'}
                    style={{ width: '100%' }}
                    // value、onChange等可根据你的store做双向绑定
                  />
                ) : (
                  <DatePicker
                    locale={locale}
                    format={prop.format || 'YYYY-MM-DD'}
                    style={{ width: '100%' }}
                    // value、onChange等可根据你的store做双向绑定
                  />
                )}
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