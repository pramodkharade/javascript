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