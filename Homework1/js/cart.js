
window.onload = function(){ 
    
    loadMyCart();

}



function loadMyCart(){

    var myCart = JSON.parse(localStorage.myCart);
    for (var id in myCart){

        var name = myCart[id]['Name'];
        var price = myCart[id]['Price'];
        var imgPath = myCart[id]['ImgPath'];
        

        var tr = document.createElement('tr');
        tr.id = id  ;
        tr.innerHTML =  '<td style="width:400px"><img src="./images/' + imgPath+ '" alt="Benedict" style="width:250px;height:200px"></td>' 
                    + '<td>' + name + '</td>'
                    + '<td>$'+ price +'</td>'
                    + '<td><input id = "num'+ id + '" type="number" min="1" max="100" value="1"></td>'
                    + '<td><button onclick="deleteItem(' + id.toString() + ')"> Delete </button></td>'
        document.getElementById('cartTB').appendChild(tr);  
    }

};

function deleteItem(itemID){
 
    var curID = itemID['id']
    div = document.getElementById(curID);
    div.parentNode.removeChild(div);


    var cart = JSON.parse(localStorage.myCart);
    delete cart[curID];
    localStorage.setItem("myCart",JSON.stringify(cart));

}

function checkOut(){
    // localStorage.clear('myCart');
    // console.log(document.getElementById('num').value);

    var myCart = JSON.parse(localStorage.myCart);
    for (var id in myCart){
        var quantID = 'num'+id;
        myCart[id]['Quantity'] = document.getElementById(quantID).value;
        
    }
    localStorage.setItem('myCart',JSON.stringify(myCart));
    location.href='checkOut.html';
}



   


