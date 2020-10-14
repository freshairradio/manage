const BASE_API = "https://api.freshair.radio";
export const api = async (app) => {
  const url = new URL(window.location.href);
  if (url.pathname.startsWith(`/identify`)) {
    localStorage.setItem(`freshair:token`, url.pathname.split(`/`)[2]);
    window.location.href = "/";
  }
  const token = localStorage.getItem("freshair:token");
  if (!token)
    window.location.href = `https://auth.freshair.radio/auth/${app}/login`;

  const fetched = await fetch(`https://identity.freshair.radio/user`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  if (
    !fetched.ok ||
    fetched.headers.get("Content-Type") != "application/json"
  ) {
    localStorage.removeItem(`freshair:token`);
    window.location.href = `https://auth.freshair.radio/auth/${app}/login`;
  }

  const user = await fetched.json();
  async function get(path, headers) {
    const fetched = await fetch(
      path.startsWith("https") ? path : `${BASE_API}${path}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(`freshair:token`)}`,
          ...headers
        }
      }
    );
    switch (fetched.status) {
      case 200:
        return await fetched.json();
      case 401:
        window.location.href = `https://auth.freshair.radio/auth/${app}/login`;
        return;
      default:
        window.location.href = `/error`;
        return;
    }
  }
  async function del(path, headers) {
    const fetched = await fetch(
      path.startsWith("https") ? path : `${BASE_API}${path}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem(`freshair:token`)}`,
          ...headers
        }
      }
    );
    switch (fetched.status) {
      case 200:
        return await fetched.json();
      case 401:
        window.location.href = `https://auth.freshair.radio/auth/${app}/login`;
        return;
      default:
        window.location.href = `/error`;
        return;
    }
  }
  async function post(path, headers, body) {
    const fetched = await fetch(
      path.startsWith("https") ? path : `${BASE_API}${path}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem(`freshair:token`)}`,
          "Content-Type": "application/json",
          ...headers
        },
        body: JSON.stringify(body)
      }
    );
    switch (fetched.status) {
      case 200:
        return await fetched.json();
      case 401:
        window.location.href = `https://auth.freshair.radio/auth/${app}/login`;
        return;
      default:
        window.location.href = `/error`;
        return;
    }
  }
  async function put(path, jsonBody) {
    const fetched = await fetch(
      path.startsWith("https") ? path : `${BASE_API}${path}`,
      {
        body: JSON.stringify(jsonBody),
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem(`freshair:token`)}`,
          "Content-Type": "application/json"
        }
      }
    );
    switch (fetched.status) {
      case 200:
        return await fetched.json();
      case 401:
        window.location.href = `https://auth.freshair.radio/auth/${app}/login`;
        return;
      default:
        window.location.href = `/error`;
        return;
    }
  }
  return {
    get,
    post,
    del,
    put,
    user
  };
};
export const key = Symbol("freshair:api");
