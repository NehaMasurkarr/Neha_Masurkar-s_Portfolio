export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'Predictive Analytics for Employee Retention',
      desc: 'Designed and developed a machine learning model using Scikit-learn to predict employee attrition, achieving a 20% improvement in accuracy. Implemented advanced data preprocessing and validation techniques, enhancing model robustness by 12%. Deployed the solution as a scalable REST API with Flask, NGINX, and Gunicorn, efficiently supporting over 100 concurrent users. Provided actionable insights to business stakeholders, driving enhanced retention strategies and decision-making.',
      href: 'https://github.com/NehaMasurkarr/Employee-Retention-Predictor',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/graph.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'Python',
          path: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
        },
        {
          id: 2,
          name: 'Scikit-learn',
          path: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
        },
        {
          id: 3,
          name: 'Flask',
          path: '/assets/Flask.svg',

        },
        {
          id: 4,
          name: 'NGINX',
          path: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg',
        },
        {
          id: 5,
           name: 'Gunicorn',
          path: '/assets/gunicorn.svg',
        },
      ],
    },
    
    {
      title: 'Revenue Growth Insights with Dynamic Tableau Analytics',
      desc: 'Conducted a comprehensive analysis of market performance, evaluating nearly $1 billion in revenue and $24.66 million in profit to uncover regional growth opportunities. To support this analysis, I designed dynamic Tableau dashboards that visualized revenue and profit trends across market segments and product categories, providing stakeholders with clear insights into key growth drivers. These insights formed the basis for actionable recommendations, leading to an 8% improvement in profitability and driving data-driven decision-making at the executive level.',
      // subdesc:
      //   'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
      href: 'https://github.com/NehaMasurkarr/Tableau_sales_dashboard',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/tableau.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'Tableau',
          path: '/assets/tableau.png',
        },
        {
          id: 2,
          name: 'SQL',
          path: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png',
        },
       
      ],
    },
    {
      title: '  High-Performance Real-Time Log Analysis System',
      desc: 'Engineered a real-time data pipeline processing 9,000 messages per second with a 3:1 read-write ratio, ensuring efficient and scalable log analysis. Designed an integrated system with Apache Kafka, Apache Pinot, Filebeat, and Faust to handle data ingestion, stream processing, and storage seamlessly. Utilized Apache Superset to visualize trends, delivering actionable insights that supported data-driven decision-making at an organizational level.',
      // subdesc:
      //   'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
      href: 'https://github.com/NehaMasurkarr/Web-Server-Log-Analysis',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/logss.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        // {
        //   id: 1,
        //   name: 'Apache Kafka',
        //   path: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Apache_kafka.svg',
        // },
        // {
        //   id: 2,
        //   name: 'Apache Pinot',
        //   path: 'https://pinot.apache.org/img/pinot-logo.png',
        // },
        // {
        //   id: 3,
        //   name: 'Filebeat',
        //   path: 'https://www.elastic.co/static-res/images/elastic-logo-filebeat.svg',
        // },
        // {
        //   id: 4,
        //   name: 'Faust',
        //   path: 'https://faust.readthedocs.io/en/latest/_images/faust.png',
        // },
        // {
        //   id: 5,
        //   name: 'Apache Superset',
        //   path: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Apache_superset_logo.svg',
        // },
      ],
    },
    {
      title: 'Power BI and SQL-Driven Pizza Sales Dashboard ',
      desc: 'Built an interactive Power BI dashboard that analyzed $1.92M in sales data spanning 49 states and 869 cities, providing a comprehensive view of performance metrics. Integrated SQL and Power BI to implement dynamic filters, allowing stakeholders to explore customized insights with ease. These analyses uncovered trends in sales, profit, and discount strategies, enabling actionable recommendations that enhanced profitability and informed strategic decision-making.',
      // subdesc:
      //   'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
      href: 'https://github.com/NehaMasurkarr/PowerBI-SuperStore-Analytics',
      texture: '/textures/project/project4.mp4',
      logo: '/assets/powerbi.svg',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'Power BI',
          path: '/assets/powerbi.svg',
        },
        {
          id: 2,
          name: 'SQL',
          path: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png',
        },
  
      ],
    },
    {
      title: 'AI-Powered Financial Portfolio Management',
      desc: 'Developed an AI-powered portfolio management system utilizing machine learning to enhance stock price predictions and optimize asset allocation strategies. By integrating sentiment analysis from financial news and social media, the system refined market trend forecasts, offering a comprehensive understanding of market dynamics. Applied reinforcement learning to enable dynamic portfolio rebalancing, ensuring risk minimization and optimized allocation strategies, thereby supporting data-driven financial decision-making.',
      // subdesc:
      //   '',
      href: 'https://github.com/NehaMasurkarr/Financial_portfolio_management',
      texture: '/textures/project/project5.mp4',
      logo: '/assets/project-logo5.png',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'Python',
          path: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
        },
        {
          id: 2,
          name: 'TensorFlow',
          path: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg',
        },
        {
          id: 3,
          name: 'Pandas',
          path: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Pandas_mark.svg',
        },
        {
          id: 4,
          name: 'Flask',
          path: '/assets/Flask.svg',
        },
  
      ],
    },
    {
      title: 'Interactive Pizza Sales Insights with Power BI and SQL',
      desc: 'Created an interactive Power BI dashboard analyzing $817.86K in revenue and 49,574 pizzas sold across 869 cities. Integrated with an SQL database via SSMS, the dashboard includes slicers and navigation for exploring key metrics like order trends, category performance, and size preferences. Delivered actionable insights into peak periods and top-performing products, driving data-informed sales strategies and improved profitability.',
      // subdesc:
      //   '',
      href: 'https://github.com/NehaMasurkarr/PowerBI-Pizza-Sales-Dashboard',
      texture: '/textures/project/project5.mp4',
      logo: '/assets/powerbi.svg',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'Power BI',
          path: '/assets/powerbi.svg',
        },
        {
          id: 2,
          name: 'SQL',
          path: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png',
        },
      ],
    },
  ];
  
  
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Framer',
      pos: 'Lead Web Developer',
      duration: '2022 - Present',
      title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Figma',
      pos: 'Web Developer',
      duration: '2020 - 2022',
      title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Notion',
      pos: 'Junior Web Developer',
      duration: '2019 - 2020',
      title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: '/assets/notion.svg',
      animation: 'salute',
    },
  ];