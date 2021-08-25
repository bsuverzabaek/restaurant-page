import { 
	createStore, 
	MutationTree, 
	Store as VuexStore, 
	CommitOptions, 
	createLogger 
} from 'vuex'

export type State = { jpSwitch: boolean }

const state: State = { jpSwitch: false }

export enum MutationTypes {
	JP_SWITCH = "LANG_SWITCH"
}

export type Mutations<S = State> = {
	[MutationTypes.JP_SWITCH](state: S): void
}

const mutations: MutationTree<State> & Mutations = {
	[MutationTypes.JP_SWITCH](state: State){
		if(state.jpSwitch){
			state.jpSwitch = false
		}else{
			state.jpSwitch = true
		}
	}
}

export type Store = Omit<
	VuexStore<State>,
	"commit"
> & {
	commit<K extends keyof Mutations>(
		key: K,
		options?: CommitOptions
	): ReturnType<Mutations[K]>
}

export const store = createStore({
	state,
	mutations,
	plugins: [createLogger()]
})

export function useStore() {
	return store as Store
}