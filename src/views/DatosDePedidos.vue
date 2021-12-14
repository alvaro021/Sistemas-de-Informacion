<template>
<head>
		<title>Amazin Grace Pastelería</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
	</head>
<body >
   <DatosDePedido />
   <Footer />
</body>
</template>
<script>
import SideBar from "@/components/SideBar.vue";
import DatosDePedido from "@/components/DatosDePedido.vue";
import Footer from "@/components/Footer.vue";
export default {
 name: "DatosDePedidos",
  components: {
    SideBar,
    DatosDePedido,
    Footer,
  },
  
};
</script>