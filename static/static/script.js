document.addEventListener('DOMContentLoaded', function ()
{
    document.getElementById('login-form').addEventListener('submit', function (event)
    {
        event.preventDefault(); // Empêche la soumission par défaut du formulaire


        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const email = document.getElementById('email').value;
        const messageElement = document.getElementById('dynamic-message');


        // Vérification des champs vides
        if (!username || !password || !email)
        {
            messageElement.textContent = "Erreur : veuillez remplir correctement tous les champs.";
            return;
        }


        // Vérification de l'adresse e-mail
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email))
        {
            messageElement.textContent = "Erreur : l'adresse e-mail n'est pas valide.";
            return;
        }


        // Vérification de la longueur du mot de passe
        if (password.length < 8)
        {
            messageElement.textContent = "Le mot de passe doit contenir au moins 8 caractères.";
            return;
        }


        // Si toutes les vérifications passent, affichage d'un message de succès
        messageElement.textContent = "Connexion réussie.";
    });
});
