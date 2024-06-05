<script setup>
defineProps({
	colorOne: {
		type: String,
		default: 'var(--color-primary-brand)',
	},
	colorTwo: {
		type: String,
		default: 'var(--color-primary-contrast)',
	},
});
const removeVarPrefix = (color) => color.replace(/var\(--|\)/g, '');
</script>
<template>
	<div class="palette">
		<div class="text">
			<p>
				<code>{{ removeVarPrefix(colorOne) }}</code>
			</p>
		</div>
		<div class="box">
			<span></span>
		</div>
		<div class="text">
			<p>
				<code>{{ removeVarPrefix(colorTwo) }}</code>
			</p>
		</div>
	</div>
</template>
<style scoped>
div {
	--box-size: calc(var(--space-2xl) * 2.5);
}
.palette {
	max-width: calc(var(--space-3xl) * 4);
	display: flex;
	flex-direction: column;
	align-items: center;
}
.box {
	width: var(--box-size);
	height: var(--box-size);
	background-color: v-bind(colorOne);
	border-radius: var(--border-radius-md);
	overflow: hidden;
	box-shadow: var(--shadow-md);
	/* margin-inline-start: var(--space-l); */
}
span {
	display: block;
	width: var(--box-size);
	height: var(--box-size);
	background-color: v-bind(colorTwo);
	clip-path: polygon(100% 0, 0% 100%, 100% 100%);
}
/* p:last-child {
	margin-inline-start: calc(var(--space-l) * 2);
} */
.text {
	width: 100%;
	display: flex;
}

.text:last-child {
	justify-content: end;
}
</style>
