import { merge } from 'lodash';
import Vue from 'vue';
import Format from './format';
import defaultLang from './lang/zh-CN';

const format = Format(Vue);
let lang = defaultLang;
let merged = false;
let i18nHandler = function () {
    const vuei18n = Object.getPrototypeOf(this || Vue).$t;
    if (typeof vuei18n === 'function' && !!Vue.locale) {
        if (!merged) {
            merged = true;
            Vue.locale(Vue.config.lang, merge(lang, Vue.locale(Vue.config.lang) || {}, { clone: true }));
        }
        return vuei18n.apply(this, arguments);
    }
};

export const t = function (path, options) {
    let value = i18nHandler.apply(this, arguments);
    if (value !== null && value !== undefined) return value;

    const array = path.split('.');
    let current = lang;

    for (let i = 0, j = array.length; i < j; i++) {
        const property = array[i];
        value = current[property];
        if (i === j - 1) return format(value, options);
        if (!value) return '';
        current = value;
    }
    return '';
};

export const use = function (l) {
    lang = l || lang;
};

export const i18n = function (fn) {
    i18nHandler = fn || i18nHandler;
};

export default { use, t, i18n };
