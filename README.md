#AUTH LAB

Time to implement authentication...and ... Go!

##App setup

* pull latest notes repo
* copy this directory to a new location
* in the newly copied directory run:
    * `npm install` -- installs all modules form package.json
    * `createdb auth_lab` -- creates the database
    * `sequelize db:migrate` -- creates database tables
    * `nodemon` -- start it up


##By your powers combined...

* **Everyone** signup form (store to database)

* **validation** - check password length

* **hooks / bcrypt** - encrypt password before create

* **session / bcrypt** - check password and store user id in session

* **middleware / session** - create a middleware that loads the current user and attaches it to req.

* **Everyone** - Use the req.currentUser information to deny the user access to the /restricted page.
