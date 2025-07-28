import getDynamicData from './DynamicData'
import { ref, watch } from 'vue'

// 暴露出动态列数据
export const dynamicData = ref(getDynamicData())

// 监听语言变化

// 创建被勾选的列数据
export const selectDynamicLabel = ref([])
const initSelectDynamicLabel = () => {
  selectDynamicLabel.value = dynamicData.value.map((item) => item.label)
}
initSelectDynamicLabel()
export const tableColumns = ref([])
// 监听选中项的变化，根据选中项动态改变table列数据的值
watch(
  selectDynamicLabel,
  (val) => {
    tableColumns.value = []
    // 遍历选中项
    const selectData = dynamicData.value.filter((item) => {
      return val.includes(item.label)
    })
    tableColumns.value.push(...selectData)
  },
  {
    immediate: true
  }
)
