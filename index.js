let ratings = document.querySelectorAll(".rating_label")

ratings.forEach((rating) => {
    rating.style.background = "hsl(212, 17%, 20%)"
    rating.style.color = "hsl(216, 12%, 54%)"
})

ratings.forEach((rating, index) => {
	if(index !== 4) {
		rating.addEventListener("click", () => {
			ratings.forEach((rating) => {
			    rating.style.background = "hsl(212, 17%, 20%)"
			    rating.style.color = "hsl(216, 12%, 54%)"
			})

			rating.style.background = "hsl(216, 12%, 54%)"
			rating.style.color = "hsl(0, 0%, 100%)"
		})
	}
	else {
		rating.addEventListener("click", () => {
			ratings.forEach((rating) => {
			    rating.style.background = "hsl(212, 17%, 20%)"
			    rating.style.color = "hsl(216, 12%, 54%)"
			})

			rating.style.background = "hsl(25, 97%, 53%)"
			rating.style.color = "hsl(0, 0%, 100%)"
		})
	}
})

var form = document.querySelector("#ratings_form")
form.addEventListener("submit", (e) => {
	e.preventDefault()

	var radios = document.querySelectorAll('input[type="radio"]');
	var selectedRating = document.querySelector(".selected_rating")
	var ratingsCard = document.querySelector(".card")
	var thankyouCard = document.querySelector('.thanks_wrapper')

	for (var i = 0; i < radios.length; i++) {
    	if (radios[i].checked) {
        	// console.log(radios[i].value);
        	selectedRating.innerHTML = `You selected ${radios[i].value} out of 5`
    	}
	}

	ratingsCard.style.display = "none"
	thankyouCard.style.display = "block"
})

const submitRatings = (e) => {
	e.preventDefault()

	var radios = document.querySelectorAll('input[type="radio"]');
	var selectedRating = document.querySelector(".selected_rating")
	var ratingsCard = document.querySelector(".card")
	var thankyouCard = document.querySelector('.thanks')

	for (var i = 0; i < radios.length; i++) {
    	if (radios[i].checked) {
        	// console.log(radios[i].value);
        	selectedRating.innerHTML = `You selected ${radios[i].value} out of 5`
    	}
	}

	ratingsCard.style.display = "none"
	thankyouCard.stle.display = "flex"


}