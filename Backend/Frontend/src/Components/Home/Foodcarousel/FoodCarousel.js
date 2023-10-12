import React from "react";
import "./FoodCarousel.css";
function FoodCarousel() {
  return (
    <>
      <h4 className="template_heading">Popular Dishes....</h4>
      <div className="carousel_container">
        <div className="food-item">
          <img
            className="template_img"
            src="https://b.zmtcdn.com/data/dish_images/838c7929dcc09479600f118c9088af7b1614910398.png"
            alt="Bowl"
          />
          <p className="template_name">Bowl</p>
        </div>
        <div className="food-item">
          <img
            className="template_img"
            src="https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png"
            alt="Sandwich"
          />
          <p className="template_name">Sandwich</p>
        </div>

        <div className="food-item">
          <img
            className="template_img"
            src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
            alt="hi"
          />
          <p className="template_name"> Pizza</p>
        </div>
        <div className="food-item">
          <img
            className="template_img"
            src="https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"
            alt="hi"
          />
          <p className="template_name">Rolls</p>
        </div>

        <div className="food-item">
          <img
            className="template_img"
            src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
            alt="hi"
          />
          <p className="template_name">Burger</p>
        </div>
      </div>
      <hr></hr>
    </>
  );
}

export default FoodCarousel;

/* <div className="main_carousel">
  <div
    id="carouselExampleIndicators"
    className="carousel slide"
    data-ride="carousel"
  >
    <ol className="carousel-indicators">
      <li
        data-target="#carouselExampleIndicators"
        data-slide-to="0"
        className="active"
      ></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    </ol>
    <div className="carousel-inner ">
      <div className="carousel-item active  ">
        <div className="fooditem_container">
          <div className="food-item">
            <img
              className="template_img"
              src="https://b.zmtcdn.com/data/dish_images/838c7929dcc09479600f118c9088af7b1614910398.png"
              alt="Bowl"
            />
            <p className="template_name">Bowl</p>
          </div>
          <div className="food-item">
            <img
              className="template_img"
              src="https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png"
              alt="Sandwich"
            />
            <p className="template_name">Sandwich</p>
          </div>

          <div className="food-item">
            <img
              className="template_img"
              src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
              alt="hi"
            />
            <p className="template_name"> Pizza</p>
          </div>
          <div className="food-item">
            <img
              className="template_img"
              src="https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"
              alt="hi"
            />
            <p className="template_name">Rolls</p>
          </div>

          <div className="food-item">
            <img
              className="template_img"
              src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
              alt="hi"
            />
            <p className="template_name">Burger</p>
          </div>
        </div>
      </div>

      <div className="carousel-item">
        <div className="fooditem_container">
          <div className="food-item">
            <img
              className="template_img"
              src="https://b.zmtcdn.com/data/dish_images/838c7929dcc09479600f118c9088af7b1614910398.png"
              alt="Bowl"
            />
            <p className="template_name">Bowl</p>
          </div>
          <div className="food-item">
            <img
              className="template_img"
              src="https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png"
              alt="Sandwich"
            />
            <p className="template_name">Sandwich</p>
          </div>

          <div className="food-item">
            <img
              className="template_img"
              src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
              alt="hi"
            />
            <p className="template_name"> Pizza</p>
          </div>
          <div className="food-item">
            <img
              className="template_img"
              src="https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"
              alt="hi"
            />
            <p className="template_name">Rolls</p>
          </div>

          <div className="food-item">
            <img
              className="template_img"
              src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
              alt="hi"
            />
            <p className="template_name">Burger</p>
          </div>
        </div>
      </div>
    </div>
    <a
      className="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a
      className="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>; */
