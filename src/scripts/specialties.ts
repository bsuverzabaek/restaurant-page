import { defineComponent, computed } from 'vue';
import { useStore } from '@/store/index';

export default defineComponent({
	name: 'Specialties',
    setup() {
    	const store = useStore();

    	return { jSwitch: computed(() => store.state.jpSwitch) }
    }
});