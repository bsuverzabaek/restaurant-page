import { defineComponent, computed } from 'vue';
import Imgslides from '@/components/Imgslides.vue';
import { BIconStarFill } from 'bootstrap-icons-vue';
import { useStore } from '@/store/index';

export default defineComponent({
	name: 'Home',
    components: { Imgslides, BIconStarFill },
    setup() {
    	const store = useStore();

    	return { jSwitch: computed(() => store.state.jpSwitch) }
    }
});