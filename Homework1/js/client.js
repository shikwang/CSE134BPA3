
window.onload = function(){ 

    loadMenu();

}



function loadMenu(){
    
    var menuList = JSON.parse(localStorage.menuList);
    
    for (var id in menuList){
        var curID = id
        var name = menuList[id]['Name'];
        var price = menuList[id]['Price'];
        var imgPath = menuList[id]['ImgPath'];

        var div = document.createElement('div');
        // var curID = 'menu' + idCount;
        div.id = curID  ;

        div.className = 'floating-box';
        div.innerHTML = '<img src="./images/'+ imgPath + '" alt="IMAGE" style="width:200px;height:160px;margin-top:25px">' +
                        '<h2>' + name + '</h2>' +
                        // '<h3> Toasted muffin with smoked bacon and two poached eggs topped with hollandaise sauce and Sriracha </h3>'+
                        '<h4>$' + price + '</h4>'+
                        // '<button onclick="deleteMenu()"> Delete </button>';
                        '<button onclick="addToCart(' + curID.toString() + ')"> Add to Cart </button>';
        document.body.appendChild(div);  
        // idCount ++;
        // modal.style.display = "none";
    }
};

function addToCart( menuID ){
    // console.log(menuID);
    
    
    var curID = menuID['id'];
    var curItem = JSON.parse(localStorage.menuList)[curID];


    if(localStorage.myCart){
        var myCart = JSON.parse(localStorage.myCart);
        myCart[curID] = {Name:curItem['Name'],Price:curItem['Price'],ImgPath:curItem['ImgPath'],Quantity:1};
        localStorage.setItem("myCart",JSON.stringify(myCart));
        // console.log(JSON.parse(localStorage.menuList));
    }
    else{ 
        var myCart = {};
        myCart[curID] = {Name:curItem['Name'],Price:curItem['Price'],ImgPath:curItem['ImgPath'],Quantity:1};
        localStorage.setItem("myCart",JSON.stringify(myCart));
    }

    alert('Item Added');



}



   


