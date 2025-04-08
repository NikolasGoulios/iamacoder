const quotes = [
	"refactor my sleep schedule",
	"debug my feelings",
	"add console.logs to my life",
	"forget semicolons and remember dreams",
	"use comments as my journal",
	"think in functions, not feelings",
	"optimize my coffee intake",
	"indent my thoughts properly",
	"use comments to process emotions",
	"compile code and existential dread",
	"rename things 100 times before I am happy",
	"deploy at midnight because that's peak productivity",
	"live on Stack Overflow and ELI5 ChatGtp prompts",
	"treat \"it works on my machine\" as a valid excuse",
	"rewrite my destiny in JavaScript"
  ];
  
const quoteEl = document.getElementById("quote");
document.body.addEventListener("click", () => {
	const randomIndex = Math.floor(Math.random() * quotes.length);
	quoteEl.innerText = quotes[randomIndex];
});