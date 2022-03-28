import ShopItemFunc from "./components/ShopItem/ ShopItemFunc/ShopItemFunc";
import ShopItemClass from "./components/ShopItem/ ShopItemClass/ShopItemClass";
import Portfolio from "./components/Portfolio/Portfolio";
import Store from "./components/Store/Store";
import Stars from "./components/Stars/Stars";
import Listing from "./components/Listing/Listing";
import MessageHistory from "./components/ChatHistory/MessageHistory";
import {shopItem} from "./components/ShopItem/shopItem";
import {products} from "./components/Store/products";
import {data} from "./components/Listing/data";
import {messages} from "./components/ChatHistory/messages";
import ColorConverter from "./components/ColorConverter/ColorConverter";
import WorkoutsTracker from "./components/WorkoutsTrack/WorkoutsTracker";
import Cards from "./components/Cards/Cards";
import {Decomposition} from "./components/Decomposition/Decomposition";

function App() {
    return (
        <div>
            /** PREV HOMEWORKS. */
            {/*<ShopItemFunc item={shopItem}/>*/}
            {/*<ShopItemClass item={shopItem}/>*/}
            {/*<Portfolio/>*/}
            {/*<Store products={products}/>*/}
            {/*<Stars count={1}/>*/}
            {/*<Listing items={data}/>*/}
            {/*<MessageHistory list={messages}/>*/}
            {/*<ColorConverter/>*/}
            {/*<WorkoutsTracker />*/}

            /** HOMEWORK 5. */
            <Cards/>
            <Decomposition/>
        </div>
    );
}

export default App;
