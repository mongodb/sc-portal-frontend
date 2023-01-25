
exports = async function(request, response) {


  try {
    // 1. Parse data from the incoming request
    if(request.body === undefined) {
      throw new Error(`Request body was not defined.`)
    }
    const body = JSON.parse(request.body.text());
    // 2. Handle the request

    const { insertedId } = await context.services
      .get("mongodb-atlas")
      .db("sizing")
      .collection("account")
      .insertOne({body});
    // 3. Configure the response
    response.setStatusCode(201);
    response.setBody(JSON.stringify({
      message: "Successfully saved the request body",
      insertedId,
    }));
  } catch (error) {
    response.setStatusCode(400);
    response.setBody(error.message);
  }
}


