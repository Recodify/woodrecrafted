export const projects = [
    {
        id: 1,
        title: 'Boot Room Bench and Panneling ',
        description: 'A fully customized boot room setup with solid timber bench seating and traditional wall paneling, designed for practicality and durability.',
        category: 'Custom Furniture',
        image: '../images/bootroom.jpg'
    },
    {
        id: 2,
        title: 'Treehouse',
        description: 'A sturdy, raised treehouse with swing and slide, built using pressure-treated wood, offering a secure play area with a natural finish that blends into the surroundings.',
        category: 'Garden & Outdoor',
        image: '../images/treehouse.jpg'
    },
    {
        id: 3,
        title: 'Rustic Christmas Trees',
        description: 'Handmade rustic Christmas trees constructed from reclaimed pallet wood, perfect for festive outdoor or indoor decoration.',
        category: 'Bits & Bobs',
        image: '../images/xmastree.jpg'
    },
    {
        id: 4,
        title: 'Chimney Breast Storage and Shelving',
        description: 'Built-in storage and shelving fitted around a chimney breast, maximizing space with a mix of open and closed shelving units.',
        category: 'Custom Furniture',
        image: '../images/chimneybreast.jpg'
    },
    {
        id: 5,
        title: 'Fire Wood Store',
        description: 'A ventilated firewood storage unit built with treated timber to keep logs dry and well-organized year-round.',
        category: 'Garden & Outdoor',
        image: '../images/woodstore2.png'
    },
    {
        id: 6,
        title: 'Garden Bench',
        description: 'Simple and robust garden bench crafted for outdoor use, providing comfortable seating with a clean, classic look.',
        category: 'Garden & Outdoor',
        image: '../images/bench2.png'
    },
    {
        id: 7,
        title: 'Victorian Style Internal Window Shutters',
        description: 'Traditional internal wooden shutters custom-made to match the Victorian style of the property, improving privacy and insulation.',
        category: 'Custom Furniture',
        image: '../images/shutters.png'
    },
    {
        id: 8,
        title: 'Whisky Barrel Planters',
        description: 'Reclaimed oak whisky barrels repurposed into large, rustic planters ideal for gardens or patios.',
        category: 'Garden & Outdoor',
        image: '../images/planters4.png'
    },
    {
        id: 9,
        title: 'Sash Window Restoration',
        description: 'Reclaimed oak whisky barrels repurposed into large, rustic planters ideal for gardens or patios.',
        category: 'Restoration & Repair',
        image: '../images/sashwindow2.png'
    },
    {
        id: 10,
        title: 'Stair Gate for Children',
        description: 'Custom wooden stair gate designed for child safety, built to fit the stair opening precisely and finished for everyday use.',
        category: 'Bits & Bobs',
        image: '../images/stairgate.jpg'
    },
    {
        id: 11,
        title: 'Car Port Doors',
        description: 'Heavy-duty timber doors fitted to a car port, offering secure access with a traditional, practical design.',
        category: 'Garden & Outdoor',
        image: '../images/carport3.png'
    },
    {
        id: 12,
        title: 'Internal Window Sill',
        description: 'A bespoke internal window sill made from solid wood, shaped and finished to match the period features of the house.',
        category: 'Custom Furniture',
        image: '/images/internalwindowsill.jpg'
    },
    {
        id: 13,
        title: 'Mantlepiece',
        description: 'Solid hardwood mantlepiece designed and fitted to enhance the fireplace area with a natural wood finish.',
        category: 'Custom Furniture',
        image: '../images/mantle.png'
    }
];

export function getHomePageProjects(){
    return projects.slice(0,6)
}

export function getPortfolioProjects(){
    return projects;
}