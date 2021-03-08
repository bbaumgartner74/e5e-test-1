exports.myfunction = (event, context) => {
  console.log(`${event.data.a} + ${event.data.b}`, event.data.a + event.data.b);
  return {
    data: event.data.a + event.data.b,
  };
};
