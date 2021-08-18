import React, { Component } from "react";
import "../css/Home.css";
import "../css/Products.css";
import { Link } from "react-router-dom";

import { DataContext } from "../Context";
export class Home extends Component {
  static contextType = DataContext;

  render() {
    const { products, addCart } = this.context;
    return (
      <>
<section className="home" id="home">
      <div className="max-width">
          <div className="row">
            <div className="home-content">
                
                <div className="text-2">Swadeshi</div>
                <div className="text-3">Sell  <span class="typing"> Indian </span>   Buy <span class="typing"> Indian.</span></div>
                <a href="#">About us</a>
            </div>
          </div>
      </div>
    </section>

 <div className="w3-container  about" style={{ padding: "130px 16px" }} >
          <div className="w3-row-padding">
            <div className="w3-col m6">
              <h3>One Stop Ecommerce for Villagers.</h3>
              <p>
                 
              We as a team found the various problems faced by the rural producers in these difficult times and wanted to help them. So, we thought of creating a platform specifically designed and developed for their use.
Main objective of this project is to provide a sustainable market and income to the local communities using their own indigenous skills, strengths and creativity aiming at the Indian market .
Swadeshi aims at reducing the costs incurred for the betterment of their revenue. Automating the ecommerce business can help in reducing the management cost significantly. Moreover, the right use of digital marketing can help in reducing the cost spent on driving customers to such an extent that businesses can bring customers for free of cost. 
              </p>
              <p>
                <a href="#work" className="w3-button w3-black">
                     About us 
                </a>
              </p>
            </div>
            <div className="w3-col m6">
              <img className="w3-image w3-round-large"  src="https://images.unsplash.com/photo-1585302769412-25f133f2b967?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1841&q=600"  alt="Buildings"width="900"/>
            </div>
          </div>
        </div>


 <div className="hexagon-section">


          <div className="wrap">
            <ul className="title">
              <h1>
                <b>Why  Choose Us  </b>
              </h1>
            </ul>
            <div className="subtitle">
              <span>It Ensures</span>
            </div>
          </div>

          <section id="lab">
            <article>
              <div className="lab_item">
                <div className="hexagon hexagon2 item">
                  <div className="hexagon-in1">
                    <div className="hexagon-in2" style={{  backgroundImage: 'url("https://images.unsplash.com/photo-1585302769412-25f133f2b967?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1841&q=80")'}} >
                      <div className="overlay">
                        <h3 className="text">Requires Less Space</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lab_item">
                <div className="hexagon hexagon2">
                  <div className="hexagon-in1">
                    <div className="hexagon-in2 " style={{  backgroundImage: 'url("https://us.123rf.com/450wm/perekotypole/perekotypole1712/perekotypole171200069/92151688-spices-at-the-market-in-the-old-city-jerusalem-israel.jpg?ver=6")'}} >
                      <div className="overlay">
                        <h3 className="text">Villager Ecommerce</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lab_item">
                <div className="hexagon hexagon2">
                  <div className="hexagon-in1">
                    <div className="hexagon-in2 " style={{  backgroundImage: 'url("https://st4.depositphotos.com/3211229/26826/i/1600/depositphotos_268264070-stock-photo-villagers-took-bamboo-stripes-to.jpg")'}}>
                      <div className="overlay">
                        <h3 className="text">Handmade Goods</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lab_item">
                <div className="hexagon hexagon2 item">
                  <div className="hexagon-in1">
                    <div className="hexagon-in2 " style={{  backgroundImage: 'url("https://images.unsplash.com/photo-1585302769412-25f133f2b967?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1841&q=80")'}}>
                      <div className="overlay">
                        <h3 className="text">Faster Growth</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lab_item">
                <div className="hexagon hexagon2">
                  <div className="hexagon-in1">
                    <div className="hexagon-in2 " style={{  backgroundImage: 'url("https://us.123rf.com/450wm/perekotypole/perekotypole1712/perekotypole171200069/92151688-spices-at-the-market-in-the-old-city-jerusalem-israel.jpg?ver=6")'}} >
                      <div className="overlay">
                        <h3 className="text">Easily Accessible</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lab_item">
                <div className="hexagon hexagon2">
                  <div className="hexagon-in1">
                    <div className="hexagon-in2 " style={{  backgroundImage: 'url("https://images.unsplash.com/photo-1585302769412-25f133f2b967?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1841&q=80")'}}>
                      <div className="overlay">
                        <h3 className="text">Pocket Friendly</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lab_item">
                <div className="hexagon hexagon2">
                  <div className="hexagon-in1">
                    <div className="hexagon-in2 " style={{  backgroundImage: 'url("https://st4.depositphotos.com/3211229/26826/i/1600/depositphotos_268264070-stock-photo-villagers-took-bamboo-stripes-to.jpg")'}} >
                      <div className="overlay">
                        <h3 className="text">Faster Growth</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lab_item">
                <div className="hexagon hexagon2 item">
                  <div className="hexagon-in1">
                    <div className="hexagon-in2 " style={{  backgroundImage: 'url("https://images.unsplash.com/photo-1585302769412-25f133f2b967?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1841&q=80")'}}>
                      <div className="overlay">
                        <h3 className="text">Handmade Goods</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lab_item">
                <div className="hexagon hexagon2">
                  <div className="hexagon-in1">
                    <div className="hexagon-in2 " style={{  backgroundImage: 'url("https://us.123rf.com/450wm/perekotypole/perekotypole1712/perekotypole171200069/92151688-spices-at-the-market-in-the-old-city-jerusalem-israel.jpg?ver=6")'}} >
                      <div className="overlay">
                        <h3 className="text">Antique Items</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lab_item">
                <div className="hexagon hexagon2">
                  <div className="hexagon-in1">
                    <div className="hexagon-in2 " style={{  backgroundImage: 'url("https://st4.depositphotos.com/3211229/26826/i/1600/depositphotos_268264070-stock-photo-villagers-took-bamboo-stripes-to.jpg")'}} >
                      <div className="overlay">
                        <h3 className="text">Connecting Link</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lab_item">
                <div className="hexagon hexagon2 item">
                  <div className="hexagon-in1">
                    <div className="hexagon-in2 " style={{  backgroundImage: 'url("https://images.unsplash.com/photo-1585302769412-25f133f2b967?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1841&q=80")'}} >
                      <div className="overlay">
                        <h3 className="text">Handmade Goods</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>


<h2 className ="w3-center w3-xxlarge"><b> Featured Products</b></h2> 



 <div id="product">

          {products.map((product) => (
            <div className="card" key={product._id}>
              {/* <div className="card" key={product._id}> */}
              <Link to={`/product/${product._id}`}>
                <img src={product.src} alt="" class="card__img" />
              </Link>
              <div class="card__data">
                <h1 class="card__title">
                  <Link to={`/product/${product._id}`}>{product.title}</Link>
                </h1>
                <span class="card__preci">₹{product.price} </span>
                <p class="card__description">{product.description}</p>

                <button
                  class="card__button"
                  onClick={() => addCart(product._id)}
                >
                  Add to cart
                </button>
              </div>
            </div>
  ))}
</div>
 

 <div  className="w3-container tech"   id="team">
  <h1 className="w3-center"><b>Overview Of Services</b></h1>
        <div className="\ teamcard ">
          <div className=" w3-margin-bottom">
            <div className="w3-card ">
              <img
                src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/02/01/785054-ecommerce-istock-020119.jpg"
                alt="Buildings"
              />
              <div className="w3-container ">
                <h2 className="w3-center">Ecommerce</h2>
                <h6>
                The essence of handmade goods is the speciality of Swadeshi! And you can get this essence home through our E-commerce sites. Come get yours hand on our best products and grow with us!
                </h6>
                
              </div>
            </div>
          </div>
          <div className="  w3-margin-bottom">
            <div className="w3-card">
              <img
                src="https://mk0digitallearn7ttjx.kinstacdn.com/wp-content/uploads/2015/06/VEC.jpg"
                alt="Buildings"/>
              <div className="w3-container">
                <h2 className="w3-center">Education</h2>

                <h6>
                Wanna Learn? Or Wanna Teach? Education is the stop for you . Embroidery, pottery etc. Yes the villagers are talented! And you can get this knowledge through our education page. 
                 
                </h6>
               
              </div>
            </div>
          </div>
          <div className="  w3-margin-bottom">
            <div className="w3-card">
              <img
                src="https://lh3.googleusercontent.com/proxy/HoO5Ogn3gM60UlI-Pf6cg4p0BxUK0cnZPUZe4zuytLr9hFEbvCbS2WGnOCVIrdAvuDJKFuhVlauf3Exb2E7W1GvrKV4DVUcfo1a-fSTTCGiXDMV5mw"
                alt="Buildings"
              />
              <div className="w3-container">
                <h2 className="w3-center">Blog </h2>

                <h6>
                Want to know more about the village? Our Blogging Page is all you need! Lets us understand and feel the diverse culture , tradition and beauty of villagers in India. Let's embrace the skills possessed by the villagers and grow together.
                 
                </h6>
               
              </div>
            </div>
          </div>
          <div className=" w3-margin-bottom">
            <div className="w3-card">
              <img
                src="https://img.etimg.com/thumb/msid-72137093,width-650,imgsize-439255,,resizemode-4,quality-100/online-auction-sales_istock.jpg"
                alt="Buildings"
              />
              <div className="w3-container">
                <h2 className="w3-center">Auction</h2>

                <h6>
                Let us Bid! Our Auction page is the place where you can get your hands on the most beautiful and unique goods made by our people! Let us promote the talent and hardwork of generations of villagers and promote the work of our country!
                 
                </h6>
                
              </div>
            </div>
      </div>
 </div>
</div>

       
<section className="SEC">
          <div className="heading ">Our Testimonials</div>
          <div className="wrapper">
            <div className="container">
              <div className="profile">
                <div className="imgBox">
                  <img src="https://images.unsplash.com/photo-1585302769412-25f133f2b967?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1841&q=80" />
                </div>
                <h2>Shreyas Raj</h2>
              </div>
              <p>
                <span className="fa fa-quote-left left"></span>Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Quam neque
                reiciendis sit. Incidunt tempore vitae aliquam alias voluptatem
                accusantium magnam eos harum ipsam modi, quisquam illo facilis
                suscipit maxime obcaecati laboriosam cum blanditiis ducimus ut
                consectetur id mollitia aperiam rerum.
                <span className="fa fa-quote-right right"></span>
              </p>
              <div className="social">
                <i className="fa fa-twitter"></i>
                <i className="fa fa-youtube"></i>
                <i className="fa fa-instagram"></i>
              </div>
            </div>

            <div className="container">
              <div className="profile">
                <div className="imgBox">
                  <img src="https://images.unsplash.com/photo-1585302769412-25f133f2b967?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1841&q=80" />
                </div>
                <h2>Bhumiii Shetty</h2>
              </div>
              <p>
                <span className="fa fa-quote-left left"></span>Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Quam neque
                reiciendis sit. Incidunt tempore vitae aliquam alias voluptatem
                accusantium magnam eos harum ipsam modi, quisquam illo facilis
                suscipit maxime obcaecati laboriosam cum blanditiis ducimus ut
                consectetur id mollitia aperiam rerum.
                <span className="fa fa-quote-right right"></span>
              </p>
              <div className="social">
                <i className="fa fa-twitter"></i>
                <i className="fa fa-youtube"></i>
                <i className="fa fa-instagram"></i>
              </div>
            </div>

            <div className="container">
              <div className="profile">
                <div className="imgBox">
                  <img src="https://images.unsplash.com/photo-1585302769412-25f133f2b967?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1841&q=80" />
                </div>
                <h2>Varsha Bang</h2>
              </div>
              <p>
                <span className="fa fa-quote-left left"></span>Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Quam neque
                reiciendis sit. Incidunt tempore vitae aliquam alias voluptatem
                accusantium magnam eos harum ipsam modi, quisquam illo facilis
                suscipit maxime obcaecati laboriosam cum blanditiis ducimus ut
                consectetur id mollitia aperiam rerum.
                <span className="fa fa-quote-right right"></span>
              </p>
              <div className="social">
                <i className="fa fa-twitter"></i>
                <i className="fa fa-youtube"></i>
                <i className="fa fa-instagram"></i>
              </div>
            </div>
          </div>
        </section>

        
      </>
    );
  }
}

export default Home;
