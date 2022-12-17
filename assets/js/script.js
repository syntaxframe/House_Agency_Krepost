
const btnNext = document.getElementsByClassName("btnNext");
const btnPrev = document.getElementsByClassName("btnPrev");

console.log(btnNext);

for (let i = 0; i < btnNext.length; i++) {
    btnNext[i].addEventListener('click', function() {
        var sliderContent = event.target.parentNode.firstElementChild;
        if (parseInt(sliderContent.style.left, 10) == -1125) {
            sliderContent.style.left = parseInt(sliderContent.style.left, 10) - 1075 + "px";

        } else if (parseInt(sliderContent.style.left, 10) == -2200) {
            sliderContent.style.left = "0px"
            
        } else {
            sliderContent.style.left = parseInt(sliderContent.style.left, 10) - 1125 + "px";
        }
    });
}
for (let i = 0; i < btnPrev.length; i++) {
    btnPrev[i].addEventListener('click', function() {
        var sliderContent = event.target.parentNode.firstElementChild;

        if (parseInt(sliderContent.style.left, 10) == -2200) {
            sliderContent.style.left = parseInt(sliderContent.style.left, 10) + 1075 + "px";

        } else if (sliderContent.style.left == "0px") {
            sliderContent.style.left = "-2200px";
            
        } else {
            sliderContent.style.left = parseInt(sliderContent.style.left, 10) + 1125 + "px";
        }
    });
}
    

const addToFavouritesBtns =document.getElementsByClassName("add-to-favourites_btn")
console.log(addToFavouritesBtns);

for (let i = 0; i < addToFavouritesBtns.length; i++) {
    addToFavouritesBtns[i].addEventListener('click', function() {
        const addToFavBtn = addToFavouritesBtns[i]
        if(addToFavBtn.className=="add-to-favourites_btn")
        {
            addToFavBtn.className = "add-to-favourites_btn clicked"
        }
        else
        {
            addToFavBtn.className = "add-to-favourites_btn"
        }
    });
}




const changeCategoryBtns =document.getElementsByClassName("category_change_btn")


const oneRoomCategory = document.body.querySelector('#one-room')
const twoRoomCategory = document.body.querySelector('#two-room')
const threeRoomCategory = document.body.querySelector('#three-room')
const fourRoomCategory = document.body.querySelector('#four-room')
const fiveRoomCategory = document.body.querySelector('#five-room')
// console.log(changeCategoryBtns);
// console.log(oneRoomCategory);
// console.log(twoRoomCategory);
// console.log(threeRoomCategory);
// console.log(fourRoomCategory);
// console.log(fiveRoomCategory);





let currentCategory = threeRoomCategory

for (let i = 0; i < changeCategoryBtns.length; i++) {
    changeCategoryBtns[i].addEventListener('click', function() {
        if(changeCategoryBtns[i].id == "one-room-btn")
        {
            currentCategory.style.display = 'none'
            currentCategory = oneRoomCategory
            currentCategory.style.display = 'block'
            let currentCategoryErrorTextField = currentCategory.querySelector('.nothing-in-this-category_text')
            let currentCategoryProducts = currentCategory.querySelector('.catalog_items_container')
            console.log(currentCategory)
            console.log(currentCategoryProducts)
            console.log(currentCategoryErrorTextField)
            if(currentCategoryProducts.childElementCount == 0)
            {
                currentCategoryErrorTextField.style.display = 'block'
            }
            
        }
        if(changeCategoryBtns[i].id == "two-room-btn")
        {
            currentCategory.style.display = 'none'
            currentCategory = twoRoomCategory
            currentCategory.style.display = 'block'
            let currentCategoryErrorTextField = currentCategory.querySelector('.nothing-in-this-category_text')
            let currentCategoryProducts = currentCategory.querySelector('.catalog_items_container')
            console.log(currentCategory)
            console.log(currentCategoryProducts)
            console.log(currentCategoryErrorTextField)
            if(currentCategoryProducts.childElementCount == 0)
            {
                currentCategoryErrorTextField.style.display = 'block'
            }
            
        }
        if(changeCategoryBtns[i].id == "three-room-btn")
        {
            currentCategory.style.display = 'none'
            currentCategory = threeRoomCategory
            currentCategory.style.display = 'block'
            let currentCategoryErrorTextField = currentCategory.querySelector('.nothing-in-this-category_text')
            let currentCategoryProducts = currentCategory.querySelector('.catalog_items_container')
            console.log(currentCategory)
            console.log(currentCategoryProducts)
            console.log(currentCategoryErrorTextField)
            if(currentCategoryProducts.childElementCount == 0)
            {
                currentCategoryErrorTextField.style.display = 'block'
            }
            
        }
        if(changeCategoryBtns[i].id == "four-room-btn")
        {
            currentCategory.style.display = 'none'
            currentCategory = fourRoomCategory
            currentCategory.style.display = 'block'
            let currentCategoryErrorTextField = currentCategory.querySelector('.nothing-in-this-category_text')
            let currentCategoryProducts = currentCategory.querySelector('.catalog_items_container')
            console.log(currentCategory)
            console.log(currentCategoryProducts)
            console.log(currentCategoryErrorTextField)
            if(currentCategoryProducts.childElementCount == 0)
            {
                currentCategoryErrorTextField.style.display = 'block'
            }
            
        }
        if(changeCategoryBtns[i].id == "five-room-btn")
        {
            currentCategory.style.display = 'none'
            currentCategory = fiveRoomCategory
            currentCategory.style.display = 'block'
            let currentCategoryErrorTextField = currentCategory.querySelector('.nothing-in-this-category_text')
            let currentCategoryProducts = currentCategory.querySelector('.catalog_items_container')
            console.log(currentCategory)
            console.log(currentCategoryProducts)
            console.log(currentCategoryErrorTextField)
            if(currentCategoryProducts.childElementCount == 0)
            {
                currentCategoryErrorTextField.style.display = 'block'
            }
            
        }
    });
}


