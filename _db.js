let authors = [
  { id: 1, name: 'Magnificent', verified: true },
  { id: 2, name: 'Graceful', verified: false },
  { id: 3, name: 'Mary', verified: true },
];

let games = [
  { id: 1, title: 'Tetris, Running Bricks', platforms: ['Windows'] },
  { id: 2, title: 'Pepaye, Flower teaser', platforms: ['PS7', 'Xbox'] },
  { id: 3, title: 'Pinball Macrom', platforms: ['Switc', 'PC', 'Xbox'] },
  { id: 4, title: 'Crown prince of Bellair', platforms: ['Linux'] },
  {
    id: 5,
    title: 'Abdullah Thief of Bagdad',
    platforms: ['PS7', 'Xbox', 'Mac'],
  },
];

let reviews = [
  {
    id: 1,
    rating: 9,
    content: 'lorem Ipsum is simply fummy',
    author_id: '1',
    game_id: '2',
  },
  {
    id: 2,
    rating: 10,
    content: 'lorem Ipsum is simply  gorgeous',
    author_id: '2',
    game_id: '1',
  },
  {
    id: 3,
    rating: 7,
    content: 'lorem Ipsum is simply great',
    author_id: '3',
    game_id: '3',
  },
  {
    id: 4,
    rating: 8,
    content: 'lorem Ipsum is simply boyant',
    author_id: '2',
    game_id: '4',
  },
  {
    id: 5,
    rating: 9,
    content: 'lorem Ipsum is simply adventure',
    author_id: '2',
    game_id: '5',
  },
  {
    id: 6,
    rating: 10,
    content: 'lorem Ipsum is simply awesome and independently',
    author_id: '1',
    game_id: '2',
  },
  {
    id: 7,
    rating: 8,
    content: 'lorem Ipsum is simply boyant and lovely',
    author_id: '3',
    game_id: '1',
  },
];
 export default { authors, games, reviews}