var arr = new Array();
function addRow(){
var table = document.getElementById("contacts");
var row = table.insertRow(1);
var namai = row.insertCell(0);
var email = row.insertCell(1);
var number = row.insertCell(2);
var tag = row.insertCell(3);
var age = row.insertCell(4);
var job = row.insertCell(5);
namai.innerHTML = "";
email.innerHTML = "";
namai.className = 'hi';
email.className = 'hi';
number.innerHTML = "";
tag.innerHTML = "";
number.className = 'hi';
tag.className = 'hi';
age.innerHTML = "";
job.innerHTML = ""
age.className = 'hi';
job.className = 'hi';  
textAppear();
// localStorage.setItem("contactInfo",)  
}

 window.onload = function() {
      var data = JSON.parse(localStorage.getItem('data')) || [];
      var tbody = document.querySelector('#data-table tbody');
      for (var i = 0; i < data.length; i++) {
        var row = document.createElement('tr');
        var nameCell = document.createElement('td');
        var numcell = document.createElement('td');
        var emailcell = document.createElement('td');
        var birthcell = document.createElement('td');
        var occcell = document.createElement('td');
        var agecell = document.createElement('td');
        var othercell = document.createElement('td');
        nameCell.textContent = data[i].name;
        numcell.textContent = data[i].number;
        emailcell.textContent = data[i].email;
        birthcell.textContent = data[i].birthday;
        occcell.textContent = data[i].occupation;
        agecell.textContent = data[i].age;
        othercell.textContent = data[i].other;
        row.appendChild(nameCell);
        row.appendChild(numcell);
        row.appendChild(emailcell);
        row.appendChild(birthcell);
        row.appendChild(occcell);
        row.appendChild(agecell);
        row.appendChild(othercell);
        tbody.appendChild(row);
      }
    }

    var form = document.querySelector('#data-form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      var name = document.querySelector('#name-input').value;
      var num = document.querySelector('#num-input').value;
      var email = document.querySelector('#email-input').value;
      var birth = document.querySelector('#birth-input').value;
      var occ = document.querySelector('#occ-input').value;
      var age = document.querySelector('#age-input').value;
      var other = document.querySelector('#other-input').value;
      var data = JSON.parse(localStorage.getItem('data')) || [];
      data.push({ name: name, num: num, email: email, birth: birth, occ: occ, age: age, other:other});
      localStorage.setItem('data', JSON.stringify(data));
      var tbody = document.querySelector('#data-table tbody');
      var row = document.createElement('tr');
      var nameCell = document.createElement('td');
      var numCell = document.createElement('td');
      var emailCell = document.createElement('td');
      var birthCell = document.createElement('td');
      var occCell = document.createElement('td');
      var ageCell = document.createElement('td');
      var otherCell = document.createElement('td');
      nameCell.textContent = name;
      numCell.textContent = num;
      emailCell.textContent = email;
      birthCell.textContent = birth;
      occCell.textContent = occ;
      ageCell.textContent = age;
      otherCell.textContent = other;
      row.appendChild(nameCell);
      row.appendChild(numCell);
      row.appendChild(emailCell);
      row.appendChild(birthCell);
      row.appendChild(occCell);
      row.appendChild(ageCell);
      row.appendChild(otherCell);
      tbody.appendChild(row);
      document.querySelector('#name-input').value = '';
      document.querySelector('#num-input').value = '';
      document.querySelector('#email-input').value = '';
      document.querySelector('#birth-input').value = '';
      document.querySelector('#occ-input').value = '';
      document.querySelector('#age-input').value = '';
      document.querySelector('#other-input').value = '';
    });

/*function saveContacts()
  {
  arr.push({
    name:document.getElementById("name").value,
    number:document.getElementById("number").value,
    bday:document.getElementById("bday").value,
    job:document.getElementById("job").value,
    age:document.getElementById("age").value,
    tag:document.getElementById("tag").value,
  })
  localStorage.setItem('contactsContent', JSON.stringify(arr));
    alert(arr)

  }
function addTableData()
{
  if (localStorage.getItem("contactsContent") !== null) {
    var contactsContent = JSON.parse(localStorage.getItem('contactsContent'));
    
    document.getElementById('contacts').innerHTML = contactsContent;
}
}*/
