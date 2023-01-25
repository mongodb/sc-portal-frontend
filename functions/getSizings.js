exports = async function(request, response) {
  
  
  const mongodb = context.services.get("mongodb-atlas");
  const sizingsCollection = mongodb.db("sizing").collection("questionairre");
  if(request.body === undefined) {
  throw new Error(`Request body was not defined.`)
    }
  const query = JSON.parse(request.body.text());
  console.log("The document id is " + query.id)

  return sizingsCollection.find({"workload._id": BSON.ObjectId(query.id)})
  .sort({ dateCreated: -1 })
  .toArray()
  .then(items => {
    console.log(`Successfully found ${items.length} documents.`)
    items.forEach(console.log)
    return items
  })
  .catch(err => console.error(`Failed to find documents: ${err}`))
  
  
}