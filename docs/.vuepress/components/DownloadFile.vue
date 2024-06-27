<script setup>
defineProps({
	fileLink: {
		type: String,
		default: undefined,
	},
	fileDesc: {
		type: String,
		default: 'Download the file',
	},
});
</script>
<template>
	<a :href="fileLink" download>{{ fileDesc }} ↓</a>
</template>
<style scoped>
a {
	display: block;
    color: var(--color-link-main);
	background-color: var(--color-system-invert-highlight);
	box-shadow: var(--shadow-sm);
	/* border: none; */
	padding: 0.4em 0.6em;
	font-size: var(--step--1);
	border-radius: var(--border-radius-sm);
	font-family: var(--font-mono);
	cursor: pointer;
    margin-block-end: var(--space-xs);
}
</style>
