<script setup>
import { computed, ref } from 'vue'
import { marked } from 'marked'

const content = `
论语
---
学而
---
子曰：学而时习之，不亦说乎？有朋自远方来，不亦乐乎？人不知而不愠，不亦君子乎？\n
曾子曰：吾日三省吾身:为人谋而不忠乎?与朋友交而不信乎?传不习乎?\n
子曰：君子食无求饱，居无求安，敏于事而慎于言，就有道而正焉。可谓好学也已。\n
---
为政
---
子曰：道之以政，齐之以刑，民免而无耻。道之以德，齐之以礼，有耻且格。\n
子曰：吾十有五而志于学，三十而立，四十而不惑，五十而知天命，六十而耳顺，七十而从心所欲，不逾矩。\n
子曰：学而不思则罔，思而不学则殆。\n
`
const inputText = ref(content)

const html = computed(() => {
  return marked.parse(inputText.value)
})
</script>

<template>
  <div class="page-container">
    <el-input v-model="inputText" class="input" type="textarea"></el-input>
    <div class="marked" :innerHTML="html"></div>
  </div>
</template>

<style lang="scss" scoped>
.page-container {
  display: flex;
  justify-content: space-between;
  height: calc(100vh - 100px);

  .input {
    width: 49%;
    height: calc(100vh - 100px);

    :deep(.el-textarea__inner) {
      height: 100% !important;
    }
  }

  .marked {
    width: 49%;
    height: calc(100vh - 100px);
    padding: 0 20px;
    border: 1px solid var(--text-color-placeholder);
  }
}
</style>
