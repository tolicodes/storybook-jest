"use strict";
exports.__esModule = true;
var react_1 = require("react");
var addons_1 = require("@storybook/addons");
var api_1 = require("@storybook/api");
var components_1 = require("@storybook/components");
var ADDON_ID = "myaddon";
var PARAM_KEY = "myAddon";
var PANEL_ID = ADDON_ID + "/panel";
var MyPanel = function () {
    var value = api_1.useParameter(PARAM_KEY, null);
    var item = value ? value.data : "";
    return <div>{item}</div>;
};
addons_1.addons.register(ADDON_ID, function (api) {
    var render = function (_a) {
        var active = _a.active, key = _a.key;
        return (<components_1.AddonPanel active={active} key={key}>
      <MyPanel />
    </components_1.AddonPanel>);
    };
    var title = "My Addon";
    addons_1.addons.add(PANEL_ID, {
        type: addons_1.types.PANEL,
        title: title,
        render: render,
        paramKey: PARAM_KEY
    });
});
