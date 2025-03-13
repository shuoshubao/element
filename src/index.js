import InfiniteScroll from 'element-ui/packages/infinite-scroll/index';
import Loading from 'element-ui/packages/loading/index';
import MessageBox from 'element-ui/packages/message-box/index';
import Message from 'element-ui/packages/message/index';
import Notification from 'element-ui/packages/notification/index';
import locale from 'element-ui/src/locale/index';
import pkg from '../package.json';
import components from './components';

const install = function (Vue, opts = {}) {
    locale.use(opts.locale);
    locale.i18n(opts.i18n);

    components.forEach(component => {
        Vue.component(component.name, component);
    });

    Vue.use(InfiniteScroll);
    Vue.use(Loading.directive);

    Vue.prototype.$ELEMENT = {
        size: opts.size || '',
        zIndex: opts.zIndex || 2000
    };

    Vue.prototype.$loading = Loading.service;
    Vue.prototype.$msgbox = MessageBox;
    Vue.prototype.$alert = MessageBox.alert;
    Vue.prototype.$confirm = MessageBox.confirm;
    Vue.prototype.$prompt = MessageBox.prompt;
    Vue.prototype.$notify = Notification;
    Vue.prototype.$message = Message;
};

export default {
    version: pkg.version,
    locale: locale.use,
    i18n: locale.i18n,
    install,
    Loading,
    Message,
    MessageBox,
    Notification
};
