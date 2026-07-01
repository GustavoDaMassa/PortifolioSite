import { getAssetPath } from '../utils/paths';

export const socialLinks = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/GustavoDaMassa',
    icon: getAssetPath('assets/images/icons/githubicon.png'),
    alt: 'GitHub',
    value: '@GustavoDaMassa'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/gustavohpereiradev/',
    icon: getAssetPath('assets/images/icons/linkedinicon.png'),
    alt: 'LinkedIn',
    value: '@gustavohpereiradev'
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    url: 'https://wa.me/5562991281661',
    icon: getAssetPath('assets/images/icons/whatsappicon.svg'),
    alt: 'WhatsApp',
    value: '(62) 99128-1661'
  },
  {
    id: 'email',
    name: 'E-mail',
    url: 'mailto:gustavohenrique3gb@gmail.com',
    icon: getAssetPath('assets/images/icons/emailicon.png'),
    alt: 'E-mail',
    value: 'gustavohenrique3gb@gmail.com'
  },
  {
    id: 'resume',
    name: 'Currículo',
    url: getAssetPath('assets/images/CurriculoGustavoDev.pdf'),
    icon: getAssetPath('assets/images/icons/curriculoicon.png'),
    alt: 'Currículo',
    download: true
  }
];
