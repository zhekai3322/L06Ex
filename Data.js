const images = {
    1: require('./public/pineapple.jpg'),
    2: require('./public/mango.jpg'),
    3: require('./public/strawberry.jpg'),
    4: require('./public/blueberry.jpg'),
    5: require('./public/orange.jpg'),
    6: require('./public/lemon.jpg'),
    7: require('./public/peach.jpg'),
    8: require('./public/cherry.jpg'),
    9: require('./public/watermelon.jpg'),
    10: require('./public/cantaloupe.jpg'),
};

const FRUITS = {
    Tropical: { color: 'rgba(255,215,0,0.6)', icon: '🍍' },
    Berries: { color: 'rgba(255,105,180,0.42)', icon: '🍓' },
    Citrus: { color: 'rgba(255,165,0,0.4)', icon: '🍊' },
    StoneFruits: { color: 'rgba(255,192,203,0.39)', icon: '🍑' },
    Melons: { color: 'rgba(144,238,144,0.66)', icon: '🍉' },
};

const FRUIT_LIST = {
    Tropical: [
        { name: 'Pineapple', id: 1, category: 'Tropical' },
        { name: 'Mango', id: 2, category: 'Tropical' },
    ],
    Berries: [
        { name: 'Strawberry', id: 3, category: 'Berries' },
        { name: 'Blueberry', id: 4, category: 'Berries' },
    ],
    Citrus: [
        { name: 'Orange', id: 5, category: 'Citrus' },
        { name: 'Lemon', id: 6, category: 'Citrus' },
    ],
    StoneFruits: [
        { name: 'Peach', id: 7, category: 'StoneFruits' },
        { name: 'Cherry', id: 8, category: 'StoneFruits' },
    ],
    Melons: [
        { name: 'Watermelon', id: 9, category: 'Melons' },
        { name: 'Cantaloupe', id: 10, category: 'Melons' },
    ],
};

export { images, FRUITS, FRUIT_LIST };
