// Type narrowing berfungsi untuk mempersempit tipedata

// 1
function formatValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toLowerCase());
  } else if (typeof value === "number") {
    console.log(value.toFixed(2));
  }
}

formatValue("Hiya");
formatValue(42);

// 2
type Cat = {
  name: string;
  run: () => string;
};

type Fish = {
  name: string;
  swim: () => string;
};

const siameseCat = {
  name: "Proxie",
  run: () => "pitter pat",
};

const bettaFish = {
  name: "Neptune",
  swim: () => "bubble blub",
};

function move(pet: Cat | Fish) {
  if ("run" in pet) {
    return pet.run();
  } else if ("swim" in pet) {
    return pet.swim();
  }
}

console.log(move(siameseCat));
