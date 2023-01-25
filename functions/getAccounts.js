exports = async function(request, response) {


  const mongodb = context.services.get("mongodb-atlas");
  const accountsCollection = mongodb.db("sizing").collection("account");
  if(request.body === undefined) {
    throw new Error(`Request body was not defined.`)
  }
  const query = JSON.parse(request.body.text());
  return accountsCollection.find(query)
    .toArray()
    .then(items => {
      console.log(`Successfully found ${items.length} documents.`)
      items.forEach(console.log)
      return items
    })
    .catch(err => console.error(`Failed to find documents: ${err}`))


}
