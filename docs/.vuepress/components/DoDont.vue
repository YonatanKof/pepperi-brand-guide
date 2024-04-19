<script setup>
defineProps({
	isGood: {
		type: Boolean,
		default: true,
	},
});
</script>
<template>
	<div>
		<code v-if="isGood" style="background-color: darkgreen">OK</code>
		<code v-else style="background-color: darkred">Not OK</code>
	</div>
</template>
<style scoped>
p {
	margin: unset;
}
code{
	font-weight: bold;
	font-size: var(--step--1);
	color: white;
	box-shadow: var(--shadow-sm);
	padding: var(--space-3xs) var(--space-2xs);
	white-space: nowrap;
}
</style>
