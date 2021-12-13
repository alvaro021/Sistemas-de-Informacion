<template>
<body >
   <SideBar />
   <Wrapper />
   <Footer />
</body>
</template>
<script>
// @ is an alias to /src
import SideBar from "@/components/SideBar.vue";
import Wrapper from "@/components/Wrapper.vue";
import Footer from "@/components/Footer.vue";


export default {
 name: "Pedido",
  components: {
    SideBar,
    Wrapper,
    Footer,
  },
  
};
</script>