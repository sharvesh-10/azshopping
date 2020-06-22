const INITIAL_STATE = {
    sections:[
        {
            title: 'hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1,
            linkUrl: 'shop/hats'
        },
        {
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'womens',
            imageUrl: 'https://d3a1v57rabk2hm.cloudfront.net/951c365f9aca43dbada3166425794440_400_85.jpeg',
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'mens',
            imageUrl: 'https://i.pinimg.com/originals/bc/98/de/bc98dee9a4a26d50dd0c06f9586be5c3.jpg',
            id: 5,
            linkUrl: 'shop/mens'
        },
        {
            title: 'phones',
            imageUrl: 'https://s3-ap-southeast-1.amazonaws.com/bsy/iportal/images/handset-offer-banner-new_31F555919982EFE18360075F1D2EC443.png',
            id: 5,
            linkUrl: 'shop/mobiles'
        },
        {
            title: 'sports',
            imageUrl: 'https://wallpapercave.com/wp/wp4012092.jpg',
            id: 5,
            linkUrl: 'shop/sports'
        },
        {
            title: 'food-items',
            imageUrl: 'https://scx2.b-cdn.net/gfx/news/hires/2016/howcuttingdo.jpg',
            id: 5,
            linkUrl: 'shop/foods'
        }

    ]
};

const directoryReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        default: return state;
    }
};

export default directoryReducer;