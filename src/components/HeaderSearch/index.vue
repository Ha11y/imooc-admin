<script setup>
import { ref, computed, watch } from 'vue'
import { filterRoutes } from '@/utils/route'
import { useRouter } from 'vue-router'
import SvgIcon from '@/components/SvgIcon'
import Fuse from 'fuse.js'
import { generateRoutes } from '@/components/HeaderSearch/FuseData'
import { watchSwitchLang } from '@/utils/i18n'

const router = useRouter()

// 检索数据源
let searchPool = computed(() => {
  const routes = filterRoutes(router.getRoutes())
  // console.log(generateRoutes(routes))
  return generateRoutes(routes)
})
// console.log(searchPool.value)
// 模糊搜索库
let fuse
const initFuse = (searchPool) => {
  fuse = new Fuse(searchPool, {
    // 是否排序
    shouldSort: true,
    // 匹配长度超过这个值的才返回
    minMatchChartLength: 1,
    // name : 搜索的键
    // weight: 权重

    keys: [
      {
        name: 'title',
        weight: 0.7
      },
      {
        name: 'path',
        weight: 0.3
      }
    ]
  })
}
initFuse(searchPool.value)

// console.log(searchPool)
const isShow = ref(false)
const search = ref('')
const searchOptions = ref([])
const headerSearchSelectRef = ref(null)
// 搜索方法
const querySearch = (query) => {
  // console.log(fuse.search(query))
  if (query !== '') {
    searchOptions.value = fuse.search(query)
  } else {
    searchOptions.value = []
  }
}
// 选中回调
const onSelectChange = () => {
  console.log('onSelectChange')
}
// 关闭 search 的 处理函数
const onClose = () => {
  headerSearchSelectRef.value.blur()
  isShow.value = false
  searchOptions.value = []
}
watch(isShow, (val) => {
  if (val) {
    document.body.addEventListener('click', onClose)
  } else {
    document.body.removeEventListener('click', onClose)
  }
})
// 处理国际化
watchSwitchLang(() => {
  searchPool = computed(() => {
    const routes = filterRoutes(router.getRoutes())
    // console.log(generateRoutes(routes))
    return generateRoutes(routes)
  })
  initFuse(searchPool.value)
})
</script>

<template>
  <div class="header-search" :class="{ show: isShow }">
    <SvgIcon
      id="guide-search"
      class-name="search-icon"
      icon="search"
      @click.stop="isShow = !isShow"
    ></SvgIcon>
    <el-select
      ref="headerSearchSelectRef"
      class="header-search-select"
      v-model="search"
      filterable
      default-first-option
      remote
      :remote-method="querySearch"
      placeholder="search"
      @change="onSelectChange"
    >
      <el-option
        v-for="option in searchOptions"
        :key="option"
        :label="option.item.title.join(' > ')"
        :value="option.item.path"
      >
      </el-option>
    </el-select>
  </div>
</template>

<style lang="scss" scoped>
/* 样式 */

.header-search {
  font-size: 0 !important;
  .search-icon {
    cursor: pointer;
    font-size: 18px;
    vertical-align: middle;
  }
  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;

    ::v-deep .el-input__inner {
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }
  }
  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>
