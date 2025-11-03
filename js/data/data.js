const siteData = {
    landing: {
        profileImage: "files/myimg.jpeg",
        name: "Vishwak Balaji Jayasankar",
        description: "I’m a Supply Chain & Data Analyst with about 5 years of experience turning data into practical insights that make operations smoother, smarter, and more efficient. My work has focused on areas like demand forecasting, inventory planning, procurement analytics, and logistics optimization, helping businesses make faster and more informed decisions. I’ve always been fascinated by how analytics and AI can simplify complex supply chain challenges—whether it’s improving forecast accuracy, reducing stock gaps, or predicting supply risks before they happen. I enjoy collaborating across teams, connecting technical data work with real-world business goals, and building dashboards and predictive tools that actually drive action. My toolkit includes Python, SQL, Power BI, and Azure, but what defines my approach most is curiosity—constantly asking why things happen and how we can make them better.",
        iconNavItems: [
            { href: "#education", title: "Education", iconClass: "fas fa-graduation-cap", text: "Education" },
            { href: "#work", title: "Work Experience", iconClass: "fas fa-briefcase", text: "Work" },
            { href: "#projects", title: "Projects", iconClass: "fas fa-folder-open", text: "Projects" },
            { href: "#skills", title: "Skills", iconClass: "fas fa-laptop-code", text: "Skills" }
        ]
    },
    educationSection: {
        sectionId: "education",
        title: "Education",
        iconClass: "fas fa-graduation-cap",
        items: [
            {
                institution: "Florida Atlantic University",
                degree: "Master’s in Data Science and Analytics",
                years: "2024 - 2025",
                description: "CGPA: 3.86"
            },
            {
                institution: "Praxis Business School",
                degree: "Post Graduate Diploma in Data Science",
                years: "2021",
                description: "CGPA: 3.5"
            },
            {
                institution: "SNS College of Technology",
                degree: "Bachelor of Engineering in Mechanical Engineering",
                years: "2016 - 2020",
                description: "CGPA: 7.98"
            }
        ]
    },
    workSection: {
        sectionId: "work",
        title: "Work Experience",
        iconClass: "fas fa-briefcase",
        items: [
            {
                company: "Dell Technologies",
                website: "https://www.dell.com",
                logo: "files/.png",
                location: "On-site",
                dates: "April/2025 - Present",
                role: "Data / Sypply Chain Analyst (Intern)",
                companyIcon: "fas fa-heartbeat",
                responsibilities: [
                    "Improved demand forecasting accuracy by 14% using Python-based predictive models and Power BI dashboards.","Automated supply chain KPI reporting and data integration across SAP, Oracle SCM, and Azure Data Factory, reducing manual effort by 30%.","Analyzed supplier and logistics performance to identify cost-saving and process optimization opportunities.","Supported AI-driven automation and developed real-time analytics tools to enhance inventory and shipment management."
                ]
            },
            {
                company: "Innover Digital Pvt. Ltd., India",
                website: "",
                logo: "",
                location: "On-site",
                dates: "December/2021 - June/2023",
                role: "Data Analyst",
                companyIcon: "fa fa-graduation-cap",
                responsibilities: [
                    "Improved demand forecasting accuracy by 21% using Python models (ARIMA, Prophet) for better inventory planning.","Built automated Power BI and Tableau dashboards to enhance visibility into procurement, logistics, and supplier performance.","Optimized supply chain efficiency through data-driven analysis, reducing lead time variance by 15% and improving cost control.","Developed ETL pipelines and machine learning models for data integration and anomaly detection, strengthening risk management."
                ]
            },
            {
                company: "Blue Yonder",
                website: "",
                logo: "",
                location: "On-site",
                dates: "January/2020 - December/2021",
                role: "Supply Chain Analyst",
                companyIcon: "fa-solid fa-car",
                responsibilities: [
                    "Enhanced demand planning and inventory forecasting using Blue Yonder (JDA) and Python analytics, improving service levels by 9%.","Automated forecasting dashboards and ETL pipelines with SQL, Power BI, and Azure Data Factory, reducing manual work and improving data quality.","Identified and resolved supply bottlenecks, cutting lead times by 12% and optimizing warehouse operations.","Supported AI-driven demand sensing initiatives and supplier performance tracking to strengthen end-to-end planning efficiency."
                ]
            }
        ]
    },
    projectsSection: {
        sectionId: "projects",
        title: "Projects",
        iconClass: "fas fa-folder-open",
        items: [
            {
                title: "Sales Forecasting: ML, Deep Learning & Temporal Modeling",
                link: "https://github.com/Vishwakbalaji/Deep-Learning-Reboot-Project",
                iconClass: "fas fa-robot",
                description: "Developed a complete data modeling and predictive analytics pipeline on 40,000 multi-branch retail records, using statistical analysis and transformation techniques including lag variables, holiday flags, and seasonality indicators; applied 10 forecasting models (e.g., ARIMA, CNN-LSTM, Prophet) to identify temporal patterns and future demand. Reduced RMSE by 70% through iterative modeling and trend analysis, confirming linear regression as the most stable performer (MAPE: 0.29%); enabled accurate 7-day sales forecasting and optimized business decisions on workforce and inventory."
            },
            {
                title: "Burnout Prediction: PCA-Based Risk Forecasting With KNN & Regression",
                link: "",
                iconClass: "fas fa-dna",
                description: "Executed data profiling and dimensionality reduction on 10,000 HR records to uncover hidden patterns; selected the top 5 components explaining 98% of data variance related to employee burnout factors such as workload and company culture. Achieved 86% accuracy using regression-based predictive modeling, outperforming KNN by 3%; validated statistical software outputs on unseen samples to support early wellness interventions via data interpretation and quality "
            },
            {
                title: "Data Quality Automation Platform (Client-Facing Solution)",
                link: "",
                iconClass: "fas fa-chart-line",
                description: "Spearheaded AI-based data remediation across 15+ unstructured datasets by applying statistical analysis and data cleaning techniques, reducing anomaly rate by 53%; leveraged Power BI with data visualization tools to showcase before-and-after results, enhancing clarity through compelling data storytelling. Deployed the end-to-end solution using Streamlit with integrated data transformation, modeling, and warehousing flows; improved structured output accuracy from 39% to 92% and supported over 25 users with automated predictions, governed uploads, and real- time forecasting features."
            },
            {
                title: "Demand Forecasting and Inventory Optimization Using Machine Learning",
                link: "",
                iconClass: "fas fa-car-crash",
                description: "Developed a forecasting model using Python (ARIMA, XGBoost, Prophet) to predict weekly demand for a multi￾product retail dataset of over 60,000 records.Designed interactive dashboards in Power BI to visualize historical sales, forecast accuracy, and inventory turnover trends. Integrated ETL workflows using Azure Databricks to clean and process large datasets from multiple sources (ERP, POS, and supplier data). Implemented safety stock and reorder level calculations based on forecast variability, reducing simulated stockouts by 22% and excess inventory by 18%. Presented findings to a panel as part of a coursework assessment, demonstrating how predictive analytics can improve procurement planning and reduce operational costs."
            },
            {
                title: "Supplier Performance & Procurement Analytics Dashboard",
                link: "",
                iconClass: "fas fa-user-md",
                description: "Built a supplier performance tracking dashboard to evaluate lead times, on-time delivery rates, and cost deviations across 30+ vendors. Extracted and aggregated data from relational databases using SQL queries and automated refresh workflows via Power BI Service. Conducted spend analysis to identify top 10% high-impact suppliers, resulting in actionable insights for procurement strategy. Applied Python-based correlation analysis to uncover links between supplier lead times and material shortage incidents. Enhanced data visualization storytelling with DAX measures and KPI cards, providing procurement managers with a real-time overview of supplier health and sourcing efficiency."
            }
            
        ]
    },
    skillsSection: {
        title: "Skills",
        iconClass: "fas fa-laptop-code",
        categories: [
            {
                name: "Supply Chain & Operations",
                skills: [
                            "Demand Forecasting",
                            "Inventory Optimization",
                            "Procurement Analytics",
                            "Logistics & Distribution Planning",
                            "Supplier Performance Analysis",
                            "Order Fulfillment",
                            "Supply Chain Risk Management",
                            "KPI & Performance Dashboards"
                        ]
            },
            {
                name: "Data Analytics & Visualization",
                skills: [
                            "Power BI",
                            "Tableau",
                            "Excel (Advanced)",
                            "SQL",
                            "Python (Pandas, NumPy, Matplotlib, Seaborn)",
                            "Statistical Analysis",
                            "Forecasting Models (ARIMA, Prophet, XGBoost)",
                            "Scenario & Trend Analysis"
                        ]

            },
            {
                name: "Tools & Technologies",
                skills: [
                            "Azure (Data Factory, Databricks, Blob Storage)",
                            "SAP ERP",
                            "Oracle SCM Cloud",
                            "Snowflake",
                            "Microsoft Excel (Pivot Tables, Solver, VBA)",
                            "Google Sheets"
                        ]
            },
            {
                name: "Machine Learning & AI Applications",
                skills: [
                            "Predictive Analytics",
                            "Time Series Forecasting",
                            "Optimization Models",
                            "NLP for Supplier Feedback",
                            "AI-driven Demand Planning",
                            "Automation with Python"
                        ]

            },
            {
                name: "Business & Reporting",
                skills: [
                            "Data Storytelling",
                            "Cross-Functional Collaboration",
                            "Process Improvement",
                            "Cost Reduction Strategies",
                            "Root Cause Analysis",
                            "Executive Reporting"
                        ]

            },
            {
                name: "Frameworks",
                skills: [
                            "Lean Six Sigma",
                            "Agile & Scrum",
                            "CRISP-DM",
                            "DMAIC",
                            "Supply Chain Maturity Model"
                        ]

            }
        ]
    },
    awardsSection: {
        sectionId: "awards",
        title: "Awards & Achievements",
        iconClass: "fas fa-award",
        items: [
            {
                award: "High Five Award",
                description: "Awarded by Nissan Digital India LLP for outstanding performance."
            }
        ]
    },
    certificationsSection: {
        sectionId: "certifications",
        title: "Certifications",
        iconClass: "fas fa-certificate",
        items: [
            { certification: "Microsoft Azure Data Factory & Azure Machine Learning (Pursuing)", organization: "", years: "" },
            { certification: "Azure Fundamentals", organization: "", years: "" },
            { certification: "Microsoft Certified: Power BI Data Analyst Associate (Planned)", organization: "", years: "" },
            { certification: "Python for Data Science & Machine Learning – Coursera", organization: "", years: "" },
            { certification: "Advanced Excel for Business Analytics", organization: "", years: "" },
        ]
    }
};