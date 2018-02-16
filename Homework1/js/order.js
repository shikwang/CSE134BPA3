
window.onload = function(){ 
    
    loadOrder();


}



function loadOrder(){

    // var orders;
    if(localStorage.orders){
        var orders = JSON.parse(localStorage.orders);
        for (var id in orders){
            console.log(id);
            var orderID = id;
            var status = orders[id]['status'];
            // var price = myCart[id]['Price'];
            // var imgPath = myCart[id]['ImgPath'];
            
            // href="OrderDetail.html"
            var tr = document.createElement('tr');
            tr.id = id  ;
            tr.innerHTML = 
                '<td><a onclick="setOrderID(' + id  + ')" href="OrderDetail.html">' + orderID + '</a></td>' +
                '<td><a href="OwnerChat.html" >Ryan Hang</a></td>' + 
                '<td>February 16, 2018</td>' + 
                '<td>'+ status + '</td>';

            document.getElementById('orderTB').appendChild(tr);  
        
        }
    
    
    
    }
    

};

function setOrderID(id){

    localStorage.setItem("curOrder",id['id']);
    console.log(id['id']);
}

// function deleteItem(itemID){
 
//     var curID = itemID['id']
//     div = document.getElementById(curID);
//     div.parentNode.removeChild(div);


//     var cart = JSON.parse(localStorage.myCart);
//     delete cart[curID];
//     localStorage.setItem("myCart",JSON.stringify(cart));


// }



   


