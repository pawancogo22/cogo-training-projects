var bgn = document.getElementById("bgn");
var hmb = document.getElementById("hmb");

var flag = true;
console.log('test1');
function toggle(){
    if(flag == true){
        bgn.classList.add('hide');
        flag= false;
    }
    else{
        bgn.classList.remove('hide');
        flag= true;
    }
}

hmb.addEventListener('click', toggle);