import { defineComponent, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
	name: 'Navbar',
	setup() {
		const route = useRoute();
		let jpSwitch = ref<boolean>(false);

		watch(
			() => route.path,
			(path, prevPath) => {
				if(path=='/'){
					jpSwitch.value = false;
				}else if(path=='/specialties'){
					jpSwitch.value = false;
				}else if(path=='/menu'){
					jpSwitch.value = false;
				}else if(path=='/contact'){
					jpSwitch.value = false;
				}else if(path=='/jobs'){
					jpSwitch.value = false;
				}else if(path=='/JP'){
					jpSwitch.value = true;
				}else if(path=='/specialtiesJP'){
					jpSwitch.value = true;
				}else if(path=='/menuJP'){
					jpSwitch.value = true;
				}else if(path=='/contactJP'){
					jpSwitch.value = true;
				}else if(path=='/jobsJP'){
					jpSwitch.value = true;
				}
			}
		)

		return { jpSwitch };	
	}
});