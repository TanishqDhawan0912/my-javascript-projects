let insert = document.querySelector(".table");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
<div class="content">
<table>
<tr>
  <th>Key</th>
  <th>KeyCode</th>
  <th>Code</th>
</tr>
<tr>
  <td>${e.key===" " ? e.key="space" : e.key = e.key}</td>
  <td>${e.keyCode}</td>
  <td>${e.code}</td>
</tr>
</table>
</div>
`;
});
