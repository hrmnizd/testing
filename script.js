function showPass() {
  const x = document.getElementById('passwd')

  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}