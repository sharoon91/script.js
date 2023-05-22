// Replace "field1" and "field2" with the actual field IDs or names of your form fields
var nameField = document.getElementById('field1');
var displayField = document.getElementById('field2');

nameField.addEventListener('input', function() {
  displayField.value = nameField.value;
});
