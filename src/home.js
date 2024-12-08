import './App.css'
function Home(props){
    return (
        <>
       
        <div class="parent">
                
            <div id="image">
               <img src={props.src}></img>
            </div>
            <div id="details">
            <h2>{props.name}</h2>
            <ul>
                <li>Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C</li>
 
                <li>Bank Offer₹1000 off on Flipkart UPIT&C</li>
                <li>Bank Offer₹1000 off on Flipkart UPIT&C</li>
                <li>Bank Offer₹1000 off on Flipkart UPIT&C</li>
                <li>Special PriceGet extra ₹10901 off (price inclusive of cashback/coupon)T&C</li>

            </ul>
            </div>
            <div id="prices">
             <img src={props.priceimg} width="25%"></img>
             <h3>{props.price}</h3>
             <h4>{props.offer}</h4>
             <h5>{props.dis}</h5>
            </div>
        </div>
        
        </>
    );
}
export default Home;