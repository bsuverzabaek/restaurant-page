import { defineComponent, ref, computed } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
	name: 'Navbar',
	setup() {
		const route = useRoute();
		let jpSwitch = ref<boolean>(false);

		const navSwitch = computed(() => {
			return linkSwitch(route.path);				
		});

		function linkSwitch(link: string){
			if(link=='/'){
				jpSwitch.value = false;
			}else if(link=='/specialties'){
				jpSwitch.value = false;
			}else if(link=='/menu'){
				jpSwitch.value = false;
			}else if(link=='/contact'){
				jpSwitch.value = false;
			}else if(link=='/jobs'){
				jpSwitch.value = false;
			}else if(link=='/JP'){
				jpSwitch.value = true;
			}else if(link=='/specialtiesJP'){
				jpSwitch.value = true;
			}else if(link=='/menuJP'){
				jpSwitch.value = true;
			}else if(link=='/contactJP'){
				jpSwitch.value = true;
			}else if(link=='/jobsJP'){
				jpSwitch.value = true;
			}
		}

		return { jpSwitch, navSwitch, linkSwitch };	
	}
});