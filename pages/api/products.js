import { faker } from '@faker-js/faker'

const fakeProducts= []; 

Array.from({ length:10 }).forEach(()=> {
    fakeProducts.push({
        id:faker.datatype.uuid(),
        name:faker.commerce.productName(), 
        price: faker.datatype.number({
            min: 50, 
            max: 100
        }),
        image: faker.image.sports(),
        description: faker.commerce.productDescription(),
        stock: faker.datatype.number({
            min: 0, 
            max: 100,
        })
    });
});

const handler = (req, res) => {
    res.status(200).json(fakeProducts);
}

export default handler; 