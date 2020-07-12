'use_strict';
alert("hello ");

var seattle = {
    name: 'seattle',
    maxValue: 65,
    minValue: 23,
    costomers: 10,
    cookiespercostmerav: '6.3',
    cookies: [],
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm,', '5pm', '6pm', '7pm'],
    hourlycostomers: function () {
        this.costomers = (this.maxValue, this.minValue);
        var customersrandom = Math.floor(Math.random() * Math.floor(this.maxValue, this.minValue));
        this.cookies.push(customersrandom*6.3);
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
            liElement.textContent = this.hours[index] +':'+ (this.cookies);
        }


    }
}


// console.log(hourlycostomers);
// seattle.cookiespercostomer();
seattle.hourlycostomers();
seattle.render();
tokyo.hourlycostomers();
tokyo.render();
dubai.hourlycostomers();
dubai.render();
paris.hourlycostomers();
paris.render();
liElementma.hourlycostomers();
liElementma.render();


