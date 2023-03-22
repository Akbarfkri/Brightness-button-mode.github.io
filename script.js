const range = document.getElementById('range');
let materials =  document.getElementById('material');
let body = document.querySelector('body');


range.addEventListener('input', function () {




if (range.value <= 17) {
    body.style.background = '#999999';
    
}
    else if (range.value <= 35) {
    body.style.background = '#bcbcbc';
    }
    else if (range.value <= 50) {
        body.style.background = '#eeeeee';
        }
    else if (range.value <= 75) {
        body.style.background = '#f3f6f4';
        }
        else if (range.value <= 100) {
            body.style.background = '#ffffff';
            }


if (range.value >= 50) {
    materials.innerHTML = 'light_mode';
    materials.style.rotate = '360deg';
   
} else {
   
    materials.innerHTML = 'brightness_2';
    materials.style.rotate = '360deg';
}



        });



        