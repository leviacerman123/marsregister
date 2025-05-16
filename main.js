const students = [{
    id: 1,
    name: 'Aziz ',
    Surname: `Xudoyorov`,
    coin: 200,
    login: 12345,
    password: 12345,
    teacher: 'Ertan Emirhan',
    daraja: "⭐️⭐️⭐️⭐️⭐️"
}];

// Theme handling
function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    }
}

// Initialize theme
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.classList.add(`${savedTheme}-theme`);
}

// Add event listener for theme toggle
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
});

function handleLogin() {
    const loginInput = document.getElementById('loginInput').value;
    const passwordInput = document.getElementById('passwordInput').value;
    const errorElement = document.getElementById('loginError');

    const student = students.find(s =>
        s.login.toString() === loginInput &&
        s.password.toString() === passwordInput
    );

    if (student) {
        // Clear any error message
        errorElement.textContent = '';

        // Hide login form and show profile
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('profileCard').style.display = 'block';

        // Update profile information
        document.getElementById('studentName').textContent = `${student.name} ${student.Surname}`;
        document.getElementById('teacherInfo').textContent = `Teacher: ${student.teacher}`;
        document.getElementById('studentStars').textContent = student.daraja;
        document.getElementById('studentCoin').textContent = student.coin;
    } else {
        // Show error message
        errorElement.textContent = 'Login yoki parol noto\'g\'ri!';
        // Clear password field
        document.getElementById('passwordInput').value = '';
    }
}