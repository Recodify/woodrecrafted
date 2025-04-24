export const projects = [
    {
        id: 1,
        title: 'Boot Room Bench and Panneling ',
        description: '',
        category: 'Custom',
        image: '../images/bootroom.jpg'
    },
    {
        id: 4,
        title: 'Treehouse',
        description: 'Custom-designed treehouse with swing and slide',
        category: 'Garden and Outdoor',
        image: '../images/treehouse.jpg'
    },
    {
        id: 3,
        title: 'Rustic Christmas Trees',
        description: '',
        category: 'Custom',
        image: '../images/xmastree.jpg'
    },

    {
        id: 4,
        title: 'Chimney Breast Storage and Shelving',
        description: '',
        category: 'Custom',
        image: '../images/chimneybreast.jpg'
    },
    {
        id: 1,
        title: 'Fire Wood Store',
        description: 'Weather-resistant firewood storage solution with proper ventilation and rustic design',
        category: 'Garden and Outdoor',
        image: '../images/woodstore.png'
    },
    {
        id: 6,
        title: 'Garden Bench',
        description: 'Handcrafted hardwood garden bench with ergonomic design for comfort and longevity',
        category: 'Garden and Outdoor',
        image: '../images/bench.jpg'
    },
    {
        id: 2,
        title: 'Victorian Style Internal Window Shutters',
        description: 'Period-authentic window shutters with adjustable louvers and hand-painted finish',
        category: 'Custom',
        image: '../images/shutters.png'
    },
    {
        id: 5,
        title: 'Whisky Barrel Planters',
        description: 'Repurposed authentic whisky barrels transformed into elegant garden planters',
        category: 'Garden and Outdoor',
        image: '../images/planters3.png'
    },
    {
        id: 3,
        title: 'Sash Window Restoration',
        description: 'Complete restoration of period sash windows with careful preservation of original features',
        category: 'Restoration',
        image: '../images/sashwindow.png'
    },
    {
        id: 10,
        title: 'Stair Gate for Children',
        description: 'Custom-designed child safety gate matching existing staircase style and woodwork',
        category: 'Custom',
        image: '../images/stairgate.jpg'
    },
    {
        id: 6,
        title: 'Car Port Doors',
        description: 'Durable hardwood carport doors with custom hardware and weather-resistant finish',
        category: 'Garden and Outdoor',
        image: '../images/carport2.png'
    },
    {
        id: 12,
        title: 'Internal Window Sill',
        description: 'Custom built-in windows sill designed to complement room aesthetics',
        category: 'Furniture',
        image: '/images/internalwindowsill.jpg'
    },
    {
        id: 13,
        title: 'Mantlepiece',
        description: 'Hand-carved oak mantelpiece with traditional detailing and protective finish',
        category: 'Furniture',
        image: '../images/mantle.png'
    }
];

export function getHomePageProjects(){
    return projects.slice(0,6)
}

export function getPortfolioProjects(){
    return projects;
}