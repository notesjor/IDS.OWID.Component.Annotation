<template>
  <div style="margin: 20px 0 20px 0">
    <Token :id="i" :text="x" v-for="(x,i) in tokens" :key="i"/>
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
    // Pfeile mit LeaderLinde
    new LeaderLine(
      document.getElementById('token_3'),
      document.getElementById('token_6'), {
        color: '#f00',
        startPlug: 'behind',
        endPlug: 'arrow1',
        path:'arc', 
        startSocket: 'top',
        endSocket: 'top',
        middleLabel: 'Test'
      }
    );
    new LeaderLine(
      document.getElementById('token_2'),
      document.getElementById('token_11'), {
        color: '#f00',
        startPlug: 'square',
        endPlug: 'behind',
        path:'grid', 
        startSocket: 'bottom',
        startSocketGravity: 1,
        endSocket: 'bottom',
        middleLabel: LeaderLine.captionLabel({text: 'LABEL-2', color: 'blue', fontFamily: 'Arial', fontSize: '12px', offset: [-20, 0]})
      }
    );

    // Wrapper
    var wrapper = document.createElement('div'); // Neues Element (wrapper) erstellen   
    var e3 = document.getElementById("token_3"); // Element 3 finden
    var e4 = document.getElementById("token_4") // Element 4 finden
    e3.parentNode.insertBefore(wrapper, e3); // Element (wrapper) vor Element 3 einfügen

    console.log(e3.offsetHeight);

    wrapper.appendChild(e3); // Element 3 in Element (wrapper) einfügen
    wrapper.appendChild(e4); // Element 4 in Element (wrapper) einfügen 
    // Wrapper style
    wrapper.style.border = "1px solid #f00";
    wrapper.style.display = "inline";
    wrapper.style.paddingTop = "40px";



    
  },
  watch: {
    textViewData: {
      handler: 'updateTokens',
      deep: true,
    },
  },
}
</script>