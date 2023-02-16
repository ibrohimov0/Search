const Loading = document.getElementById("Loading")
const Form = document.getElementById("Form")

async function Get(name, country) {
    let a = null
    await fetch(
        `http://universities.hipolabs.com/search?name=${name}&country=${country}`)
    .then(res => res.json())
    .then(res => a = res)
    
}
console.log(Get("a", "turkey"));

// http://universities.hipolabs.com/search?name=${name}&country=${country}