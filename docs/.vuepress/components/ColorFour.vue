<script setup>
defineProps({
	colorOne: {
		type: String,
		default: 'var(--color-system-main)',
	},
	colorTwo: {
		type: String,
		default: 'var(--color-system-dimmed)',
	},
	colorThree: {
		type: String,
		default: 'var(--color-system-disabled)',
	},
	colorFour: {
		type: String,
		default: 'var(--color-system-muted)',
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
			<p>
				<code>{{ removeVarPrefix(colorTwo) }}</code>
			</p>
		</div>
		<div class="box">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
		<div class="text">
			<p>
				<code>{{ removeVarPrefix(colorFour) }}</code>
			</p>
			<p>
				<code>{{ removeVarPrefix(colorThree) }}</code>
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
.text {
	width: 100%;
	display: flex;
	justify-content: space-between;
}

.box {
	width: var(--box-size);
	height: var(--box-size);
	background-color: var(--color-mono-0-white);
	border-radius: var(--border-radius-md);
	overflow: hidden;
	box-shadow: var(--shadow-md);
	/* margin-inline-start: var(--space-3xl); */
	position: relative;
}
span {
	display: block;
	position: absolute;
	width: var(--box-size);
	height: var(--box-size);
}
span:nth-child(1) {
	background-color: v-bind(colorOne);
	clip-path: polygon(0 0, 50% 0, 50% 50%, 0% 50%);
}
span:nth-child(2) {
	background-color: v-bind(colorTwo);
	clip-path: polygon(100% 0, 50% 0, 50% 50%, 100% 50%);
}
span:nth-child(3) {
	background-color: v-bind(colorThree);
	clip-path: polygon(100% 100%, 50% 100%, 50% 50%, 100% 50%);
}
span:nth-child(4) {
	background-color: v-bind(colorFour);
	clip-path: polygon(0 100%, 50% 100%, 50% 50%, 0 50%);
}
/* p:last-child {
	margin-inline-start: calc(var(--space-l) * 2);
} */
</style>
