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
	imageWidthStart: {
		type: String,
		default: undefined,
	},
	imageWidthEnd: {
		type: String,
		default: undefined,
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
	isDarkStart: {
		type: Boolean,
		default: false,
	},
	isDarkEnd: {
		type: Boolean,
		default: false,
	},
	filterStart: {
		type: String,
		default: undefined,
	},
	filterEnd: {
		type: String,
		default: undefined,
	},
	backgroundStart: {
		type: String,
		default: undefined,
	},
	backgroundEnd: {
		type: String,
		default: undefined,
	},
});
</script>
<template>
	<div class="pic-row">
		<div class="frame" :style="{ background: bgStart }">
			<div :class="{ dark: isDarkStart }" class="title-box">
				<p>{{ titleStart }}</p>
				<DoDont :is-good="goodToUseStart" />
			</div>
			<div class="image-box">
				<img
					class="this-image"
					:style="{ maxWidth: imageWidthStart, filter: filterStart }"
					:src="imageStart"
					:alt="titleStart"
				/>
			</div>
		</div>
		<div class="frame" :style="{ background: bgEnd }">
			<div :class="{ dark: isDarkEnd }" class="title-box">
				<p>{{ titleEnd }}</p>
				<DoDont :is-good="goodToUseEnd" />
			</div>
			<div class="image-box">
				<img
					class="this-image"
					:style="{ maxWidth: imageWidthEnd, filter: filterEnd }"
					:src="imageEnd"
					:alt="titleEnd"
				/>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.title-box {
	background-color: var(--color-sys-dis);
	padding: var(--space-xs);
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	p {
		margin: unset;
		font-size: var(--step--1);
		color: var(--color-sys-main);
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
	width: 100%;
	aspect-ratio: 1/0.9;
}
</style>
