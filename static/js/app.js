 var tableData = data;
 console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

var submit = d3.select("#filter-btn");
console.log(submit);

submit.on("click", function() {


  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  console.log(inputElement);

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);

  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
  console.log(filteredData);
    
  // Use d3 to update each cell's text with
  //  ufo sighting values (weekday, date, high, low)
  filteredData.forEach(function(ufoSight) {
      console.log(ufoSight);
      var row = tbody.append("tr");
      Object.entries(ufoSight).forEach(function([key, value]) {
          console.log(key, value);
          // Append a cell to the row for each value
          // in the weather report object
          var cell = row.append("td");
          cell.text(value);
        });
      });
});