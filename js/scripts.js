$(document).ready(function () {
  $("form#formOne").submit(function (event) {
    event.preventDefault();
    const study = $("input:radio[name=study]:checked").val();
    const location = $("input:radio[name=location]:checked").val();
    const time = $("input:radio[name=time]:checked").val();
    const snack = $("input:radio[name=snack]:checked").val();
    const drink = $("input:radio[name=drink]:checked").val();
    let result;

    if (study === "visual" && location === "library" && time === "morning" && snack === "fruits" && drink === "soda") {
      result = "C#";
    }

    else if (study === "audio" && location === "cafe" && time === "afternoon" && snack === "chips" && drink === "coffee") {
      result = "JavaScript";
    }

    else { result = "None"; }

    $("#result").text(result);
    $("#result").show();
  });
});