<template>
  <div class="token" :style="cssVars" :id="'token_'+id">
    <div class="above" :style="aboveStyle">{{ this.above }}</div>
    <div class="txt">{{ this.text }}</div>
    <div class="below">{{ this.below }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: "000",
      above:"",
      aboveStyle:"#000",
      below:""
    };
  },
  created(){
    console.log(this.$store.state.editorData.data.above);
    if(this.$store.state.editorData.data.above != null && this.$store.state.editorData.data.above != undefined && this.$store.state.editorData.data.above.length > this.id)
      {
        this.above = this.$store.state.editorData.data.above[this.id];
      }
      if(this.$store.state.editorData.data.aboveColor != null && this.$store.state.editorData.data.aboveColor != undefined && this.$store.state.editorData.data.aboveColor.length > this.id)
      {
        this.aboveStyle = "color:white; background-color:"+this.$store.state.editorData.data.aboveColor[this.id];
        
      }
    if(this.$store.state.editorData.data.below != null && this.$store.state.editorData.data.below != undefined && this.$store.state.editorData.data.below.length > this.id)
      {
        this.below = this.$store.state.editorData.data.below[this.id];
      }
  },
  props: ["text", "id"],
  //computed: {
  //  cssVars() {
  //    if (this.highlight)
  //      return {
  //        "--token-color":
  //          this.text in this.$store.state.textViewData.data.highlight
  //            ? this.$store.state.textViewData.data.highlight[this.text]
  //            : "#000",
  //      };
  //    else
  //      return {
  //        "--token-color": "#000",
  //      };
  //  },  
  //},  
  methods:{
    printInfo(){
      alert("test");
    }
  }
};
</script>

<style lang="scss">
.token {
  color: var(--token-color);
  display:inline-block;
}
.txt{
  display: inline-block;
  position: relative;
  margin: 2px 5px 0 5px;
}
.below{
  display: block;
  position: relative;
  margin: -15 0 0 0;
  text-align: center;
  font-size: 0.6em;
}
.above{
  display: block;
  position: relative;
  margin: -5 0 0 0;
  text-align: center;
  font-size: 0.6em;
}
</style>
