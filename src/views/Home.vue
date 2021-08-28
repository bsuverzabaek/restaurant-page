<template>
	<h1>{{ jSwitch ? 'シチリア　イタリア' : 'Sicily Italy' }}</h1>
	<Imgslides></Imgslides>

	<section id="aboutUs">
		<div class="text-center">
			<div 
				class="fs-2 text-decoration-underline"
			>
				{{ jSwitch ? '紹介' : 'About Us' }}
			</div>
			<p class="ms-5 me-5">
				{{ about(jSwitch) }}
			</p>
			<p>
				{{ about2(jSwitch) }} 
				<span class="fst-italic">
					Buon Appetito!
				</span>
			</p>
		</div>
	</section>

	<section id="location">
		<div class="text-center">
			<div 
				class="fs-2 text-decoration-underline"
			>
				{{ jSwitch ? '住所' : 'Location' }}
			</div>
			<div>
				{{ location(jSwitch) }}
			</div>
			<div class=mb-3>{{ location2(jSwitch) }}</div>
		</div>
	</section>

	<section id="storeHours">
		<div class="text-center">
			<div class="fs-2 text-decoration-underline">
					{{ jSwitch ? '営業時間' : 'Store Hours' }}
			</div>
			<div class="table-responsive">
				<table class="table table-borderless table-sm w-25 mx-auto">
					<tbody>
						<tr v-for="n in 3">
							<td class="text-nowrap">
								{{ days(jSwitch,n-1) }}
							</td>
							<td class="text-nowrap">
								{{ hours(jSwitch,n-1) }}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</section>

	<section id="customerReviews">
		<div class="text-center">
			<div class="fs-2 text-decoration-underline">
				{{ jSwitch ? 'ロコミ' : 'Customer Reviews' }}
			</div>
			<div class="container-lg">
				<div class="row justify-content-center my-3">
					<div class="col-lg-8">
						<div class="list-group">
							<div v-for="n in 5" class="list-group-item py-3">
								<div class="pb-2">
									<BIconStarFill v-for="n in 5" />
								</div>
								<p class="mb-3">
									{{ comment(jSwitch,n-1) }}
								</p>
								<figcaption class="blockquote-footer">
									{{ name(jSwitch,n-1) }}
								</figcaption>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts" src="@/scripts/home.ts">

</script>