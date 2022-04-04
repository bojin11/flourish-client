import React from "react";
import { Map, RateProduct, Spinner } from "../../components";
import { Header, NavBar } from "../../layout";

import "./style.css";

const ProductPage = () => {
    const loading = false;

    return (
        <>
        <Header />
        {loading ? <Spinner /> : 
        <main className="productpage">
            <section>
                <div id="productImage" style={{backgroundImage: `url('http://placehold.jp/396x396.png')`}}></div>
                <div id="productInfo">
                    <div className="flex-row space-between margin-b">
                        <RateProduct />
                        <div id="productLister">Posted by: Bojin (5)⭐</div>
                    </div>
                    <div className="flex-row">
                        <h2>Tomatoes</h2>
                        <div className="productCategory">Veg</div>
                    </div>
                    <span id="productDistance">1 mile away</span>
                </div>
                <Map />
            </section>
        </main>
        }
        <NavBar />
        </>
    );
};

export default ProductPage;
