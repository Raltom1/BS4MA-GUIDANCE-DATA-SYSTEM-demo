document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    let studentID = document.getElementById('studentID').value;
    let name = document.getElementById('name').value;
    let grade = document.getElementById('grade').value;
    let section = document.getElementById('section').value;
    let contact = document.getElementById('contact').value;
    let guardian = document.getElementById('guardian').value;
    let address = document.getElementById('address').value;
    let status = document.getElementById('status').value;

    // Create new table row
    let tableBody = document.getElementById('studentTableBody');
    let newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${studentID}</td>
        <td>${name}</td>
        <td>${grade}</td>
        <td>${section}</td>
        <td>${contact}</td>
        <td>${guardian}</td>
        <td>${address}</td>
        <td>${status}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    // Append row to table
    tableBody.appendChild(newRow);

    // Clear form fields
    document.getElementById('studentForm').reset();

    // Add delete functionality
    newRow.querySelector('.delete-btn').addEventListener('click', function() {
        newRow.remove();
    });
});

document.getElementById("studentID").addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, ''); // Only numbers allowed
});

document.getElementById("grade").addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, ''); // Only numbers allowed
});

document.getElementById("contact").addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, ''); // Only numbers allowed
});
