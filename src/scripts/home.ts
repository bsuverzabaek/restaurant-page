import { defineComponent, computed } from 'vue';
import Imgslides from '@/components/Imgslides.vue';
import { BIconStarFill } from 'bootstrap-icons-vue';
import { useStore } from '@/store/index';
import { aboutUs, aboutUs2, aboutUsJP, aboutUsJP2 } from '@/text/aboutUs';
import { address, address2, addressJP, addressJP2 } from '@/text/address';

export default defineComponent({
	name: 'Home',
    components: { Imgslides, BIconStarFill },
    setup() {
    	const store = useStore();
    	const jSwitch = computed(() => store.state.jpSwitch);

    	function about(jLang: boolean): string {
    		return jLang ? aboutUsJP.text : aboutUs.text;
    	}

    	function about2(jLang: boolean): string {
    		return jLang ? aboutUsJP2.text : aboutUs2.text;
    	}

    	function location(jLang: boolean): string {
    		return jLang ? addressJP.text : address.text;
    	}

    	function location2(jLang: boolean): string {
    		return jLang ? addressJP2.text : address2.text;
    	}

    	return { 
    		jSwitch, 
    		about,
    		about2,
    		location,
    		location2
    	}
    }
});