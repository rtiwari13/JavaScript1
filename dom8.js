const navItems =  document.getElementsByTagName("a");
for(let i=0;i<navItems.length;i++){
    const navItem = navItems[i];
    navItem.style.backgroundColor = "#fff";
    navItem .style.color = "blue";
    navItem .style.fontWeight = "bold";
}