'use_strict';
alert("hello, This page is only for the resturant staff");

var password;
password = prompt('Please enter your password to acces this page / hint password = 201');
while (password !== '201') {
    password = prompt('Please enter your password to acces this page / hint password = 201');
}


function restrantreports(name,maxvalue,minvalue,cookiespercostmerav,hours) {
    // var cookiesAvaArray = [];
    // cookiesAvaArray.push(cookies);
    this.cookiesArray =[];
    // cookiesArray.push(cookiesava);

    this.name= name;
    this.maxValue= maxvalue;
    this.minValue= minvalue;
    // this.costomers= costomers;
    this. cookiespercostmerav= cookiespercostmerav;
    this.hours= hours;
    // this.cookiesava=cookiesAva;
    // this.cookies =cookies;
    // this.cookies = cookiesArray;
    this.cookiesArray =[];
}
    restrantreports.prototype.randomCus= function () {
       var random = Math.floor(Math.random() * (this.maxValue - this.minValue + 1)) + this.minValue;
        console.log(random);
        console.log("maxvalue",seatle.maxValue);
        return random
    },
    restrantreports.prototype.cookiesList= function () {
        for (let index = 1; index < 15; index++) {
            var cookiesava = Math.round(this.randomCus() * this.cookiespercostmerav);
            console.log(cookiesava,"this is cookies avarge");
            this.cookiesArray.push(cookiesava);
            
        }
        
    },
    restrantreports.prototype.totalCookies= function() {
        var total = 0;
        for (let index = 0; index < this.cookiesArray.length; index++) {
            total += parseInt(this.cookiesArray[index]);
        }
        return total
    },
    restrantreports.prototype.render= function () {
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
            liElement.textContent = this.hours[index] +':cookies:'+ (this.cookiesArray[index]);
        }
        var table = document.createElement('table');
        table.setAttribute('border', '1');
        table.setAttribute('class', 'table-style');
    
    
        var tr = document.createElement('tr');
        var th1 = document.createElement('th');
        th1.textContent = 'seatle';
        tr.append(th1);

        var td1 = document.createElement('th');
        td1.textContent =liElement.textContent;
        tr.append(td1);
        var td2 = document.createElement('th');
        td2.textContent =liElement.textContent;
        tr.append(td2);
        var td3 = document.createElement('th');
        td3.textContent = liElement.textContent;
        tr.append(td3);
        var td4 = document.createElement('th');
        td4.textContent = liElement.textContent;
        tr.append(td4);
        var td5 = document.createElement('th');
        td5.textContent = liElement.textContent;
        tr.append(td5);
        var td6 = document.createElement('th');
        td6.textContent = liElement.textContent;
        tr.append(td6);
        var td7 = document.createElement('th');
        td7.textContent = liElement.textContent;
        tr.append(td7);
        var td8 = document.createElement('th');
        td8.textContent = liElement.textContent;
        tr.append(td8);
    
        // var td1 = document.createElement('td');
        // td1.textContent = [liElement.textContent];
        // td.append(td1);
    
        table.appendChild(tr);
    
        var tr2 = document.createElement('tr');
        var th2 = document.createElement('th');
        th2.textContent = 'tokyo';
        tr2.append(th2);

        var td1 = document.createElement('th');
        td1.textContent =liElement.textContent;
        tr2.append(td1);
        var td2 = document.createElement('th');
        td2.textContent =liElement.textContent;
        tr2.append(td2);
        var td3 = document.createElement('th');
        td3.textContent = liElement.textContent;
        tr2.append(td3);
        var td4 = document.createElement('th');
        td4.textContent = liElement.textContent;
        tr2.append(td4);
        var td5 = document.createElement('th');
        td5.textContent = liElement.textContent;
        tr2.append(td5);
        var td6 = document.createElement('th');
        td6.textContent = liElement.textContent;
        tr2.append(td6);
        var td7 = document.createElement('th');
        td7.textContent = liElement.textContent;
        tr2.append(td7);
        var td8 = document.createElement('th');
        td8.textContent = liElement.textContent;
        tr2.append(td8);

        table.appendChild(tr2);
    
        var tr3 = document.createElement('tr');
        var th3 = document.createElement('th');
        th3.textContent = 'paris';
        tr3.append(th3);

        var td1 = document.createElement('th');
        td1.textContent =liElement.textContent;
        tr3.append(td1);
        var td2 = document.createElement('th');
        td2.textContent =liElement.textContent;
        tr3.append(td2);
        var td3 = document.createElement('th');
        td3.textContent = liElement.textContent;
        tr3.append(td3);
        var td4 = document.createElement('th');
        td4.textContent = liElement.textContent;
        tr3.append(td4);
        var td5 = document.createElement('th');
        td5.textContent = liElement.textContent;
        tr3.append(td5);
        var td6 = document.createElement('th');
        td6.textContent = liElement.textContent;
        tr3.append(td6);
        var td7 = document.createElement('th');
        td7.textContent = liElement.textContent;
        tr3.append(td7);
        var td8 = document.createElement('th');
        td8.textContent = liElement.textContent;
        tr3.append(td8);

        table.appendChild(tr3);
    
        var tr4 = document.createElement('tr');
        var th4 = document.createElement('th');
        th4.textContent = 'dubai';
        tr4.append(th4);

        var td1 = document.createElement('th');
        td1.textContent =liElement.textContent;
        tr4.append(td1);
        var td2 = document.createElement('th');
        td2.textContent =liElement.textContent;
        tr4.append(td2);
        var td3 = document.createElement('th');
        td3.textContent = liElement.textContent;
        tr4.append(td3);
        var td4 = document.createElement('th');
        td4.textContent = liElement.textContent;
        tr4.append(td4);
        var td5 = document.createElement('th');
        td5.textContent = liElement.textContent;
        tr4.append(td5);
        var td6 = document.createElement('th');
        td6.textContent = liElement.textContent;
        tr4.append(td6);
        var td7 = document.createElement('th');
        td7.textContent = liElement.textContent;
        tr4.append(td7);
        var td8 = document.createElement('th');
        td8.textContent = liElement.textContent;
        tr4.append(td8);

        table.appendChild(tr4);
    
        var tr5 = document.createElement('tr');
        var th5 = document.createElement('th');
        th5.textContent = 'lima';
        tr5.append(th5);

        var td1 = document.createElement('th');
        td1.textContent =liElement.textContent;
        tr5.append(td1);
        var td2 = document.createElement('th');
        td2.textContent =liElement.textContent;
        tr5.append(td2);
        var td3 = document.createElement('th');
        td3.textContent = liElement.textContent;
        tr5.append(td3);
        var td4 = document.createElement('th');
        td4.textContent = liElement.textContent;
        tr5.append(td4);
        var td5 = document.createElement('th');
        td5.textContent = liElement.textContent;
        tr5.append(td5);
        var td6 = document.createElement('th');
        td6.textContent = liElement.textContent;
        tr5.append(td6);
        var td7 = document.createElement('th');
        td7.textContent = liElement.textContent;
        tr5.append(td7);
        var td8 = document.createElement('th');
        td8.textContent = liElement.textContent;
        tr5.append(td8);
        table.appendChild(tr5);
    
        var th2 = document.createElement('th');
        th2.textContent = liElement.textContent;
        tr.append(th2);
    
       
        
      
        
        
    
    
        
      
        
        article.appendChild(table);
        
        
    
    
        
      
        
      

 
    
    }
    // restrantreports.prototype.table= function () {
        
    // var table = document.createElement('table');
    // table.setAttribute('border', '1');
    // table.setAttribute('class', 'table-style');




    // }
    var seatle = new restrantreports('seatle',63,23,6.3,['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm,', '5pm', '6pm', '7pm']);
    var tokyo = new restrantreports('tokyo',63,23,6.3,['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm,', '5pm', '6pm', '7pm']);
    var paris = new restrantreports('paris',63,23,6.3,['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm,', '5pm', '6pm', '7pm']);
    var dubai = new restrantreports('dubai',63,23,6.3,['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm,', '5pm', '6pm', '7pm']);
    var lima = new restrantreports('lima',63,23,6.3,['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm,', '5pm', '6pm', '7pm']);








seatle.randomCus();
seatle.cookiesList();
seatle.totalCookies();
seatle.render();
// seatle.table()
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
// restrantreports.prototype.table();



// var tr = document.createElement('tr');
// var th1 = document.createElement('th');
// th1.textContent = 'seatle';
// tr.append(th1);
// // var th2 = document.createElement('th');
// // th2.textContent = liElement.textContent;
// // tr.append(th2);
// var tr2 = document.createElement('tr');
// var th2 = document.createElement('th');
// th2.textContent = 'tokyo';
// tr2.append(th2);

// var tr3 = document.createElement('tr');
// var th3 = document.createElement('th');
// th3.textContent = 'paris';
// tr3.append(th3);

// var tr4 = document.createElement('tr');
// var th4 = document.createElement('th');
// th4.textContent = 'dubai';
// tr4.append(th4);

// var tr5 = document.createElement('tr');
// var th5 = document.createElement('th');
// th5.textContent = 'lima';
// tr5.append(th5);


// table.appendChild(tr);
// table.appendChild(tr2);
// table.appendChild(tr3);
// table.appendChild(tr4);
// table.appendChild(tr5);


// var th2 = document.createElement('th');
// th2.textContent = liElement.textContent;
// tr2.append(th2);


// article.appendChild(table);