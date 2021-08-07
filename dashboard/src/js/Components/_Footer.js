const Footer = document.querySelector("footer");

Footer.innerHTML = `
<div class="footer-component">
    <div class="active" onclick='location.href="/index.html"'>
        <i class="material-icons"> home</i><span>home</span>
    </div>
    <div class="">
        <i class="material-icons">chat</i><span>chat</span>
    </div>
    <div class="" id="searchBar">
        <i class="material-icons">search</i><span>search</span>
    </div>
</div>
`;
