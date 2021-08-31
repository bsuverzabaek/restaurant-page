<template>
	<h1>{{ jSwitch ? 'メニュー' : 'Menu' }}</h1>

	<section id="appetizer">
		<div class="text-center">
			<div 
				class="fs-2 text-decoration-underline"
			>
				{{ jSwitch ? '前菜' : 'Appetizers' }}
			</div>

			<div class="container-lg my-3">
				<div class="row justify-content-center">
					<div v-for="n in appNum(jSwitch)" class="col-md-6">
						<span>{{ appName(jSwitch,n-1) }}</span>
						<span>..............</span>
						<span>{{ jSwitch ? '￥' : '$' }}</span>
						<span>{{ appPrice(jSwitch,n-1) }}</span>
						<p>{{ appDesc(jSwitch,n-1) }}</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts" src="@/scripts/menu.ts">

</script>