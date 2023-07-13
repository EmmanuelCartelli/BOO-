let numberOfCase = 24*35;

function displayBlocks(){
  let template = document.querySelector("template");
  let clone = document.importNode(template.content,   true);
  document.querySelector("body>div").appendChild(clone);
}

function main(){
  for(i = 0; i < numberOfCase; i++){
   displayBlocks();
  }
  let first = document.querySelectorAll(".element");
  console.log(first);
  addClass();
  colorizedInBlack();
  window.addEventListener("resize", function(){
    colorizedInBlack();
  })
}

main();


function addClass(){
    let first = document.querySelectorAll(".element");
    let columns = 1;
    let rows = 1;
    first.forEach(element =>{
        element.classList.add(`${rows}` + `${columns}`);
        columns++;
        if(columns > 35){
            columns = 1;
            rows ++;
        }
        if(rows > 24){
            rows = 1;
        }
    })
}

function colorizedInBlack(){
    let allElements = document.querySelectorAll(".element");
    let arrayBlack = [516, 517, 518, 519, 520, 521, 614, 615, 622, 623, 713, 724, 812, 912, 1011, 1111, 1211, 1310, 1410, 1510, 1611, 1712, 1713, 1714, 1815, 1816, 1817, 1917, 1918, 1919, 1920, 1821, 1822, 1823, 1724, 1625, 1525, 1426, 1326, 1226, 1126, 1026, 925, 825, 724, 623, 622, 1314, 1213, 1113, 1014, 1015, 1116, 921, 1021, 923, 1023];
    let arrayGrey = [714, 715, 813, 913, 1012, 1112, 1212, 1311, 1411, 1511, 1512, 1612, 1613, 1614, 1615, 1715, 1716, 1717, 1817, 1818, 1819, 1820];
    let arrayRed = [1220, 1222, 1224, 1320, 1321, 1322, 1323, 1324, 1420, 1421, 1422, 1423, 1424, 1519, 1520 ,1521, 1522, 1523, 1619, 1621, 1623];

    for(j of allElements){
        if(arrayBlack.includes(parseInt(j.classList[1]))){
            j.setAttribute("style", "background-color: black");
        }
        if(arrayGrey.includes(parseInt(j.classList[1]))){
            j.setAttribute("style", "background-color: lightgrey");
        }
        if(arrayRed.includes(parseInt(j.classList[1]))){
            j.setAttribute("style", "background-color: red");
        }
    }
}