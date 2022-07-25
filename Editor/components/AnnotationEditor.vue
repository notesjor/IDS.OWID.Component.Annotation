<template>
  <div style="margin: 20px 0 20px 0">
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
  mounted(){
    new LeaderLine(
      document.getElementById('3'),
      document.getElementById('6'), {
        color: '#f00',
        startPlug: 'behind',
        endPlug: 'arrow1',
        path:'arc', 
        startSocket: 'top',
        endSocket: 'top'
      }
    );
    new LeaderLine(
      document.getElementById('2'),
      document.getElementById('11'), {
        color: '#f00',
        startPlug: 'square',
        endPlug: 'behind',
        path:'grid', 
        startSocket: 'bottom',
        startSocketGravity: 1,
        endSocket: 'bottom',
      }
    );
  },
  watch: {
    textViewData: {
      handler: 'updateTokens',
      deep: true,
    },
  },
}
</script>