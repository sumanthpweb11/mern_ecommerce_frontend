import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xl">
          <div className="row">
            {/* MAIN BANNER START  */}
            <div className="col-6">
              <div className="main-banner position-relative ">
                <img
                  className="img-fluid rounded-3"
                  src="images/main-banner-1.jpg"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>Supercharged for pros</h4>
                  <h5>IPADS3+PRO</h5>
                  <p>From $999 or $41/mp</p>
                  <Link className="button">Buy Now</Link>
                </div>
              </div>
            </div>
            {/* MAIN BANNER END  */}

            {/* SMALL BANNER START */}
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                {/* cat 1 */}
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Best Sake</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From $999.00 <br /> or $41.62/mo.
                    </p>
                  </div>
                </div>
                {/* cat 2 */}
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>But IPad Air</h5>
                    <p>
                      From $999.00 <br /> or $41.62/mo.
                    </p>
                  </div>
                </div>
                {/* cat 3 */}
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>But IPad Air</h5>
                    <p>
                      From $999.00 <br /> or $41.62/mo.
                    </p>
                  </div>
                </div>
                {/* cat 4 */}
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>But IPad Air</h5>
                    <p>
                      From $999.00 <br /> or $41.62/mo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* SMALL BANNER END  */}
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              {/* SERVICES */}
              <div className="services d-flex justify-content-between ">
                {/* cat 1 */}
                <div className="d-flex gap-15 align-items-center">
                  <img src="images/service.png" alt="" />
                  <div>
                    <h6>Daily surprise offers</h6>
                    <p className="mb-0">save upto 25% off</p>
                  </div>
                </div>
                {/* cat 2 */}
                <div className="d-flex gap-15 align-items-center">
                  <img src="images/service-02.png" alt="" />
                  <div>
                    <h6>Daily surprise offers</h6>
                    <p className="mb-0">save upto 25% off</p>
                  </div>
                </div>
                {/* cat 3 */}
                <div className="d-flex gap-15 align-items-center">
                  <img src="images/service-03.png" alt="" />
                  <div>
                    <h6>Daily surprise offers</h6>
                    <p className="mb-0">save upto 25% off</p>
                  </div>
                </div>
                {/* cat 4 */}
                <div className="d-flex gap-15 align-items-center">
                  <img src="images/service-04.png" alt="" />
                  <div>
                    <h6>Daily surprise offers</h6>
                    <p className="mb-0">save upto 25% off</p>
                  </div>
                </div>
                {/* cat 5 */}
                <div className="d-flex gap-15 align-items-center">
                  <img src="images/service-05.png" alt="" />
                  <div>
                    <h6>Daily surprise offers</h6>
                    <p className="mb-0">save upto 25% off</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class1="home-wrapper-2 py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                {/* cat 1 */}
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                {/* cat 2 */}
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                {/* cat 3 */}
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                {/* cat 4 */}
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
                {/* cat 5 */}
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                {/* cat 6 */}
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                {/* cat 7 */}
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                {/* cat 8 */}
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED COLLECTION */}

      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collections</h3>
            </div>

            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          {/* <div className="row">
            <div className="col-3">
              <ProductCard />
            </div>
            <div className="col-3">
              <ProductCard />
            </div>
            <div className="col-3">
              <ProductCard />
            </div>
            <div className="col-3">
              <ProductCard />
            </div>
          </div> */}
        </div>
      </section>

      {/* BRAND MARQUEE */}
      <section className="marque-wrapper py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
