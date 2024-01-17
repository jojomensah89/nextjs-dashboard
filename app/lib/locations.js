

const locations =
    [
        {
            "id": 0,
            "name": "Acme Fresh Start Housing",
            "city": "Chicago",
            "state": "IL",
            "photo": "https://angular.dev/assets/tutorials/common/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
            "availableUnits": 4,
            "wifi": true,
            "laundry": true
        },
        {
            "id": 1,
            "name": "A113 Transitional Housing",
            "city": "Santa Monica",
            "state": "CA",
            "photo": "https://angular.dev/assets/tutorials/common/brandon-griggs-wR11KBaB86U-unsplash.jpg",
            "availableUnits": 0,
            "wifi": false,
            "laundry": true
        },
        {
            "id": 2,
            "name": "Warm Beds Housing Support",
            "city": "Juneau",
            "state": "AK",
            "photo": "https://angular.dev/assets/tutorials/common/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg",
            "availableUnits": 1,
            "wifi": false,
            "laundry": false
        },
        {
            "id": 3,
            "name": "Homesteady Housing",
            "city": "Chicago",
            "state": "IL",
            "photo": "https://angular.dev/assets/tutorials/common/ian-macdonald-W8z6aiwfi1E-unsplash.jpg",
            "availableUnits": 1,
            "wifi": true,
            "laundry": false
        },
        {
            "id": 4,
            "name": "Happy Homes Group",
            "city": "Gary",
            "state": "IN",
            "photo": "https://angular.dev/assets/tutorials/common/krzysztof-hepner-978RAXoXnH4-unsplash.jpg",
            "availableUnits": 1,
            "wifi": true,
            "laundry": false
        },
        {
            "id": 5,
            "name": "Hopeful Apartment Group",
            "city": "Oakland",
            "state": "CA",
            "photo": "https://angular.dev/assets/tutorials/common/r-architecture-JvQ0Q5IkeMM-unsplash.jpg",
            "availableUnits": 2,
            "wifi": true,
            "laundry": true
        },
        {
            "id": 6,
            "name": "Seriously Safe Towns",
            "city": "Oakland",
            "state": "CA",
            "photo": "https://angular.dev/assets/tutorials/common/phil-hearing-IYfp2Ixe9nM-unsplash.jpg",
            "availableUnits": 5,
            "wifi": true,
            "laundry": true
        },
        {
            "id": 7,
            "name": "Hopeful Housing Solutions",
            "city": "Oakland",
            "state": "CA",
            "photo": "https://angular.dev/assets/tutorials/common/r-architecture-GGupkreKwxA-unsplash.jpg",
            "availableUnits": 2,
            "wifi": true,
            "laundry": true
        },
        {
            "id": 8,
            "name": "Seriously Safe Towns",
            "city": "Oakland",
            "state": "CA",
            "photo": "https://angular.dev/assets/tutorials/common/saru-robert-9rP3mxf8qWI-unsplash.jpg",
            "availableUnits": 10,
            "wifi": false,
            "laundry": false
        },
        {
            "id": 9,
            "name": "Capital Safe Towns",
            "city": "Portland",
            "state": "OR",
            "photo": "https://angular.dev/assets/tutorials/common/webaliser-_TPTXZd9mOo-unsplash.jpg",
            "availableUnits": 6,
            "wifi": true,
            "laundry": true
        }, {
    "id": 10,
    "name": "Sunny Shelters",
    "city": "Miami",
    "state": "FL",
    "photo": "https://angular.dev/assets/tutorials/common/sunny-shelters.jpg",
    "availableUnits": 3,
    "wifi": true,
    "laundry": true
  },
  {
    "id": 11,
    "name": "Cozy Apartments",
    "city": "New York",
    "state": "NY",
    "photo": "https://angular.dev/assets/tutorials/common/cozy-apartments.jpg",
    "availableUnits": 8,
    "wifi": true,
    "laundry": false
  },
  {
    "id": 12,
    "name": "Mountain Retreat",
    "city": "Asheville",
    "state": "NC",
    "photo": "https://angular.dev/assets/tutorials/common/mountain-retreat.jpg",
    "availableUnits": 2,
    "wifi": false,
    "laundry": true
  },{
    "id": 13,
    "name": "Harbor Views",
    "city": "San Francisco",
    "state": "CA",
    "photo": "https://angular.dev/assets/tutorials/common/harbor-views.jpg",
    "availableUnits": 5,
    "wifi": true,
    "laundry": true
  },
  {
    "id": 14,
    "name": "Urban Living",
    "city": "Los Angeles",
    "state": "CA",
    "photo": "https://angular.dev/assets/tutorials/common/urban-living.jpg",
    "availableUnits": 6,
    "wifi": true,
    "laundry": false
  },
  {
    "id": 15,
    "name": "Tranquil Homes",
    "city": "Seattle",
    "state": "WA",
    "photo": "https://angular.dev/assets/tutorials/common/tranquil-homes.jpg",
    "availableUnits": 4,
    "wifi": false,
    "laundry": true
  },
  {
    "id": 16,
    "name": "Golden Gate Residences",
    "city": "San Francisco",
    "state": "CA",
    "photo": "https://angular.dev/assets/tutorials/common/golden-gate-residences.jpg",
    "availableUnits": 9,
    "wifi": true,
    "laundry": true
  },
  {
    "id": 17,
    "name": "Countryside Villas",
    "city": "Austin",
    "state": "TX",
    "photo": "https://angular.dev/assets/tutorials/common/countryside-villas.jpg",
    "availableUnits": 3,
    "wifi": false,
    "laundry": false
  },
  {
    "id": 18,
    "name": "Tropical Paradise Homes",
    "city": "Miami",
    "state": "FL",
    "photo": "https://angular.dev/assets/tutorials/common/tropical-paradise-homes.jpg",
    "availableUnits": 7,
    "wifi": true,
    "laundry": true
  },
  {
    "id": 19,
    "name": "Cityscape Apartments",
    "city": "New York",
    "state": "NY",
    "photo": "https://angular.dev/assets/tutorials/common/cityscape-apartments.jpg",
    "availableUnits": 5,
    "wifi": true,
    "laundry": false
  },
  {
    "id": 20,
    "name": "Serene Retreat",
    "city": "Denver",
    "state": "CO",
    "photo": "https://angular.dev/assets/tutorials/common/serene-retreat.jpg",
    "availableUnits": 2,
    "wifi": false,
    "laundry": true
  },
    ]

module.exports = {
    locations
}
