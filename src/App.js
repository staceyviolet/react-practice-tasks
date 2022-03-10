import ShopItemFunc from "./components/ ShopItemFunc/ShopItemFunc";
import ShopItemClass from "./components/ ShopItemClass/ShopItemClass";
import './App.css';
import Portfolio from "./components/Portfolio/Portfolio";
import Store from "./components/Store/Store";
import {products} from "./components/Store/products";

function App() {
    const item = {
        brand: 'Tiger of Sweden',
        title: 'Leonard coat',
        description: 'Minimalistic coat in cotton-blend',
        descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
        price: 399,
        currency: '£'
    }

    return (
        <div>
            {/*<ShopItemFunc item={item}/>*/}
            {/*<ShopItemClass item={item}/>*/}
            <Portfolio />
            <Store products={products} />
        </div>
    );
}

export default App;
