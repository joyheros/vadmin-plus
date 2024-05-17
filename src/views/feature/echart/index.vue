<template>
  <div ref="map" style="width: 100%; height: calc(100vh - 80px)"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'
import chinaMap from './china.json'

const map = ref(null)

onMounted(() => {
  echarts.registerMap('china', { geoJson: chinaMap })
  const myChart = echarts.init(map.value)
  const option = {
    series: [
      {
        type: 'map',
        map: 'china',
        left: 'center',
        top: 'middle',
        width: '55%',
        height: '95%',
        roam: true,
        label: {
          show: true
        }
      }
    ]
  }

  myChart.setOption(option)
  myChart.on('click', function (params) {
    if (params.componentType === 'series') {
      var zoom = 4
      myChart.setOption({
        series: [
          {
            id: params.seriesId,
            zoom: zoom,
            center: params.data && params.data.coord
          }
        ]
      })
    }
  })
})
</script>
