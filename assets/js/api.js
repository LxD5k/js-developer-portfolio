async function fetchProfileData(){
    const url = 'https://github.com/LxD5k/js-developer-portfolio/blob/25d97e8c7b36746cc386f9c8d5eea03f98180f5b/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}