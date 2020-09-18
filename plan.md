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

- [] Route parameter toevoegen aan die discover pagina
- [] wanneer de zoekterm verandert, moet de url mee veranderen
  - useHistory -> history.push(url)
- [] wanner de pagina geladen wordt, moeten we een zoekopdracht uitvoeren met de query uit de url
  - useParams
