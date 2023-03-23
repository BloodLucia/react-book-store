// 生成侧边菜单栏的子菜单
// label 子菜单的标题
// key  唯一的键
// icon 显示的图标
export const getMenuItem = (label, key, icon) => {
  return {
    label,
    key,
    icon,
  }
}
