import MenuItem from './aria-menuitem';

const Menu = function (domNode) {
    this.domNode = domNode;
    this.init();
};

Menu.prototype.init = function () {
    const menuChildren = this.domNode.childNodes;
    [].filter
        .call(menuChildren, child => child.nodeType === 1)
        .forEach(child => {
            new MenuItem(child);
        });
};
export default Menu;
