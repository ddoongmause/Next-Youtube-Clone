import {Button, Header} from "semantic-ui-react";
import styles from "./Item.module.css";

export default function Item({item}){
    const{ 
        name,
        image_link,
        price,
        description,
        updated_at,
        category,
        product_type,
        product_link,
    } = item;
    return (
        <>
            <div className={styles.wrap}>
                <div className={styles.img_item}>
                    <img src={image_link} alt={name} />
                </div>
                <div className={styles.info_item}>
                    <strong className={styles.tit_item}>{name}</strong>
                    <strong className={styles.num_price}>${price}</strong>
                    <span className={styles.txt_info}>
                        {category ? `${category}/` : ""}
                        {product_type}
                    </span>
                    <Button color='orange'>구매하기</Button>
                </div>
            </div>
            <Header as='h3'>Description</Header>
            <p style={{paddingBottom: 20, fontSize: 18}}>{description}</p>
        </>
    );
};


// {id: 488, brand: "maybelline", name: "Maybelline Fit Me Bronzer", price: "10.29", price_sign: null, …}
// api_featured_image: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/488/original/open-uri20171223-4-deo82c?1514063329"
// brand: "maybelline"
// category: null
// created_at: "2016-10-01T18:36:05.584Z"
// currency: null
// description: "Why You'll Love It↵↵Lightweight pigments blend easily and wear evenly↵Provides a natural, fade-proof bronzed color that leaves skin the way it was meant to be...fresh, breathing and natural↵↵For Best Results: For soft, natural look, brush along cheekbone, sweeping upward."
// id: 488
// image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/d4f7d82b4858c622bb3c1cef07b9d850_ra,w158,h184_pa,w158,h184.png"
// name: "Maybelline Fit Me Bronzer"
// price: "10.29"
// price_sign: null
// product_api_url: "http://makeup-api.herokuapp.com/api/v1/products/488.json"
// product_colors: [{…}]
// product_link: "https://well.ca/products/maybelline-fit-me-bronzer_31265.html"
// product_type: "bronzer"
// rating: 4.5
// tag_list: []
// updated_at: "2017-12-23T21:08:49.985Z"
// website_link: "https://well.ca"
// __proto__: Object