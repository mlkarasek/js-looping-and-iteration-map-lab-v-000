function lowerCaseDrivers (drivers) {
  return drivers.map(function (driver) { return driver.toLowerCase();
  })
}

function nameToAttributes(drivers) {
     const newDrivers = drivers.map(function (driver) { return Object.assign({}, {firstName : driver.split(' ')[0], lastName : driver.split(' ')[1]})
     });
     return newDrivers;
}

function attributesToPhrase(drivers) {
     const newDrivers = drivers.map(function (driver) {return `${driver.name} is from ${driver.hometown}`})
     return newDrivers;
<<<<<<< HEAD
 }
=======
 } 
>>>>>>> 7d903af4dc3c451ba22dea2bd21a399b47317398
