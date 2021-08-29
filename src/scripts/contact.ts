import { defineComponent, computed } from 'vue';
import { useStore } from '@/store/index';
import { contHead, contHeadJP } from '@/text/contactHead';

export default defineComponent({
	name: 'Contact',
    setup() {
    	const store = useStore();
    	const jSwitch = computed(() => store.state.jpSwitch);

    	function contactTitle(jLang: boolean): string {
    		return jLang ? contHeadJP.text : contHead.text;
    	}

    	return { jSwitch, contactTitle }
    }
});