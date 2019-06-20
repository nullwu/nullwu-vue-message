import MessageComponent from './message.vue'

const Message = {
    install(Vue) {
        Vue.prototype.$message = function (option) {

            //如果没传则为空对象
            option = option || {};
            //如果传进来的是字符串
            if (typeof option === 'string') {
                option = {
                    text: option
                };
            }
            const MessageController = Vue.extend(MessageComponent);
            var instance = new MessageController({
                data: option
            }).$mount();

            document.body.appendChild(instance.$el);

        }
    }
}

if (window.Vue) {
    Vue.use(Message)
}
export default Message