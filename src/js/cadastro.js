document.getElementById('registerForm').addEventListener('submit', registerUser);
document.getElementById('loginForm').addEventListener('submit', loginUser);
document.getElementById('switchForm').addEventListener('click', toggleForms);

function registerUser(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Aqui você faz a requisição ao backend que interage com o Supabase

    const { createClient } = supabase

let instance = null;
let supabaseUrl = 'https://pqhtbgdabmcxbwxjfqam.supabase.co';
let supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxaHRiZ2RhYm1jeGJ3eGpmcWFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM3NTM4ODUsImV4cCI6MjA0OTMyOTg4NX0.5fujW-krB8lli7kN5XAfLem9PNZCoS_nu_MMu9wv3RE';
function getSupabaseClient() {
    if (!instance) {
        instance = createClient(supabaseUrl, supabaseKey)
    }
    return instance
}
    
}