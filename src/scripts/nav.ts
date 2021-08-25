import { defineComponent, computed } from 'vue';
import { useStore, MutationTypes } from '@/store/index';

export default defineComponent({
	name: 'Navbar',
	setup() {
		const store = useStore();

		return {
			jSwitch: computed(() => store.state.jpSwitch),
			changeLang: () => store.commit(MutationTypes.JP_SWITCH)
		};	
	}
});