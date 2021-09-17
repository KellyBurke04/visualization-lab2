// TODO: load the dataset 

let attractions;
fetch('/attractions.json')
    .then(response => response.json())
    .then(data => {
        attractions = data;
        filterData();
        console.log('attractions - (a)', attractions);
    });

    //attractions.sort((a, b) => parseFloat(b.Visitors) - parseFloat(a.price));
function filterData(category) {

	/* **************************************************
	 *
	 * TODO: filter attractions by the selected category
	 * TODO: filter top 5 attractions
	 *
	 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	 *
	 * renderBarChart(data)
	 *
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 *
	 * *************************************************/
    let data = attractions;

    if (category && category != "all") {
        data = data.filter(function(a){
            return a.Category == category
        });
    }
    
    data.sort((a, b) => parseFloat(b.Visitors) - parseFloat(a.price));
    five = data.slice(0,5);
    renderBarChart(five);

}

// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category

const element = document.querySelector('#attraction-category');
console.log(element);
element.addEventListener('change', (event) => {
    const result = event.target.value
    //console.log(result);
    filterData(result);
});