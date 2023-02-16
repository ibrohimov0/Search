const fs = require("fs")

async function Get(name, country) {
    let a = null
    await fetch(
        `http://universities.hipolabs.com/search?name=${name}&country=${country}`)
    .then(res => res.json())
    .then(res => a = res)
    fs.writeFileSync("./index.html",``, (req,res)=>{
        res.end()
    })
}
console.log(Get("a", "turkey"));
// http://universities.hipolabs.com/search?name=${name}&country=${country}