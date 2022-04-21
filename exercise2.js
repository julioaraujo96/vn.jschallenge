// Image you have a set of data in JSON, describing official languages spoken by countries,
// as such:
const countries = [
    {
    country:"US",
    languages: ["en"]
    },
    {
    country:"BE",
    languages: ["nl","fr","de"]
    },
    {
    country:"NL",
    languages: ["nl"]
    },
    {
    country:"DE",
    languages: ["de"]
    },
    {
    country:"ES",
    languages: ["es"]
    }
];


// Write a function in javascript that:
// - returns the number of countries in the world

const countCountries = (countries) => {
   return 'There are ' + countries.length + ' countries';
}

console.log(`Countries in the world: ${countCountries(countries)}`);

// - finds the country with the most official languages, where they officially speak German
   

const germanSpeakingCountries = countries.filter(element => element.languages.includes('de'));

const getCountryWithMostLangs = (countryList) => {
    countryList.sort((a, b) => {
      if (a.languages.length < b.languages.length) {
        return -1;
      }
      if (a.languages.length > b.languages.length) {
        return 1;
      }
  
      return 0;
    });
    return countryList.at(-1).country;
  };

const getGermanSpeakingLangWithMostOfficialLangs = (germanSpeakingCountries) => {
    return getCountryWithMostLangs(germanSpeakingCountries);
  };


console.log(`The german speaking country with most official languages is: ${getCountryWithMostLangs(germanSpeakingCountries)}`);

// (de). - that counts all the official languages spoken in the listed countries.
    const getCountOfficialLangsEachCountry = (countries) => {
       countries.forEach(el => {
         console.log(`${el.country} has ${el.languages.length} official languages`);
        })
    }
getCountOfficialLangsEachCountry(countries);

//Not sure if you wanted the total of all the languages so here it goes:

const getTotalLangsCount = countries.reduce((count, current) => {
    console.log(current.languages.length);
    return count + current.languages.length;
  }, 0);

console.log({getTotalLangsCount});

// - to find the country with the highest number of official languages.
console.log(`Country with most official languages: ${getCountryWithMostLangs(countries)}`);

// - to find the most common official language(s), of all countries



