import Card from '../Card/Card';
import './FeaturedProducts.scss'

const FeaturedProducts = ({type}) => {

    const data = [
      {
        id: 1,
        img: "https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&w=1600",
        img2: "https://images.pexels.com/photos/1043148/pexels-photo-1043148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        tittle: "Shirt",
        isNew: true,
        oldPrice: 19,
        price: 12,
      },
      {
        id: 2,
        img: "https://images.pexels.com/photos/19101423/pexels-photo-19101423/free-photo-of-smiling-girl-standing-in-front-of-a-mural.jpeg?auto=compress&cs=tinysrgb&w=1600",
        img2: "https://images.pexels.com/photos/19101421/pexels-photo-19101421/free-photo-of-smiling-girl-wearing-a-cap.jpeg?auto=compress&cs=tinysrgb&w=1600",
        tittle: "Pant",
        isNew: false,
        oldPrice: 19,
        price: 12,
      },
    ];

    return (
      <div className="featuredProducts">
        <div className="top">
          <h1>{type} Products</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste harum
            error distinctio, laborum recusandae dolores ea tempora earum nam
            suscipit.
          </p>
        </div>
        <div className="bottom">
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
};

export default FeaturedProducts;