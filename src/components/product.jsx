export const Product = ({image, title, price}) => {
    return (
      <article> 
        <div className="img_card_contain">
          <img src={image} alt="" />
        </div>
        <div className="info_card_contain">

          <div className="title_contain">
            <h3>{title}</h3>
          </div>

          <div className="price_contain">
            <p>{price} <span>€</span></p>
          </div>

          <div className="stars">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
        </div>
      </article>
    );
  };