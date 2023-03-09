const seeds = [
    {
      image:
"https://images.unsplash.com/photo-1678357437275-a4016d7faafd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      prompt: "Make the dog be black",
    }
  ];
  
  export function getRandomSeed() {
    return seeds[Math.floor(Math.random() * seeds.length)];
  }