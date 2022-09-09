const percentage = document.querySelector('.counter');
const loadingColor = document.querySelector('.loading-front');



// update loading
let loadingNum = 0;

function updateLoading(){
    

    percentage.innerText = loadingNum + "%";
    loadingColor.style.width = loadingNum + "%";
    
    loadingNum++
    
    if (loadingNum < 101) {
        setTimeout(updateLoading, 20);
    }
}

updateLoading();

