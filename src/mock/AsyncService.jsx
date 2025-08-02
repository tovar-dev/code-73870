let products = [
  {
    "id": "a1b2c3d4-e5f6-7890-abcd-1234567890ab",
    "name": "Torta adobada",
    "description": "Torta con carde adobada, cebolla y salsa de chile.",
    "image": "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    "price": 50,
    "price_offer": 45,
    "category": "tortas",
    "stock": 5
  },
  {
    "id": "b2c3d4e5-f6a7-8901-bcde-2345678901bc",
    "name": "Torta jamón y queso",
    "description": "Deliciosa torta con jamón, queso y aguacate.",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "price": 50,
    "price_offer": null,
    "category": "tortas",
    "stock": 15
  },
  {
    "id": "c3d4e5f6-a7b8-9012-cdef-3456789012cd",
    "name": "Torta de pollo",
    "description": "Torta con pollo deshebrado, lechuga y mayonesa.",
    "image": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    "price": 55,
    "price_offer": 48,
    "category": "tortas",
    "stock": 8
  },
  {
    "id": "d4e5f6a7-b8c9-0123-def0-4567890123de",
    "name": "Sandwich Vegetariano",
    "description": "Un delicioso sandwich con vegetales frescos y hummus.",
    "image": "https://images.unsplash.com/photo-1464983953574-0892a716854b",
    "price": 50,
    "price_offer": null,
    "category": "sandwiches",
    "stock": 3
  },
  {
    "id": "e5f6a7b8-c9d0-1234-ef01-5678901234ef",
    "name": "Sandwich de Pavo",
    "description": "Sandwich con pavo, lechuga y tomate en pan integral.",
    "image": "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    "price": 45,
    "price_offer": null,
    "category": "sandwiches",
    "stock": 6
  },
  {
    "id": "f6a7b8c9-d0e1-2345-f012-6789012345f0",
    "name": "Burrito de Res",
    "description": "Burrito con carne de res, frijoles y arroz envuelto en tortilla.",
    "image": "https://images.unsplash.com/photo-1512446733611-9099a758e082",
    "price": 80,
    "price_offer": null,
    "category": "burritos",
    "stock": 19
  },
  {
    "id": "a7b8c9d0-e1f2-3456-0123-789012345601",
    "name": "Burrito de Pollo",
    "description": "Burrito con pollo, frijoles y guacamole envuelto en tortilla.",
    "image": "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
    "price": 79.99,
    "price_offer": 59.99,
    "category": "burritos",
    "stock": 15
  },
  {
    "id": "b8c9d0e1-f2a3-4567-1234-890123456712",
    "name": "Ensalada César",
    "description": "Ensalada clásica con lechuga, pollo, crutones y aderezo César.",
    "image": "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
    "price": 65,
    "price_offer": null,
    "category": "ensaladas",
    "stock": 4
  }
];

export const getProducts = () => {
    let error = false;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject("Error al cargar los productos");
            } else {
                resolve(products);
            }
        }, 500)
    });

};

export const getProductById = (id) => {
    let error = false;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject("Error al cargar el producto");
            } else {
                resolve(products.find(product => product.id === id) || null);
            }
        }, 500)
    });
};