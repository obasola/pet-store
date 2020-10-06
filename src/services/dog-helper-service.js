export default class DogHelperService {
  dogList = [];
  constructor() {
    this.dogList = [
      {
        name: "Samson",
        breed: "Airdale Terrier",
        gender: "Male",
        age: 4,
        color: "Tan and black, tan and grizzle",
        weight: 50,
        image: "../assets/images/dogs/TERRIER_Airedale-Terrier.jpg",
        notes: "Pure-bred. Trained for competition"
      },

      {
        name: "Shelly",
        breed: "American Staffordshire Terrier",
        gender: "Female",
        age: 2,
        color: "Brindle - White and Greyish Brown",
        weight: 45,
        image: "../assets/images/dogs/TERRIER_American-Staffordshire-Terrier.jpg",
        notes: "Pure-bred. Trained for competition"
      },
      {
        name: "Bella",
        breed: "Basenji",
        gender: "Female",
        age: 3,
        color: "Chestnut red, black, tricolor, or brindle; all colors have white feet, chest and tall tip",
        weight: 21,
        image: "../assets/images/dogs/HOUND_Basenji.jpg",
        notes: "Pure-bred. Trained for competition"
      },
      {
        name: "Snoopy",
        breed: "Beagle",
        gender: "Female",
        age: 5,
        color: "Tri-color (black, tan and white), and combinations of black, tan, red, white, brown, lemon, blue and redtick",
        weight: 23,
        image: "../assets/images/dogs/HOUND_Beagle-(13inch).jpg",
        notes: "Pure-bred. Trained for competition"
      },
      {
        name: "Rascal",
        breed: "Coon Hound",
        gender: "Female",
        age: 3,
        color: "Black with rich tan markings",
        weight: 75,
        image: "../assets/images/dogs/HOUND_Black-And-Tan-Coonhound.jpg",
        notes: "Pure-bred. Trained for competition"
      },
      {
        name: "Sounder",
        breed: "Bluetick Coon Hound",
        gender: "Male",
        age: 6,
        color: "Dark blue, mottled body with black spots and may have tan markings over the eyes, on the cheeks and chest and below the tail, or red ticking on feet and lower legs",
        weight: 80,
        image: "../assets/images/dogs/HOUND_Bluetick-Coonhound.jpg",
        notes: "Pure-bred. Trained for competition"
      },
      {
        name: "Pretti",
        breed: "Dachshund",
        gender: "Female",
        age: 6,
        color: "Tan and Brown",
        weight: 18,
        image: "../assets/images/dogs/HOUND_Dachshund-(Smooth).jpg",
        notes: "Pure-bred. Trained for competition"
      },
      {
        name: "Bob",
        breed: "Bull Dog",
        gender: "Male",
        age: 7,
        color: "White and Tan",
        weight: 50,
        image: "../assets/images/dogs/NonSporting_Bulldog.jpg",
        notes: "Pure-bred. Trained for competition"
      },
      {
        name: "",
        breed: "French Bulldog",
        gender: "Female",
        age: 3,
        color: "Black with white spots",
        weight: 20,
        image: "../assets/images/dogs/NonSporting_French-Bulldog.jpg",
        notes: "Pure-bred. Trained for competition"
      }
    ];
  }

  getDogList() {
    // console.log("Return dogList containing: " + this.dogList.length + " rows");
    return this.dogList;
  }
  updateDogList(dog) {
    this.dogList.push(dog);
  }
  addDog() {
    alert("Feature un-implemented");
  }
}