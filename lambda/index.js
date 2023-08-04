exports.handler = async (event, context) => {
  console.log("Received event:", JSON.stringify(event, null, 2))
  console.log("Function name:", context.functionName)
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from Lambda!" }),
  }
}
