const Header = document.querySelector("header");

Header.innerHTML = ` 
    <div class="nav-toggle">
        <i class="material-icons">menu</i>
    </div>

    <div class="welcome-text">
        <p id="greeting"></p>
    </div>

    <div class="user">
        <div class="avatar">
        <div class="avatar__image">
            <i class="material-icons">person</i>
        </div>
    </div>

    <div class="user_options">
        <div class="" onclick="location.href='./myProfile.html'">
            <i class="material-icons">person</i>My profile
        </div>
        <div class="" id="user_logout">
            <i class="material-icons"> logout </i> Logout
        </div>
    </div>
</div>`;
