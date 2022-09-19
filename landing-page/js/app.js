/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * */
 //Here I used const instead of var because const is The scope of a const variable is block scope
const classSections=document.querySelectorAll("section");
function ul (){//Here I create a function called ul()
  /*Here we will make loops in which the variable 
  i is equal to the number of Sections (6), 
  then I ++ will increase automatically*/
    for ( let i = 1; i <= classSections.length; i++) 
       { li = document.createElement("li");//Here we will make a list.
        a = document.createElement("a");//Here we will make an Anchor element.
        li.appendChild(a) ;//Here I added <a> in the list (li).
        text=document.createTextNode( 'section'+i ); // This code will create and store the text
        a.classList.add("menu__link"); // This code will add a class name
        a.href='#section'+i;//This code will add the link in href
        a.dataset.nav='section'+i ;//This code will add the data-nab
        a.id='section';//This code will add the id
        a.appendChild(text) //Here I added text in the <a> 
        document.getElementById("navbar__list").append(li); //Here I added list (li) in the navbar list.
   }
}
ul();//And here I called the function name.
//Here it will be clear which section is displayed while scrolling through the page.
onscroll= function() //placed inside the on scroll function
 {  classSections.forEach( //Here I have called a variable classSections and added it to forEach
  function (x){ //Here I added parameter name x
      if (x.getBoundingClientRect().top>=-400 //Here I add a case for the parameter of x to be less than or equal to -400
       &&x.getBoundingClientRect().top <=150 )//Here I add a case for the parameter of x to be less than or equal to 150
       {
         x.classList.add("your-active-class");//I added the class your-active-class
      }
      else{
        x.classList.remove("your-active-class");//I remove the class your-active-class
      }
    });}
    //When you click on an item from the navigation menu, the link will go to the appropriate section
document.getElementById("navbar__list").addEventListener //Here we will call the navbarlist by getElementById 
('click', function (e) {//,Then we add addEventListener When we press one , it runs smoothly
  const x= document.getElementById(e.target.dataset.nav);//Here we will store in a variable named x with data-nav
  const pos =x.offsetTop;//We create a new variable called pos and put the variable x with an offsettop in it
  console.log(pos);//pos = 471
  e.preventDefault();  //I added it to be a default event that we should stop
 window.scroll({top: pos, //You call a variable pos=471
  behavior :"smooth"})})//Then we add smooth to  behavior
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


