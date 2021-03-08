exports.myfunction = (event, context) => {
  console.log(event["request_headers"]["content-type"] || "*/*");
  return {
    response_headers: {
      "x-sent-content-type": event["request_headers"]["content-type"] || "*/*",
    },
    data: "Hello world!",
  };
};
