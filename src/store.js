import { reactive } from 'vue';

const store = reactive({ 
    instructors: [
         {
            name: "Mike Hart",
            picture: "https://avada.website/driving/wp-content/uploads/sites/114/2019/01/instructor-mikehart.jpg",
            role: "Principle Instructor",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.",
            locations: [
                "San Diego",
                "Los Angeles",
                "Fresno",
                "San Francisco"
            ]
         },
         {
            name: "John Smith",
            picture: "",
            role: "Course Instructor",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.",
            locations: [
                "New York",
                "New Jersey",
                "Washington D.C.",
                "Virginia"
            ]
         },
         {
            name: "Angela Hart",
            picture: "",
            role: "Driving Instructor",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.",
            locations: [
                "New York",
                "South Carolina",
                "Washington D.C.",
                "Florida"
            ]
         }
    ],
    testimonials: []
});

export { store }