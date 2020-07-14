'use_strict';
alert("hello ");
 var password;
 how = prompt('Please enter your password to acces this page');
 while (how !== '1' ) {
   how = prompt('Please enter your password to acces this page');


function restrantreports(name,maxvalue,minvalue,costomers,cookiespercostmerav,hours,cookiesava,cookies) {
    var cookiesAvaArray = [];
    cookiesAvaArray.push(cookiesava);
    var cookiesArray =[];
    cookiesArray.push(cookies);

    this.name= name,
    this.maxValue= maxvalue,
    this.minValue= minvalue,
    this.costomers= costomers,
    this. cookiespercostmerav= cookiespercostmerav,
    this.cookiesava=cookiesAvaArray ,
    this.cookies = cookiesArray,
    this.hours= hours,

    this.randomCus= function () {
        return Math.floor(Math.random() * (this.maxValue - this.minValue + 1)) + this.minValue;
    },
    this.cookiesList= function () {
        for (let index = 1; index < 19; index++) {
            var cookies = Math.round(this.randomCus() * this.cookiespercostmerav);
            this.cookiesava.push(cookies);
        }
    },
    this.totalCookies= function() {
        var total = 0;
        for (let index = 0; index < this.cookiesava.length; index++) {
            total += parseInt(this.cookiesava[index]);
        }
        return total
    },
    this.render= function () {
        var parentElement = document.getElementById('restrantreports');
        var article = document.createElement('article');
        parentElement.appendChild(article);

        var returantname = document.createElement('h1');
        article.appendChild(returantname);
        returantname.textContent = this.name;
        
        var ul = document.createElement('ul');
        article.appendChild(ul);

        for (let index = 0; index < this.hours.length; index++) {
            var liElement = document.createElement('li');
            ul.appendChild(liElement);
            liElement.textContent = this.hours[index] +':'+ (this.cookiesava);
        }
    },
}

var seatle = new restrantreports('seatle','65','23','10','6.3',['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm,', '5pm', '6pm', '7pm']);
// var tokyo = new restrantreports('tokyo','65','23','10','6.3',['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm,', '5pm', '6pm', '7pm']);

