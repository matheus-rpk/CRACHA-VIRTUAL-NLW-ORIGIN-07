
const LinkSocialMedia = {

github:'matheus',
youtube:  'rocketseat',
facebook: 'matheus',
instagram: 'teste',
twitter:  'teste'

}

function ChangeSocialMediaLinks(){
    for (let li of SocialLinks.children){
        const social = li.getAttribute('class')
        
        li.children[0].href= `https://${social}.com/${LinkSocialMedia[social]}` 
    }
}

ChangeSocialMediaLinks()
    


function GetGitHubProfileInfos(){
    const url = `https://api.github.com/users/${LinkSocialMedia.github}`

fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent =  data.name
        userBio.textContent = data.userBio
        userLink.href = data.html_url
        userImage.src = data.avatar_url
        userLogin.textContent = data.login
    })

}
    
GetGitHubProfileInfos()