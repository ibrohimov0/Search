const Loading = document.getElementById("Loading")
const Form = document.getElementById("Form")


async function Get(name, country) {
    const res = await fetch(
        `http://universities.hipolabs.com/search?name=${name}&country=${country}`
    )
    const data = await res.json()
    
}
// http://universities.hipolabs.com/search?name=${name}&country=${country}