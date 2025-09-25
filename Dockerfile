# Використовуємо офіційний Cypress образ з Node 22 і браузерами
FROM cypress/browsers:node-22.20.0-chrome-140.0.7339.207-1-ff-143.0.1-edge-140.0.3485.81-1

WORKDIR /e2e

COPY package*.json ./
RUN npm install

COPY ./cypress ./cypress
COPY ./cypress.config.js .

# Додатково встановлюємо змінну, щоб вимкнути sandbox у Firefox
# (цей CMD буде виконуватись як “sh -c ...” і тим самим змінна буде застосована)
CMD ["sh", "-c", "MOZ_DISABLE_CONTENT_SANDBOX=1 npx cypress run --spec 'cypress/e2e/ДЗ19.1/**/*.cy.js' --browser firefox"]
