/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our", "my", "everyones"];
let adjective = ["best", "greatest", "coolest", "largest"];
let noun = ["knives", "footballs", "bathroom", "pumpkin"];
let ext = [".com", ".net", ".us", ".gov"];

let getDomain = () => {
  for (let pronounIndex = 0; pronounIndex < pronoun.length; pronounIndex++) {
    for (
      let adjectiveIndex = 0;
      adjectiveIndex < adjective.length;
      adjectiveIndex++
    )
      for (let nounIndex = 0; nounIndex < noun.length; nounIndex++)
        for (let extIndex = 0; extIndex < ext.length; extIndex++)
          console.log(
            pronoun[pronounIndex] +
              adjective[adjectiveIndex] +
              noun[nounIndex] +
              ext[extIndex]
          );
  }
};
let domainName = getDomain();
