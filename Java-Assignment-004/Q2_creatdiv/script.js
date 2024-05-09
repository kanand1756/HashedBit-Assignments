
      function createDiv(width, height, text) {
        // Create a new div element
        var newDiv = document.createElement("div");

        // Set width and height with "px" unit
        newDiv.style.width = width + "px";
        newDiv.style.height = height + "px";

        // Set text content
        newDiv.textContent = text;

        // Append the new div to the container div
        document.getElementById("container").appendChild(newDiv);
      }

      // Example usage:
      createDiv(200, 100, "This is a new div");
