// Get the "cafe" parameter from the URL
const params = new URLSearchParams(window.location.search);
const cafeId = params.get("cafe");

const cafes = {
    kuku: {
        name: "Kuku Café Bistro",
        desc: "Kuku Café Bistro is a cozy and trendy spot in Montalban, offering great coffee, desserts, and a welcoming atmosphere with flexible dining options and modern amenities.",
        hours: "06:00 AM – 01:00 AM daily",
        address: "J.P Rizal St., Montalban Rizal",
        image: "/dist/img/kukucafe/Kuku Cafe Bistro.jpg",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4742.931704642457!2d121.1450721!3d14.7320135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bb471a308543%3A0x693d69a6cd3bf8fb!2sKuku%20Cafe%20Bistro!5e1!3m2!1sen!2sph!4v1786995124796!5m2!1sen!2sph",
        amenities: ["WiFi", "Parking", "Dine-in", "Take-out", "Restroom"]
    },
    tara: {
        name: "Tara Inom Café",
        desc: "Playful modern café with bold wall art.",
        hours: "09:00 AM – 02:00 AM daily",
        address: "Libongco Highway, Montalban Rizal",
        image: "/dist/img/aestheticCafe/trainom/tarainom.jpg",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d151775.64296825745!2d121.07097445820311!3d14.72938820000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bb095c15f7d3%3A0x95ea6a296191821f!2sTara%20Inom%20Cafe%20Montalban%20Hi-way!5e1!3m2!1sen!2sph!4v1786996587683!5m2!1sen!2sph",
        amenities: ["WiFi", "Pets Allowed", "Parking"]
    }
};

if (cafeId && cafes[cafeId]) {
    const cafe = cafes[cafeId];
    document.getElementById("cafeName").textContent = cafe.name;
    document.getElementById("cafeDesc").textContent = cafe.desc;
    document.getElementById("cafeHours").textContent = `Hours: ${cafe.hours}`;
    document.getElementById("cafeAddress").textContent = `Address: ${cafe.address}`;
    document.getElementById("cafeImage").src = cafe.image;
    document.getElementById("cafeMap").src = cafe.map;

    document.getElementById("cafeAmenities").innerHTML = cafe.amenities
        .map(a => `<span class="bg-white text-black px-2 py-1 rounded text-xs">${a}</span>`)
        .join("");
}

