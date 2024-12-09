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


    // Vérification de la présence d'une majuscule
    const upperCasePattern = /[A-Z]/;
    if (!upperCasePattern.test(password))
    {
        messageElement.textContent = "Le mot de passe doit contenir au moins une majuscule.";
        return;
    }


    // Vérification de la présence d'un chiffre
    const digitPattern = /[0-9]/;
    if (!digitPattern.test(password))
    {
        messageElement.textContent = "Le mot de passe doit contenir au moins un chiffre.";
        return;
    }


    // Vérification de la présence d'un caractère spécial
    const specialCharPattern = /[@#$%^&*!]/;
    if (!specialCharPattern.test(password))
    {
        messageElement.textContent = "Le mot de passe doit contenir au moins un caractère spécial.";
        return;
    }


    // Si toutes les vérifications passent, affichage d'un message de succès
    messageElement.textContent = "Connexion réussie.";
});
fetch('/validate', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password, email })
})
.then(response => response.json())
.then(data => {
    if (data.success) {
        messageElement.textContent = "Connexion réussie.";
    } else {
        messageElement.textContent = "Erreur : " + data.message;
    }
})
.catch(error => {
    messageElement.textContent = "Erreur de connexion au serveur.";
});
