import axios from "axios";
import dayjs from "dayjs";
import { useState, useEffect, Fragment } from "react";
import Header from "../components/Header";
import { formatMoney } from "../utils/money";
import "./OrdersPage.css";
function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("/api/orders?expand=products").then((response) => {
      setOrders(response.data);
    });
  }, []);

  return (
    <>
      <title>Orders</title>
      <Header cart={cart} />

      <div class="header">
        <div class="left-section">
          <a href="/" class="header-link">
            <img class="logo" src="images/logo-white.png" />
            <img class="mobile-logo" src="images/mobile-logo-white.png" />
          </a>
        </div>

        <div class="middle-section">
          <input class="search-bar" type="text" placeholder="Search" />

          <button class="search-button">
            <img class="search-icon" src="images/icons/search-icon.png" />
          </button>
        </div>

        <div class="right-section">
          <a class="orders-link header-link" href="/orders">
            <span class="orders-text">Orders</span>
          </a>

          <a class="cart-link header-link" href="/checkout">
            <img class="cart-icon" src="images/icons/cart-icon.png" />
            <div class="cart-quantity">3</div>
            <div class="cart-text">Cart</div>
          </a>
        </div>
      </div>

      <div class="orders-page">
        <div class="page-title">Your Orders</div>

        <div class="orders-grid">
          {orders.map((order) => {
            return (
              <div key={order.id} class="order-container">
                <div class="order-header">
                  <div class="order-header-left-section">
                    <div class="order-date">
                      <div class="order-header-label">Order Placed:</div>
                      <div>{dayjs(order.orderTimeMs).format("MMMM,D")}</div>
                    </div>
                    <div class="order-total">
                      <div class="order-header-label">Total:</div>
                      <div>{formatMoney(order.totalCostCents)}</div>
                    </div>
                  </div>

                  <div class="order-header-right-section">
                    <div class="order-header-label">Order ID:</div>
                    <div>{order.id}</div>
                  </div>
                </div>

                <div class="order-details-grid">
                  {order.products.map((orderProduct) => {
                    return (
                      <Fragment key={orderProduct.product.id}>
                        <div class="product-image-container">
                          <img src={orderProduct.product.image} />
                        </div>

                        <div class="product-details">
                          <div class="product-name">
                            {orderProduct.product.name}
                          </div>
                          <div class="product-delivery-date">
                            Arriving on:{" "}
                            {dayjs(orderProduct.estimatedDeliveryTimeMs).format(
                              "MMMM, D"
                            )}
                          </div>
                          <div class="product-quantity">
                            Quantity: {orderProduct.quantity}
                          </div>
                          <button class="buy-again-button button-primary">
                            <img
                              class="buy-again-icon"
                              src="images/icons/buy-again.png"
                            />
                            <span class="buy-again-message">Add to Cart</span>
                          </button>
                        </div>

                        <div class="product-actions">
                          <a href="/tracking">
                            <button class="track-package-button button-secondary">
                              Track package
                            </button>
                          </a>
                        </div>
                      </Fragment>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default OrdersPage;
