import { getAssetPath } from '../utils/paths';

export const socialLinks = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/GustavoDaMassa',
    icon: getAssetPath('assets/images/icons/githubicon.png'),
    alt: 'GitHub'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/gustavohpereiradev/',
    icon: getAssetPath('assets/images/icons/linkedinicon.png'),
    alt: 'LinkedIn'
  },
  {
    id: 'email',
    name: 'E-mail',
    url: 'mailto:gustavo.pereira@discente.ufg.br',
    icon: getAssetPath('assets/images/icons/emailicon.png'),
    alt: 'E-mail'
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
