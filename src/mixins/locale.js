import { t } from 'element-ui/src/locale/index';

export default {
    methods: {
        t(...args) {
            return t.apply(this, args);
        }
    }
};
