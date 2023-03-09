const seeds = [
    {
      image:
        "https://user-images.githubusercontent.com/2289/215248577-bdf7c342-e65c-4b11-bc53-cdb2c0c52d8b.jpg",
      prompt: "add fireworks to the sky",
    }
  ];
  
  export function getRandomSeed() {
    return seeds[Math.floor(Math.random() * seeds.length)];
  }