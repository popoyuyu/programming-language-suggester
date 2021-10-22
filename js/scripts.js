$(document).ready(function () {
  $("form#formOne").submit(function (event) {
    event.preventDefault();
    const study = $("input:radio[name=study]:checked").val();
    const location = $("input:radio[name=location]:checked").val();
    const time = $("input:radio[name=time]:checked").val();
    const snack = $("input:radio[name=snack]:checked").val();
    const drink = $("input:radio[name=drink]:checked").val();
    const name = $("#name").val();
    let result = "";

    let cSharpCounter = 0
    let jsCounter = 0
    let pythonCounter = 0

    if (study === "visual") {
      cSharpCounter = cSharpCounter + 1
    } else if (study === "audio") {
      jsCounter = jsCounter + 1
    } else if (study === "handson") {
      pythonCounter = pythonCounter + 1
    }
    if (location === "library") {
      cSharpCounter = cSharpCounter + 1
    } else if (location === "cafe") {
      cSharpCounter = cSharpCounter + 1
    } else if (location === "home") {
      pythonCounter = pythonCounter + 1
    }
    if (time === "morning") {
      pythonCounter = pythonCounter + 1
    } else if (time === "afternoon") {
      jsCounter = jsCounter + 1
    } else if (time === "night") {
      cSharpCounter = cSharpCounter + 1
    }
    if (snack === "fruits") {
      cSharpCounter = cSharpCounter + 1
    } else if (snack === "chips") {
      jsCounter = jsCounter + 1
    } else if (snack === "popcorn") {
      pythonCounter = pythonCounter + 1
    }
    if (drink === "soda") {
      cSharpCounter = cSharpCounter + 1
    } else if (drink === "coffee") {
      jsCounter = jsCounter + 1
    } else if (drink === "tea") {
      pythonCounter = pythonCounter + 1
    }
    console.log(cSharpCounter, jsCounter, pythonCounter);

    // if (study === "visual" || location === "library" && time === "morning" && snack === "fruits" && drink === "soda") {
    //   result = "C#";
    // }

    // else if (study === "audio" && location === "cafe" && time === "afternoon" && snack === "chips" && drink === "coffee") {
    //   result = "JavaScript";
    // }

    // else if (study === "handson" && location === "home" && time === "night" && snack === "popcorn" && drink === "tea") {
    //   result = "Python";
    // }

    result = name + "you should study" + result
    $("#result").text(result);
    $("#result").show();
  });
});