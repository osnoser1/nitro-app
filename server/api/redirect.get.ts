export default defineEventHandler((event) => {
  return sendRedirect(event, "/", 307);
});
