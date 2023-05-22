// Replace "field1" and "field2" with the actual field IDs or names of your form fields
var nameField = document.getElementById('First-Name');
var displayField = document.getElementById('Short-Answer');

nameField.addEventListener('input', function() {
  displayField.value = nameField.value;
});
