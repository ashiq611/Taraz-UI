import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
     const data = [
       {
         id: 1,
         img: "https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&w=1600",
         img2: "https://images.pexels.com/photos/1043148/pexels-photo-1043148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
         tittle: "Shirt",
         desc: "lorem dfdfdf dfdsfds dsdfdfsdf df ghgh gh  fdf df dfd f hgh gh jhh hgh  gffd fd fd fd fg dfg fh gh f gfgf gf df d",
         isNew: true,
         oldPrice: 19,
         price: 12,
       },
       {
         id: 2,
         img: "https://images.pexels.com/photos/19101423/pexels-photo-19101423/free-photo-of-smiling-girl-standing-in-front-of-a-mural.jpeg?auto=compress&cs=tinysrgb&w=1600",
         img2: "https://images.pexels.com/photos/19101421/pexels-photo-19101421/free-photo-of-smiling-girl-wearing-a-cap.jpeg?auto=compress&cs=tinysrgb&w=1600",
         tittle: "Pant",
         desc: "lorem dfdfdf dfdsfds dsdfdfsdf df ghgh gh  fdf df dfd f hgh gh jhh hgh  gffd fd fd fd fg dfg fh gh f gfgf gf df d",
         isNew: false,
         oldPrice: 19,
         price: 12,
       },
     ];
    return (
      <div className="cart">
        <h1>Products in your cart</h1>
        {data?.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="details">
              <h1>{item.tittle}</h1>
              <p>{item.desc?.substring(0, 50)}</p>
              <div className="price">
                1 x ${item.price}
              </div>
            </div>
            <DeleteOutlinedIcon
              className="delete"
            />
          </div>
        ))}
        <div className="total">
          <span>SUBTOTAL</span>
          <span>$232</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className="reset" >
          Reset Cart
        </span>
      </div>
    );
};

export default Cart;