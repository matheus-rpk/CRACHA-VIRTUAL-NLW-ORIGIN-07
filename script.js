
const LinkSocialMedia = {

github:'matheus-rpk',
youtube:  'rocketseat',
facebook: 'matheus-rpk',
instagram: 'off.matty',
twitter:  'matheus-rpk'

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
}
    
