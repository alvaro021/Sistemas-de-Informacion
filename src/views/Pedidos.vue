<template id="pedido-cliente">
<head>
		<title>Amazin Grace Pastelería</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
	</head>
<body class = "is-preload">
   <SideBar />
   <Pedido />
   <Footer />
</body>
</template>
<script>
import SideBar from "@/components/SideBar.vue";
import Pedido from "@/components/Pedido.vue";
import Footer from "@/components/Footer.vue";
export default {
 name: "PedidoCliente",
 template: "#pedido-cliente",
  components: {
    SideBar,
    Pedido,
    Footer,
  },
  
};
</script>