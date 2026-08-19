// Get the "cafe" parameter from the URL
const params = new URLSearchParams(window.location.search);
const cafeId = params.get("cafe");

const cafes = {
    kuku: {
        name: "Kuku Café Bistro",
        rate: "4.9",
        desc: "Kuku Café Bistro is a cozy and trendy spot in Montalban, offering great coffee, desserts, and a welcoming atmosphere with flexible dining options and modern amenities.",
        hours: "06:00 AM – 01:00 AM daily",
        address: "J.P Rizal St., Montalban Rizal",
        image: "../../img/kukucafe/Kuku Cafe Bistro.jpg",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4742.931704642457!2d121.1450721!3d14.7320135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bb471a308543%3A0x693d69a6cd3bf8fb!2sKuku%20Cafe%20Bistro!5e1!3m2!1sen!2sph!4v1786995124796!5m2!1sen!2sph",
        amenities: ["WiFi", "Parking", "Dine-in", "Take-out", "Restroom"]
    },
    tara: {
        name: "Tara Inom Café",
        rate: "4.8",
        desc: "Playful modern café with bold wall art.",
        hours: "09:00 AM – 02:00 AM daily",
        address: "Libongco Highway, Montalban Rizal",
        image: "../../img/aestheticCafe/trainom/tarainom.jpg",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d151775.64296825745!2d121.07097445820311!3d14.72938820000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bb095c15f7d3%3A0x95ea6a296191821f!2sTara%20Inom%20Cafe%20Montalban%20Hi-way!5e1!3m2!1sen!2sph!4v1786996587683!5m2!1sen!2sph",
        amenities: ["WiFi", "Parking", "Dine-in", "Take-out", "Restroom", "Pets Allowed"]
    },
    sixdcafe: {
        name: "6D Café",
        rate: "4.8",
        desc: "6D Café is a welcoming spot in San Jose, Montalban, offering cozy vibes, modern amenities, and flexible dining options for groups, families, and casual hangouts.",
        hours: "12:30 PM – 12:00 AM daily",
        address: "681 Ipil St, San Jose, Montalban Rizal",
        image: "../../img/6dcafe/6d_2.jpg",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4742.977530716012!2d121.13084137510866!3d14.72990798577186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bbd1a57b8ce1%3A0xab9ae2ffec98d5f0!2s6D%20Cafe!5e1!3m2!1sen!2sph!4v1787088261976!5m2!1sen!2sph",
        amenities: ["WiFi", "Parking", "Dine-in", "Take-out", "Restroom", "Pets Allowed"]
    },
    dearmondays: {
        name: "Dear Mondays Café",
        rate: "4.8",
        desc: "Dear Mondays Café is a cozy and stylish café in Montalban, offering great coffee, desserts, and a welcoming atmosphere perfect for casual hangouts or family visits.",
        hours: "09:00 AM – 11:00 PM daily",
        address: "Liamzon Street, Montalban Rizal",
        image: "../../img/Dear Monday/unnamed.webp",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4742.902950085938!2d121.1330803!3d14.733334500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bb5a641562cb%3A0x3c398570d950602a!2sDear%20Mondays%20Cafe!5e1!3m2!1sen!2sph!4v1787088393899!5m2!1sen!2sph",
        amenities: ["WiFi", "Dine-in", "Take-out", "Restroom", "Pets Allowed"]
    },
    catsanctuary: {
        name: "Cat Sanctuary Café",
        rate: "4.7",
        desc: "Cat Sanctuary Café is a quirky, cat‑themed café in Montalban, offering cozy seating, playful atmosphere, and amenities like WiFi, parking, and a unique cat lounge.",
        hours: "08:00 AM – 11:00 PM daily",
        address: "Litex Village, Montalban Rizal",
        image: "../../img/Catsanctuary/Cappuccino.jpg",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4742.834275051214!2d121.13139790000002!3d14.73648900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bb0017e97dcd%3A0x3c6004d18b256892!2sCat%20Sanctuary%20Cafe!5e1!3m2!1sen!2sph!4v1787088587932!5m2!1sen!2sph",
        amenities: ["WiFi", "Parking", "Dine-in", "Take-out", "Restroom", "Cat Lounge"]
    },
    calleco: {
        name: "Calle Co. Café",
        rate: "5.0",
        desc: "Calle Co. Café is a modern neighborhood café in San Jose, Rodriguez Rizal, open 24 hours with cozy seating, great coffee, and essential amenities for casual meetups or study sessions.",
        hours: "Open 24 hours",
        address: "Litex Village, San Jose, Rodriguez Rizal",
        image: "../../img/calleco/calleco.jpg",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4742.880081774837!2d121.12962309999995!3d14.734385000000009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bb002670f8c3%3A0xa3adaca02256ab1d!2sCalle%20Co.%20San%20Jose%2C%20Rodriguez%20Rizal!5e1!3m2!1sen!2sph!4v1787088718901!5m2!1sen!2sph",
        amenities: ["WiFi", "Dine-in", "Take-out", "Restroom"]
    },
    kapetagpuan: {
        name: "Kape at Tagpuan",
        rate: "4.5",
        desc: "Kape at Tagpuan is a cozy café in Montalban offering great coffee, desserts, tea selections, and live performances in a casual, trendy atmosphere.",
        hours: "11:00 AM – 10:00 PM daily",
        address: "200 Rodriguez Highway, Montalban Rizal",
        image: "../../img/kapeTagpuan/kape.jpg",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4742.975290958403!2d121.13961789999996!3d14.730010900000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bb007a28cf65%3A0x19048ba54ec587b1!2sKape%20at%20Tagpuan!5e1!3m2!1sen!2sph!4v1787089151493!5m2!1sen!2sph",
        amenities: ["WiFi", "Parking", "Dine-in", "Take-out", "Restroom"]
    },
    CandC: {
        name: "C&C Café PH",
        rate: "4.4",
        desc: "C&C Café PH is a 24/7 café in Montalban, offering coffee, snacks, and a welcoming atmosphere with essential amenities for students, professionals, and casual visitors.",
        hours: "Open 24/7",
        address: "Brgy. Balite, Montalban Rizal",
        image: "../../img/c&c/C&C Cafe.webp",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4742.964859586688!2d121.14477749999996!3d14.730490199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bb09d2f2c2a3%3A0x2402575c3a2a6586!2sC%26C%20Cafe%20PH!5e1!3m2!1sen!2sph!4v1787089469766!5m2!1sen!2sph",
        amenities: ["WiFi", "Parking", "Dine-in", "Take-out", "Restroom"]
    },
    callecafe: {
        name: "Calle Café",
        rate: "4.4",
        desc: "Calle Café by Don Gabriel is a cozy neighborhood café in Montalban, offering coffee, pastries, and a welcoming atmosphere with modern amenities.",
        hours: "06:00 AM – 02:00 PM daily",
        address: "J.P Rizal St., Montalban Rizal",
        image: "../../img/aestheticCafe/calleCafe/calle.jpg",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4742.9752104337485!2d121.14465299999999!3d14.730014599999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bb24f974d3cd%3A0x7624f2e66e29920b!2sCalle%20Cafe%20by%20Don%20Gabriel%20Montalban%20-%20New%20Location!5e1!3m2!1sen!2sph!4v1787089625795!5m2!1sen!2sph",
        amenities: ["WiFi", "Parking", "Dine-in", "Take-out", "Restroom", "Pets Allowed"]
    },
    //-----------------------------------AESTHETIC CAFE-----------------------------------//
    dzone: {
        name: "D‑Zone Sports Bar Café",
        rate: "4.8",
        desc: "D‑Zone Sports Bar Café is a casual and trendy spot in Montalban, perfect for groups and nightlife hangouts, offering food, drinks, and a lively atmosphere.",
        hours: "02:00 PM – 02:00 AM daily",
        address: "#94 Yakal St., Montalban Rizal",
        image: "../../img/aestheticCafe/dzone/D-Zone Sports Bar Café.webp",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4743.0223857858655!2d121.13417629999996!3d14.727846800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bb00517d2d9b%3A0x68e5448788ee71a0!2sD-Zone%20Sports%20Bar%20Caf%C3%A9!5e1!3m2!1sen!2sph!4v1787088843696!5m2!1sen!2sph",
        amenities: ["Dine-in", "Restroom", "Parking"]
    },
    embrace: {
        name: "Embrace Café",
        rate: "4.4",
        desc: "Embrace Café is a cozy and aesthetic café in Montalban, perfect for students, families, and groups. It offers coffee, desserts, and a welcoming atmosphere with modern amenities.",
        hours: "10:00 AM – 08:00 PM daily",
        address: "Tagumpay Mayon Ave., San Jose, Montalban Rizal",
        image: "../../img/aestheticCafe/embrace/embrace.webp",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4742.62084336053!2d121.1319856!3d14.746288499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bbb5ca1385ad%3A0x6149f2df4afde6b!2sEmbrace%20Caf%C3%A9%2C%20Tagumpay%2C%20Rizal!5e1!3m2!1sen!2sph!4v1787089823151!5m2!1sen!2sph",
        amenities: ["WiFi", "Parking", "Dine-in", "Take-out", "Restroom"]
    },
    marrom: {
        name: "Wamon Midori Café",
        rate: "4.3",
        desc: "Wamon Midori Café, also known as Marrom Midori – House of Coffee and Matcha, is a cozy café in Montalban offering specialty coffee, matcha drinks, and a relaxing atmosphere.",
        hours: "10:00 AM – 08:00 PM daily",
        address: "Eastwood Greenview, Montalban Rizal",
        image: "../../img/aestheticCafe/Marrom Midori/Marrom Midori.webp",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4742.79800613337!2d121.15168489999999!3d14.738154699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bbbca37faa15%3A0xac6949e22925c1a2!2sMarrom%20Midori-%20House%20of%20Coffee%20and%20Matcha!5e1!3m2!1sen!2sph!4v1787090592339!5m2!1sen!2sph",
        amenities: ["WiFi", "Parking", "Dine-in", "Take-out"]
    }
};

if (cafeId && cafes[cafeId]) {
    const cafe = cafes[cafeId];
    document.getElementById("cafeName").textContent = cafe.name;
    document.getElementById("cafeRate").textContent = cafe.rate + " out of 5" ;
    document.getElementById("cafeDesc").textContent = cafe.desc;
    document.getElementById("cafeHours").textContent = `Hours: ${cafe.hours}`;
    document.getElementById("cafeAddress").textContent = `Address: ${cafe.address}`;
    document.getElementById("cafeImage").src = cafe.image;
    document.getElementById("cafeMap").src = cafe.map;

    document.getElementById("cafeAmenities").innerHTML = cafe.amenities
        .map(a => `<span class="bg-white text-black px-2 py-1 rounded text-xs">${a}</span>`)
        .join("");
}

