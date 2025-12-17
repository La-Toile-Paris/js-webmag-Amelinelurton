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

      let navigation = document.getElementById("themes-nav")

      navigation.innerHTML = `<button class="nav-theme-btn" id="buttonTous">Tous</button>`;

      function buttonPourNav(card) {
        //let titreNav= journal.topicCards[0].nom

         let buttonNav = `<button class="nav-theme-btn" id="button${card.nom}">${card.icon} ${card.nom}</button>`;
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

          let cardArticle = `  <div class="article-card">
                <img src="${article.image}" alt="image de ${article.titre}">
                <div class="article-content">
                  <p class="theme-badge">${article.theme}</p>
                  <h3>${article.titre}</h3>
                  <p>${article.description}</p>
                  <p class="article-author">Par ${article.auteur} · ${article.date}</p>
                  <div id="notevue">
                  <p>Noté : ${article.note}</p>
                  <p>Vue : ${article.vues}</p>
                  </div>
                  <button class="read-btn">LIRE L'ARTICLE</button>
                </div>
                </div> `
          
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
               <img class="author-image" src="${auteur.image}" alt="image de ${auteur.prenom} ${auteur.nom}">
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
      
       // BONUS: 
      // Alert quand on appuie sur le bouton CTA
      let  buttonAction = document.getElementById("call-to-action")

      buttonAction.addEventListener("click", function(){
      alert("Le weekend prochain CCE internationnal à Pompadour");   
      })

      // Fonction de filtrage par thème

      /*
      let buttonDressage = document.getElementById("buttonDressage")
      let buttonCross = document.getElementById("buttonCross")
      let buttonSaut = document.getElementById("buttonSaut")
      let buttonMateriel = document.getElementById("buttonMateriel")
      let buttonCheval = document.getElementById("buttonCheval")
      let buttonPreparation = document.getElementById("buttonPreparation")
      let buttonTous = document.getElementById("buttonTous")

      console.log(buttonDressage);

      
      buttonDressage.addEventListener("click", function(){
        sectionArticles.innerHTML = "";
          
        let filteredArticlesDressage = journal.storyList.filter(article => article.theme === "Dressage");  

        filteredArticlesDressage.forEach(article => {
          afficherCardArticle(article);
        });

      });
      */

      let articlesAffiches = []

      function setupThemeButtons() {
        document.querySelectorAll('.nav-theme-btn').forEach(button => {
          //Sélectionne tous les éléments avec la classe nav-theme-btn (les boutons de thème) et parcourt chacun d’eux.
          button.addEventListener('click', function() {
            let theme = this.id.replace('button', '');
            //Récupère l’id du bouton cliqué (ex: buttonDressage) et remplace button par une chaîne vide → donne Dressage.
            let filtered = theme === 'Tous' 
              ? journal.storyList 
              : journal.storyList.filter(a => a.theme === theme);
              /*Utilise l’opérateur ternaire :
                Si le thème est 'Tous', prend tous les articles.
                Sinon, filtre journal.storyList pour ne garder que les articles dont le theme correspond */
            sectionArticles.innerHTML = ''

            articlesAffiches = filtered;

            filtered.forEach(afficherCardArticle);

          });
        });
      }
      setupThemeButtons()

      



      // Classer les articles par popularité ou notation


      let buttonClassement =document.getElementById("button-triage")

      buttonClassement.innerHTML =`<button id="buttonnotation" class="nav-theme-btn">⇩ Notation</button>
      <button id="buttonvisonnage" class="nav-theme-btn">⇩ visionnage</button>`

      let buttonNotation =document.getElementById("buttonnotation")
      let buttonVue =document.getElementById("buttonvisonnage")

      function trierParNoteDecroissant(tableau) {
        return tableau.sort((a, b) => b.note - a.note);
      }
      //Pour un classement décroissant en JavaScript, utilise la méthode sort() avec une fonction de comparaison qui soustrait a de b → b - a.
      function trierParVueDecroissant(tableau) {
        return tableau.sort((a, b) => b.vues - a.vues);
      }

      //mettre en action mes bouton crée vue notation

      buttonNotation.addEventListener("click",function() {
          // Crée une copie triée du journal.storyList par note décroissante
          let trieDecroissantNote = trierParNoteDecroissant(articlesAffiches);

          // Réinitialise l'affichage
          sectionArticles.innerHTML = '';

          // Affiche les articles triés
          trieDecroissantNote.forEach(afficherCardArticle);
      })

      buttonVue.addEventListener("click",function(){
        let trieDecroissantVue = trierParVueDecroissant(articlesAffiches);
        sectionArticles.innerHTML = '';
        trieDecroissantVue.forEach(afficherCardArticle)
      })




      /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();


 
