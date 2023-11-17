import IMAGES from "../assets/Images";

export const popularProducts = [
   {
      id: 1,
      name: 'Popular Products',
      img: [
         { image: IMAGES.popular_1, position: 'right top', size: 'contain' },
         { image: IMAGES.popular_2, position: 'left top', size: 'contain' },
      ],
      info: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
      color: '#fff',
      lightMode: false
   },
   {
      id: 2,
      name: 'Ipad Pro',
      img: [{ image: IMAGES.popular_3, position: 'right top', size: 'contain' }],
      info: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
      color: '#F9F9F9',
      lightMode: false
   },
   {
      id: 3,
      name: 'Samsung Galaxy ',
      img: [{ image: IMAGES.popular_4, position: 'center top', size: 'auto' }],
      info: 'incredible performance, multitasking',
      color: '#EAEAEA',
      lightMode: false
   },
   {
      id: 4,
      name: 'Macbook Pro',
      img: [{ image: IMAGES.popular_5, position: 'right 0', size: 'auto' }],
      info: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
      color: '#2C2C2C',
      lightMode: true
   }
]