/**
 * @description git-cz
 * @author: minfive
 * @createDate: 2017-09-06, 23:22:02 GMT+0800
 * @lastModify minfive
 * @lastDate: 2017-09-06, 23:22:02 GMT+0800
 */
const path = require('path');
const bootstrap = require('commitizen/dist/cli/git-cz').bootstrap;

bootstrap({
    cliPath: path.join(__dirname, '../node_modules/commitizen'),
    config: {
        path: path.join(__dirname, '../node_modules/cz-conventional-changelog')
    }
});
