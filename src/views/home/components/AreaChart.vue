<!--  线 + 柱混合图 -->
<template>
  <el-card>
    <template #header>
      <div class="title">
        作品趋势图
        <el-tooltip effect="dark" content="点击试试下载" placement="bottom">
          <svg-icon icon-class="download" @click="downloadEchart"/>
        </el-tooltip>
      </div>
    </template>
    <div :id="id" :class="className" :style="{ height, width }"></div>
  </el-card>
</template>

<script setup>
import * as echarts from 'echarts'

const props = defineProps({
  id: {
    type: String,
    default: 'areaChart'
  },
  className: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: '200px',
    required: true
  },
  height: {
    type: String,
    default: '300px',
    required: true
  }
})

const options = {
  grid: {
    left: '3%',
    right: '4%',
    bottom: '8%',
    containLabel: true
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    },
    feature: {
      saveAsImage: {}
    }
  },
  legend: {
    x: 'center',
    y: 'bottom',
    data: ['诸子百家', '律诗', '词牌', '药典'],
    textStyle: {
      color: '#999'
    }
  },
  xAxis: [
    {
      type: 'category',
      data: ['商周', '秦汉', '魏晋', '唐朝', '宋朝', '元朝', '明朝', '清朝'],
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: '诸子百家',
      type: 'line',
      stack: 'Total',
      smooth: true,
      data: [128, 31, 99, 33, 30, 21, 81, 36],
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: '#ee3f4d'
          },
          {
            offset: 1,
            color: '#f0a1a8'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      }
    },
    {
      name: '律诗',
      type: 'line',
      stack: 'Total',
      smooth: true,
      data: [180, 112, 190, 360, 270, 55, 136, 98],
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: '#2486b9'
          },
          {
            offset: 1,
            color: '#2f90b9'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      }
    },
    {
      name: '词牌',
      type: 'line',
      stack: 'Total',
      smooth: true,
      data: [60, 45, 81, 280, 381, 70, 128, 90],
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: '#1ba784'
          },
          {
            offset: 1,
            color: '#1a6840'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      }
    },
    {
      name: '药典',
      type: 'line',
      stack: 'Total',
      smooth: true,
      data: [33, 55, 66, 99, 108, 80, 96, 72],
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: '#d6a01d'
          },
          {
            offset: 1,
            color: '#f28e16'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      }
    }
  ]
}

const downloadEchart = () => {
  // 获取画布图表地址信息
  const img = new Image()
  img.src = chart.value.getDataURL({
    type: 'png',
    pixelRatio: 1,
    backgroundColor: '#fff'
  })
  // 当图片加载完成后，生成 URL 并下载
  img.onload = () => {
    const canvas = document.createElement('canvas')
    canvas.width = img.width
    canvas.height = img.height
    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.drawImage(img, 0, 0, img.width, img.height)
      const link = document.createElement('a')
      link.download = `作品趋势图.png`
      link.href = canvas.toDataURL('image/png', 0.9)
      document.body.appendChild(link)
      link.click()
      link.remove()
    }
  }
}

const chart = ref('')
onMounted(() => {
  // 图表初始化
  let mychart = echarts.getInstanceByDom(document.getElementById(props.id))
  if (mychart == null) {
    mychart = markRaw(echarts.init(document.getElementById(props.id)))
  }
  chart.value = mychart
  chart.value.setOption(options)
  // 大小自适应
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
<style lang="scss" scoped>
.title {
  display: flex;
  justify-content: space-between;

  .download {
    cursor: pointer;

    &:hover {
      color: #409eff;
    }
  }
}
</style>
