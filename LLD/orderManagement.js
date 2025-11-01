// Classes - > User, Product, Cart, CartItem, Order, Payment

class Product{
    constructor(id, name, price, stock){
        this.id = id
        this.name = name
        this.price = price
        this.stock = stock
    }
    isAvailable(quantity){
        return this.stock>=quantity
    }
    reduceStock(quantity) {
        if (this.isAvailable(quantity)) {
            this.stock -= quantity;
        } else {
            throw new Error('Insufficient stock');
        }
    }

}
class CartItem{
    constructor(product, quantity){
        this.product = product
        this.quantity = quantity
    }

}
class Cart{
    constructor(){
        this.cartItems = []
        this.totalValue = 0
    }
    addItem(product, quantity){
        const itemIndex = this.cartItems.findIndex(p => product.id === p.id)
        if(itemIndex!==-1){
            this.cartItems[itemIndex].quantity += quantity
        }else{
            this.cartItems.push(new CartItem(product, quantity));
        }
        
    }
    removeItem(product, ){
        this.cartItems = this.cartItems.filter(p => product.id !== p.id)
    }
    getCartValue(){
        return this.cartItems.reduce((acc, cur) =>  acc + (cur.product.price * cur.quantity), 0)
    }
}
class Order{
    constructor(user , cart){
        this.status = "Pending"
        this.items = [...cart.items]
        this.totalValue = cart.getCartValue()
        this.user = user
        this.orderDate = new Date()
    }
    placeOrder(){
        this.Status = "Placed"
    }
    cancelOrder(){

    }
}
class User{
    constructor(id, name){
        this.id = id
        this.name = name
        this.orders = [];
        this.cart = new Cart()
    }
    addProductToCart(product, quantity){
        try{
            if(product instanceof Product  && product.isAvailable(quantity)){
                this.cart.addItem(product, quantity)
            }else{
                throw new Error('Product out of stock');
            }
        }catch(error){
            console.log('Add production to car error: ', error)
        }   
        
    }
    placeOrder(){
        try{
            let newOrder =  new Order(this, this.cart);
            newOrder.placeOrder()

        }catch(err){

        }
    }

}
class Payment{
    constructor(order, amount, paymentMethod){
        
    }
}

const person =  new User("1", "Jatin");

console.log(person)
