let oDiv = document.getElementsByClassName('gototop');
window.onscroll = function() {
    oDiv[0].style.display = 'block';
    let height = document.documentElement.scrollTop || document.body.scrollTop;
    if(height == 0) {
        oDiv[0].style.display = 'none';
    }
}
