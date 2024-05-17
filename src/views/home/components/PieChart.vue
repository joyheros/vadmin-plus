<!-- 饼图 -->
<template>
  <el-card>
    <template #header>作品分布图</template>
    <div :id="id" :class="className" :style="{ height, width }"></div>
  </el-card>
</template>

<script setup>
import * as echarts from 'echarts'

const props = defineProps({
  id: {
    type: String,
    default: 'pieChart'
  },
  className: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: '150px',
    required: true
  },
  height: {
    type: String,
    default: '150px',
    required: true
  }
})
const options = {
  grid: {
    left: '2%',
    right: '2%',
    bottom: '10%',
    containLabel: true
  },
  legend: {
    top: 'bottom',
    textStyle: {
      color: '#999'
    }
  },
  series: [
    {
      name: 'Pie Chart',
      type: 'pie',
      radius: [60, 120],
      center: ['50%', '50%'],

      itemStyle: {
        borderRadius: 1,
        color: function (params) {
          //自定义颜色
          const colorList = ['#ee3f4d', '#2486b9', '#1ba784', '#d6a01d']
          return colorList[params.dataIndex]
        }
      },
      data: [
        { value: 328, name: '稷下学宫' },
        { value: 919, name: '唐诗阁' },
        { value: 929, name: '宋词阁' },
        { value: 99, name: '国医堂' }
      ]
    }
  ]
}

const chart = ref('')

onMounted(() => {
  let mychart = echarts.getInstanceByDom(document.getElementById(props.id))
  if (mychart == null) {
    mychart = markRaw(echarts.init(document.getElementById(props.id)))
  }
  chart.value = mychart
  chart.value.setOption(options)

  window.addEventListener('resize', () => {
    chart.value.resize()
  })
})

onActivated(() => {
  if (chart.value) {
    chart.value.resize()
  }
})
</script>
