const container1 = document.querySelector('.row-1-img1');
const container2 = document.querySelector('.row-2-img2');
const container3 = document.querySelector('.uni-row');
const container4 = document.querySelector('.lst-row-img1') 

const cnt1_color = document.querySelector('.row-2-img1');
const cnt2_color = document.querySelector('.row-1-img2');
const cnt3_color = document.querySelector('.lst-row-img2');

container1.addEventListener('mouseenter', () => {
    cnt1_color.classList.add('color-div');
    cnt2_color.classList.add('color-div');
});

container1.addEventListener('mouseleave', () => {
    cnt1_color.classList.remove('color-div');
    cnt2_color.classList.remove('color-div');
});

container2.addEventListener('mouseenter', () =>{
    cnt1_color.classList.add('color-div');
    cnt2_color.classList.add('color-div');

});

container2.addEventListener('mouseleave', () => {
    cnt1_color.classList.remove('color-div');
    cnt2_color.classList.remove('color-div');
});

container3.addEventListener('mouseenter', () => {
    cnt1_color.classList.add('color-div');
    cnt2_color.classList.add('color-div');
    cnt3_color.classList.add('color-div');
});

container3.addEventListener('mouseleave', () => {
    cnt1_color.classList.remove('color-div');
    cnt2_color.classList.remove('color-div');
    cnt3_color.classList.remove('.color-div');
});

container4.addEventListener('mouseenter', () =>{
    cnt1_color.classList.add('color-div');
    cnt2_color.classList.add('color-div');
    cnt3_color.classList.add('clr-dv');
});

container4.addEventListener('mouseleave', () => {
    cnt1_color.classList.add('color-div');
    cnt2_color.classList.add('color-div');
    cnt3_color.classList.add('clr-dv');
});