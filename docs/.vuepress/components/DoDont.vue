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
		<code v-if="isGood" style="color: var(--Success)">Is OK</code>
		<code v-else style="color: var(--Caution)">Not OK</code>
	</div>
</template>
<style scoped>
p {
	margin: unset;
}
code{
	font-weight: bold;
	font-size: var(--step--1);
}
</style>
