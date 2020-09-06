document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
    var sidenavElements = document.querySelectorAll('.sidenav');
    var initSidenav = M.Sidenav.init(sidenavElements);
});