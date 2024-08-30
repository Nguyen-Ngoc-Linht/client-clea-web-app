import {getAccessToken, getReFreshToken} from "@/utils/cookieAuthen";

export default function (context) {
  const token = getAccessToken();
  const refreshToken = getReFreshToken();
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
