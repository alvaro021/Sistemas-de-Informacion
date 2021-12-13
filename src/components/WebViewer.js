export default {
    name: 'WebViewer',
    props: {
      path: String,
      url: String
    },
    mounted: function () {
      WebViewer({
        path: this.path,
        initialDoc: "src\assets\Catalogo2.pdf", // replace with your own PDF file
      }, this.$refs.viewer).then((instance) => {
        // at this point, the viewer is 'ready'
        const { Core, UI } = instance;
        const { documentViewer, annotationManager, Annotations, Tools } = Core;
  
        // See https://www.pdftron.com/documentation/web/guides/basic-functionality for more info.
        documentViewer.addEventListener('documentLoaded', function() {
            // call methods relating to the loaded document
        });
      });
    }
  }