// url for all fruits
// http://www.fruitmap.sk/api/fruit/

// url for types of trees (how you'd get the id for fruits of a specific type)
// http://www.fruitmap.sk/api/trees

// url for fruits of a specific type
// http://www.fruitmap.sk/api/fruit/<type id>

const url = "http://www.fruitmap.sk/api/fruit/";
fetch(url).then(function(response){
  return response.json();
}).then(function(data){
  console.log("data: ", data)
});
