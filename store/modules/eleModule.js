import Vue from "vue";
export default {
    state: {
        hot: [] //用来装请求回来的数据
    },
    mutations: {
        //写个方法给hot数组设置数据
        setHot(state, data) {
            state.hot = data;
        }
    },
    actions: {
        //写个方法,做http请求
        getHot(content) {
            //loading效果
            let loading = Vue.prototype.$loading({ text: "玩命加载中..." });

            Vue.http.get("http://localhost/eleui.php", {}, { emulateJSON: true })
                .then(
                    function(res) { //请求成功的回调函数
                        //先结束loading效果
                        loading.close();
                        //调用设置hot数据的方法,把请求成功的数据给hot数组
                        content.commit("setHot", res.body);
                    },
                    function() {}
                );
        }
    }
}