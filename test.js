const links = [
    { platform: 'facebook', link: '#test' },
    { platform: 'x', link: '#' },
    { platform: 'instagram', link: '#' },
    { platform: 'youtube', link: '#' },
    { platform: 'linkedin', link: '#' },
    { platform: 'mail', link: '#' }
]

const getSocialLink = (platform) => {
    return links.find((link) => link.platform === platform)?.link || '#';
  }

console.log(getSocialLink('facefbook'));