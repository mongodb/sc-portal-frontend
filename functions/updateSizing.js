exports = async function(request, response) {
  
  
  const mongodb = context.services.get("mongodb-atlas");
  const sizingCollection = mongodb.db("sizing").collection("questionairres");
  if(request.body === undefined) {
     throw new Error(`Request body was not defined.`)
  }
  const query = JSON.parse(request.body.text());
  const payload = query.update
  return sizingCollection.updateOne({_id: BSON.ObjectId(query.id)}, {$set: { payload }})
  .then(result => {
    return result;
  })
  .catch(err => console.error(`Failed to update document: ${err}`));
  
  
}