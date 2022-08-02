<template>
  <Container />
  
</template>

<script>
import Container from './views/Container.vue'

export default {
  name: 'App',
  components: {
    Container,
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

@font-face {
    font-family: 'GangwonEdu_OTFBoldA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEdu_OTFBoldA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'LeferiBaseType-BoldA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiBaseType-BoldA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

body {
  font-family: GangwonEdu_OTFBoldA;
}

</style>
