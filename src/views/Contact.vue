<template>
	<h1>{{ jSwitch ? 'お問い合わせ' : 'Contact' }}</h1>

	<section id="contactUs">
		<div class="text-center">
			<p>{{ contactTitle(jSwitch) }}</p>
		</div>
	</section>
</template>

<script lang="ts" src="@/scripts/contact.ts">

</script>