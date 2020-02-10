export const dbmasker = `
DBmasker er en tjeneste som hjelper bedrifter håndtere oppgaver knyttet til maskering av data på en robust og sikker måte. Den tillater brukeren å lage flere oppgaver, og de utfører forskjellige maskering- eller anonymiseringshandlinger. 
Prosessen innebærer følgende:
\n
    1. Idenfiserer sensitive data som trenger å bli maskert/anonymisert.
\n
    2. Skriver et sett med regler på et maskering/anonymisering på et domenespesifikt språk (ANO) som maskerer, sletter eller oppretter data og organiserer dem i ulike oppgaver
\n
    3. Genererer et Java program fra dine maskering- og anonymseringsregler ved å bruke DBmasker tjenesten.
\n
    4. Kjør det genererte Java-programmet og utfører maskeringen i måldatabasen(e)
\n
DBmasker genererer et Java program fra dine maskerings- og anonymiseringsregler.
\n
- Det genererte programmet gjør alt, du trenger bare å kjøre det
\n
- Ingen låsing, du kan opprettholde den genererte koden separat
\n
- Støtter JDBC-baserte RDBMS som Oracle, SQL Server, Sybase, MySQL, PostgreSQL
\n
- Kan kjøres som CLI-program eller være innebygd i applikasjonen om du ønsker det.
\n
- Enkel, repeterbar og enkel å bruke. Du kan kjøre det genererte programmet mange ganger
`;

export const dbimport = `
DBimport-tjenesten støtter omvendt konskruksjon av databaseskjemaer i Java-kildekode med JPA-merknader.
\n
Den genererte domenemodellen vil inneholde klasser, grupper og assosiasjoner. Databasetabeller blir kartlagt til domenemodellklasser, og tabellkolonnene blir attributter i klassen. Fremmednøkler i databaseskjemaet blir behandlet som assosiasjoner. Verdiobjekter opprettes fra indekser og primærnøkler i databaseskjemaet som inneholder mer enn en kolonne.
\n
Attributtyper blir kartlagt av en intern kartlegger. 
`;

export const dbano = `
DBano-tjenesten genererer ANO-filer som beskriver databasestruktur ved bruk av ANO DSL-språket beskrevet i DBmasker ANO-syntaks.
\n
Det genererte resultatet inneholder tabeller, kolonner, primærnøkler, unike begrensninger og definisjoner av fremmednøkkel og kan utvides med regler for anonymisering / maskering. Tjenesten tar SQL-filer med databaseskjema som input.`;
