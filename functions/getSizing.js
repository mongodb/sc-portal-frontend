exports = async function(request, response) {
  
  
  const mongodb = context.services.get("mongodb-atlas");
  const sizingCollection = mongodb.db("sizing").collection("questionairre");
  if(request.body === undefined) {
     throw new Error(`Request body was not defined.`)
  }
  const query = JSON.parse(request.body.text());
  console.log("The document id is " + query.id)
  
  return sizingCollection.findOne({_id: BSON.ObjectId(query.id), 'workload._id': BSON.ObjectId(query.workload_id)})
  .then(result => {
    return result;
  })
  .catch(err => console.error(`Failed to find document: ${err}`));
  
  
}