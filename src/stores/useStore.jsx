import { create } from 'zustand'

export const useStore = create((set, get) => ({
  items: [],
  // 添加书籍到购物车
  addToCart: (data) => {
    set((state) => {
      // 判断书籍是否存在购物车当中
      const exist = state.items.find((item) => item.isbn13 === data.isbn13)
      // 如果存在，在书籍数量的之上自增
      if (exist) {
        const newItems = state.items.map((item) =>
          item.isbn13 === data.isbn13
            ? { ...item, count: item.count + 1 }
            : item,
        )

        return { items: newItems }
      } else {
        // 反之，将书籍添加到购物车
        return { items: [...state.items, { ...data, count: 1 }] }
      }
    })
  },

  // 删除书籍
  removeById: (id) => {
    set((state) => ({
      items: state.items.filter((item) => item.isbn13 !== id),
    }))
  },
}))
