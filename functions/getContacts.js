exports = async function(request, response) {


  const mongodb = context.services.get("mongodb-atlas");
  const contactsCollection = mongodb.db("sizing").collection("contact");
  if(request.body === undefined) {
    throw new Error(`Request body was not defined.`)
  }
  const query = JSON.parse(request.body.text());
  return contactsCollection.aggregate(query.query)
    .toArray()
    .then(items => {
      console.log(`Successfully found ${items.length} documents.`)
      items.forEach(console.log)
      return items
    })
    .catch(err => console.error(`Failed to find documents: ${err}`))


}
