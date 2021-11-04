const smoothScroll = link => {
    //add a listener on click of link to navigate it to selected section
    link.addEventListener('click', () => {
        //as the id is the same as the text content of navigation link, we can use that to select
        //the corresponding section to navigate. Ex: Home is the text content visible to user and 'home-section'
        //is the id of the element to which it has to scroll when clicked on "Home" nav button
        document.querySelector(`#${link.textContent.toLowerCase()}-section`) 
        .scrollIntoView({behavior: "smooth"});
    });
}

//get all the navigation links
const navBarLinks = document.querySelectorAll('.navbar-link');

//call the smoothScroll function for each link
navBarLinks.forEach(link => smoothScroll(link));

