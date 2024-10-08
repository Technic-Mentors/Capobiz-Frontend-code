import React, { useState } from "react";
// import FeaturesComponent from "./FeaturesComponent";
import RetailShop from "../Assets/Images/retail-shop-pos.avif";
import SuperMartPOS from "../Assets/Images/super-mart-pos.avif";
import RestaurantPOS from "../Assets/Images/restaurant-pos-software.avif";
import PharmacyPOS from "../Assets/Images/pharmacy-pos.avif";
import FertilizersPOS from "../Assets/Images/pos-for-fertilizers-shop.avif";
import TradingPOS from "../Assets/Images/pos-for-trading-business.avif";
import MobileShopPOS from "../Assets/Images/pos-for-mobile-shop.avif";
import accountingSoftware from "../Assets/Images/accounting-software.avif";
import manufacturingManagement from "../Assets/Images/manufacturing-management.avif";
import bookingManagement from "../Assets/Images/booking-management-software.avif";
import distributionSoftware from "../Assets/Images/disbtribution-management-software.avif";
import realEstateSoftware from "../Assets/Images/real-estate-management-software.webp";
import installmentManagement from "../Assets/Images/installment-management-software.avif";
import VapePOS from '../Assets/Images/vape-shop-pos.avif'

function Industrysolutions() {
  const [activeTab, setActiveTab] = useState("retail-shop");

  const handleTabChange = (tabId, e) => {
    e.preventDefault();
    setActiveTab(tabId);
  };

  return (
    <div>
      <section
        className="inner-page-header">
        <div className="inner-page-overlay">
          <div className="container">
            <div className="row slider d-flex justify-content-center py-7 align-items-center">
              <div className="col-md-12 text-center content-col">
                <h1 className="slider-heading">
                  A POS For Diverse{" "}
                  <span style={{ color: "var(--secondary-color)" }}>
                    Business Needs
                  </span>{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="other-services py-5">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div
              className="col-md-3 mb-3"
            >
              <div className="section-header">
                <h2>Covering More Diverse Businesses</h2>
                <p>We offer tailored retail software solutions for all businesses!</p>
              </div>
            </div>
            <div
              className="col-md-9"
            >
              <button className="services-button">Retail Shop </button>
              <button className="services-button">Factory</button>
              <button className="services-button">Pharmacy</button>
              <button className="services-button">Garments Shop</button>
              <button className="services-button">Grocery Store</button>
              <button className="services-button">Education</button>
              <button className="services-button">Real Estate</button>
              <button className="services-button">Manufacturing</button>
              <button className="services-button">Trading</button>
              <button className="services-button">Super store software</button>
              <button className="services-button">Installment Business</button>
              <button className="services-button">Restaurant </button>
              <button className="services-button">Gym Management</button>
              <button className="services-button">Fertilizers Business</button>
              <button className="services-button">Transport</button>
              <button className="services-button">Booking</button>
              <button className="services-button">Distribution Software</button>
              <button className="services-button">Commission Agents</button>
              <button className="services-button">Hotels</button>
            </div>
          </div>
        </div>
      </section>


      <section
        className="pills-tab-section px-2 py-4 "
        style={{ backgroundColor: "#FAFAFA" }}
      >
        <div className="container-fluid pt-3 pb-2">
          <div className="row">
            <div className="mb-5 text-center">
              <h2 className="subtitle">For One, For All</h2>
              <h3 className="main-heading">
                Industries Empowered by Our POS Software
              </h3>
            </div>
            <div
              className="col-md-3 jutify-content-center align-items-center"
            >
              <div className="row">
                <ul
                  className="nav nav-tabs industries nav-justified"
                  id="ex1"
                  role="tablist"
                >
                  <div className="col-md-12 ">
                    <li className="nav-item" role="presentation">
                      <a
                        className={`nav-link-tab text-start  mb-2 ${
                          activeTab === "retail-shop" ? "active" : ""
                        }`}
                        id="retail-shop-tab"
                        data-mdb-toggle="pill"
                        href="#retail-shop"
                        role="tab"
                        onClick={(e) => handleTabChange("retail-shop", e)}
                        aria-controls="retail-shop"
                        aria-selected={activeTab === "retail-shop"}
                        style={{
                          fontWeight: "bold",
                          display: "block",
                          padding: "10px",
                          border:
                            activeTab === "retail-shop"
                              ? "none"
                              : "1px solid var(--primary-color)",
                          color:
                            activeTab === "retail-shop"
                              ? "#fff"
                              : "var(--primary-color)",
                          backgroundColor:
                            activeTab === "retail-shop"
                              ? "var(--secondary-color)"
                              : "white",
                        }}
                      >
                        Retail Shop{" "}
                      </a>
                    </li>
                  </div>

                  <div className="col-md-12">
                    <li className="nav-item" role="presentation">
                      <a
                        className={`nav-link-tab text-start mb-2 ${
                          activeTab === "super-mart" ? "active" : ""
                        }`}
                        id="super-mart-tab"
                        data-mdb-toggle="pill"
                        href="#super-mart"
                        role="tab"
                        onClick={(e) => handleTabChange("super-mart", e)}
                        aria-controls="super-mart"
                        aria-selected={activeTab === "super-mart"}
                        style={{
                          fontWeight: "bold",
                          display: "block",
                          padding: "10px",
                          border:
                            activeTab === "super-mart"
                              ? "none"
                              : "1px solid var(--primary-color)",
                          color:
                            activeTab === "super-mart"
                              ? "#fff"
                              : "var(--primary-color)",
                          backgroundColor:
                            activeTab === "super-mart"
                              ? "var(--secondary-color)"
                              : "white",
                        }}
                      >
                        Super Mart
                      </a>
                    </li>
                  </div>

                  <div className="col-md-12">
                    <li className="nav-item" role="presentation">
                      <a
                        className={`nav-link-tab text-start mb-2 ${
                          activeTab === "restaurants" ? "active" : ""
                        }`}
                        id="restaurants-tab"
                        data-mdb-toggle="pill"
                        href="#restaurants"
                        role="tab"
                        onClick={(e) => handleTabChange("restaurants", e)}
                        aria-controls="corporate-matters"
                        aria-selected={activeTab === "restaurants"}
                        style={{
                          fontWeight: "bold",
                          display: "block",
                          padding: "10px",
                          border:
                            activeTab === "restaurants"
                              ? "none"
                              : "1px solid var(--primary-color)",
                          color:
                            activeTab === "restaurants"
                              ? "#fff"
                              : "var(--primary-color)",
                          backgroundColor:
                            activeTab === "restaurants"
                              ? "var(--secondary-color)"
                              : "white",
                        }}
                      >
                        Restaurant
                      </a>
                    </li>
                  </div>

                  <div className="col-md-12">
                    <li className="nav-item" role="presentation">
                      <a
                        className={`nav-link-tab text-start mb-2 ${
                          activeTab === "pharmacy" ? "active" : ""
                        }`}
                        id="pharmacy-tab"
                        data-mdb-toggle="pill"
                        href="#pharmacy"
                        role="tab"
                        onClick={(e) => handleTabChange("pharmacy", e)}
                        aria-controls="pharmacy"
                        aria-selected={activeTab === "pharmacy"}
                        style={{
                          fontWeight: "bold",
                          display: "block",
                          padding: "10px",
                          border:
                            activeTab === "pahrmacy"
                              ? "none"
                              : "1px solid var(--primary-color)",
                          color:
                            activeTab === "pharmacy"
                              ? "#fff"
                              : "var(--primary-color)",
                          backgroundColor:
                            activeTab === "pharmacy"
                              ? "var(--secondary-color)"
                              : "white",
                        }}
                      >
                        Pharmacy
                      </a>
                    </li>
                  </div>

                  <div className="col-md-12">
                    <li className="nav-item" role="presentation">
                      <a
                        className={`nav-link-tab text-start mb-2 ${
                          activeTab === "fertilizers-shop" ? "active" : ""
                        }`}
                        id="fertilizers-shop-tab"
                        data-mdb-toggle="pill"
                        href="#fertilizers-shop"
                        role="tab"
                        onClick={(e) => handleTabChange("fertilizers-shop", e)}
                        aria-controls="fertilizers-shop"
                        aria-selected={activeTab === "fertilizers-shop"}
                        style={{
                          fontWeight: "bold",
                          display: "block",
                          padding: "10px",
                          border:
                            activeTab === "fertilizers-shop"
                              ? "none"
                              : "1px solid var(--primary-color)",
                          color:
                            activeTab === "fertilizers-shop"
                              ? "#fff"
                              : "var(--primary-color)",
                          backgroundColor:
                            activeTab === "fertilizers-shop"
                              ? "var(--secondary-color)"
                              : "white",
                        }}
                      >
                        Fertilizers Shop
                      </a>
                    </li>
                  </div>

                  <div className="col-md-12">
                    <li className="nav-item" role="presentation">
                      <a
                        className={`nav-link-tab text-start mb-2 ${
                          activeTab === "trading-pos" ? "active" : ""
                        }`}
                        id="trading-pos-tab"
                        data-mdb-toggle="pill"
                        href="#trading-pos"
                        role="tab"
                        onClick={(e) => handleTabChange("trading-pos", e)}
                        aria-controls="trading-pos"
                        aria-selected={activeTab === "trading-pos"}
                        style={{
                          fontWeight: "bold",
                          display: "block",
                          padding: "10px",
                          border:
                            activeTab === "trading-pos"
                              ? "none"
                              : "1px solid var(--primary-color)",
                          color:
                            activeTab === "trading-pos"
                              ? "#fff"
                              : "var(--primary-color)",
                          backgroundColor:
                            activeTab === "trading-pos"
                              ? "var(--secondary-color)"
                              : "white",
                        }}
                      >
                        Trading
                      </a>
                    </li>
                  </div>

                  <div className="col-md-12">
                    <li className="nav-item" role="presentation">
                      <a
                        className={`nav-link-tab text-start mb-2 ${
                          activeTab === "mobile-shop-pos" ? "active" : ""
                        }`}
                        id="mobile-shop-pos-tab"
                        data-mdb-toggle="pill"
                        href="#mobile-shop-pos"
                        role="tab"
                        onClick={(e) => handleTabChange("mobile-shop-pos", e)}
                        aria-controls="mobile-shop-pos"
                        aria-selected={activeTab === "mobile-shop-pos"}
                        style={{
                          fontWeight: "bold",
                          display: "block",
                          padding: "10px",
                          border:
                            activeTab === "mobile-shop-pos"
                              ? "none"
                              : "1px solid var(--primary-color)",
                          color:
                            activeTab === "mobile-shop-pos"
                              ? "#fff"
                              : "var(--primary-color)",
                          backgroundColor:
                            activeTab === "mobile-shop-pos"
                              ? "var(--secondary-color)"
                              : "white",
                        }}
                      >
                        Mobile Shop
                      </a>
                    </li>
                  </div>

                  <div className="col-md-12">
                    <li className="nav-item" role="presentation">
                      <a
                        className={`nav-link-tab text-start mb-2 ${
                          activeTab === "accounting-software" ? "active" : ""
                        }`}
                        id="accounting-software-tab"
                        data-mdb-toggle="pill"
                        href="#accounting-software"
                        role="tab"
                        onClick={(e) => handleTabChange("accounting-software", e)}
                        aria-controls="accounting-software"
                        aria-selected={activeTab === "accounting-software"}
                        style={{
                          fontWeight: "bold",
                          display: "block",
                          padding: "10px",
                          border:
                            activeTab === "accounting-software"
                              ? "none"
                              : "1px solid var(--primary-color)",
                          color:
                            activeTab === "accounting-software"
                              ? "#fff"
                              : "var(--primary-color)",
                          backgroundColor:
                            activeTab === "accounting-software"
                              ? "var(--secondary-color)"
                              : "white",
                        }}
                      >
                        Accounting Software
                      </a>
                    </li>
                  </div>

                  <div className="col-md-12">
                    <li className="nav-item" role="presentation">
                      <a
                        className={`nav-link-tab text-start mb-2 ${
                          activeTab === "manufacturing-pos" ? "active" : ""
                        }`}
                        id="manufacturing-pos-tab"
                        data-mdb-toggle="pill"
                        href="#manufacturing-pos"
                        role="tab"
                        onClick={(e) => handleTabChange("manufacturing-pos", e)}
                        aria-controls="manufacturing-pos"
                        aria-selected={activeTab === "manufacturing-pos"}
                        style={{
                          fontWeight: "bold",
                          display: "block",
                          padding: "10px",
                          border:
                            activeTab === "manufacturing-pos"
                              ? "none"
                              : "1px solid var(--primary-color)",
                          color:
                            activeTab === "manufacturing-pos"
                              ? "#fff"
                              : "var(--primary-color)",
                          backgroundColor:
                            activeTab === "manufacturing-pos"
                              ? "var(--secondary-color)"
                              : "white",
                        }}
                      >
                        Manufacturing POS
                      </a>
                    </li>
                  </div>

                  <div className="col-md-12">
                    <li className="nav-item" role="presentation">
                      <a
                        className={`nav-link-tab text-start mb-2 ${
                          activeTab === "vape-shop-pos" ? "active" : ""
                        }`}
                        id="vape-shop-pos-tab"
                        data-mdb-toggle="pill"
                        href="#vape-shop-pos"
                        role="tab"
                        onClick={(e) => handleTabChange("vape-shop-pos", e)}
                        aria-controls="vape-shop-pos"
                        aria-selected={activeTab === "vape-shop-pos"}
                        style={{
                          fontWeight: "bold",
                          display: "block",
                          padding: "10px",
                          border:
                            activeTab === "vape-shop-pos"
                              ? "none"
                              : "1px solid var(--primary-color)",
                          color:
                            activeTab === "vape-shop-pos"
                              ? "#fff"
                              : "var(--primary-color)",
                          backgroundColor:
                            activeTab === "vape-shop-pos"
                              ? "var(--secondary-color)"
                              : "white",
                        }}
                      >
                        Vape Shop POS
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>

            <div className="col-md-9 tab-detail">
              {/* Tab content */}
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className={`tab-pane fade show ${
                    activeTab === "retail-shop" ? "active" : ""
                  }`}
                  id="retail-shop"
                  role="tabpanel"
                  aria-labelledby="retail-shop-tab"
                >
                  <div className="contaier">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div
                        className="col-md-7 col-12"
                      >
                        <p>
                          Point of Sale (POS) software plays a pivotal role in
                          enhancing the efficiency and productivity of retail
                          shops. CapoBiz is a POS for diverse business needs. It provides a centralized platform for managing
                          sales, inventory, and customer transactions,
                          streamlining operations and reducing the likelihood of
                          errors. With real-time tracking of stock levels, POS
                          software helps prevent stockouts and overstock
                          situations, ensuring that retailers can meet customer
                          demands effectively. Additionally, the integration of
                          POS systems with payment gateways facilitates smooth
                          and secure transactions, enhancing the overall
                          customer experience. Overall, POS software is an
                          indispensable tool for modern retail businesses,
                          offering a seamless and organized approach to sales
                          and inventory management.
                        </p>
                      </div>
                      <div
                        className="col-md-4 col-12 d-flex justfiy-content-end"
                      >
                        <img
                          src={RetailShop}
                          className="img-fluid"
                          alt="retail-shop-pos"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade show ${
                    activeTab === "super-mart" ? "active" : ""
                  }`}
                  id="super-mart"
                  role="tabpanel"
                  aria-labelledby="super-mart-tab"
                >
                  <div className="contaier">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-7 col-12">
                        <p>
                          For supermarts, reliable Point of Sale (POS) software
                          is essential to efficiently manage vast product
                          ranges, extensive inventory, and high transaction
                          volumes. The system ensures optimal stock levels,
                          minimizing the risks of stockouts or overstocking.
                          With integrated features like secure payment
                          processing and customer loyalty programs, POS software
                          enhances the overall shopping experience.
                          <br /> Providing quick access to sales reports and
                          analytics, it empowers supermart owners with valuable
                          insights for informed decision-making. In summary, POS
                          software is a crucial tool for supermarts,
                          streamlining operations and contributing to customer
                          satisfaction.
                        </p>
                      </div>
                      <div className="col-md-4 col-12 d-flex justfiy-content-end">
                        <img
                          src={SuperMartPOS}
                          className="img-fluid"
                          alt="retail-shop-pos"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade show ${
                    activeTab === "restaurants" ? "active" : ""
                  }`}
                  id="restaurants"
                  role="tabpanel"
                  aria-labelledby="restaurants-tab"
                >
                  <div className="contaier">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-7 col-12">
                        <p>
                          In the dynamic environment of restaurants, Point of
                          Sale (POS) software stands as a cornerstone, providing
                          indispensable support in managing the intricacies of
                          order processing, payment transactions, and inventory
                          control. Beyond swift and accurate order execution,
                          POS systems offer valuable insights into sales trends
                          and menu performance, enabling informed
                          decision-making. Features such as table management and
                          seamlessly integrated payment processing contribute to
                          the overall operational efficiency, fostering a smooth
                          workflow between front-of-house and kitchen staff. As
                          an essential tool for modern restaurants, POS software
                          not only streamlines day-to-day operations but also
                          elevates the dining experience for customers, ensuring
                          timely service and reducing errors.
                        </p>
                      </div>
                      <div className="col-md-4 col-12 d-flex justfiy-content-end">
                        <img
                          src={RestaurantPOS}
                          className="img-fluid"
                          alt="retail-shop-pos"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade show ${
                    activeTab === "pharmacy" ? "active" : ""
                  }`}
                  id="pharmacy"
                  role="tabpanel"
                  aria-labelledby="pharmacy"
                >
                  <div className="contaier">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-7 col-12">
                        <p>
                          In the pharmaceutical realm, the role of Point of Sale
                          (POS) software is paramount. It serves as a
                          cornerstone for managing diverse product inventories,
                          prescription transactions, and customer interactions.
                          POS systems in pharmacies contribute significantly to
                          the accuracy and efficiency of prescription
                          processing, helping pharmacists keep track of
                          medication stock levels and ensuring timely restocking
                          to meet patient needs. Integrated features such as
                          barcode scanning and secure payment processing
                          streamline the checkout process, minimizing errors and
                          enhancing customer service. Additionally, POS software
                          in pharmacies often includes regulatory compliance
                          tools, ensuring adherence to healthcare standards and
                          facilitating accurate record-keeping.{" "}
                        </p>
                      </div>
                      <div className="col-md-4 col-12 d-flex justfiy-content-end">
                        <img
                          src={PharmacyPOS}
                          className="img-fluid"
                          alt="retail-shop-pos"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade show ${
                    activeTab === "fertilizers-shop" ? "active" : ""
                  }`}
                  id="fertilizers-shop"
                  role="tabpanel"
                  aria-labelledby="fertilizers-shop"
                >
                  <div className="contaier">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-7 col-12">
                        <p>
                          For fertilizer shops, Point of Sale (POS) software is
                          crucial. It efficiently manages inventory, sales
                          transactions, and customer interactions. POS systems
                          help track fertilizer stock levels, prevent
                          overstocking or stockouts, and streamline the checkout
                          process with features like barcode scanning. The
                          integration of secure payment processing enhances
                          customer service, while sales reports provide valuable
                          insights for informed decision-making. In summary, POS
                          software is essential for fertilizer shops, optimizing
                          inventory management and improving overall retail
                          efficiency.
                        </p>
                      </div>
                      <div className="col-md-4 col-12 d-flex justfiy-content-end">
                        <img
                          src={FertilizersPOS}
                          className="img-fluid"
                          alt="retail-shop-pos"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade show ${
                    activeTab === "trading-pos" ? "active" : ""
                  }`}
                  id="trading-pos"
                  role="tabpanel"
                  aria-labelledby="trading-pos"
                >
                  <div className="contaier">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-7 col-12">
                        <p>
                          In trading shops, the adoption of Point of Sale (POS)
                          software is instrumental for optimizing various
                          aspects of daily operations. This technology
                          streamlines inventory management, automates sales
                          transactions, and enhances overall efficiency in the
                          trading business. POS systems provide real-time
                          insights into stock levels, aiding traders in
                          maintaining optimal inventory levels and preventing
                          product shortages or excesses.
                          <br />
                          <br /> The integration of features such as secure
                          payment processing and sales tracking contributes to
                          accurate financial management and customer service
                          improvement. With POS software, trading shops can
                          streamline their processes, reduce errors in
                          transactions, and gain valuable insights into product
                          performance, ensuring a more organized and profitable
                          trading environment.
                        </p>
                      </div>
                      <div className="col-md-4 col-12 d-flex justfiy-content-end">
                        <img
                          src={TradingPOS}
                          className="img-fluid"
                          alt="retail-shop-pos"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade show ${
                    activeTab === "mobile-shop-pos" ? "active" : ""
                  }`}
                  id="mobile-shop-pos"
                  role="tabpanel"
                  aria-labelledby="mobile-shop-pos"
                >
                  <div className="contaier">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-7 col-12">
                        <p>
                          In mobile shops, Point of Sale (POS) software plays a
                          pivotal role in simplifying daily operations. It
                          efficiently manages inventory, automates sales
                          transactions, and enhances customer service. POS
                          systems in mobile shops provide real-time insights
                          into stock levels, preventing shortages or excesses.
                          With features like secure payment processing and sales
                          tracking, POS software contributes to accurate
                          financial management. The streamlined processes
                          enabled by POS software improve efficiency, reduce
                          errors, and ultimately enhance the overall customer
                          experience in mobile shops.
                        </p>
                      </div>
                      <div className="col-md-4 col-12 d-flex justfiy-content-end">
                        <img
                          src={MobileShopPOS}
                          className="img-fluid"
                          alt="retail-shop-pos"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade show ${
                    activeTab === "accounting-software" ? "active" : ""
                  }`}
                  id="accounting-software"
                  role="tabpanel"
                  aria-labelledby="accounting-software"
                >
                  <div className="contaier">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-7 col-12">
                        <p>
                          Elevate your business management experience with our
                          Point of Sale (POS) software, extending beyond
                          traditional functions. Seamlessly merging the roles of
                          a POS and Accounting Software, our solution transforms
                          into a comprehensive Accounts Management System.
                          Experience the convenience of handling transactions
                          and managing financial records seamlessly in one
                          unified platform. This innovative POS & Accounting
                          software not only simplifies your daily operations but
                          also acts as a Mini ERP, streamlining processes and
                          enhancing overall efficiency. Say goodbye to siloed
                          systems – embrace a holistic approach to business
                          management with our integrated solution.
                        </p>
                      </div>
                      <div className="col-md-4 col-12 d-flex justfiy-content-end">
                        <img
                          src={accountingSoftware}
                          className="img-fluid"
                          alt="retail-shop-pos"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade show ${
                    activeTab === "manufacturing-pos" ? "active" : ""
                  }`}
                  id="manufacturing-pos"
                  role="tabpanel"
                  aria-labelledby="manufacturing-pos"
                >
                  <div className="contaier">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-7 col-12">
                        <p>
                          In the dynamic landscape of the manufacturing
                          industry, our Point of Sale (POS) system emerges as a
                          game-changer, providing tailored solutions to meet
                          your specific needs. Seamlessly integrating with
                          manufacturing processes, our POS becomes a pivotal
                          tool for order management, production tracking, and
                          inventory control. Designed to enhance operational
                          efficiency, our solution serves as a Manufacturing
                          Industry POS, empowering businesses with features like
                          real-time production insights, inventory optimization,
                          and order fulfillment. Experience the synergy of
                          technology and manufacturing prowess with our
                          dedicated POS solution, engineered to elevate your
                          efficiency and profitability in the manufacturing
                          sector.
                        </p>
                      </div>
                      <div className="col-md-4 col-12 d-flex justfiy-content-end">
                        <img
                          src={manufacturingManagement}
                          className="img-fluid"
                          alt="retail-shop-pos"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade show ${
                    activeTab === "vape-shop-pos" ? "active" : ""
                  }`}
                  id="vape-shop-pos"
                  role="tabpanel"
                  aria-labelledby="vape-shop-pos"
                >
                  <div className="contaier">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-7 col-12">
                        <p>
                        CapoBiz is the perfect solution for vape shops looking to streamline their operations and enhance their customer experience. With CapoBiz's comprehensive Vape Shop POS system, managing inventory becomes effortless, allowing shop owners to keep track of a wide variety of products, including e-liquids, vape devices, and accessories. Our user-friendly interface ensures quick and efficient transactions, minimizing wait times for customers. CapoBiz also offers robust reporting tools, enabling vape shop owners to analyze sales trends, manage stock levels, and identify top-selling items. Additionally, our POS system integrates seamlessly with loyalty programs and marketing tools, helping vape shops to retain customers and boost sales. Whether you are running a single store or managing multiple locations, CapoBiz's Vape Shop POS system provides the reliability and flexibility needed to succeed in the competitive vape retail market.
                        </p>
                      </div>
                      <div className="col-md-4 col-12 d-flex justfiy-content-end">
                        <img
                          src={VapePOS}
                          className="img-fluid"
                          alt="vape-pos-software"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Tab content */}
            </div>
          </div>
        </div>
      </section>

      <section className="further py-4">
        <div className="container">
          <div className="row g-4 d-flex justify-content-center">
            <div className="col-md-5">
              <div className="card more-industries">
                <div className="content">
                  <img src={installmentManagement} alt="installment-management-software" className="img-fluid" />
                  <div className="text">
                  <p style={{fontSize: '26px'}}>Installment Management System</p>
                  <p>Beyond traditional Point of Sale (POS) functions, our software seamlessly integrates installment management capabilities. Effortlessly track and manage installment payments, providing a streamlined and user-friendly solution for businesses. Elevate your financial control with our POS, ensuring a comprehensive approach to transaction management that goes beyond the ordinary.</p>
                  </div>
                </div>
              </div>

              
            </div>
            <div className="col-md-5">
                <div className="card more-industries">
                  <div className="content">
                    <img src={realEstateSoftware} alt="real-estate-management-software" className="img-fluid" />
                    <div className="text">
                    <p style={{fontSize: '26px'}}>Real Estate Accounting System</p>
                    <p>Discover unparalleled control over your real estate ventures with our management software. Tailored for efficiency, our solution streamlines property management, tenant interactions, and financial tracking. Elevate your real estate operations with a user-friendly platform that ensures seamless management and optimization of your property portfolio. Welcome to a new era of real estate management, where precision and convenience converge for unparalleled success.</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className="row g-4 mt-2 d-flex justify-content-center">
              <div className="col-md-5">
                <div className="card more-industries">
                  <div className="content">
                    <img src={distributionSoftware} alt="distribution-software" className="img-fluid" />
                    <div className="text">
                    <p style={{fontSize: '26px'}}>Distribution Management System</p>
                    <p>Revolutionize your distribution processes with our dedicated distribution software. Seamlessly manage inventory, streamline order fulfillment, and optimize logistics with a solution tailored for efficiency. From order placement to delivery, our software ensures precision, transparency, and enhanced control over your distribution network. Experience the power of seamless operations and elevated performance with our cutting-edge distribution management software.
                    </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-5">
                <div className="card more-industries">
                  <div className="content">
                    <img src={bookingManagement} alt="booking-management-software" className="img-fluid" />
                    <div className="text">
                    <p style={{fontSize: '26px'}}>Booking Management System</p>
                    <p>Experience a new level of convenience in booking management with our specialized software. Tailored for efficiency, our solution streamlines the entire booking process, from reservation to payment tracking. With user-friendly interfaces and robust features, our booking management software ensures precision and ease, transforming your reservation operations. Embrace a seamless and organized approach to bookings, optimizing your business for success.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}

export default Industrysolutions;
