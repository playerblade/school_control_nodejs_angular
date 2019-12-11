# school_control_nodejs_angular
proyecto prueba con nodejs y angular
npm install --save-dev nodemon
npm install --save body-parser
npm install --save sequelize
npm install --save tedious
npm install --save sequelize-cli
$ npx sequelize-cli init
npx sequelize-cli db:create

npx sequelize-cli model:generate 
--name Album 
--attributes firstName:string,lastName:string,email:string


npx sequelize-cli db:migrate
npx sequelize-cli seed:generate --name ArtistaSeed
npx sequelize-cli db:seed:all
