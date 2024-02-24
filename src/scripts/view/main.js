const main = () => {
    const btHam = document.querySelector("#hamburger");
    const navList = document.querySelector(".nav-list");
    const navItems = document.querySelectorAll(".nav-item");
    const mainElement = document.querySelector("main");
  
    document.addEventListener("keydown", (event) => {
        if (event.key === "Tab" && navList.classList.contains("open")) {
          const lastNavItem = navItems[navItems.length - 1];
          if (lastNavItem === event.target) {
            closeNavList();
          }
        }
    });
    
    const toggleNavList = () => {
        navList.classList.toggle("show");
        btHam.innerHTML = navList.classList.contains("show") ? "X" : "☰";
        btHam.ariaLabel = navList.classList.contains("show") ? "Tutup menu navigasi" : "Buka menu navigasi";
        mainElement.classList.toggle("blurred");
    };

    btHam.addEventListener("click", (event) => {
    toggleNavList();
    event.stopPropagation();
    });

    const closeNavList = () => {
        navList.classList.remove("show");
        mainElement.classList.remove("blurred");
        btHam.innerHTML = "☰";
        btHam.ariaLabel = "Buka menu navigasi";
    };

    navList.addEventListener("click", closeNavList);
    mainElement.addEventListener("click", closeNavList);
}

export default main;