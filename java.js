document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const studentClass = document.getElementById('class').value;
  const department = document.getElementById('department').value;
  const phone = document.getElementById('phone').value;
  const date = document.getElementById('date').value;
  const schedule = document.getElementById('schedule').value;

  const registeredStudents = JSON.parse(localStorage.getItem('students')) || [];

  const isSlotTaken = registeredStudents.some(
    student => student.date === date && student.schedule === schedule
  );

  if (isSlotTaken) {
    alert('This time slot is already registered. Please select another slot.');
    return;
  }

  registeredStudents.push({ name, class: studentClass, department, phone, date, schedule });
  localStorage.setItem('students', JSON.stringify(registeredStudents));

  alert('You have successfully registered!');
  document.getElementById('registerForm').reset();
});