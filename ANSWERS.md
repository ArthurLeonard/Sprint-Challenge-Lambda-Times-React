## Self-Study/Essay Questions

- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

	PropTypes are used to alert us if the data our program receives from either a database or user input does not match the expected type of data. Our programs are meant to run automatically with no 		supervision and they will not work properly if the input does not exactly match the expected input format. Using PropTypes gives us choices for how to deal with unauthorized input and will generate 		warnings for what otherwise would be very hard to detect errors in our programs.

- [ ] Describe a life-cycle event in React?

	A life-cycle event is the phases of birth, change, and end of use of a component. Each component has a function to perform. Its function will change depending on the state determined by the data. The 	stage of birth is when the component does the duties called for by the initial data. Once the component is running it should perform different tasks based on new input. This is the change phase where the 		component will render different things to the screen in response to interaction with new data. Once a component has fulfilled all of its duties it is time for other components to be used or for the 		program to terminate. At this point the component is unmounted. 

- [ ] Explain the details of a Higher Order Component?

	A Higher Order Component takes one or more components as input and return a component with possible additions or modifications to functionality. This allows HOCs to be the gate keepers which decide when 		it is time for the right component to be mounted and fulfill its role and then taken out of action when it is no longer needed. 


- [ ] What are three different ways to style components in React? Explain some of the benefits of each.

	Regular CSS, LESS, and styled components. CSS is familiar territory, LESS allows more reusability and functions then CSS, and styled components can save a lot of time by taking care of a lot of the 		styling decisions.  
