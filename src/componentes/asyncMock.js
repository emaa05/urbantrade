const products = [
    {
      id: 1,
      title: 'remera',
      img: 'https://levisarg.vtexassets.com/arquivos/ids/873734/2249135550_1.jpg?v=638488760542500000',
      price: 10,
      talle: 'xl',
      category: 'Ropa',
      stock: 50,
    },
    {
      id: 2,
      title: 'pantalón',
      img: 'https://levisarg.vtexassets.com/arquivos/ids/757246/272_648cd5ff444a6.jpg?v=638260769365870000',
      price: 15,
      talle: 'S',
      category: 'Ropa',
      stock: 50,
    },
    {
      id: 3,
      title: 'bermuda',
      img: 'https://levisarg.vtexassets.com/arquivos/ids/822549/272_651c8bce834bd.jpg?v=638319667049930000',
      price: 5,
      talle: 'M',
      category: 'Ropa',
      stock: 50
    },
    {
        id: 4,
        title: 'Air Jordan 1',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/730416-1000-1000?v=638308266562770000&width=1000&height=1000&aspect=true',
        price: 20,
        talle: 40,
        category: 'Zapatillas',
        stock: 50,
    },
    {
        id: 5,
        title: 'Nike SB Dunk High Pro',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/846500-1000-1000?v=638388507801970000&width=1000&height=1000&aspect=true',
        price: 30,
        talle: 38,
        category: 'Zapatillas',
        stock: 50,
    },
    {
        id: 6,
        title: 'Nike Air Max 1 SC',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/792336-1000-1000?v=638379201634530000&width=1000&height=1000&aspect=true',
        price: 25,
        talle: 42,
        category: 'Zapatillas',
        stock: 50,
    },
    {
        id: 7,
        title: 'Lebron James Los Angeles Lakers City Edition 2023/24',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/810060-1000-1000?v=638382420507600000&width=1000&height=1000&aspect=true',
        price: 15,
        talle: 'M',
        category: 'Deportiva',
        stock: 50,
    },
    {
        id: 8,
        title: 'Giannis Antetokounmpo Milwaukee Bucks City Edition',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/600644-800-800?width=800&height=800&aspect=true',
        price: 40,
        talle: 'XXL',
        category: 'Deportiva',
        stock: 50,
    },
    {
        id: 9,
        title: 'Stephen Curry Golden State Warriors City Edition 2023/24',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/844888-800-800?width=800&height=800&aspect=true',
        price: 50,
        talle: 'XL',
        category: 'Deportiva',
        stock: 50,
    }
  ];

  export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
  });
  
  export const getProduct = (id) => {
    return products.find((prod) => prod.id ==id);
  };

  