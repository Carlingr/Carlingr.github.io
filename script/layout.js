/* This file sets up the layout for all pages that use default layout.
It draws some exterior objects in, but also rearranges the page for small windows (defined as less than 740 px wide)
Includes the old navbar.js
Adds Website title to bottom of header of all pages
*/

var nav; //holds the navbar
var aside; //holds all aside objects
var article; //holds all article objects
var navbar; //holds navbar objects
var header; //holds header

function setup() {
  nav = select("nav"); //selects allnav elements
  nav.html('<table id="navbar"> <tr> <td class="navbar"><a href="https://carlingr.github.io/prog" class="navlnk">Programming</a></td>        <td class="navbar"><a href="https://carlingr.github.io/electric" class="navlnk">Electronic Prototyping</a></td>        <td class="navbar"><a href="https://carlingr.github.io/theater" class="navlnk">Theater Tech</a></td>        <td class="navbar"><a href="https://carlingr.github.io/video" class="navlnk">Video and Audio Editing</a></td>        <td class="navbar"><a href="https://carlingr.github.io/MacGyverIRL" class="navlnk">MacGyver IRL</a></td>        <td class="navbar"><a href="https://carlingr.github.io/contact" class="navlnk">Get in Touch</a></td>      </tr>    </table>') //makes consistant navbar

  navbar = selectAll('.navbar'); //grab all the navbar objects
  for (var i = 0; i < navbar.length; i++) {
    navbar[i].mouseOver(over); //highlight on mouse over
    navbar[i].mouseOut(out); //unhighlight on mouse out
  }

  aside = selectAll('aside'); //selects all aside elements
  article = selectAll("article"); //selects all article elements

header = select("header");//grab the header
header.html('<br/><a href="https://carlingr.github.io" class="subt">carlingr.github.io</a>',true)//add this strng to the end
}

function windowResized() { //if the window is resized
  var i; //declare a variable, easier than declaring for each loop
  if (windowWidth < 740) { //if the window is "narrow"
    for (i = 0; i < aside.length; i++) { //hide all aside elements
      aside[i].hide;
    }
    nav.style('width', "100%"); //make things full width
    for (i = 0; i < article.length; i++) {
      article[i].style('width', "100%"); //make things full width
    }
  } else { //if it is "wide"
    for (i = 0; i < aside.length; i++) {
      aside[i].show; //show the aside elements
    }
    nav.style('width', "80%"); //make some space on the sides
    for (i = 0; i < article.length; i++) {
      article[i].style('width', "80%"); //make some space on the sides
    }
  }
}

function over() {
  this.style('background-color', '#2c2');
}

function out() {
  this.style('background-color', '#0a0');
}