exports = async function(request, response) {


  const mongodb = context.services.get("mongodb-atlas");
  const contactsCollection = mongodb.db("sizing").collection("contact");
  if(request.body === undefined) {
    throw new Error(`Request body was not defined.`)
  }
  const query = JSON.parse(request.body.text());
  console.log(query)

  return contactsCollection.findOne({_id: BSON.ObjectId(query.id)})
    .then(result => {
      return result;
    })
    .catch(err => console.error(`Failed to find document: ${err}`));


}
