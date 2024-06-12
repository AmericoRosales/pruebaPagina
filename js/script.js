/*console.log(10);

function suma(a,b){
    resultado = a+b;
    return resultado;
} 

function suma(a,ba){
    return alert(a+b);
}a

// Reto de potencia 
const powerOfTwo = (number) => {

};

module.exports = powerOfTwo;


function saludo(user){
    return(`Hola, ${user}!`);
}

export {saludo};*/

// app.js

// app.js

// Función para mostrar el formulario de registro
function showRegister() {
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
    clearMessages();
}
  
  // Función para mostrar el formulario de inicio de sesión
function showLogin() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    clearMessages();
}
  
  // Función para registrar un nuevo usuario
function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const messageDiv = document.getElementById('registerMessage');
  
    if (!username || !password) {
      messageDiv.textContent = 'Por favor, completa todos los campos.';
      return;
    }
  
    if (localStorage.getItem(username)) {
      messageDiv.textContent = 'El nombre de usuario ya existe. Por favor, elige otro.';
      return;
    }
  
    const user = {
      username: username,
      password: password
    };
    localStorage.setItem(username, JSON.stringify(user));
  
    document.getElementById('registerUsername').value = '';
    document.getElementById('registerPassword').value = '';
    messageDiv.textContent = '¡Registro exitoso! Ahora puedes iniciar sesión.';
}
  
  // Función para iniciar sesión
function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const messageDiv = document.getElementById('loginMessage');
  
    if (!username || !password) {
      messageDiv.textContent = 'Por favor, completa todos los campos.';
      return;
    }
  
    const storedUser = localStorage.getItem(username);
  
    if (!storedUser) {
      messageDiv.textContent = 'El usuario no existe. Por favor, regístrate primero.';
      return;
    }
  
    const user = JSON.parse(storedUser);
  
    if (user.password !== password) {
      messageDiv.textContent = 'Contraseña incorrecta. Inténtalo de nuevo.';
      return;
    }
  
    // Redirigir a dashboard.html si el inicio de sesión es exitoso
    window.location.href = 'dashboard.html';
}
  
// Función para limpiar mensajes de error o éxito
function clearMessages() {
    document.getElementById('registerMessage').textContent = '';
    document.getElementById('loginMessage').textContent = '';
}
  
  // Mostrar el formulario de registro por defecto
  showRegister();

function logout() {
    // Eliminar datos específicos del usuario
    localStorage.removeItem('nombreDeUsuario');
  
    // O eliminar todos los datos de localStorage
    localStorage.clear();
  
    // Redirigir a la página de inicio de sesión o registro
    window.location.href = 'index.html';
}
  