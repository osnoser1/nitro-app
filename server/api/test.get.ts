export default defineEventHandler((event) => {
  setResponseHeader(event, "hello", "world");
  return "Hello World!";
});
