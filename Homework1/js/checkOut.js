
window.onload = function(){ 
    
    // loadMyCart();
    console.log("~~~~~~~~~~");
}

function sendOrder(){

    var order = JSON.parse(localStorage.myCart);
    
    var idOrder;
    if(localStorage.idOrder){
        idOrder = localStorage.idOrder;
    }
    else{
        idOrder = 0;
    }
    var curID = "Order" + idOrder;

    // localStorage.removeItem("orders");
    if(localStorage.orders){
        var orders = JSON.parse(localStorage.orders);
        orders[curID] = {orderDetail:order, status:"pending"};
        localStorage.setItem("orders",JSON.stringify(orders));
        // console.log(JSON.parse(localStorage.menuList));
    }
    else{ 
        var orders = {};
        orders[curID] = {orderDetail:order, status:"pending"};
        localStorage.setItem("orders",JSON.stringify(orders));
    }
    idOrder++;
    localStorage.setItem("idOrder",idOrder);



    // console.log(JSON.parse(localStorage.orders));


}



// function loadMyCart(){

//     var myCart = JSON.parse(localStorage.myCart);
//     for (var id in myCart){

//         var name = myCart[id]['Name'];
//         var price = myCart[id]['Price'];
//         var imgPath = myCart[id]['ImgPath'];
        

//         var tr = document.createElement('tr');
//         tr.id = id  ;
//         tr.innerHTML =  '<td style="width:400px"><img src="./images/' + imgPath+ '" alt="Benedict" style="width:250px;height:200px"></td>' 
//                     + '<td>' + name + '</td>'
//                     + '<td>$'+ price +'</td>'
//                     + '<td><input type="number" min="1" max="100" value="1"></td>'
//                     + '<td><button onclick="deleteItem(' + id.toString() + ')"> Delete </button></td>'
//         document.getElementById('cartTB').appendChild(tr);  
//     }

// };

// function deleteItem(itemID){
 
//     var curID = itemID['id']
//     div = document.getElementById(curID);
//     div.parentNode.removeChild(div);


//     var cart = JSON.parse(localStorage.myCart);
//     delete cart[curID];
//     localStorage.setItem("myCart",JSON.stringify(cart));


// }



   


