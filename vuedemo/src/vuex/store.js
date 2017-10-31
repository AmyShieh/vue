/**
 * Created by Amy on 2017/10/24.
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
  count:0
};
const mutations = {
  add(state,num){
    state.count+= num;
  },
  reduce(state){
    state.count--;
  }
};
const getters = {
  count:function (state) {
    return state.count+=10;
  }
};

const actions = {
  addAction(context){
    context.commit('add',3);
    setTimeout(()=>{context.commit('reduce')},2000);
    console.log("异步输出，先输出");
  },
  reduceAction({commit}){
    commit('reduce')
  }
}
const moduleA = {
  state,
  mutations,
  getters,
  actions
}
export default new Vuex.Store({
  // modules:{a:moduleA}
  state,
  mutations,
  getters,
  actions
})
