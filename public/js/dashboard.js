document.addEventListener("DOMContentLoaded", function(event) {
    const toggleSidebar = (toggleId) =>{
    const toggle = document.getElementById(toggleId),
    dashboard_body = document.getElementById('dashboard-body');
    // sidebar = document.getElementById('dashboard-sidebar');

    if(toggle){
        toggle.addEventListener('click', ()=>{
            dashboard_body.classList.toggle('closed-sidebar');
        })
    }
}
toggleSidebar('dashboard-navbar-toggler');
});