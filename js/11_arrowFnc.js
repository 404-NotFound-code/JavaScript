const user = {
    username: 'Proshanta',
    price: 999,
    writeMsg: function(){
        console.log(`${this.username}, welcome to the website`); // this = refer current context
        console.log(this);
    }
}
user.writeMsg(); // Proshanta, welcome to the website
user.username = 'Sam';
user.writeMsg(); // Sam, welcome to the website 

console.log(this); // {}, for nodejs

