let panier = [
    { id: 1, nom: "T-shirt", prix: 15.99, quantite: 0 , image:"https://media.gettyimages.com/id/1340061297/fr/photo/denim.jpg?s=612x612&w=0&k=20&c=t6o9BjQ-l3jzZVTKAUMIAOZ_wNLUmdssstQbloD6bOs=" },
    { id: 2, nom: "Jeans", prix: 39.99, quantite: 0 , image:"" },
    { id: 3, nom: "Chaussures", prix: 59.99, quantite: 0 , image:"https://www.gettyimages.fr/detail/photo/woman-holding-flowers-image-libre-de-droits/769722991" },
];

function afficherPanier() {
    const panierElement = document.getElementById('panier');
    panierElement.innerHTML = '';

    panier.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.className = 'article';
        articleElement.innerHTML = `
            <div class="article-info">
                <h2>${article.nom}</h2>
             <img src=${article.image}> <img/>

                <p>${article.prix.toFixed(2)} €</p>
            </div>
            <div class="article-actions">
                <button onclick="ajusterQuantite(${article.id}, -1)">-</button>
                <span class="quantite">${article.quantite}</span>
                <button onclick="ajusterQuantite(${article.id}, 1)">+</button>
                <button onclick="supprimerArticle(${article.id})">🗑️</button>
                <button onclick="toggleAimer(${article.id})" class="coeur">❤️</button>
            </div>
        `;
        panierElement.appendChild(articleElement);
    });

    mettreAJourTotal();
}

function ajusterQuantite(id, changement) {
    const article = panier.find(a => a.id === id);
    if (article) {
        article.quantite = Math.max(0, article.quantite + changement);
        afficherPanier();
    }
}

function supprimerArticle(id) {
    panier = panier.filter(a => a.id !== id);
    afficherPanier();
}

function toggleAimer(id) {
    const article = panier.find(a => a.id === id);
    if (article) {
        article.aime = !article.aime;
        afficherPanier();
    }
}

function mettreAJourTotal() {
    const total = panier.reduce((sum, article) => sum + article.prix * article.quantite, 0);
    document.getElementById('montant-total').textContent = total.toFixed(2);
}

// Afficher le panier initial
afficherPanier();