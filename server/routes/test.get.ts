export default eventHandler((event) => {
  setResponseHeader(event, "hello", "world");
  return "";
});
