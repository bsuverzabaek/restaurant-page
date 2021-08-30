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
				<div class="row justify-content-center gx-3">
					<div class="col-md-6">
						<span>Salad</span>
						<span>$5.99</span>
					</div>
					<div class="col-md-6">
						<div>sdfdsfds</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts" src="@/scripts/menu.ts">

</script>