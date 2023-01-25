exports = async function(request, response) {


  const mongodb = context.services.get("mongodb-atlas");
  let query = [{$match: {}},{$sort: {lastUpdate:-1}}];
  if (request.body) {
    params = JSON.parse(request.body.text());
    query[0] = {
        $search: {
          index: "default",
          text: {
            query: params.query,
            path: params.path,
          },
        },
      }
  }

  const workloadsCollection = mongodb.db("sizing").collection("champion");
  console.log(query);
  return workloadsCollection.aggregate(query)
   .toArray()
  .then(items => {
    console.log(`Successfully found ${items.length} documents.`)
    items.forEach(console.log)
    return items
  })
  .catch(err => console.error(`Failed to find documents: ${err}`))


}
