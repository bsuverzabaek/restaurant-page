import { defineComponent, computed } from 'vue';
import { useStore } from '@/store/index';
import { appet, appetJP } from '@/text/fullMenu';

export default defineComponent({
	name: 'Menu',
    setup() {
    	const store = useStore();
    	const jSwitch = computed(() => store.state.jpSwitch);

    	function appNum(jLang: boolean): number {
    		return jLang ? appetJP.length : appet.length;
    	}

    	function appName(jLang: boolean, index: number): string {
    		return jLang ? appetJP[index].name : appet[index].name;
    	}

    	function appPrice(jLang: boolean, index: number): number {
    		return jLang ? appetJP[index].price : appet[index].price;
    	}

    	function appDesc(jLang: boolean, index: number): string {
    		return jLang ? appetJP[index].desc : appet[index].desc;
    	}

    	return { 
    		jSwitch,
    		appNum,
    		appName,
    		appPrice,
    		appDesc 
    	}
    }
});