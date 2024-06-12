import { reactive } from 'vue';

const store = reactive({ 
    instructors: [
         {
            name: "Mike Hart",
            picture: {
                home: "mike-hart-home",
                about: "mike-hart-about",
            },
            role: "Principle Instructor",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.",
            shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            locations: [
                "San Diego",
                "Los Angeles",
                "Fresno",
                "San Francisco"
            ]
         },
         {
            name: "John Smith",
            picture: {
                home: "john-smith-home",
                about: "john-smith-about",
            },
            role: "Course Instructor",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.",
            shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            locations: [
                "New York",
                "New Jersey",
                "Washington D.C.",
                "Virginia"
            ]
         },
         {
            name: "Angela Hart",
            picture: {
                home: "angela-hart-home",
                about: "angela-hart-about",
            },
            role: "Driving Instructor",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.",
            shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            locations: [
                "New York",
                "South Carolina",
                "Washington D.C.",
                "Florida"
            ]
         }
    ],
    testimonials: [
        {
            name: "Sophia Jones",
            picture: "testimonial-sophia.png"
        },
        {
            name: "Harold Green",
            picture: "testimonial-harold.webp"
        },
        {
            name: "Grant Harvey",
            picture: "testimonial-grant.webp"
        },
        {
            name: "Kate Lewis",
            picture: "testimonial-kate.webp"
        },
        {
            name: "Kelly Johnson",
            picture: "testimonial-kelly.webp"
        }
    ]
});

export { store }