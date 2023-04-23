# Wizgrid
#ENG
# Web Development Practice Test

This project includes a React frontend application and a backend application that allows newsletter subscription.

## Frontend

### Services

- Create a newsletter subscription form
- Add name and email inputs to the form
- Add a send button
- Validate input fields before submitting the form
    - Name: validate as a proper name
    - Email: validate as an email address
    - Display error messages and prevent submission if validation fails
- When sending API endpoint:
    - Send a POST request
    - Use JSON body
    - Handle responses (successful, unsuccessful, etc.)
    - Display messages based on the response
- Style the form using CSS

### Installation

1. Clone the project to your own PC.
2. In the frontend folder, run the command `npm install` to install dependencies.
3. Start the application by running the command `npm start`.

## Backend

### Services

- Create a REST API backend using the following technologies:
    - Node.js and Express and cors and https
- Create an endpoint for newsletter subscription:
    - Accept POST requests
    - Handle JSON body
    - Store subscription (name, email) in a database
    - Choose a database engine (in-memory or other)
- Create an endpoint for listing subscriptions:
    - Create an endpoint to retrieve the current subscription list
    ('localhost:8080/subscribers')

### Installation

1. Clone the project to your own PC.
2. In the backend folder, run the command `npm install` to install dependencies.
3. Start the application by running the command `node server`.

# HUN
# Webfejlesztési tesztgyakorlat

Ez a projekt egy React frontend alkalmazást és egy háttéralkalmazást tartalmaz, amelyek egy hírlevél feliratkozást tesznek lehetővé.

## Frontend

### Szolgáltatások

- Hírlevél feliratkozási űrlap létrehozása
- Név és email bemenetek hozzáadása az űrlaphoz
- Küldés gomb hozzáadása
- Beviteli mezők ellenőrzése az űrlap beküldése előtt
    - Név: érvényesítés rendes névként
    - Email: email cím érvényesítése
    - Sikertelen érvényesítés esetén hibaüzenetek megjelenítése és beküldés megakadályozása
- API-végpont elküldésekor:
    - POST kérés küldése
    - JSON test használata
    - Az eredményre adott válaszok kezelése (sikeres, sikertelen stb.)
    - Üzenetek megjelenítése az eredmény alapján
- Az űrlap formázása CSS segítségével

### Telepítés

1. Klónozza le a projektet a saját gépére.
2. A frontend mappában adjon ki egy `npm install` parancsot, hogy telepítse a függőségeket.
3. Indítsa el az alkalmazást a `npm start` parancs kiadásával.

## Backend

### Szolgáltatások

- REST API hátteret létrehozása az alábbi technológiákkal:
    - Node.js és Express és cors és https
- Végpont létrehozása a hírlevél feliratkozáshoz:
    - POST kérés elfogadása
    - JSON test kezelése
    - Az feliratkozás (név, email) tárolása adatbázisban
    - Választható adatbázis motor (memóriás vagy más)
- Végpont létrehozása lista-feliratkozás:
    - Aktuális feliratkozás lista lekéréséhez végpont létrehozása
    ('localhost:8080/subscribers')

### Telepítés

1. Klónozza le a projektet a saját gépére.
2. A backend mappában adjon ki egy `npm install` parancsot, hogy telepítse a függőségeket.
3. Indítsa el az alkalmazást a `node server` parancs kiadásával.
