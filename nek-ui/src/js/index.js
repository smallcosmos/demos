
const Base = {
    Regular : require('regularjs'),
    Component : require('./ui-base/component'),
    SourceComponent : require('./ui-base/sourceComponent'),
    _ : require('./ui-base/_'),
    ajax : require('./ui-base/ajax'),
    Validation : require('./util/validation'),
};

const Components = {
    // Form
    Check : require('./components/form/check'),
    CheckGroup : require('./components/form/check.group'),
    DatePicker : require('./components/form/date.picker'),
    FormItem : require('./components/form/form.item'),
    FormItemTitle: require('./components/form/form.item/modules/title'),
    FormItemDescription: require('./components/form/form.item/modules/description'),
    NumberInput : require('./components/form/number.input'),
    RadioGroup : require('./components/form/radio.group'),
    SelectGroup : require('./components/form/select.group'),
    Suggest : require('./components/form/suggest'),
    TimePicker : require('./components/form/time.picker'),
    TreeSelect : require('./components/form/tree.select'),
    MultiSelect : require('./components/form/multi.select'),
    UIButton : require('./components/form/ui.button'),
    UIForm : require('./components/form/ui.form'),
    UIInput : require('./components/form/ui.input'),
    UISelect : require('./components/form/ui.select'),
    UIText : require('./components/form/ui.text'),
    UITextArea : require('./components/form/ui.textarea'),
    Uploader : require('./components/form/uploader'),
    UIGroup : require('./components/form/ui.group'),

    // Navigation
    Collapse : require('./components/navigation/collapse'),
    Dropdown : require('./components/navigation/dropdown'),
    Sidebar : require('./components/navigation/sidebar'),
    Menu : require('./components/navigation/menu'),
    MenuSub : require('./components/navigation/menu/modules/submenu'),
    MenuItem : require('./components/navigation/menu/modules/item'),
    Pager : require('./components/navigation/pager'),
    Tabs : require('./components/navigation/tabs'),
    Steps : require('./components/navigation/steps'),
    Crumb : require('./components/navigation/crumb'),

    // Notice
    Modal : require('./components/notice/modal'),
    Mask : require('./components/notice/mask'),
    Notify : require('./components/notice/notify'),
    PopConfirm : require('./components/notice/pop.confirm'),

    // Widget
    Gotop : require('./components/widget/gotop'),
    Loading : require('./components/widget/loading'),
    Progress : require('./components/widget/progress'),
    Tooltip : require('./components/widget/tooltip'),
    PathTool : require('./tools/path.tool'),

    // Layout
    Panel : require('./components/layout/panel'),
    PanelTool : require('./components/layout/panel.tool'),
    UITable : require('./components/layout/ui.table'),
    Row: require('./components/layout/grid/row'),
    Col: require('./components/layout/grid/col'),
    Card : require('./components/layout/card'),
    CardTools : require('./components/layout/card.tools'),

    //i18n
    LocaleProvider : require('./components/i18n/locale.provider'),
};

module.exports = Object.assign({
    // Register
    install: function(Regular) {
        for (let [k, m] of Object.entries(Components)) {
            let name = m.prototype && m.prototype.name;
            if (name) Regular.component(name, m);
        }
    },
}, Base, Components);
