const mongoose = require("mongoose");
const articleModel = require("./article");

mongoose.connect("mongodb://localhost:27017/aprendendomongo", {useNewUrlParser: true, useUnifiedTopology: true} );


const Article = mongoose.model("Article", articleModel);


/* UPDATE 7
Article.findByIdAndUpdate("628579842cc9374f4a43c07d", {author: "Esdhas", body: "Strong"}).then(() => {
    Article.find({'_id' : '628579842cc9374f4a43c07d'}).then(articles => {
        console.log(articles)
    }).catch(err => {
        console.log(err)
    });
}).catch(err =>{
    console.log(err)
})
*/


/* DELETE  6
Article.findByIdAndDelete("6285794d229a67c7995ef474").then(() => {
    console.log("Dado removido")
}).catch(err => {
    console.log(err)
});
*/

/* BUSCA FIND One 5
Article.findOne({'resume.content' : 'Teste'}).then(articles => {
    console.log(articles)
}).catch(err => {
    console.log(err)
});
*/
 
/* BUSCA FIND ANINHADA 4
Article.find({'resume.content' : 'Teste'}).then(articles => {
    console.log(articles)
}).catch(err => {
    console.log(err)
});
*/

/* BUSCA FIND SELECTED 3
Article.find({'_id' : '6285794d229a67c7995ef474'}).then(articles => {
    console.log(articles)
}).catch(err => {
    console.log(err)
});
*/

/* BUSCA FIND ALL 2
Article.find({}).then(articles => {
    console.log(articles)
}).catch(err => {
    console.log(err)
});
*/


/* CADASTRO 1 
const artigo = new Article({title: "odin", author: "Teste", body: "Teste", special: true, resume: {content: "Teste", author: "Teste"}});

artigo.save().then(() => {
    console.log("Artigo Salvo")
}).catch(err => {
    console.log(err)
});
*/