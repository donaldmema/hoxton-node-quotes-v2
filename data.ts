export type Quote = {
  id: number;
  text: string;
  authorId: number;
};

export type Author = {
  id: number;
  age: number;
  firstName: string;
  lastName: string;
  photoUrl: string;
};

export const quotesData: Quote[] = [
  {
    id: 1,
    text: "Life is like a box of chocolates, you never know what you are going to get.",
    authorId: 1,
  },
  {
    id: 2,
    text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    authorId: 2,
  },
  {
    id: 3,
    text: "Life is 10% what happens to me and 90% of how I react to it.",
    authorId: 3,
  },
  {
    id: 4,
    text: "The most common way people give up their power is by thinking they don’t have any.",
    authorId: 4,
  },
  {
    id: 5,
    text: "The most difficult thing is the decision to act, the rest is merely tenacity.",
    authorId: 5,
  },
  {
    id: 6,
    text: "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
    authorId: 6,
  },
  {
    id: 7,
    text: "Don’t watch the clock; do what it does. Keep going.",
    authorId: 7,
  },
  {
    id: 8,
    text: "The only way to do great work is to love what you do.",
    authorId: 8,
  },
  {
    id: 9,
    text: "If you can dream it, you can do it.",
    authorId: 9,
  },
  {
    id: 10,
    text: "The power of imagination makes us infinite.",
    authorId: 10,
  },
  {
    id: 11,
    text: "The best way to predict the future is to create it.",
    authorId: 11,
  },
  {
    id: 12,
    text: "Does wisdom perhaps appear on the earth as a raven which is inspired by the smell of carrion?",
    authorId: 12,
  },
  {
    id: 13,
    text: "If there is no struggle, there is no progress.",
    authorId: 13,
  },
  {
    id: 14,
    text: "Blessed is the man who expects nothing, for he shall never be disappointed.",
    authorId: 14,
  },
  {
    id: 15,
    text: "Laughter is not at all a bad beginning for a friendship, and it is far the best ending for one.",
    authorId: 15,
  },
  {
    id: 16,
    text: "We should all be thankful for those people who rekindle the inner spirit.",
    authorId: 16,
  },
];

export const authorsData: Author[] = [
  {
    id: 1,
    age: 37,
    firstName: "Forrest",
    lastName: "Gump",
    photoUrl:
      "https://www.denofgeek.com/wp-content/uploads/2022/05/Tom-Hanks-as-Forrest-Gump.jpeg?fit=1200%2C714",
  },
  {
    id: 2,
    age: 37,
    firstName: "Aristotle",
    lastName: "",
    photoUrl:
      "https://i0.wp.com/literariness.org/wp-content/uploads/2019/04/84469b33a7827daa536dd0056749f83e.jpg?fit=564%2C656&ssl=1",
  },
  {
    id: 3,
    age: 87,
    firstName: "Charles",
    lastName: "Swindoll",
    photoUrl:
      "https://content.swncdn.com/zcast/oneplace/host-images/insight-for-living/640x480.jpg?v=190710-030",
  },
  {
    id: 4,
    age: 78,
    firstName: "Alice",
    lastName: "Walker",
    photoUrl:
      "https://celebsinfos.com/wp-content/uploads/2022/04/18walker-superJumbo.jpg",
  },
  {
    id: 5,
    age: 41,
    firstName: "Amelia",
    lastName: "Earhart",
    photoUrl:
      "https://www.timeforkids.com/wp-content/uploads/2020/09/AG_amelia.jpg",
  },
  {
    id: 6,
    age: 71,
    firstName: "Confucius",
    lastName: "",
    photoUrl:
      "https://cdn.britannica.com/10/184710-050-D6503292/Confucius-Shanghai-China.jpg",
  },
  {
    id: 7,
    age: 68,
    firstName: "Sam",
    lastName: "Levenson",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/b5/Samlevenson.jpg",
  },
  {
    id: 8,
    age: 56,
    firstName: "Steve",
    lastName: "Jobs",
    photoUrl:
      "https://image.cnbcfm.com/api/v1/image/104300870-steve_jobs.jpg?v=1532563905",
  },
  {
    id: 9,
    age: 64,
    firstName: "Walt",
    lastName: "Disney",
    photoUrl:
      "https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc4NjgwMjg5ODEzODMz/list-disney-158937223-2.jpg",
  },
  {
    id: 10,
    age: 76,
    firstName: "John",
    lastName: "Muir",
    photoUrl:
      "https://i.guim.co.uk/img/media/a0fa94ab6a6045640b61e47f55f9f15ce5eee9f8/0_41_2384_1430/master/2384.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=95c76a4a4d7034a22bc78cb5837d9d9f",
  },
  {
    id: 11,
    age: 95,
    firstName: "Peter",
    lastName: "Drucker",
    photoUrl:
      "https://www.thefamouspeople.com/profiles/images/peter-drucker-6.jpg",
  },
  {
    id: 12,
    age: 55,
    firstName: "Friedrich",
    lastName: "Nietzsche",
    photoUrl:
      "https://www.biography.com/.image/t_share/MTg1MDczODI2MTM1MDI0OTIx/gettyimages-515350818jpg-.jpg",
  },
  {
    id: 13,
    age: 77,
    firstName: "Frederick",
    lastName: "Douglass",
    photoUrl:
      "https://thehoovercardinal.org/wp-content/uploads/2018/02/Frederick-Douglas-reddit.com-colorized-history-1-736x900.jpg",
  },
  {
    id: 14,
    age: 56,
    firstName: "Alexander",
    lastName: "Pope",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/5d/Alexander_Pope_by_Michael_Dahl.jpg",
  },
  {
    id: 15,
    age: 46,
    firstName: "Oscar",
    lastName: "Wilde",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Oscar_Wilde_3g07095u-adjust.jpg/1200px-Oscar_Wilde_3g07095u-adjust.jpg",
  },
  {
    id: 16,
    age: 90,
    firstName: "Albert",
    lastName: "Schweitzer",
    photoUrl:
      "https://www.nobelprize.org/images/schweitzer-13086-portrait-medium.jpg",
  },
];
