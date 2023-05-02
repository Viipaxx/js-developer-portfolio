

function updateProfileInfo(profileData){
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job
    
    const location = document.getElementById('profile.location')
    location.innerText = profileData.location
    
    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    
    const email = document.getElementById('profile.email')
    email.innerText = profileData.email


}

function updateSoftSkill(profileData){
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map((skill) => `<li>${skill}</li>`).join('')
}

function updateLanguages(profileData){
    const languages = document.getElementById('languages')
    languages.innerHTML = profileData.languages.map(language => `<li><i class="fa-solid fa-check icon-check"></i> ${language}</li>`).join('')
}

function updatePortfolio(profileData){
    const portfolio = document.getElementById('profile.portfolio')

    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
        <li>
        <h3>
        <i class="fa-brands fa-github"></i>
        ${project.name}
        </h3>
        <a href="${project.url}">${project.url}</a>
        
        </li>`
    }).join('')
}

(async () => {

    const profile = await fetchProfileData()
    console.log(profile)
    setTimeout(() => {
        updateProfileInfo(profile)
        updateSoftSkill(profile)
        updateLanguages(profile)
        updatePortfolio(profile)

    },1000)
})()
