<template>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-3 mt-5" v-for="card in cards" :key="card.id">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ card.title }}</h5>
              <p class="card-text">{{ card.description }}</p>
              <a :href="card.link" class="btn btn-products">Ver más</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TheCars',
    data() {
      return {
        cards: [
          {
            id: 1,
            title: "Card 1",
            description: "This is the description for Card 1.",
            link: "path/to/card1-details"
          },
          {
            id: 2,
            title: "Card 2",
            description: "This is the description for Card 2.",
            link: "path/to/card2-details"
          },
          {
            id: 3,
            title: "Card 3",
            description: "This is the description for Card 3.",
            link: "path/to/card3-details"
          },
          {
            id: 4,
            title: "Card 4",
            description: "This is the description for Card 4.",
            link: "path/to/card4-details"
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
.btn-products{
  color: white;
  background: #14C582;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
  </style>
  