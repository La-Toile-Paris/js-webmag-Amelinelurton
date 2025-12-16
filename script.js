function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {       
      /// EXAM: COMPLÉTEZ LE CODE ICI ! 
      const journal = data;
      console.log(journal);

      // TODO 1: REMPLIR LE HEADER
      let nomJournal = document.getElementById("nom-journal")
      nomJournal.innerHTML = journal.journalTitre

      let phraseAccroche = document.getElementById("phrase-accroche")
      phraseAccroche.innerHTML =journal.strap

      // TODO 2: REMPLIR LA NAVIGATION

      function buttonPourNav(card) {
        
        let navigation = document.getElementById("themes-nav")

        //let titreNav= journal.topicCards[0].nom

         let buttonNav = `<button class="nav-theme-btn">${card.icon} ${card.nom}</button>`;
         navigation.innerHTML += buttonNav;
      }


      function afficherTousLesButtonNav(data) {
          data.topicCards.forEach(card => {
            buttonPourNav(card);
          });
        }

      afficherTousLesButtonNav(journal); 

      // TODO 3: REMPLIR L'ARTICLE PRINCIPAL

      let articlePrincipal = document.getElementById("article-principal")

      let articleALaUne = journal.articleprincipal

      console.log(articleALaUne);
      

      let contenueArticlePrincipal = `<img id="hero-image" src="${articleALaUne.heroImage}" alt="image illustration ${articleALaUne.titre}">
            <div class=hero-info>
            <p class="theme-badge">${articleALaUne.theme}</p>
            <h2 id="hero-titre ">${articleALaUne.titre}</h2>
            <p id="hero-description">${articleALaUne.description}</p>
            <p id="hero-auteur">Par <b>${articleALaUne.auteur}</b> · ${articleALaUne.date}</p>
            <button class="read-article-btn">Lire l'article</button></div>`

      articlePrincipal.innerHTML += contenueArticlePrincipal
      
      // TODO 4: REMPLIR LA GRILLE D'ARTICLES

      let sectionArticles = document.getElementById("articles-grid")

      function afficherCardArticle(article) {
        
          //let article = journal.storyList[0]

          //console.log(article);

          let cardArticle = `<div class="article-card">
                <img src="${article.image}" alt="image de ${article.titre}">
                <div class="article-content">
                  <p class="theme-badge">${article.theme}</p>
                  <h3>${article.titre}</h3>
                  <p>${article.description}</p>
                  <p class="article-author">Par ${article.auteur} · ${article.date}</p>
                  <button class="read-btn">LIRE L'ARTICLE</button>
                </div>
                </div>`
          
          sectionArticles.innerHTML += cardArticle
      }

      function afficherToutesLesCardArticle(data) {
        data.forEach(article => {
          afficherCardArticle(article)
        });
      }

      afficherToutesLesCardArticle(journal.storyList)

      // TODO 5: REMPLIR LES THEMES

      let sectionTheme =document.getElementById("themes-list")

      function afficherCardTheme(theme) {
      //let theme = journal.topicCards[0]
      //console.log(theme);

      let cardTheme =`  <div class="theme-item">
               <p class="theme-icon">${theme.icon}</p>
               <h3>${theme.nom}</h3>
               <p>${theme.description}</p>
            </div>`
      
      sectionTheme.innerHTML += cardTheme
      }

      function afficherToutesLesCardsTheme(data) {
        data.forEach(theme => {
          afficherCardTheme(theme)
        }); 
      }
      afficherToutesLesCardsTheme(journal.topicCards)



      // TODO 6: REMPLIR LES AUTEURS

      let sectionAuteurs= document.getElementById("authors-list")

      function afficherCardAuteur(auteur) {
      //let auteur = journal.contributors[0]
      //console.log(auteur);

      let cardAuteur = `<div class="author-card">
               <img src="${auteur.image}" alt="image de ${auteur.prenom} ${auteur.nom}">
               <h3>${auteur.prenom} ${auteur.nom}</h3>
               <p class="author-role">${auteur.typeExperience}</p>
               <p class="author-bio">${auteur.presentation}</p>
               <a href="" class="author-socials">${auteur.email}</a>
            </div>`
      sectionAuteurs.innerHTML += cardAuteur
      }
      function afficherToutesLesCardsAuteurs(data) {
        data.forEach(auteur => {
          afficherCardAuteur(auteur)
        }); 
      }
      afficherToutesLesCardsAuteurs(journal.contributors)

      // TODO 7: REMPLIR LE BOUTON CALL TO ACTION

      let callToAction= document.getElementById("call-to-action")

      let dataCallAction= journal.cta
      console.log(dataCallAction);

      let htmlCallToAction=`<p>${dataCallAction.text}</p>
            <button id="call-to-action" class="cta-button">${dataCallAction.label}</button>`
      
      callToAction.innerHTML = htmlCallToAction
      



      /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 // BONUS: 
 // Alert quand on appuie sur le bouton CTA
 // Fonction de filtrage par thème
 // Classer les articles par popularité ou notation
 
