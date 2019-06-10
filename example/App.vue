<template>
  <div>
    <ele-image
      :size="100"
      :src="src"
      :width="200"
      class="demo"
    ></ele-image>
    <ele-image
      :size="100"
      class="demo"
      src="123"
    ></ele-image>
    <e-image
      :size="100"
      :src="src"
      class="demo"
      radius="50%"
    />
    <e-image
      :size="100"
      class="demo"
      username="张超杰"
    />
    <e-image
      :size="100"
      class="demo"
      username="zhang"
    />
  </div>
</template>

<script>
import { EleImage as EImage } from '../src/index'
export default {
  name: 'App',
  components: {
    EImage
  },
  data () {
    return {
      src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  },
  methods: {},
  mounted () {}
}
</script>

<style>
.demo {
  margin-top: 20px;
  margin-left: 50px;
}
</style>
