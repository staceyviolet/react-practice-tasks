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
import {WorldClock} from "./components/WorldClock/WorldClock";
import {Notes} from "./components/CRUD/Notes";
import DateFormat from "./components/DateFormat/DateFormat";
import Highlight from "./components/Highlight/Highlight";
import {UsersList} from "./components/UsersList/UsersList";


function App() {
    return (
        <div>
            {/*PREV HOMEWORKS.*/}
            {/*<ShopItemFunc item={shopItem}/>*/}
            {/*<ShopItemClass item={shopItem}/>*/}
            {/*<Portfolio/>*/}
            {/*<Store products={products}/>*/}
            {/*<Stars count={1}/>*/}
            {/*<Listing items={data}/>*/}
            {/*<MessageHistory list={messages}/>*/}
            {/*<ColorConverter/>*/}
            {/*<WorkoutsTracker />*/}
            {/*<Cards/>*/}
            {/*<Decomposition/>*/}

            {/*HOMEWORK 6*/}
            {/*<WorldClock/>*/}
            {/*<Notes />*/}

            {/*HOMEWORK 7*/}
            {/*<DateFormat/>*/}
            {/*<Highlight/>*/}

            {/*HOMEWORK 8*/}
            <UsersList/>
        </div>
    );
}

export default App;
