<template>
	<div class="frame-by-frame">
		<slot />
	</div>
</template>
<style scoped>
.frame-by-frame {
	display: grid;
	grid-template-columns: 1fr;
	overflow: hidden;
	border-radius: var(--border-radius-md);
	border: 1px solid var(--color-sys-main);
	margin-block: var(--space-m);
	box-shadow: var(--shadow-lg);
}
</style>
