import React from 'react';
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'

class Directory extends React.Component {
    constructor () {
        super();

        this.state = {
            sections: [{
                title: 'hats',
                imageUrl: 'https://cdn.shopify.com/s/files/1/1023/3455/articles/FDLK-2-1_1024x1024.jpg',
                id: 1
            },
            {
                title: 'tees',
                imageUrl: 'https://d2lllwtzebgpl1.cloudfront.net/c7109cb0ad614d082a93f5d941555150_listingImage1572073456585.jpg',
                id: 2
            },
            {
                title: 'sneakers',
                imageUrl: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F07%2Frepresent-clothing-terrier-sneaker-chunky-00.jpg',
                id: 3
            },
            {
                title: 'accessories',
                imageUrl: 'https://pbs.twimg.com/media/BsrvacIIcAMg6e-.jpg',
                size: 'large',
                id: 4
            },
            {
                title: 'bottoms',
                imageUrl: 'https://d2h1pu99sxkfvn.cloudfront.net/b0/4750380/380386172_ZyWgOTAC5c/P0.jpg',
                size: 'large',
                id: 5
            }]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                this.state.sections.map(({title, imageUrl, id, size}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                ))}
            </div>
        )
    }
}

export default Directory;