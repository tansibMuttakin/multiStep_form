import { createStore } from 'vuex'

const store = createStore({
  state(){
    return{
      title:'',
      description:'',
      images:[],
    }
  },
  mutations:{
    storeTextToState(state,payload){
      if (payload.title!='' && payload.description!='') {
        state.title = payload.title;
        state.description = payload.description;
      }
    },
    storeImagesToState(state,payload){
      if (Object.keys(payload).length!=0) {
        payload.forEach(element => {
          state.images.push(element);
        });
      }
    },
    saveToLoal(state){
      let oldData = JSON.parse(window.localStorage.getItem('blog'));
      if (oldData==null) {
        let arr = [];
        arr.push(state);
        window.localStorage.setItem('blog',JSON.stringify(arr));
      }
      else{

        oldData.push(state);
        window.localStorage.setItem('blog',JSON.stringify(oldData));
      }
    },
    clearState(state){
      state.title='';
      state.description='';
      state.images=[];
    }
  }
})

export default store;
