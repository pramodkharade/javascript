const companies= [
  {name: "Baja", category: "Finance", start: 1981, end: 2004},
  {name: "Amazon", category: "Retail", start: 1992, end: 2008},
  {name: "Tata Motors", category: "Auto", start: 1999, end: 2007},
  {name: "Flipcart", category: "Retail", start: 1989, end: 2010},
  {name: "Blazeclan", category: "Technology", start: 2009, end: 2014},
  {name: "Aditya Birla", category: "Finance", start: 1987, end: 2010},
  {name: "Force", category: "Auto", start: 1986, end: 1996},
  {name: "Infosys", category: "Technology", start: 2011, end: 2016},
  {name: "Makemytrip", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

/**for: Normal loop**/
for (let i = companies.length - 1; i >= 0; i--) {
	console.log(companies[i]);
}

/***forEach loop**/
console.log('forEach loop');
companies.forEach(function(company){
	console.log(company);
});


/**filter function**/

/***get 21 and older**/

let canDrink=[];
for (let i = ages.length - 1; i >= 0; i--) {
	if(ages[i]>21){
		canDrink.push(ages[i]);
	}
}
console.log(canDrink);

console.log('*****filter****');

const canDrinks = ages.filter((age)=>{
	if(age>21){
		return true;
	}
});
console.log(canDrinks);

console.log('*****filter Efficent****');

const canDrinksE = ages.filter((age)=> age >= 21);
console.log(canDrinksE);