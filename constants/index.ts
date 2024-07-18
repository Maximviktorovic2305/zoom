import { ISidebarLinks } from '@/types';


export const sidebarLinks: ISidebarLinks[] = [
  {
    imgURL: '/icons/Home.svg',
    route: '/',
    label: 'Главная',
  },

  {
    imgURL: '/icons/upcoming.svg',
    route: '/upcoming',
    label: 'Запланировано',
  },
  {
    imgURL: '/icons/previous.svg',
    route: '/previous',
    label: 'История',
  },
  {
    imgURL: '/icons/Video.svg',
    route: '/recordings',
    label: 'Записи',
  },
  {
    imgURL: '/icons/add-personal.svg',
    route: '/personal-room',
    label: 'Комната',
  },
];

export const avatarImages: string[] = [
  '/images/avatar-1.jpeg',
  '/images/avatar-2.jpeg',
  '/images/avatar-3.png',
  '/images/avatar-4.png',
  '/images/avatar-5.png',
];
