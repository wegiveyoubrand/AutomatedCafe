const headerContainer = document.querySelector("header");

headerContainer.innerHTML = `
    <div class="menu">
        <img src="/assets/icons/bars.svg" alt="">
    </div>
    
    <div id="logo">
        <a href="./index.html">
            <img src="/assets/images/kkk.png" alt="" />
                Student Portal</a>
        </div>

    <div class="user__thumbnail">
        <img src="/assets/images/user_img.jpg" alt="">
    </div>

    <div class="user__action">
        <div> 
            <a><i class="material-icons">person</i> my profile</a>
        </div>
        <div> 
            <a><i class="material-icons">logout</i>  Logout</a>
        </div>
    </div>
`;
