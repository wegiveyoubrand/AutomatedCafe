const SideNav = document.querySelector(".side-nave");

SideNav.innerHTML = ` 
    <div class="user-card user">
        <div class="user__avatar"></div>
        <div class="user__settings"></div>
    </div>
    <ul>
        <li>
            <a href="./features/tradeMarket.html"><i class="material-icons">account_balance_wallet</i> Trade Wallet</a>
        </li>
        <li>
            <a href="./Blog.html"><i class="material-icons">tag</i>Portfolio</a>
        </li>

        <li class="file-manager">
            <a href="./features/filemanager.html"
            ><i class="material-icons">cases</i> My Records</a>
        </li>
    </ul>
`;
