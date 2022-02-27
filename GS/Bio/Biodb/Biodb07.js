let quiz = {
    chapter: 'Food Production',
    topics: [
        'Crops',
        'Apiculture',
        'Pisiculture',
        'Siriculture',
        'Honey',
        'Bee',
        'Weed',
        'Diet',
    ],
    title: 'Food Production',
    colors: ['#096c86', '#096c8636', '#dbf6fb'],
    questions: [
        {
            question: 'The principal cereal crop in India is',
            options: ['wheat ', 'rice', 'maize ', 'sorgham'],
            answer: 2,
        },
        {
            question: 'The cheapest high energy fruit crop of India is',
            options: ['Banana ', 'Guava', 'Apple ', 'Mango'],
            answer: 1,
        },
        {
            question: 'Number of queens in a hive is',
            options: ['20 ', '15', '20 ', '1'],
            answer: 4,
        },
        {
            question: 'Crop rotation is carried out for',
            options: [
                'increasing acidity of soil',
                'decreasing fertility of soil',
                'increasing fertility of soil',
                'all the above',
            ],
            answer: 3,
        },
        {
            question: 'Nitrogen, Phosphorus, Potassium are examples of',
            options: [
                'micro-nutrients ',
                'macronutrients',
                'fertilizer ',
                'both A and B',
            ],
            answer: 2,
        },
        {
            question:
                'Kranti, Pusa Agarni and Pusa Bold are improved varieties',
            options: ['Urad bean ', 'Sunflower', 'Chick Pea ', 'Mustard'],
            answer: 4,
        },
        {
            question: 'Which one of the following is an Italian bee variety?',
            options: [
                'Apis mellifera ',
                'Apis dorsata',
                'Apis florae ',
                'Apis cerana indica',
            ],
            answer: 1,
        },
        {
            question: 'All these are fodder crops except',
            options: ['mustard oil ', 'berseem', 'oats ', 'sudan grass'],
            answer: 3,
        },
        {
            question: 'Dams are used for',
            statement: [
                'irrigation',
                'stopping the rainwater from flowing away.',
                'decreasing chances of soil erosion.',
                'increasing ground water level.',
            ],
            options: ['1, 2 & 3', '2, 3 & 4', '1, 3 & 4 ', 'all these.'],
            answer: 4,
        },
        {
            question: 'This is not a biotic agent for oiling crops.',
            options: ['rodents ', 'moisture', 'insects ', 'fungi'],
            answer: 2,
        },
        {
            question: 'The uses of honey is/are in',
            options: [
                'making medicines',
                'in making waxes',
                'generating money',
                'all the above.',
            ],
            answer: 4,
        },
        {
            question: '_______ is not a natural insecticide.',
            options: ['Neem ', 'khapra beetle', 'Nicotine ', 'pyrethrum'],
            answer: 4,
        },
        {
            question:
                'Which of the following rotation of crops will reduce dependence on the use of chemical fertilizers?',
            options: [
                'Rice and Chilli ',
                'Wheat and Potato',
                'Potato and Rice ',
                'Gram and Rice',
            ],
            answer: 4,
        },
        {
            question:
                'Which of the following will result in loss of soil fertility?',
            statement: [
                'Crop rotation',
                'Shifting cultivation',
                'Excessive use of chemical fertilizers',
            ],
            options: [
                'Only 1 and 2',
                'Only 1 and 3',
                'Only 2 and 3 ',
                '1, 2 and 3',
            ],
            answer: 3,
        },
        {
            question: 'Match The Column',
            table: {
                left: [
                    'Marine fish',
                    'Fresh water fish',
                    'Bee Keeping',
                    'Composite fish',
                ],
                right: [
                    'Carp culture',
                    'Apiculture',
                    'Mariculture',
                    'aquaculture',
                ],
            },
            options: [
                'A-3, B-4, C-2, D-1',
                'A-1, B-3, C-2, D-4',
                'A-4, B-2, C-1, D-3',
                'A-4, B-2, C-3, D-1',
            ],
            answer: 1,
        },
        {
            question: 'Match The Column',
            table: {
                left: [
                    'Rock bee',
                    'Silver carp',
                    'Bombay duck',
                    'Rohu and Catla',
                ],
                right: ['Exotic fish', 'Marine fish', 'Carp', 'Apis dorsata'],
            },
            options: [
                'A-1, B-2, C-3, D-4',
                'A-1, B-3, C-2, D-4',
                'A-4, B-1, C-2, D-3',
                'A-4, B-2, C-3, D-1',
            ],
            answer: 3,
        },
        {
            question: 'Match The Column',
            table: {
                left: ['cereals', 'pulses', 'oil seeds', 'fruits & spices'],
                right: [
                    'fats',
                    'vitamins and minerals',
                    'proteins',
                    'carbohydrates',
                ],
            },
            options: [
                'A-1, B-2, C-3, D-4',
                'A-4, B-3, C-2, D-1',
                'A-4, B-3, C-1, D-2',
                'A-2, B-1, C-3, D-4',
            ],
            answer: 3,
        },
        {
            question: 'Match The Column',
            table: {
                left: ['H', 'C & O', 'B', 'Ca'],
                right: ['water', 'air', 'macro nutrient', 'micro nutrient'],
            },
            options: [
                'A-1, B-2, C-3, D-4',
                'A-1, B-2, C-4, D-3',
                'A-2, B-1, C-3, D-4',
                'A-4, B-3, C-2, D-1',
            ],
            answer: 2,
        },
        {
            question: 'Find out the correct sentence about manure',
            statement: [
                'Manure contains large quantities of organic matter and small quantities of nutrients',
                'It increases the water holding capacity of sandy soil.',
                'It helps in draining out of excess of water from clayey soil.',
                'Its excessive use pollutes environment because it is made of animal exretory waste.',
            ],
            options: ['1 and 3 ', '1 and 2', '2 and 3 ', '3 and 4'],
            answer: 2,
        },
        {
            question:
                'Which one of the following is an improved variety of wheat?',
            options: ['A.77 ', 'Sonalika', 'Chandramukhi ', 'Kuber'],
            answer: 2,
        },
        {
            question: 'Nutritional diet of poultry birds includes',
            options: [
                'cereals, oil cakes, milk cakes, green vegetables',
                'millets, proteins, oil cakes only',
                'cereals, millets , proteins, oil cakes, green vegetables',
                'proteins, oil cakes, cereals only',
            ],
            answer: 3,
        },
        {
            question: 'Weeds can be controlled by',
            statement: [
                'mechanical removal',
                'inter cropping & crop rotation',
                'Eco friendly weedicide (chemicals)',
                'proper seedbed preparation.',
            ],
            options: ['1, 2, 3', '2, 3, 4', '1, 3', 'all of these'],
            answer: 4,
        },
        {
            question: 'He is known as an Architect of green revolution',
            options: [
                'Dr. Norman E Borlaug.',
                'Dr. Radha krishnan',
                'Dr. A.P.J. Kalam',
                'M.S. Swaminathan',
            ],
            answer: 4,
        },
        {
            question: 'An example of a common herbicide is',
            statement: [
                '2,4-D (2-4, dichlorophenoxyacetic acid).',
                'DDT (dichloro dimelhyl tri phenolic acid)',
                'BHC (benzene hexa chloride)',
                'Atrazine.',
            ],
            options: ['1 & 2 ', '1 & 3', '1 & 4 ', 'All of these'],
            answer: 3,
        },
        {
            question: 'Match The Column',
            table: {
                left: [
                    'Cattle used for',
                    'Indian breed',
                    'Sahiwal, Red',
                    'Milch',
                    'Chicken better',
                ],
                right: [
                    'Milk producing tilling and carting female',
                    'Broiler of chicken',
                    'Drought animals Sindhi',
                    'Local breed of cattle',
                    'Aseel fed for obtaining meat',
                ],
            },
            options: [
                'A-1, B-2, C-3, D-4, E-5',
                'A-3, B-5, C-4, D-1, E-2',
                'A-4, B-2, C-4, D-3, E-5',
                'A-4, B-2, C-3, D-1, E-5',
            ],
            answer: 2,
        },
        {
            question: 'Find out the false statement:',
            options: [
                'Poultry farming is related with rearing of domestic fowls.',
                'Marine fish capture is guided by eco sounders and satellites',
                'In rainy season, Rabi crops are grown',
                'All of these',
            ],
            answer: 3,
        },
        {
            question: 'Find out the false statement:',
            options: [
                'Queen bee secretes wax to make bee hive',
                'Cochin is exatic chicken breed.',
                'Rohu is the example of corp fish.',
                'All of these',
            ],
            answer: 1,
        },
        {
            question:
                'State ‘T’ for True and ‘F’ for false statements and then choose the correct option.',
            statement: [
                'Hybridisation is always useful to obtain a better yield.',
                'Good fertilizers should be used by farmers.',
                'Only macro nutrients are enough for plants.',
                'Farmers should depend upon good irrigation method for watering crops.',
            ],
            options: ['FFTT ', 'FTFT', 'TFTF ', 'TTFF'],
            answer: 2,
        },
        {
            question:
                'Which of these is incorrect statement in regard to factors for the cause of crop variety improvement',
            options: [
                'Higher & improved Quality yield.',
                'Resistance of Biotic & non-biotic agents.',
                'Desirable traits and wider availability.',
                'Reaction with the dyes.',
            ],
            answer: 4,
        },
        {
            question:
                'Which one of the following plants is preferred for mixed cropping in order to enhance the bioavailability of nitrogen? [CDS]',
            options: ['Wheat ', 'Gram', 'Maize ', 'Barley'],
            answer: 2,
        },
        {
            question:
                'Which among the following oils has the maximum protein content? [CDS]',
            options: [
                'Castor oil ',
                'Sunflower oil',
                'Soyabean oil ',
                'Safflower oil',
            ],
            answer: 1,
        },
        {
            question:
                'Which one of the following plants is used for green manuring in India? [CDS]',
            options: ['Wheat ', 'Sunnhemp', 'Cotton ', 'Rice'],
            answer: 2,
        },
        {
            question:
                'Which one among the following cattle breed produces highest amount of milk ? [CDS]',
            options: ['Brown Swiss ', 'Holstein', 'Dutch belted ', 'Blaarkop'],
            answer: 2,
        },
        {
            question:
                'Consider the following statements: Which of these statements are correct? [IAS Prelim]',
            statement: [
                'Molasses is a by-product of sugar production process.',
                'Bagasse obtained in the sugar mills is used as a fuel in the boilers to generate steam for the sugar factories.',
                'Sugar can only be produced from sugarcane as the raw material.',
            ],
            options: ['1 and 2 ', '2 and 3', '1 and 3 ', '1, 2 and 3'],
            answer: 1,
        },
        {
            question:
                'Consider the following statements about probiotic food: Which of the statements given above is/are correct? [IAS Prelim]',
            statement: [
                'Probiotic food contains live bacteria which are considered beneficial to humans.',
                'Probiotic food helps in maintaining gut flora.',
            ],
            options: ['1 only ', '2 only', 'Both 1 and 2 ', 'Neither 1 nor 2'],
            answer: 3,
        },
    ],
};
