const xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://reqres.in/api/users", true);
xhttp.send();
xhttp.onload = function() {
  const response = JSON.parse(this.response);
  console.log(response);
  const wrapper = document.querySelector(".wrapper");
  const source = document.getElementById("entry-template").innerHTML;
  const template = Handlebars.compile(source);
  const context = new DOMParser().parseFromString(
    template(response.data),
    "text/html"
  );
  wrapper.appendChild(context.documentElement);
};
