/*Kept for backwards compatibility
 */

var navbar;

function setup() {
  navbar = selectAll('.navbar');
  for (var i = 0; i < navbar.length; i++) {
    navbar[i].mouseOver(over);
    navbar[i].mouseOut(out);
  }

}

function over() {
  this.style('background-color', '#2c2');
}

function out() {
  this.style('background-color', '#0a0');
}