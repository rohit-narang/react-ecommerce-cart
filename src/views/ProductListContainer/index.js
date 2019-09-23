import React, { Component } from 'react';
import Header from '../Commons/Header';
import { Grid, Card, Segment } from 'semantic-ui-react';
import faker from 'faker';

class Catalog extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.match.params);
    }

    render() {
        const products = [{ "availableSizes": ["S", "XS"], "currencyFormat": "$", "currencyId": "USD", "description": "4 MSL", "id": 12, "installments": 9, "isFreeShipping": true, "price": 10.9, "sku": 12064273040195392, "style": "Black with custom print", "title": "Cat Tee Black T-Shirt" },
        { "availableSizes": ["M"], "currencyFormat": "$", "currencyId": "USD", "description": "", "id": 13, "installments": 5, "isFreeShipping": true, "price": 29.45, "sku": 51498472915966370, "style": "Front print and paisley print", "title": "Dark Thug Blue-Navy T-Shirt" },
        { "availableSizes": ["X", "L", "XL"], "currencyFormat": "$", "currencyId": "USD", "description": "GPX Poly 1", "id": 14, "installments": 3, "isFreeShipping": true, "price": 9, "sku": 10686354557628304, "style": "Front tie dye print", "title": "Sphynx Tie Dye Wine T-Shirt" },
        { "availableSizes": ["X", "L", "XL"], "currencyFormat": "$", "currencyId": "USD", "description": "GPX Poly 1", "id": 14, "installments": 3, "isFreeShipping": true, "price": 9, "sku": 10686354557628304, "style": "Front tie dye print", "title": "Sphynx Tie Dye Wine T-Shirt" },
        { "availableSizes": ["X", "L", "XL"], "currencyFormat": "$", "currencyId": "USD", "description": "GPX Poly 1", "id": 14, "installments": 3, "isFreeShipping": true, "price": 9, "sku": 10686354557628304, "style": "Front tie dye print", "title": "Sphynx Tie Dye Wine T-Shirt" },
        { "availableSizes": ["X", "L", "XL"], "currencyFormat": "$", "currencyId": "USD", "description": "GPX Poly 1", "id": 14, "installments": 3, "isFreeShipping": true, "price": 9, "sku": 10686354557628304, "style": "Front tie dye print", "title": "Sphynx Tie Dye Wine T-Shirt" }]

        const Cards = products.map(product => ({
            image: faker.image.image(),
            header: product.title,
            meta: product.style,
            description: product.description
        }))
        return (
            <>
                <Header />
                <p>ProductList Page</p>
                    <Grid
                        textAlign="center"
                        style={{ height: '100%' }}
                    >
                        <Grid.Column width={4}>
                            Filters
                        </Grid.Column>
                        <Grid.Column width={12} >

                            {Cards.map(card => (
                                <Card {...card} style={{display: 'inline-flex', margin: '10px', alignItems:'flex-end', justifyContent: 'center'}}/>
                            ))}

                        </Grid.Column>
                    </Grid>
            </>
        );
    }
}

export default Catalog;
