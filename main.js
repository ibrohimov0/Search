const fs = require("fs")
const CreateList = require("./posts")

async function Get(name, country) {
    let a = null
    await fetch(
        `http://universities.hipolabs.com/search?name=${name}&country=${country}`)
    .then(res => res.json())
    .then(res => a = res)
    fs.writeFileSync("./index.html",`${CreateList(a)}`, (req,res)=>{
        res.end()
    })
}
console.log(Get("a", "turkey"));
// http://universities.hipolabs.com/search?name=${name}&country=${country}