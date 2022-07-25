<template>
  <div>
    <span v-for="(x,i) in tokens" :key="i" :text="x">
      <Token :id="i" :text="x"/>
    </span>
  </div>
</template>

<script>
import Token from './Token.vue'

export default {
  components: {
    Token,
  },
  data () {
    return {
      tokens: [],
    }
  },
  methods: {
    updateTokens () {
      this.tokens = this.$store.state.editorData.data.tokens
    },
  },
  created () {
    this.updateTokens()
  },
  watch: {
    textViewData: {
      handler: 'updateTokens',
      deep: true,
    },
  },
}
</script>