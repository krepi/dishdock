# Wybieramy obraz bazowy z Node.js 21 na bazie Alpine
FROM node:21-alpine

# Ustawiamy zmienną środowiskową na produkcję
ENV NODE_ENV=development

# Tworzymy katalog aplikacji w kontenerze
WORKDIR /app

# Kopiujemy plik package.json oraz package-lock.json do katalogu aplikacji
COPY package*.json ./

# Instalujemy wszystkie zależności (w tym devDependencies)
RUN npm install

# Kopiujemy pozostałe pliki aplikacji do katalogu aplikacji w kontenerze
COPY . .

# Otwieramy port 3000 (lub inny, jeśli aplikacja nasłuchuje na innym porcie)
EXPOSE 3000

# Uruchamiamy aplikację w trybie deweloperskim
CMD ["npm", "run", "devStart"]
