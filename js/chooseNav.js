// JavaScript点击后保持1/4部分常亮

window.onload = function () {

    let navList = document.getElementById("navList");
    let navItems = navList.getElementsByTagName("li");



    for (var i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener("click", function () {

            // 移除所有<li>元素的“active”类
            for (var j = 0; j < navItems.length; j++) {
                navItems[j].classList.remove("active");
            }

            this.classList.add("active");


        });
    }




}

