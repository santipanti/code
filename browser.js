<!DOCTYPE html>
<html>
<head>
<script>
var w;
function openwindow() {
  w = window.open('','', 'width=100,height=100');
  w.focus();
}

function myFunction() {
  w.resizeBy(50, 50);
  w.focus();
}

</script>
</head>
<body>

<button onclick="openwindow()">Create window</button>
<button onclick="myFunction()">Resize window</button>

</body>
</html>
