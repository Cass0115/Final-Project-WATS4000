"use strict";angular.module("finalProjectWats4000App",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngStorage","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/current/:cityID",{templateUrl:"views/current.html",controller:"CurrentCtrl",controllerAs:"current"}).when("/forecast/:cityID",{templateUrl:"views/forecast.html",controller:"ForecastCtrl",controllerAs:"forecast"}).otherwise({redirectTo:"/"})}]),angular.module("finalProjectWats4000App").controller("MainCtrl",["$scope","citysearch","$localStorage",function(a,b,c){a.citiesFound=b.find(),a.storage=c,a.findCities=function(){a.citiesFound=b.find({query:a.location}),a.searchQuery=a.location}}]),angular.module("finalProjectWats4000App").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("finalProjectWats4000App").factory("current",["$resource",function(a){return a("http://api.openweathermap.org/data/2.5/weather?id=:cityID&units=imperial&APPID=7e735b71cd3e8a09c532b5d37f161482",{},{query:{method:"GET",params:{cityID:"4717560"},isArray:!1}})}]),angular.module("finalProjectWats4000App").factory("citysearch",["$resource",function(a){return a("http://api.openweathermap.org/data/2.5/find?q=:query&type=like&mode=json&units=imperial&APPID=7e735b71cd3e8a09c532b5d37f161482",{},{find:{method:"GET",params:{query:"seattle"},isArray:!1}})}]),angular.module("finalProjectWats4000App").controller("CurrentCtrl",["$scope","$routeParams","current","$localStorage",function(a,b,c,d){a.cityID=b.cityID,a.currentWeather=c.query({cityID:b.cityID}),a.saveCity=function(b){var c={name:b.name,id:b.id};if(d.savedCities){for(var e=!0,f=0;f<d.savedCities.length;f++)d.savedCities[f].id===c.id&&(e=!1);e===!0?(d.savedCities.push(c),a.citySaved={success:!0}):(console.log("city already saved"),a.citySaved={duplicate:!0})}else d.savedCities=[c]}}]),angular.module("finalProjectWats4000App").factory("forecast",["$resource",function(a){return a("http://api.openweathermap.org/data/2.5/forecast/daily?id=:cityID&cnt=5&units=imperial&APPID=7e735b71cd3e8a09c532b5d37f161482",{},{query:{method:"GET",params:{cityID:"4717560"},isArray:!1}})}]),angular.module("finalProjectWats4000App").controller("ForecastCtrl",["$scope","$routeParams","forecast","flickr",function(a,b,c,d){a.cityID=b.cityID,a.forecastData=c.query({cityID:b.cityID}),a.forecastData.$promise.then(function(b){a.flickr=d.query({tags:b.list[0].weather.description})})}]),angular.module("finalProjectWats4000App").factory("flickr",["$resource",function(a){return a("https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=:tags&format=json&api_key=b523d26cf6c2a4fbb1e109f3708f8628&extras=url_s",{},{query:{method:"GET",params:{tags:"weather,city"},isArray:!1}})}]),angular.module("finalProjectWats4000App").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/current.html",'<h1>{{currentWeather.name}} Weather</h1> <div class="current-weather"> <h2 class="current-temp">Temperature</h2> <p class="current-temp1">{{currentWeather.main.temp}} &deg;F</p> <p class="current-temp1">Clouds coverage{{currentWeather.clouds.all}}%</p> <p class="current-temp1">Humidity {{currentWeather.main.humidity}}%</p> <p class="current-temp1">High {{currentWeather.main.temp_max}}</p> <p class="current-temp1">Low {{currentWeather.main.temp_min}}</p> </div> <p ng-if="!citySaved"><button class="btn btn-sm btn-primary" ng-click="saveCity(currentWeather)">Save City</button></p> <div ng-messages="citySaved"> <p class="city-saved-alert bg-success text-success" ng-message="success"> {{currentWeather.name}} has been saved to your list of cities. </p> <p class="city-saved-alert bg-warning text-warning" ng-message="duplicate"> {{currentWeather.name}} has already been saved to your list of cities. </p> </div> <p><a ng-href="#!/forecast/{{cityID}}" class="btn btn-lg btn-primary">View 5-day Forecast</a></p>'),a.put("views/forecast.html",'<h1 class="forecast-h1">5-day Forecast for {{forecastData.city.name}}</h1> <div ng-repeat="prediction in forecastData.list" class="weather-forecast"> <h2>{{prediction.dt*1000 | date:\'MMM dd, yyyy\'}}</h2> <dd>{{prediction.weather[0].main}}</dd> <dd>{{prediction.weather[0].description}}</dd> <dt>Temperature</dt> <dd>Min: {{prediction.temp.min}} &deg;F Max: {{prediction.temp.max}} &deg;F</dd> </div> <div class="forcast-buttons"> <p><a ng-href="#!/current/{{cityID}}" class="btn btn-lg btn-primary">View Current Weather</a></p> <p id="general-btn"><a ng-href="#!/" class="btn btn-md btn-primary">Find Another City</a></p> </div>'),a.put("views/main.html",'<div ng-app class="jumbotron" ng-controller="MainCtrl"> <!-- Will this work? --> <h1>View Upcoming Weather with <br>Flickr Photos</h1> <p class="lead"> <div ng-init="location=\'Seattle\'"> <p> <label for="location">Location: <input type="text" name="location" ng-model="location"> </label> </p> <p> <button class="btn btn-lg btn-primary" ng-click="findCities()">Find City</button> </p> </div> <div ng-if="searchQuery"> <p class="lead">{{citiesFound.count}} cities found matching the query: {{searchQuery}}.</p> <dl ng-repeat="city in citiesFound.list"> <dt>{{city.name}}, {{city.sys.country}}</dt> <dd>{{city.weather[0].main}} - {{city.weather[0].description}}</dd> <dt>Temperature</dt> <dd>{{city.main.temp}} &deg;F</dd> <dd><a ng-href="#!/current/{{city.id}}" class="btn btn-lg btn-primary">View Weather</a></dd> </dl> </div> </p> <div ng-if="storage.savedCities"> <h2>Saved Cities</h2> <ul class="saved-cities-list"> <li ng-repeat="city in storage.savedCities"> <a ng-href="#!/current/{{city.id}}" class="btn btn-lg btn-primary">{{city.name}}</a> </li> </ul> </div> </div>')}]);