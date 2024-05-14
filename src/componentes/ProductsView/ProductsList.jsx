import React from 'react';

const products = [
  {
    id:1,
    title:'remera',
    img:'https://levisarg.vtexassets.com/arquivos/ids/873734/2249135550_1.jpg?v=638488760542500000',
    price:10,
  },
  {
    id:2,
    title:'pantalón',
    img:'https://levisarg.vtexassets.com/arquivos/ids/757246/272_648cd5ff444a6.jpg?v=638260769365870000',
    price: 15,
  },
  {
    id:3,
    title:'bermuda',
    img:'https://levisarg.vtexassets.com/arquivos/ids/822549/272_651c8bce834bd.jpg?v=638319667049930000',
    price:5,
  }
  
];

const ProductsList = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={product.img} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Price: ${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;