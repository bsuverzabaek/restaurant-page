import { defineComponent, computed } from 'vue';
import Imgslides from '@/components/Imgslides.vue';
import { BIconStarFill } from 'bootstrap-icons-vue';
import { useStore } from '@/store/index';
import { aboutUs, aboutUs2, aboutUsJP, aboutUsJP2 } from '@/text/aboutUs';
import { address, address2, addressJP, addressJP2 } from '@/text/address';
import { storeD, storeH, storeDJP, storeHJP } from '@/text/storeHours';
import { reviews, reviewsJP, names, namesJP } from '@/text/reviews';

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

    	function days(jLang: boolean, index: number): string {
    		return jLang ? storeDJP[index] : storeD[index];
    	}

    	function hours(jLang: boolean, index: number): string {
    		return jLang ? storeHJP[index] : storeH[index];
    	}

    	function comment(jLang: boolean, index: number): string {
    		if(index==0){
    			return jLang ? reviewsJP.rev1 : reviews.rev1;
    		}else if(index==1){
    			return jLang ? reviewsJP.rev2 : reviews.rev2;
    		}else if(index==2){
    			return jLang ? reviewsJP.rev3 : reviews.rev3;
    		}else if(index==3){
    			return jLang ? reviewsJP.rev4 : reviews.rev4;
    		}else{
    			return jLang ? reviewsJP.rev5 : reviews.rev5;
    		}
    	}

    	function name(jLang: boolean, index: number): string {
    		if(index==0){
    			return jLang ? namesJP.rev1 : names.rev1;
    		}else if(index==1){
    			return jLang ? namesJP.rev2 : names.rev2;
    		}else if(index==2){
    			return jLang ? namesJP.rev3 : names.rev3;
    		}else if(index==3){
    			return jLang ? namesJP.rev4 : names.rev4;
    		}else{
    			return jLang ? namesJP.rev5 : names.rev5;
    		}
    	}

    	return { 
    		jSwitch, 
    		about,
    		about2,
    		location,
    		location2,
    		days,
    		hours,
    		comment,
    		name
    	}
    }
});