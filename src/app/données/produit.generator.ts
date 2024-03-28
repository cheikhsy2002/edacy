import { faker } from "@faker-js/faker";
import { Simpleproduct } from "../interfaces/produits";

export function Createproduct(): Simpleproduct {
    const haspromo = faker.datatype.boolean();
    return {
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        image: faker.image.imageUrl(640, 480, 'technic', true),
        price: faker.commerce.price(),
        categorie: faker.commerce.department(),
        promo: haspromo,
        promoval: haspromo ? faker.datatype.number({min: 10, max: 60}): 5,
    };
}
export function CreateProduits(nbrprod:number=5) : Simpleproduct[] {
    return faker.helpers.multiple(Createproduct,{count: nbrprod})
}
 