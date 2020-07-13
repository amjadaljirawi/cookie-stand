'use_strict';
alert("hello ");

var seattle = {
    name: 'seattle',
    maxValue: 65,
    minValue: 23,
    costomers: 10,
    cookiespercostmerav: '6.3',
    cookiesava: [],
    cookies : [],
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm,', '5pm', '6pm', '7pm'],
    // hourlycostomers: function () {
    //     this.costomers = (this.maxValue, this.minValue);
    //     var customersrandom = Math.floor(Math.random() * Math.floor(this.maxValue, this.minValue));
    //     this.cookies.push(customersrandom*6.3);
    // },
    randomCus: function () {
        return Math.floor(Math.random() * (this.maxValue - this.minValue + 1)) + this.minValue;
    },
    cookiesList: function () {
        for (let index = 1; index < 19; index++) {
            var cookies = Math.round(this.randomCus() * this.cookiespercostmerav);
            this.cookiesava.push(cookies);
        }
    },
    totalCookies: function() {
        var total = 0;
        for (let index = 0; index < this.cookiesava.length; index++) {
            total += parseInt(this.cookiesava[index]);
        }
        return total
    },
    render: function () {
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

var tokyo = {
    name: 'tokyo',
    maxValue: 65,
    minValue: 23,
    costomers: 10,
    cookiespercostmerav: '6.3',
    cookiesava: [],
    cookies : [],
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm,', '5pm', '6pm', '7pm'],
    // hourlycostomers: function () {
    //     this.costomers = (this.maxValue, this.minValue);
    //     var customersrandom = Math.floor(Math.random() * Math.floor(this.maxValue, this.minValue));
    //     this.cookies.push(customersrandom*6.3);
    // },
    randomCus: function () {
        return Math.floor(Math.random() * (this.maxValue - this.minValue + 1)) + this.minValue;
    },
    cookiesList: function () {
        for (let index = 1; index < 19; index++) {
            var cookies = Math.round(this.randomCus() * this.cookiespercostmerav);
            this.cookiesava.push(cookies);
        }
    },
    totalCookies: function() {
        var total = 0;
        for (let index = 0; index < this.cookiesava.length; index++) {
            total += parseInt(this.cookiesava[index]);
        }
        return total
    },
    render: function () {
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
            liElement.textContent = this.hours[index] +':'+ (this.cookiesava[index]);
        }
    },
}
var dubai = {
    name: 'dubai',
    maxValue: 65,
    minValue: 23,
    costomers: 10,
    cookiespercostmerav: '6.3',
    cookiesava: [],
    cookies : [],
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm,', '5pm', '6pm', '7pm'],
    // hourlycostomers: function () {
    //     this.costomers = (this.maxValue, this.minValue);
    //     var customersrandom = Math.floor(Math.random() * Math.floor(this.maxValue, this.minValue));
    //     this.cookies.push(customersrandom*6.3);
    // },
    randomCus: function () {
        return Math.floor(Math.random() * (this.maxValue - this.minValue + 1)) + this.minValue;
    },
    cookiesList: function () {
        for (let index = 1; index < 19; index++) {
            var cookies = Math.round(this.randomCus() * this.cookiespercostmerav);
            this.cookiesava.push(cookies);
        }
    },
    totalCookies: function() {
        var total = 0;
        for (let index = 0; index < this.cookiesava.length; index++) {
            total += parseInt(this.cookiesava[index]);
        }
        return total
    },
    render: function () {
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
var paris = {
    name: 'paris',
    maxValue: 65,
    minValue: 23,
    costomers: 10,
    cookiespercostmerav: '6.3',
    cookiesava: [],
    cookies : [],
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm,', '5pm', '6pm', '7pm'],
    // hourlycostomers: function () {
    //     this.costomers = (this.maxValue, this.minValue);
    //     var customersrandom = Math.floor(Math.random() * Math.floor(this.maxValue, this.minValue));
    //     this.cookies.push(customersrandom*6.3);
    // },
    randomCus: function () {
        return Math.floor(Math.random() * (this.maxValue - this.minValue + 1)) + this.minValue;
    },
    cookiesList: function () {
        for (let index = 1; index < 19; index++) {
            var cookies = Math.round(this.randomCus() * this.cookiespercostmerav);
            this.cookiesava.push(cookies);
        }
    },
    totalCookies: function() {
        var total = 0;
        for (let index = 0; index < this.cookiesava.length; index++) {
            total += parseInt(this.cookiesava[index]);
        }
        return total
    },
    render: function () {
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
var lima = {
    name: 'Lima',
    maxValue: 65,
    minValue: 23,
    costomers: 10,
    cookiespercostmerav: '6.3',
    cookiesava: [],
    cookies : [],
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm,', '5pm', '6pm', '7pm'],
    // hourlycostomers: function () {
    //     this.costomers = (this.maxValue, this.minValue);
    //     var customersrandom = Math.floor(Math.random() * Math.floor(this.maxValue, this.minValue));
    //     this.cookies.push(customersrandom*6.3);
    // },
    randomCus: function () {
        return Math.floor(Math.random() * (this.maxValue - this.minValue + 1)) + this.minValue;
    },
    cookiesList: function () {
        for (let index = 1; index < 19; index++) {
            var cookies = Math.round(this.randomCus() * this.cookiespercostmerav);
            this.cookiesava.push(cookies);
        }
    },
    totalCookies: function() {
        var total = 0;
        for (let index = 0; index < this.cookiesava.length; index++) {
            total += parseInt(this.cookiesava[index]);
        }
        return total
    },
    render: function () {
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




function render(city) {
    city.cookiesList()
    var list = document.createElement("ul");
    list.innerHTML = city.name;
    var parent = document.getElementById("parent");
    parent.append(list);
    for (let index = 1; index < 18; index++) {
        var hour = document.createElement("li");
        hour.innerHTML = "Hour: "+index + ":00 | Cookies: "+city.Array[index];
        list.append(hour);
    }
    var total = document.createElement("li");
    total.innerHTML = "Total cookies : " + (city.totalCookies());
    list.append(total);
}

seattle.randomCus();
seattle.cookiesList();
seattle.totalCookies();
seattle.render();
tokyo.randomCus();
tokyo.cookiesList();
tokyo.totalCookies();
tokyo.render();
paris.randomCus();
paris.cookiesList();
paris.totalCookies();
paris.render();
dubai.randomCus();
dubai.cookiesList();
dubai.totalCookies();
dubai.render();
lima.randomCus();
lima.cookiesList();
lima.totalCookies();
lima.render();


// console.log(hourlycostomers);
// seattle.cookiespercostomer();
// seattle.hourlycostomers();

// tokyo.hourlycostomers();
// tokyo.render();
// dubai.hourlycostomers();
// dubai.render();
// paris.hourlycostomers();
// paris.render();
// liElementma.hourlycostomers();
// liElementma.render();

