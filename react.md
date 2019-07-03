# React Assessments

Try your best to answer each question on your own before looking up the answer online. Once you're done writing your first answer, you can google the question and write the best answer you find.

#### 1. Here is a list of pros and cons to using the React library to build your application -- but some of them are false. Remove the false statements from the list:

<!--- React was created to be simple, so that even people with minimal code experience could use it and create Single Page Applications (SPAs)-->
- React is a modern, efficient answer to complex UI applications
<!--- React is a full stack framework for modern web applications-->
- React is a flexible library that plays the role of V in an MVC framework

 
 #### 2. What are "smart"(logic) and "dumb"(display) components? Explain the difference and also add why we bother to make the distinction between them.
 
 
 //Your Answer
"smart" components are ones that contain a state.
"dumb" components do not contain a state
 
 
 //Googled Answer
 
 
#### 3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?
 
 
 //Your Answer
 Starts the package for react
 
 
 
 //Googled Answer
 
  installs the “latest” version of the package.
  
  
#### 5. There are three mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

    import React, { Component } from 'react';

    class Recipes extends Component {
      constructor(props){
        super(props)
        this.state = {
          recipe: [
            {name: 'Meatballs'},
            {name: 'Mac & Cheese'}]
      
        }
      }

      render() {
        let recipes = this.state.recipes.map(function(recipe){
        return (
                  <li key={recipe.name}>{recipe.name}</li>
        )
            
         })    
            return(
          <ul>
            {recipes}
          </ul>
          )
      }
    }

    export default Recipes;

#### 6. Name three html input types. (NOTE: text is the default type - so it doesn't count in this case)
 
 //Your Answer
 <body>
 <p>
 <header>
 
 //Googled Answer
 button
 checkbox
 image
 radio
 
 #### 7. How would you explain state to a friend who doesn't know code?
 
 //Your Answer
 A blueprint for you code.
 
 //Googled Answer
 a way of making the behaviour of an object and what its methods do.
 
 #### 8. What is the difference between component state and props? Your answer should include a short explanation of both.
 
 
 //Your Answer
 
 
 //Googled Answer
 
   
#### 9. Write a paragraph or so about your experience with building tic-tac-toe. Some topics to start with might be: things you learned about yourself, concepts from React that stood out to you, something about pair programming (if you paired), or the experience of building something in code from scratch.
