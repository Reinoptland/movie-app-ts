## Feature request: Detail page

Dynamic routing -> andere data laten op basis van url

- [x] Route maken detail pagina (App.js)
- [x] Route een parameter hebben -> imdbID (want we moeten de juiste fetchen)
- [x] Dynamisch links genereren met de juiste ID in url
- [x] Component maken voor detail pagina
- [x] Het detail pagina component moet de juiste data fetchen `onload`
  - [x] imdbID uit de url krijgen -> `useParams` (React Router)
  - [x] useEffect gebruiken om de data te fetchen -> state setten & content laten zien

## Feature request: As a user I want share a link to my search results

- [x] Route parameter toevoegen aan die discover pagina -> moet optioneel zijn dus `/discover/:searchText?`
- [x] wanneer de zoekterm verandert, moet de url mee veranderen
  - useHistory -> history.push(url)
- [] wanneer de pagina geladen wordt, moeten we een zoekopdracht uitvoeren met de query uit de url
  - useParams
  - useEffect

## Shared app state

- [] is de app aan het laden -> synchronous action
- [] tokens! is iemand ingelogd
- [] data die gefetched is uit de api -> asynchronous actions

## Todo:

- [x] Setup
  - deps installeren
  - store initializeren
  - mappen structuur
- [] Appstate
  - Loading
    - [x] Store typen
    - Actie maken: APP_LOADING
    - Actie moeten `dispatchen`
    - Reducer logica -> Hoe moet een APP_LOADING actie worden de state veranderen
    - Selector schrijven om de state van de app aan een component door te geven
    - Appstate in componenten gebruiken
