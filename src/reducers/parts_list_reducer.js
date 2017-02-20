let partslist = require("../../data/"+window.location.search.substring(1)+".json");
export default function () {
    return partslist;
}
