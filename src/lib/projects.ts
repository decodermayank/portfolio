export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  type: string;
  stack: string[];
  description: string;
  content: {
    introduction: string;
    aimAndObjectives: string[];
    workingPrinciple: {
      step: string;
      description: string;
    }[];
    components: {
      name: string;
      role: string;
    }[];
    applications: string[];
    futureScope: string[];
  };
  links: {
    github?: string;
    live?: string;
  };
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "real-estate-platform",
    title: "Real Estate Lead Generation Platform",
    subtitle: "Prabhakar Infratech",
    type: "Web Development · Production",
    stack: ["PHP", "MySQL PDO", "Tailwind CSS", "JavaScript", "AJAX", "Bcrypt"],
    description: "Full-stack lead generation platform built solo. AJAX capture forms, content-gate system, 3-role admin panel (superadmin/admin/employee), Excel/CSV/PDF export, advanced search, bcrypt auth, dark-mode UI.",
    content: {
      introduction: "A comprehensive lead generation and management platform designed for the real estate sector. Built to streamline the flow of inquiries from potential buyers to the sales team while providing robust administrative controls.",
      aimAndObjectives: [
        "Automate lead capture via AJAX-powered forms.",
        "Implement a content-gate system for property details.",
        "Create a 3-role hierarchical admin panel.",
        "Provide advanced analytics and data export (Excel/CSV/PDF)."
      ],
      workingPrinciple: [
        { step: "Lead Capture", description: "Asynchronous form submissions ensure a smooth user experience without page reloads." },
        { step: "Secure Auth", description: "Bcrypt encryption used for secure admin and employee authentication." },
        { step: "Data Export", description: "Integrated libraries for generating reports in multiple formats." }
      ],
      components: [
        { name: "PHP / PDO", role: "Backend logic and secure database interactions." },
        { name: "MySQL", role: "Relational database for lead and user management." },
        { name: "Tailwind CSS", role: "Responsive and modern UI design." },
        { name: "AJAX", role: "Real-time form handling." }
      ],
      applications: [
        "Real Estate Agencies",
        "Lead Management Systems",
        "Enterprise CRM"
      ],
      futureScope: [
        "Integration with CRM APIs (Salesforce/HubSpot).",
        "Automated email/SMS notifications.",
        "AI-based lead scoring."
      ]
    },
    links: { github: "#", live: "#" },
    featured: true
  },
  {
    slug: "perimeta",
    title: "PERIMETA",
    subtitle: "An Intelligent Perimeter Radar Surveillance System",
    type: "IoT / Embedded Systems",
    stack: ["Arduino", "Embedded C", "IoT", "Sensors"],
    description: "A radar-style ultrasonic detection system designed to scan surroundings and provide real-time alerts.",
    content: {
      introduction: "PERIMETA is a radar-style ultrasonic detection system designed to scan its surroundings, identify objects within a defined range, and provide real-time alerts. It leverages the simplicity of ultrasonic technology combined with Arduino processing power.",
      aimAndObjectives: [
        "Use ultrasonic sensor and Arduino for accurate distance measurement.",
        "Enable a scanning function by rotating the ultrasonic sensor with a servo motor.",
        "Detect obstacles within a critical distance and trigger alerts.",
        "Display measured distance in real-time on an LCD screen."
      ],
      workingPrinciple: [
        { step: "Sweeping Motion", description: "A servo motor rotates the ultrasonic sensor back and forth across a set angle (e.g., 180 degrees)." },
        { step: "Distance Measurement", description: "The Arduino calculates the distance by measuring the time taken for high-frequency sound waves to return as echoes." },
        { step: "Data Processing", description: "If an object is detected within a pre-defined 'critical zone', it triggers audible and visual alerts." }
      ],
      components: [
        { name: "Arduino Uno", role: "The central processing unit (The Brain)." },
        { name: "HC-SR04 Ultrasonic Sensor", role: "Primary detection device (The Eyes)." },
        { name: "SG90 Servo Motor", role: "Provides panning motion for scanning (The Neck)." },
        { name: "I2C LCD 1602", role: "Real-time user interface (The Information Screen)." },
        { name: "Passive Buzzer & LEDs", role: "Audible and visual alert system." }
      ],
      applications: [
        "Vehicle Safety Systems (Parking assistance)",
        "Autonomous Robots (Navigation and obstacle avoidance)",
        "Security & Perimeter Monitoring",
        "Industrial Automation"
      ],
      futureScope: [
        "LiDAR or mmWave Radar integration for higher accuracy.",
        "Wi-Fi/Bluetooth connectivity for smartphone alerts.",
        "IoT platforms (Blynk/Thingspeak) integration.",
        "AI-based object classification."
      ]
    },
    links: { github: "#", live: "#" }
  },
  {
    slug: "linesaathi",
    title: "LineSaathi",
    subtitle: "Smart Mess Queue Management System",
    type: "IoT / Smart Infrastructure",
    stack: ["Arduino Uno", "IR Sensors", "Python", "Flask", "SQLite"],
    description: "Real-time occupancy monitoring and wait-time estimation system for institutional mess facilities.",
    content: {
      introduction: "This project presents a real-time, low-cost hardware solution designed to manage crowd congestion in institutional mess facilities using bidirectional IR sensors.",
      aimAndObjectives: [
        "Live Counting: Track real-time occupancy using affordable IR sensors.",
        "Smart Wait Time: Estimate dynamic waiting time based on actual exit rate.",
        "Overcrowding Alert: Notify students and staff when capacity thresholds are crossed.",
        "Dashboard Display: Real-time visualization on a web-based dashboard."
      ],
      workingPrinciple: [
        { step: "Bidirectional Detection", description: "Two IR sensors mounted at the entrance confirm entry/exit direction based on the sequence of triggering." },
        { step: "Wait Time Algorithm", description: "Estimated Wait = (Current Occupancy - Safe Threshold) / Average Exit Rate." },
        { step: "Dashboard Sync", description: "A Python script reads Serial data and updates a web dashboard for real-time visibility." }
      ],
      components: [
        { name: "Arduino Uno", role: "Main microcontroller for sensor polling and logic." },
        { name: "IR Obstacle Sensors", role: "Mounted for bidirectional entry/exit detection." },
        { name: "Python/Flask Backend", role: "Processes data and serves the web dashboard." },
        { name: "Buzzer & LEDs", role: "Physical indicators for current crowd levels." }
      ],
      applications: [
        "College Mess & Canteens",
        "Hospital OPD & Pharmacy queues",
        "Banking & Government service centers",
        "Retail & Transport hubs"
      ],
      futureScope: [
        "Mobile app integration for remote tracking.",
        "Predictive analytics for peak-hour suggestions.",
        "Push notifications for crowd alerts.",
        "Scalability to multi-door environments."
      ]
    },
    links: { github: "#", live: "#" }
  },
  {
    slug: "ngo-awareness",
    title: "NGO Awareness Website",
    subtitle: "InAmigos Foundation",
    type: "Web Development",
    stack: ["HTML", "CSS", "JavaScript"],
    description: "Responsive NGO awareness site with volunteer, donation, and campaign sections. Developed during Web Development Internship.",
    content: {
      introduction: "A responsive and user-friendly website built for InAmigos Foundation to raise awareness about their social initiatives and facilitate community engagement.",
      aimAndObjectives: [
        "Create a clean and informative platform for social causes.",
        "Implement responsive design for all device types.",
        "Facilitate easy volunteer registration and donations.",
        "Showcase ongoing and past campaigns."
      ],
      workingPrinciple: [
        { step: "Modern UI", description: "Utilized semantic HTML and flexible CSS layouts to create a professional look." },
        { step: "Interactivity", description: "JavaScript used for dynamic content updates and form validations." },
        { step: "Mobile First", description: "Ensured a seamless experience across mobile, tablet, and desktop screens." }
      ],
      components: [
        { name: "HTML5", role: "Structural foundation of the website." },
        { name: "CSS3", role: "Styling and responsive grid layouts." },
        { name: "JavaScript", role: "Frontend logic and interactivity." }
      ],
      applications: [
        "NGO Platforms",
        "Charity Portals",
        "Community Outreach"
      ],
      futureScope: [
        "Integration with payment gateways for direct donations.",
        "CMS integration for easy blog/news updates.",
        "Multilingual support."
      ]
    },
    links: { github: "#", live: "#" }
  }
];
