module.exports = function CreateList(data) {
    return `<h1>Sites</h1><ul>${data.map(elem => `<li><h2>${elem.name}</h2><p>${elem.country}</p></li>`)}</ul>`.replaceAll(",", "")
}