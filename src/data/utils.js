let utils = {};




// HttpUtil.post = function (url, body, headers) {
utils.deepCopy = (source) => {
    var result = {};
    for (var key in source) {
        result[key] = typeof source[key] === 'object' ? utils.deepCoyp(source[key]) : source[key];
    }
    return result;
}

//填充数据
utils.fillData = (value, container) => {
    const keys = Object.keys(value);
    for (let key of keys)
        container[key] = value[key];
}

//读写数据
utils.saveData = (name, value) => {
    if (value === undefined) {
        localStorage.removeItem(name);
        return;
    }

    localStorage.setItem(name, JSON.stringify(value));
}

utils.loadData = (name, container) => {
    let data = localStorage.getItem(name);
    if (data === undefined || data === null)
        return;

    data = JSON.parse(data);
    utils.fillData(data, container);
}


export default utils;