const container = document.querySelector(".container")
const coffees = [
  { name: "Nikon Z5 Mirrorles Cameras", image: "images/coffee1.jpg" },
  { name: "LUMIX DMC-FZ2500S", image: "images/coffee2.jpg" },
  { name: "SONY Alpha a5100", image: "images/coffee3.jpg" },
  { name: "Canon EOS 4000D SLR", image: "images/coffee4.jpg" },
  { name: "Samsung NX3000", image: "images/coffee5.jpg" },
  { name: "SONY Alpha a390", image: "images/coffee6.jpg" },
  { name: "Nikon Z fc Mirrorles Camera", image: "images/coffee7.jpg" },
  { name: "Nikon Z f Mirrorles Camera", image: "images/coffee8.jpg" },
  { name: "Lensa Sirui Venus 35mm T2.9", image: "images/coffee9.jpg" },
  { name: "SONY Alpha A7 Mark II Kit", image: "images/coffee10.jpg" },
  { name: "Kamera Go Pro x200", image: "images/coffee11.jpg" },
  { name: "SONY Vidio Kamera HXR", image: "images/coffee12.jpg" },
]

const showCoffees = () => {
  let output = ""
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCoffees)

