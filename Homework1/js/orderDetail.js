
window.onload = function(){ 
    

    var curOrder = localStorage.curOrder;
    var orderID = document.getElementById('orderID');
    orderID.innerHTML = 'Order ID: #' + curOrder;
    loadOrderDetail(curOrder);


}



function loadOrderDetail(orderID){

    // var orders;
    if(localStorage.orders){
        var orders = JSON.parse(localStorage.orders);
        // console.log(orders);
        var curOrder = orders[orderID]['orderDetail'];
        // console.log(curOrder);
        for (var id in curOrder){

            var name = curOrder[id]['Name'];
            var price = curOrder[id]['Price'];
            var imgPath = curOrder[id]['ImgPath'];
            var quantity = curOrder[id]['Quantity'];
            
    
            var tr = document.createElement('tr');
            tr.id = id  ;
            tr.innerHTML =  '<td style="width:400px"><img src="./images/' + imgPath+ '" alt="Benedict" style="width:250px;height:200px"></td>' 
                        + '<td>' + name + '</td>'
                        + '<td>$'+ price +'</td>'
                        + '<td>' + quantity + '</td>';
            
            document.getElementById('orderDetailTB').appendChild(tr);  
        }


    }
    

};

function accept(){

    var curOrder = localStorage.curOrder;
    var orders = JSON.parse(localStorage.orders);
    orders[curOrder]['status'] = "accepted";
    localStorage.setItem('orders',JSON.stringify(orders));
    location.href = 'OrderOwner.html';
    


    
    
}

function decline(){
    var curOrder = localStorage.curOrder;
    var orders = JSON.parse(localStorage.orders);
    orders[curOrder]['status'] = "declined";
    localStorage.setItem('orders',JSON.stringify(orders));
    location.href = 'OrderOwner.html';
}





   


