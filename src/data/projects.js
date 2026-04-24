import { getAssetPath } from '../utils/paths';

export const featuredProjects = [
  {
    id: 'mediasapi',
    image: getAssetPath('assets/images/capamedias.png'),
    route: '/medias',
    featured: true
  },
  {
    id: 'financeapi',
    image: getAssetPath('assets/images/capafinance.png'),
    route: '/finance',
    featured: true
  }
];

export const projects = [
  {
    id: 'tiobolas',
    image: getAssetPath('assets/images/tiobolascard.png'),
    github: 'https://github.com/GustavoDaMassa/TioBolas'
  },
  {
    id: 'hashtable',
    image: getAssetPath('assets/images/hashtablecard.png'),
    github: 'https://github.com/GustavoDaMassa/HashTable'
  },
  {
    id: 'agenda',
    image: getAssetPath('assets/images/agendacard.png'),
    github: 'https://github.com/GustavoDaMassa/AgendaToDo'
  },
  {
    id: 'codinome',
    image: getAssetPath('assets/images/codinomecard.png'),
    github: 'https://github.com/GustavoDaMassa/CodinomeUol'
  },
  {
    id: 'wallet',
    image: getAssetPath('assets/images/simplifiedwallet.png'),
    github: 'https://github.com/GustavoDaMassa/SimplifiedWallet'
  },
  {
    id: 'dotnetFinance',
    image: getAssetPath('assets/images/dotnetfinancecard.jpg'),
    github: 'https://github.com/GustavoDaMassa/dotNetFinaAPI'
  },
  {
    id: 'dotnetMedias',
    image: getAssetPath('assets/images/dotnetmediascard.jpg'),
    github: 'https://github.com/GustavoDaMassa/dotNetMediasAPI',
    additionalLinks: [
      { label: '.Net', url: 'https://github.com/GustavoDaMassa/dotNetMediasAPI' },
      { label: 'NodeJS', url: 'https://github.com/GustavoDaMassa/nodeMediasAPI' }
    ]
  },
  {
    id: 'compiler',
    image: getAssetPath('assets/images/compilercard.png'),
    github: 'https://github.com/GustavoDaMassa/GoianinhaCompiler'
  },
  {
    id: 'devbrain',
    image: getAssetPath('assets/images/devbraincard.png'),
    github: 'https://github.com/GustavoDaMassa/DevBrain'
  },
  {
    id: 'classview',
    image: getAssetPath('assets/images/classViewcard.png'),
    github: 'https://github.com/GustavoDaMassa/ClassView'
  },
  {
    id: 'msfinanceapi',
    image: getAssetPath('assets/images/finAPIcard.png'),
    github: 'https://github.com/GustavoDaMassa/FinAPIMS'
  },
  {
    id: 'homeserver',
    image: getAssetPath('assets/images/homecard.png'),
    github: 'https://github.com/GustavoDaMassa/HomeServer'
  }
];
