const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
    alert('you successfully logged out!');
  } else {
    alert('you failed to log out!');
    alert(response.statusText);
  }
};

document.querySelector('#logout').addEventListener('click', logout);
