import anuragaffection from '../assets/anuragaffection.jpg'

export const Details = {
    bio: {
        profile_image : anuragaffection,
        first_name: "Steve",
        last_name: "Rogers",
        role : "Software Developer",
        description:
            "As Captain America, I aim to leverage my leadership skills and dedication to serve, transitioning into a Full Stack Developer role to contribute to technological advancements.",
    },
    address: {
        postal_code: "101010",
        city: "Brooklyn",
        state: "New York",
        country: "USA",
        phone: "+91 9876543210",
        email: "steve.rogers@avengers.com",
    },
    experience: [
        {
            id: 1,
            job_title: "Super Soldier",
            organization_name: "Avengers",
            start_year: "1941",
            end_year: "Present",
        },
        {
            id: 2,
            job_title: "S.H.I.E.L.D Agent",
            organization_name: "S.H.I.E.L.D",
            start_year: "1941",
            end_year: "2023",
        },
    ],
    education: {
        type: "Post Graduation",
        university: "Stark Industries",
        degree: "B.Tech in Superhero Technology",
        start_year: "1941",
        end_year: "1945",
    },
    key_skills: ["Leadership", "Combat Skills", "Technology", "Strategy", "Teamwork"],
};
