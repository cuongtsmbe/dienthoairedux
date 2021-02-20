import {combineReducers} from 'redux'
import {productItemt} from './ProductItemRender'
import {listCartStore} from './ListCartRender'
import {messeageRender} from './messeage'
export var Storecombin=combineReducers({
    productItemt,
    listCartStore,
    Messeage:messeageRender
});