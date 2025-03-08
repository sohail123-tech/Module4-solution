$(document).ready(function () {
  var names = ["John", "Jane", "Jim", "Alice", "Bob", "jill"];

  $.each(names, function (index, name) {
    if (name.charAt(0).toLowerCase() === 'j') {
      console.log("Goodbye " + name);
    } else {
      console.log("Hello " + name);
    }
  });
});