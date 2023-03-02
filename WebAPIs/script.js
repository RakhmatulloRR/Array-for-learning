const demo = document.getElementById('demo');
const input = document.getElementById('input1');
function myFunction() {
  var url = new URL('https://example.com/add?foo=1&bar=2');
  console.log(url);
  var params = new URLSearchParams('https://example.com/add?foo=1&bar=2');
  params.set('h', 4);
  for (const [key, value] of params) {
    console.log({ [key]: value });
  }
}
