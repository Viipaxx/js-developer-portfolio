

async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/Viipaxx/js-developer-portfolio/main/data/profile.json'
    const fetcgin = await fetch(url)
    return await fetcgin.json()
}
