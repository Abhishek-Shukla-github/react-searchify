# react-searchify
react-searchify is a modular NPM-package to add a search-navigation support to a React Application

### Features :-
- A modular way to integrate a search navigation support by passing the necessary props.
- All of the pages of the project can be covered and accessed with a single click.
- Voice support enabled which can be used optionally based on browser compatibility.


### Installation :-

```
$ npm i react-searchify
```

### Usage :-

```js
import Searchify from "react-searchify";

const  routesObj  =  {
	about:  {
		title:  "About page",
		route:  "/about",
		info:  "This link will take you to the about page",
		svg:  "./about.svg"
	},
	test:  {
		title:  "Test page",
		route:  "/test",
		info:  "This link will take you to the Test page",
		svg:  "./test.svg"
	},
	_demo_page_:  {
		title:  "Demo page",
		route:  "/demo",
		info:  "This link will take you to the Demo page",
		svg:  "./demo.svg"
	}
`}

const  styleObj  =  {
searchbar:  {
	width:  "60vw",
	padding:  "20px",
	border:  "2px solid #373d39",
	color:  "brown",
	left:  "30%",
	top:  "10px"
 }
}

<Searchify  routesObj={routesObj}  styleObj={styleObj}  crossBtn={crossBtn}  isVoiceSupportEnabled={true}  micBtn="/mic.svg"  stopBtn="/stop.svg"  />

```
