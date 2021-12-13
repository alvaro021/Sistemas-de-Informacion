<template>
  <div id="app">
    <WebViewer
      initialDoc="https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf"
    />
  </div>
</template>

<script>
import WebViewer from "./components/WebViewer.vue";
export default {
  name: "App",
  components: {
    WebViewer,
  },
};
</script>