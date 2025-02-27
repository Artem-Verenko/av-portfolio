<template>
	<nav role="navigation" class="navbar">
		<ul>
			<li><router-link to="/">Home</router-link></li>
			<li><router-link to="/blog">Blog</router-link></li>
			<li><router-link to="/books">Books</router-link></li>
			<li><router-link to="/cv">CV</router-link></li>
		</ul>
	</nav>
</template>

<script></script>

<style scoped>
.navbar {
	background-color: #f5f5f5;
	padding: 1rem;
	margin-bottom: 1rem;
}

ul {
	display: flex;
	list-style: none;
	gap: 1rem;
	margin: 0;
	padding: 0;
}

.router-link-active {
	color: blue;
	font-weight: bold;
}
</style>
