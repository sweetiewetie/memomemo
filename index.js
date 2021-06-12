const express = require('express')
const app = express()
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')
const expressSession = require('express-session');

mongoose.connect('mongodb+srv://soyeon:ONwave43@@cluster0.nut8h.mongodb.net/test',
    { useUnifiedTopology: true, useNewUrlParser: true })

const mainHomeController = require('./controllers/mainHome')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')
const logoutController = require('./controllers/logout');
const newUserController = require('./controllers/newUser');
const storeUserController = require('./controllers/storeUser');
const authMiddleware = require('./middleware/authMiddleware');
const redirectmemoIfAuthenticatedMiddleware = require('./middleware/redirectmemoIfAuthenticatedMiddleware')
const validationMiddleware = require('./middleware/validationMiddleware')
const memohomeController = require('./controllers/memohome')
const memopublicController = require('./controllers/memopublic')
const memoprivateController = require('./controllers/memoprivate')
const memoaddController = require('./controllers/memoadd')
const memopublicpageController = require('./controllers/memopublicpage')

const memopublicpagecreateController =require('./controllers/memopublicpagecreate')
const storepublicpageController = require('./controllers/storepublicpage')
const storeprivatememoController = require('./controllers/storeprivatememo')
const validatememoMiddleware = require('./middleware/validatememoMiddleware')
const memoprivatecatcreateController =require('./controllers/memoprivatecatcreate')
const storeprivatecatController = require('./controllers/storeprivatecat')
const memoprivatepageController = require('./controllers/memoprivatepage')
const publiceditController = require('./controllers/publicedit')
const updatepublicpageController = require('./controllers/updatepublicpage')
const deletepublicpageController = require('./controllers/deletepublicpage')
const deleteprivatepageController = require('./controllers/deleteprivatepage.js')
const privateeditController = require('./controllers/privateedit')
const updateprivatepageController = require('./controllers/updateprivatepage')
const todohomeController = require('./controllers/todohome');
const todoRoutes = require('./controllers/todosroute');

const ejs = require('ejs')
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use(express.json())
app.use(fileUpload())
app.use('/pulicmemo/store',validationMiddleware)
app.use('privatememo/store',validatememoMiddleware)
app.use(expressSession({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}))

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}

global.loggedIn = null;
app.use("*", (req, res, next) => {
    loggedIn = req.session.userId;
    next()
});

global.publicpage = null;


app.get('/', mainHomeController);
app.get('/auth/signup', newUserController)
app.get('/auth/logout', logoutController);
app.get('/auth/signup', redirectmemoIfAuthenticatedMiddleware, newUserController);
app.post('/users/signup', redirectmemoIfAuthenticatedMiddleware, storeUserController);
app.get('/auth/login', redirectmemoIfAuthenticatedMiddleware, loginController)
app.post('/users/login', redirectmemoIfAuthenticatedMiddleware, loginUserController)

app.get('/memohome', authMiddleware, memohomeController)

app.get('/memo/public', authMiddleware, memopublicController)
app.post('/memo/public/page',authMiddleware, memopublicpageController)
app.get('/memo/public/createpage', authMiddleware, memopublicpagecreateController)
app.post('/pulicmemo/store', authMiddleware, storepublicpageController)
app.get('/memo/public/edit/:id', authMiddleware, publiceditController)
app.post('/publicmemo/update/:id', validatememoMiddleware, updatepublicpageController)
app.get('/memo/public/delete/:id', authMiddleware, deletepublicpageController)


app.get('/memo/private/:id', authMiddleware, memoprivateController)
app.post('/memo/private/add', authMiddleware, memoprivatecatcreateController)
app.post('/privatecat/store',authMiddleware, storeprivatecatController)
app.post('/memo/private/add/:id', authMiddleware, memoaddController)
app.post('/privatememo/store', authMiddleware,  storeprivatememoController)
app.get('/memo/privatememo/:id', authMiddleware, memoprivatepageController)
app.get('/memo/private/edit/:id', authMiddleware, privateeditController)
app.post('/privatememo/update/:id', validatememoMiddleware, updateprivatepageController)
app.get('/memo/private/delete/:id', authMiddleware, deleteprivatepageController)

app.get('/todos', authMiddleware, todohomeController);
app.use('/memo/todos', authMiddleware, todoRoutes);

app.use((req, res) => res.render('notfound'))

app.listen(port,  ()=> {
    console.log("go go go!")
})