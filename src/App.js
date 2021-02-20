
import React, { Component } from 'react'
import Header from './components/Header'
import Product from './components/Product'
import Messeage from './components/Messeage'
import Listcart from './components/Listcart'
import Footer from './components/Footer'
class App extends Component {

    render() {
        return (
            <div>
                <div>
                    <Header />
                    <main id="mainContainer">
                        <div className="container">
                            <Product />
                            <Messeage />
                            <Listcart />
                        </div>
                    </main>

                    <Footer />
                </div>
            </div>
        );
    }
}
export default App;
