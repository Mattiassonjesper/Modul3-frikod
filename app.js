(function () {
  const geoLocation = document.getElementById("coordinates");

  document.getElementById("browserName_btn").addEventListener("click", () => {
    const browserName = "Browser Name: " + navigator.appName;
    document.getElementById("browserText").innerHTML = browserName;
  });

  document.getElementById("paste_btn").addEventListener("click", () => {
    let paste_clipBoard = navigator.clipboard.readText();
    paste_clipBoard
      .then((text) => {
        document.getElementById("pasteText").innerHTML = text;
      })
      .catch((err) => {
        console.log(err);
      });
  });

  document.getElementById("location_btn").addEventListener("click", () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showCoordinates);
    } else {
      geoLocation.innerHTML = "Geolocation is not supported by this browser.";
    }
  });

  function showCoordinates(position) {
    geoLocation.innerHTML =
      "Latitude: " +
      position.coords.latitude +
      "<br>Longitude: " +
      position.coords.longitude;
  }
  function failOrSuccess(number) {
    return new Promise((resolve, reject) => {
      if (50 == number) {
        resolve("Sucess");
      } else {
        reject("Failed");
      }
    });
  }

  document.getElementById("sub_btn").addEventListener("click", () => {
    let number = document.getElementById("numInput").value;
    getResult(number);
  });

  async function getResult(number) {
    try {
      let result = await failOrSuccess(number);
      document.getElementById("result").innerHTML = result;
    } catch (err) {
      document.getElementById("result").innerHTML = err;
    }
  }
  document.getElementById("sub_catch_btn").addEventListener("click", () => {
    let number = document.getElementById("numInput").value;
    failOrSuccess(number)
      .then((message) => {
        document.getElementById("result").innerHTML = message + " .then";
      })
      .catch((message) => {
        document.getElementById("result").innerHTML = message + " .catch";
      });
  });
})();
