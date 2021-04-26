import React from 'react';
import './ProductDesc.css';
const ProductDescription =()=>{
    let customer = [
        {
            image: "https://bootstrapmade.com/demo/templates/BizLand/assets/img/testimonials/testimonials-4.jpg",
            name: "Shristi Katiyar",
            date: "September 14, 2018",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laborum expedita quos, corrupti libero aliquam omnis, delectus, assumenda velit officiis sunt molestias ipsa nobis recusandae. Accusamus, commodi. Esse aspernatur perferendis at omnis ab quas labore id tempore ipsam possimus, ut non quisquam aut enim porro officiis placeat voluptatum, ratione blanditiis."
        },
        {
            image: "https://bootstrapmade.com/demo/templates/BizLand/assets/img/testimonials/testimonials-5.jpg",
            name: "Bhosdi Wala",
            date: "August 14, 2018",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laborum expedita quos, corrupti libero aliquam omnis, delectus, assumenda velit officiis sunt molestias ipsa nobis recusandae. Accusamus, commodi. Esse aspernatur perferendis at omnis ab quas labore id tempore ipsam possimus, ut non quisquam aut enim porro officiis placeat voluptatum, ratione blanditiis."

        },
        {
            image: "https://bootstrapmade.com/demo/templates/BizLand/assets/img/testimonials/testimonials-5.jpg",
            name: "Bhosdi Waliii",
            date: "August 14, 2018",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laborum expedita quos, corrupti libero aliquam omnis, delectus, assumenda velit officiis sunt molestias ipsa nobis recusandae. Accusamus, commodi. Esse aspernatur perferendis at omnis ab quas labore id tempore ipsam possimus, ut non quisquam aut enim porro officiis placeat voluptatum, ratione blanditiis."

        },

    ]

    return(
        <div className="descContainer">
            <div className="product">
                <div className="preview"></div>
                <div className="description">
                    <h1>Product Title</h1>
                    <p>5 Reviews</p>
                    <div className="priceSec">
                        <p><strong>$ 1234</strong> </p>
                        <select name="" id="">
                            <option value="Model1">Model1</option>
                            <option value="Model1">Model2</option>
                            <option value="Model1">Model3</option>
                            <option value="Model1">Model4</option>
                        </select>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae commodi consequatur nisi, doloribus atque maiores voluptas enim numquam harum excepturi.</p>
                    <ul>
                        <li>Lorem ipsum dolor,adipisicing elit. Enim, voluptatibus!</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sed aut exercitationem.</li>
                        <li>Lorem, ipsum dolor.</li>
                    </ul>
                    <button>Add to Cart</button>
                </div>
            </div>
            <div className="reviewContainer">
                <h1>Reviews</h1>
                <div>
                    {customer.map(item =>   <div className="review">
                        <div className="customer">
                            <img src= {item.image} alt=""/>
                            <div className = "details"><h3>{item.name}</h3><p>{item.date}</p></div>
                        </div>
                        <div>{item.review}</div>
                    </div>)}
                  
                </div>
            </div>
        </div>
    );
}

export default ProductDescription;