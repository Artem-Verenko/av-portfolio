<template>
	<nav role="navigation" class="navbar">
		<ul>
			<li><router-link to="/blog">Blog</router-link></li>
			<li><router-link to="/books">Books</router-link></li>
			<li><router-link to="/cv">CV</router-link></li>
		</ul>
	</nav>
</template>

<script></script>

<style scoped>
.router-link-active {
	color: blue;
	font-weight: bold;
}
</style>
