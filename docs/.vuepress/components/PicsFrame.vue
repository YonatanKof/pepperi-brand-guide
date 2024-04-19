<script setup>
defineProps({
	imageStart: {
		type: String,
		default: '/logo/Pepperi-Logo.svg',
	},
	imageEnd: {
		type: String,
		default: '/logo/Pepperi-Logo.svg',
	},
	titleStart: {
		type: String,
		default: 'Title Start',
	},
	titleEnd: {
		type: String,
		default: 'Title End',
	},
	bgStart: {
		type: String,
		default: 'var(--0-White)',
	},
	bgEnd: {
		type: String,
		default: 'var(--1-Bright)',
	},
	goodToUseStart: {
		type: Boolean,
		default: true,
	},
	goodToUseEnd: {
		type: Boolean,
		default: true,
	},
});
</script>
<template>
	<div class="pic-row">
		<div class="frame" :style="`background-color:` + bgStart + `;`">
			<div class="title-box">
				<p>{{ titleStart }}</p>
				<DoDont :is-good="goodToUseStart" />
			</div>
			<div class="image-box">
				<img class="this-image" :src="imageStart" alt="Pepperi logo, Full – Icon & Typeface" />
			</div>
		</div>
		<div class="frame" :style="`background-color:` + bgEnd + `;`">
			<div class="title-box">
				<p>{{ titleEnd }}</p>
				<DoDont :is-good="goodToUseEnd" />
			</div>
			<div class="image-box"><img class="this-image" :src="imageEnd" alt="Pepperi logo, Full – Icon & Typeface" /></div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.title-box {
	background-color: var(--color-sys-dis);
	padding: var(--space-xs) var(--space-s);
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	p {
		margin: unset;
		font-size: var(--step--1);
	}
}
.image-box {
	padding: var(--space-xl);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.pic-row {
	display: flex;
	flex-direction: row;
}
.frame {
	display: grid;
	grid-template-rows: auto 1fr;
	// text-align: center;
	width: 100%;
	// aspect-ratio: 16/9;
	// padding: var(--space-m);
	// gap: var(--space-xs);
}
</style>
