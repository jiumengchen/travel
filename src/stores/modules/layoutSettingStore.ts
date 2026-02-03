import { defineStore } from 'pinia'

const useLayoutSetting = defineStore('LayoutSetting', {
  state: () => {
    return {
      isCollapse: false,
      refresh: false,
      is: false,
    }
  },
  actions: {},
})

export default useLayoutSetting
