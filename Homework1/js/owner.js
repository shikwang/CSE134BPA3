
window.onload = function(){ 

    
    var modal = document.getElementById('myModal');
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    document.getElementById("myBtn").onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


    loadMenu();


    var idCount;
    if(localStorage.idCounter){
        idCount = localStorage.idCounter;
    }
    else{
        idCount = 0;
    }

    var addMenuOK = document.getElementById("addMenuOK");
    var x = document.getElementById("addMenuForm");
    addMenuOK.onclick = function(){
        // var txt = "";
        // var i;
        // for (i = 0; i < x.length; i++) {
        //     txt = txt + x.elements[i].value;
        // }
        console.log(idCount);
        
        var name = x.elements[0].value;
        var price = x.elements[1].value;
        var imgPath = x.elements[2].value;

        var div = document.createElement('div');
        var curID = 'menu' + idCount;
        div.id = curID  ;

        div.className = 'floating-box';
        div.innerHTML = '<img src="./images/'+ imgPath + '" alt="IMAGE" style="width:200px;height:160px;margin-top:25px">' +
                        '<h2>' + name + '</h2>' +
                        // '<h3> Toasted muffin with smoked bacon and two poached eggs topped with hollandaise sauce and Sriracha </h3>'+
                        '<h4>$' + price + '</h4>'+
                        // '<button onclick="deleteMenu()"> Delete </button>';
                        '<button onclick="deleteMenu(' + curID.toString() + ')"> Delete </button>';
        document.body.appendChild(div);  
        idCount ++;
        modal.style.display = "none";

        localStorage.setItem("idCounter", idCount);
        // localStorage.removeItem('menuList');
        if(localStorage.menuList){
            var menuList = JSON.parse(localStorage.menuList);
            menuList[curID] = {Name:name,Price:price,ImgPath:imgPath};
            localStorage.setItem("menuList",JSON.stringify(menuList));
            console.log(JSON.parse(localStorage.menuList));
        }
        else{ 
            var curMenu = {};
            curMenu[curID] = {Name:name,Price:price,ImgPath:imgPath};
            localStorage.setItem("menuList",JSON.stringify(curMenu));
        }
    }


}

// var idCount = 0;

// function addMenu(){
//     var div = document.createElement('div');
//     var curID = 'menu' + idCount;
//     div.id = curID  ;
//     // console.log(curID);
//     div.className = 'floating-box';
//     div.innerHTML = '<img src="./images/Benedict.png" alt="Benedict" style="width:200px;height:160px">' +
//                     '<h2> Golden State Benedict  </h2>' +
//                     '<h3> Toasted muffin with smoked bacon and two poached eggs topped with hollandaise sauce and Sriracha </h3>'+
//                     '<h4> $20 </h4>'+
//                     // '<button onclick="deleteMenu()"> Delete </button>';
//                     '<button onclick="deleteMenu(' + curID.toString() + ')"> Delete </button>';
//     document.body.appendChild(div);  
//     idCount ++;
//     // <button id='ADD' onclick="addMenu()"> Add Menu </button>
// }

function loadMenu() {
    if (localStorage.menuList) {
        var menuList = JSON.parse(localStorage.menuList);
        for (var id in menuList) {
            var curID = id
            var name = menuList[id]['Name'];
            var price = menuList[id]['Price'];
            var imgPath = menuList[id]['ImgPath'];

            var div = document.createElement('div');
            // var curID = 'menu' + idCount;
            div.id = curID;

            div.className = 'floating-box';
            div.innerHTML = '<img src="./images/' + imgPath + '" alt="IMAGE" style="width:200px;height:160px;margin-top:25px">' +
                '<h2>' + name + '</h2>' +
                // '<h3> Toasted muffin with smoked bacon and two poached eggs topped with hollandaise sauce and Sriracha </h3>'+
                '<h4>$' + price + '</h4>' +
                // '<button onclick="deleteMenu()"> Delete </button>';
                '<button onclick="deleteMenu(' + curID.toString() + ')"> Delete </button>';
            document.body.appendChild(div);
            // idCount ++;
            // modal.style.display = "none";
        }
    }
};

function deleteMenu( menuID ){
    // console.log(menuID);
    // var menuList = JSON.parse(localStorage.menuList);


    var keyVal = menuID['id'];
    var menuList = JSON.parse(localStorage.menuList);
    delete menuList[keyVal];
    localStorage.setItem("menuList",JSON.stringify(menuList));
    // loadMenu();
    
    var curID = menuID['id']
    div = document.getElementById(curID);
    div.parentNode.removeChild(div);
    // loadMenu();

}


   


