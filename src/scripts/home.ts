import { defineComponent, computed } from 'vue';
import Imgslides from '@/components/Imgslides.vue';
import { BIconStarFill } from 'bootstrap-icons-vue';
import { useStore } from '@/store/index';
import aboutUs from '@/text/aboutUs';
import aboutUsJP from '@/text/aboutUsJP';
import aboutUs2 from '@/text/aboutUs2';
import aboutUsJP2 from '@/text/aboutUsJP2';

export default defineComponent({
	name: 'Home',
    components: { Imgslides, BIconStarFill },
    setup() {
    	const store = useStore();
    	const jSwitch = computed(() => store.state.jpSwitch);

    	function about(jLang: boolean) {
    		return jLang ? aboutUsJP.text : aboutUs.text;
    	}

    	function about2(jLang: boolean) {
    		return jLang ? aboutUsJP2.text : aboutUs2.text;
    	}

    	return { 
    		jSwitch, 
    		about,
    		about2
    	}
    }
});