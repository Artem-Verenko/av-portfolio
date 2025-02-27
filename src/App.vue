<template>
	<Navbar />
	<RouterView />
	<Footer />
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { RouterView } from "vue-router"; // Add this import
</script>
