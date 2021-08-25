<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    	<div class="container-fluid">
      		<button 
			    class="navbar-toggler" 
			    type="button" 
			    data-bs-toggle="collapse" 
			    data-bs-target="#navBar" 
			    aria-controls="navBar" 
			    aria-expanded="false" 
			    aria-label="Toggle navigation"
			>
			    <span class="navbar-toggler-icon"></span>
			</button>
			<div 
			    class="collapse navbar-collapse" 
			    id="navBar"
			>
			    <!--span class="navbar-brand">Sicily Italy</span-->
			    <div class="navbar-nav">
			        <router-link 
			        	to="/" 
			            class="nav-link active"
			        >
			        	{{ jSwitch ? 'ホーム' : 'Home' }}
			        </router-link>
			        <router-link 
			            to="/specialties" 
			            class="nav-link active"
			        >
			            {{ jSwitch ? 'こだわり' : 'Specialties' }}
			        </router-link>
			        <router-link 
			            to="/menu" 
			            class="nav-link active"
			        >
			            {{ jSwitch ? 'メニュー' : 'Menu' }}
			        </router-link>
			        <router-link 
			            to="/contact" 
			            class="nav-link active"
			        >
			            {{ jSwitch ? 'お問い合わせ' : 'Contact' }}
			        </router-link>
			        <router-link 
			            to="/jobs" 
			            class="nav-link active"
			        >
			            {{ jSwitch ? '採用情報' : 'Jobs' }}
			        </router-link>
			        <div class="nav-item dropdown">
			        	<a 
			              	class="nav-link dropdown-toggle active" 
			              	href="#" 
			              	id="navDropDown" 
			              	role="button" 
			              	data-bs-toggle="dropdown" 
			              	aria-expanded="false"
			            >
			              	{{ jSwitch ? '言語' : 'Language' }}
			            </a>
			            <ul class="dropdown-menu" aria-labelledby="navDropDown">
			            	<li>	
			                	<router-link
			                  		to="/"
			                  		class="dropdown-item"
			                  		@click="changeLang()"
			                	>
			                		{{ jSwitch ? 'English' : '日本語' }}
			                	</router-link>
			              	</li>
			            </ul>
			        </div>
			    </div>
			</div>
		</div>
	</nav>
</template>

<script lang="ts" src="../scripts/nav.ts">

</script>