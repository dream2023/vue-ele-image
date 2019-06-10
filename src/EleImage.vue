<template>
  <el-image
    :alt="alt"
    :fit="computedFit"
    :lazy="computedLazy"
    :referrer-policy="referrerPolicy"
    :scrollContainer="scrollContainer"
    :src="computedSrc"
    :style="styles"
    @error="handleError"
    @load="handleLoad"
    class="vue-ele-image"
    v-if="computedSrc"
  >
    <template v-slot:placeholder>
      <slot name="placeholder"/>
    </template>
    <template v-slot:error>
      <slot name="error"/>
    </template>
  </el-image>

  <ele-image-avatar
    :height="computedHeight"
    :styles="styles"
    :username="username"
    :width="computedWidth"
    v-else
  />
</template>

<script>
import EleImageAvatar from './EleImageAvatar'

export default {
  name: 'EleImage',
  props: {
    username: String,
    src: String,
    defaultSrc: String,
    alt: String,
    fit: String,
    lazy: Boolean,
    size: Number,
    width: Number,
    height: Number,
    color: String,
    radius: String,
    referrerPolicy: String,
    backgroundColor: String,
    customStyle: Object,
    scrollContainer: [String, Object],
  },
  components: {
    EleImageAvatar
  },
  data () {
    return {}
  },
  computed: {
    globalParams () {
      return this.$EleImageParams || {}
    },
    computedSrc () {
      return this.src || this.defaultSrc || this.globalParams.defaultSrc
    },
    computedLazy () {
      return this.lazy || this.globalParams.lazy
    },
    computedFit () {
      return this.fit || this.globalParams.fit
    },
    computedColor () {
      return this.color || this.globalParams.color
    },
    computedBackgroundColor () {
      return this.backgroundColor || this.globalParams.backgroundColor
    },
    computedWidth () {
      return this.width || this.size
    },
    computedHeight () {
      return this.height || this.size
    },
    computedRadius() {
      let radius = ''
      if (this.radius) {
        radius = this.radius
      } else {
        radius = this.computedSrc ? '5px' : '50%'
      }
      return radius
    },
    styles () {
      const styles = {}
      styles.borderRadius = this.computedRadius

      if (this.computedWidth) {
        styles.width = this.computedWidth + 'px'
      }

      if (this.computedHeight) {
        styles.height = this.computedHeight + 'px'
      }

      if (!this.computedSrc) {
        if (this.computedColor) {
          styles.color = this.computedColor
        }

        if (this.computedBackgroundColor) {
          styles.backgroundColor = this.computedBackgroundColor
        }
      }

      return Object.assign({}, styles, this.customStyle)
    }
  },
  methods: {
    handleLoad() {
      this.$emit('load')
    },
    handleError() {
      this.$emit('error')
    }
  }
}
</script>

<style>
.vue-ele-image {
  vertical-align: middle;
}
</style>
