import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { ICanvasComponent, ILayoutItem } from '../types';

interface ComponentsState {
  components: ICanvasComponent[];
  selectedId: string | null;
}

const initialState: ComponentsState = {
  components: [],
  selectedId: null,
};

const componentsSlice = createSlice({
  name: 'components',
  initialState,
  reducers: {
    addComponent: (state, action: PayloadAction<ICanvasComponent>) => {
      state.components.push(action.payload);
    },
    updateComponent: (state, action: PayloadAction<ICanvasComponent>) => {
      const index = state.components.findIndex(c => c.id === action.payload.id);
      if (index !== -1) {
        state.components[index] = action.payload;
      }
    },
    updateComponentLayout: (state, action: PayloadAction<{ id: string; layout: ILayoutItem }>) => {
      const component = state.components.find(c => c.id === action.payload.id);
      if (component) {
        component.layout = action.payload.layout;
      }
    },
    setSelectedId: (state, action: PayloadAction<string | null>) => {
      state.selectedId = action.payload;
    },
    removeComponent: (state, action: PayloadAction<string>) => {
      state.components = state.components.filter(c => c.id !== action.payload);
    },
  },
});

export const {
  addComponent,
  updateComponent,
  updateComponentLayout,
  setSelectedId,
  removeComponent,
} = componentsSlice.actions;

export default componentsSlice.reducer;