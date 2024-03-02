import "./App.css";
import "./media.css"
import { imgs } from "./data/products";
import { sliderImg } from "./data/products";
import { exploreMenu } from "./data/products";
import { bestSellar } from "./data/products";
import { topDeals } from "./data/products";
import { contant } from "./data/products";
function App() {
  return <>
    <header>
      <div className="main">
        <div className="left-side">
          <span className="icon"><i className="fa-solid fa-bars aa"></i></span>
          <img src={imgs[0].kfcImg} alt="" />
          <span className="mid-btns">
            <button className="btns-1"><img src={imgs[0].bike} className="same-1" alt="" />DELIVERY</button>
            <span className="btns-1 box"><img src={imgs[0].pack} className="same-1" alt="" />PICKUP</span>
          </span>
        </div>
        {/* left side end */}
        <div className="right-side">
          <span><img src={imgs[0].bucket} className="bucket" alt="" />
          </span>
          <button className="btn-1">LOGIN</button>
        </div>
      </div>
    </header>

    {/* Header End */}

    {/* coursel  */}

    <div className="con">
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={sliderImg[0].imgOne} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={sliderImg[0].imgTwo} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={sliderImg[0].imgThree} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={sliderImg[0].imgFour} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={sliderImg[0].imgFive} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <i className="fa-solid fa-less-than hh"></i>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <i className="fa-solid fa-greater-than hh"></i>
        </button>
      </div>
    </div>

    {/* button reoderd */}

    <div className="btn-22">
      <button type="button" className="style-btn">REORDER</button>
    </div>

    {/* Explore Menu */}

    <div className="container">
      <h2 id="heading"><span>EXPLO</span>RE MENU</h2>
    </div>
    <div className="contents-1">
      <i className="fa-solid fa-less-than mysty"></i>
      <div className="explore-menu">
        {exploreMenu.map((exploremenus) => 
          <div className="cards-1" key={exploremenus.id}>
            <img src={exploremenus.menuImg} alt="" className="deside" />
            <a href="#">
              <h6 className="ma">{exploremenus.title}</h6>
            </a>
            <span className="dot">
              aa
            </span>
          </div>
        )}
      </div>
      <i className="fa-solid fa-greater-than mysty"></i>
    </div>

    {/* Best Seller */}
    <div className="container con-10">
      <h2 id="heading"><span>BEST</span> SELLERS</h2>
        </div>
      <div className="contents-2">
       {bestSellar.map(bestSellrs =>
           <div className="cards-2" key={bestSellrs.id}>
           <div className="red">
             <span className="bothSame"></span>
             <span className="bothSame"></span>
             <span className="bothSame"></span>
           </div>
           <h3 className="head3">{bestSellrs.title}</h3>
           <div className="price"><img src={bestSellrs.price} className="qq" alt="" /></div>
           <div className="imgs-1">
             <img src={bestSellrs.imgsseller} className="sizing" alt="" />
           </div>
         </div>
        )}
      </div>


      <div className="container con-10">
      <h2 id="heading"><span>TOP</span> DEALS</h2>
        </div>
      <div className="contents-2">
       {topDeals.map(topDeals =>
           <div className=" change" key={topDeals.id}>
           <div className="red">
             <span className="bothSame"></span>
             <span className="bothSame"></span>
             <span className="bothSame"></span>
           </div>
           <div className="heart"><i className="fa-regular fa-heart"></i></div>
           <div className="price"><img src={topDeals.imgs} className="ios" alt="" /></div>
           <h3 className="head3">{topDeals.title}</h3>
           <p className="pp">{topDeals.desc}
           </p>
           <span className="pp b">Rs {topDeals.price}</span>
         <div className="bt">
         <button className="button">+ Add to Bucket</button>
           </div>     
      </div>
        )}
      </div>

{/* contant box */}
 <div className="container">
  <div className="img-contant">
    <div className="left-contant">
    <img src={contant[0].imgLeftTop} className="same-imgs" alt="" />
    <img src={contant[0].imgRightTop} className="same-imgs" alt="" />
      </div>
      <div className="right-contant">
        <img src={contant[0].imgLeftBottom} alt="" className="same-imgs" />
        <div className="my">
          <div className="conasi"><img src={contant[1].imgRightBottom} alt="" /></div>
          <h4 className="alo">Adding 11 herbs and spices, Explore our menu and add items to your cart.</h4>
          <button className="butonic">EXPLORE MENU</button>
        </div>
      </div>
  </div>
 </div>

 {/* footer */}

 <footer>
  <div className="media">
    <div className="media-icons">
      <span><img src={imgs[0].kfcImg} alt="" /></span>
      <img src={imgs[0].youtube} alt="" />
      <img src={imgs[0].insta} alt="" />
      <img src={imgs[0].face} alt="" />
    </div>
    <div className="nnn">
    <div className="containe-anchor">
      <a href="#">About Us</a> 
      <a href="#">Mitao Bhook</a>
      <a href="#">Mitao Bhook - Scholarship</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Careers</a>
      <a href="#">Contact Us</a>
      <a href="#">Store Locator</a>
      <a href="#">Track Order</a>
      <a href="#">Terms & Conditions</a>
    </div>
     <div className="consali">
     <img src={imgs[0].apptore} alt="" />
      <br />
      <img src={imgs[0].playstore} alt="" />
     </div>
    </div>
  </div>
  <div className="bottom-11">
    <div className="he"><h3>2023 KFC. All rights reserved</h3></div>
    <div className="present">
      <h4>Powered by</h4>
      <a href="#">SimpleX Technology Solutions</a>
    </div>
  </div>
 </footer>
  </>
}
export default App;


