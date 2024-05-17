<template>
  <div class="home-container">
    <el-card shadow="never">
      <el-row justify="space-between">
        <el-col :span="18" :xs="24">
          <div class="flex h-full items-center">
            <img
              class="w-20 h-20 mr-5 rounded-full"
              :src="userStore.user.avatar + '?imageView2/1/w/80/h/80'"
            />
            <div>
              <p>{{ $t('home.hello') }}{{ username }}</p>
              <p class="text-sm text-gray">{{ motto }}</p>
            </div>
          </div>
        </el-col>
        <el-col :span="6" :xs="24">
          <div class="flex h-full items-center justify-around">
            <el-statistic v-for="item in overallData" :key="item.key" :value="item.value">
              <template #title>
                <div class="flex items-center">
                  <svg-icon :icon-class="item.iconClass" size="20px" />
                  <span class="text-[16px] ml-1">{{ item.title }}</span>
                </div>
              </template>
            </el-statistic>
          </div>
        </el-col>
      </el-row>
    </el-card>

    <!-- 数据卡片 -->
    <el-row :gutter="10" class="mt-3">
      <el-col :xs="24" :sm="12" :lg="6" v-for="(item, index) in cardData" :key="index">
        <el-card class="box-card">
          <template #header>
            <div class="card-header cursor">
              <span class="text-[var(--el-text-color-secondary)]">{{ item.title }}</span>
            </div>
          </template>
          <div class="card-content">
            <div class="numerical-value">
              <span class="number">{{ item.author }} 位大师</span>
              <span class="number">{{ item.book }} 件作品</span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
        <BarChart height="350px" width="100%" class="bg-[var(--el-bg-color-overlay)]" />
      </el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
        <PieChart height="350px" width="100%" class="bg-[var(--el-bg-color-overlay)]" />
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
defineOptions({
  name: 'Home',
  inheritAttrs: false
})
import { useUserStore } from '@/stores/modules/user'

const userStore = useUserStore()
const date = new Date()
const username = userStore.user.nickname

const motto = computed(() => {
  const hours = date.getHours()
  if (hours > 5 && hours < 8) {
    return '🌻 晨起披衣出草堂，轩窗已自喜微凉。'
  } else if (hours >= 8 && hours < 12) {
    return '🌞 满堂花醉三千客，一剑霜寒十四州。'
  } else if (hours >= 12 && hours < 18) {
    return '🌞 一身转战三千里，一剑曾当百万师。'
  } else if (hours >= 18 && hours < 21) {
    return '☕ 鲸饮未吞海，剑气已横秋。'
  } else {
    return '🌠 醉后不知天在水，满船清梦压星河。'
  }
})

// 右上角数量
const overallData = ref([
  {
    value: 99,
    iconClass: 'message',
    title: '消息',
    key: 'message'
  },
  {
    value: 495,
    iconClass: 'author',
    title: '大师',
    key: 'author'
  },
  {
    value: 124875,
    iconClass: 'document',
    title: '作品',
    key: 'works'
  }
])

// 卡片数量
const cardData = ref([
  {
    title: '稷下学宫',
    author: 100,
    book: 328
  },
  {
    title: '唐诗阁',
    author: 315,
    book: 919
  },
  {
    title: '宋词阁',
    author: 298,
    book: 929
  },
  {
    title: '国医堂',
    author: 36,
    book: 99
  }
])
</script>

<style lang="scss" scoped>
.home-container {
  position: relative;
  padding: 10px;

  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .data-box {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    font-weight: bold;
    color: var(--el-text-color-regular);
    background: var(--el-bg-color-overlay);
    border-color: var(--el-border-color);
    box-shadow: var(--el-box-shadow-dark);
  }

  .svg-icon {
    fill: currentcolor !important;
  }

  .box-card {
    margin-bottom: 10px;

    :deep(.el-card__header) {
      border: none;
    }

    .card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 600;
    }

    .card-content {
      :deep(.el-progress-bar__outer) {
        height: 17px !important;
      }

      .numerical-value {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        margin-bottom: 10px;

        .number {
          color: var(--text-color-primary);
          font-size: var(--font-size-extra-large);
          font-weight: 600;
        }
      }
    }
  }
}
</style>
