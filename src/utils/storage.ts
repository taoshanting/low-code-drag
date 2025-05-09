// src/utils/storage.ts
import localforage from 'localforage';

interface PageConfig {
  id: string;
  components: any[];
  updateTime: number;
}

// 初始化存储
localforage.config({
  name: 'low-code-drag',
  storeName: 'page_configs'
});

// 保存页面配置
export const savePageConfig = async (pageId: string, components: any[]) => {
  const config: PageConfig = {
    id: pageId,
    components,
    updateTime: Date.now(),
  };
  await localforage.setItem(`page_${pageId}`, config);
  return config;
};

// 获取页面配置
export const getPageConfig = async (pageId: string) => {
  const config = await localforage.getItem<PageConfig>(`page_${pageId}`);
  return config;
};

// 删除页面配置
export const removePageConfig = async (pageId: string) => {
  await localforage.removeItem(`page_${pageId}`);
};