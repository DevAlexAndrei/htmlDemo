

  let ab = document.querySelector("#Add");
  ab.addEventListener("click", addRow);

  var emailH = document.getElementById("Email"); //this is null on non-reg page
  emailH.addEventListener("focusout", check);

  //table is hardcode cuz only one table
var itemArr = [];
var qty=0;
function addRow() {
  let itemHandle = document.querySelector("#Item");
  let qtyHandle = document.querySelector("#Qty");
  let storeHand = document.querySelector("#store");
  let listItem = itemHandle.value;
  let listQty = qtyHandle.value;


  let table = document.getElementById("table");
  let row = table.insertRow(1);
  let checkCell = row.insertCell(0);
  let  itemCell = row.insertCell(1);
  let storeCell = row.insertCell(2);
  let qtyCell = row.insertCell(3);

  checkCell.innerHTML =  '<input type="checkbox" name="didBuy" onclick="alert();">'
  itemCell.innerHTML = listItem;
  storeCell.innerHTML = storeHand.value;
  qtyCell.innerHTML = listQty;


  }

  for (i=1; i<10; i++) {
    //count to 9
    console.log(i);
  }

  //logic for bought list
  function check()  {



    let re = "(?:[a-z0-9!#$%&'*+/=?^_\`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|\\x22(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\\x22)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])";

    if (!re.test(emailH.value))  {
      emailH.style.borderColor = "red";
    }


  }

  /*
  function myDeleteFunction() {
    document.getElementById("table").deleteRow(0);
  }
*/
