exports = async function(request, response) {
  
  var query = JSON.parse(request.body.text());
  console.log(query.name);
    var collection = context.services.get("mongodb-atlas").db("sizing").collection("orgs");
    return collection.aggregate([
  {
    $search: {
      index: "default",
      autocomplete: {
        query: query.name,
        path: "name",
        tokenOrder: "sequential",
      },
    },
  },
]).toArray().then((results) => {
  console.log(results);
      return results
    });


};