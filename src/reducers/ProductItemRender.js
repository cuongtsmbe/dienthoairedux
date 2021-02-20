 import {productItemName} from './../constant/ConstantsName'
var Item=[{
    id:321.15,
    link:'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
    name:'Iphone 6a Plus',
    rating:3,
    content:'Sản phẩm do apply sản xuất',
    price:10
},
{
    id:355.132,
    link:'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
    name:'Iphone 6r Plus',
    rating:5,
    content:'Sản phẩm do apply sản xuất',
    price:17
},
{
    id:32156.1,
    link:'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
    name:'Iphone 6t Plus',
    rating:1,
    content:'Sản phẩm do apply sản xuất',
    price:15
},
{
    id:3213.321,
    link:'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
    name:'Iphone 6 Plus',
    rating:4,
    content:'Sản phẩm do apply sản xuất',
    price:50
}];
var Tasks=(localStorage.getItem('ProductItem')) ? JSON.parse(localStorage.getItem('ProductItem')) : Item;
export var productItemt=(state=Tasks,action)=>{
    switch(action.type){
        case productItemName:
             console.log("action add productItem");
             localStorage.setItem('ProductItem',JSON.stringify(state));
            return state;
        default : 
        localStorage.setItem('ProductItem',JSON.stringify(state));
        return state; 
    }
};