## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
6) Think about how to validate each of your steps


isYes function
- create a function that declares what counts as a yes from the user
 //what counts as a yes?
    - if the first letter starts with a 'y' 
    - capitalized or not .toLowerCase

add an .addEventListener to page that responds on 'click' 
    //<button> with id in html
add a div that displays the users score and name
    //<div> with id in html
assign DOM elements in html a const  
    //.document.getElementsById in js

- We need a button that prompts the user about a quiz to take 
    //alert('Would you like to take a quiz?')

- Does the user want to take the quiz
    //confirm('are you sure you want to take this quiz?')

- ask the user for their name
    //prompt('What is your name?')

- ask the user 3 questions 
    //prompt('ask three questions')

- score the quiz
    // use if (isYes)

- display the results for the quiz
    //use .textCont
