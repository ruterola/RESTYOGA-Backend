const express = require ('express');
const app = express();
const db = require ('./models');
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

//MIDDLEWARE
app.use(express.json());

//ARTIGO BODY&MIND
const Artigo = require ('./routes/artigo');
app.use('/api', Artigo);

//EXERCICIOS
const Exercicio = require ('./routes/exercicio');
app.use('/api', Exercicio);

//PLANOS
const Plano = require ('./routes/plano');
app.use('/api', Plano);

//USERS
const Utilizador = require ('./routes/utilizador');
app.use('/api', Utilizador);


db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`GO ROLA http://localhost:${PORT}`);
    });
});