/*
 * @Author: shuoshubao
 * @Date: 2025-03-12 10:32:59
 * @LastEditors: shuoshubao
 * @LastEditTime: 2025-03-12 10:35:00
 * @Description: prettier 配置
 */
module.exports = {
    printWidth: 160,
    useTabs: false,
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    trailingComma: 'none',
    proseWrap: 'never',
    arrowParens: 'avoid',
    bracketSpacing: true,
    htmlWhitespaceSensitivity: 'ignore',
    overrides: [
        {
            files: 'mock/**/*.json',
            options: {
                printWidth: 0
            }
        },
        {
            files: '.vuepress/element-ui.js',
            options: {
                printWidth: 60
            }
        }
    ]
};
