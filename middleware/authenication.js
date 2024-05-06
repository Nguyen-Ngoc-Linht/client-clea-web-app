export default function (context) {
  const token = localStorage.getItem("token");
  const refreshToken = localStorage.getItem("refreshToken");
  const refreshTokenDate = new Date(refreshToken);
  if (refreshTokenDate > new Date()) {
    if (!token || token === "") {
      context.redirect("/auths/login");
      //redirect("/auths/login");
    }
  } else {
    context.redirect("/auths/login");
  }
}
