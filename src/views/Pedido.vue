<template>
<head>
		<title>Portafolio Alvaro Quiroz</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
	</head>
<body class = "is-preload">
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