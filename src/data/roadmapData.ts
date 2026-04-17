import { Technology } from '../types/roadmap';

export const roadmapData: Technology[] = [
  {
    id: 'data-analytics',
    name: 'Data Analytics',
    category: 'Data Science',
    description: 'Master the art of transforming raw data into meaningful insights using tools like Power BI, SQL, and Python.',
    icon: 'BarChart3',
    roles: ['Data Analyst', 'BI Analyst', 'AI Data Analyst', 'Data Storyteller', 'Marketing Analyst'],
    certifications: [
      {
        id: 'pl-300',
        name: 'Microsoft Certified: Power BI Data Analyst Associate',
        provider: 'Microsoft',
        level: 'Intermediate',
        code: 'PL-300',
        description: 'Demonstrate your ability to maximize the value of data assets by using Microsoft Power BI.',
        isHighDemand: true,
        minExperienceYears: 1,
        costs: [
          { region: 'United States', currency: 'USD', examCost: 165, learningCost: 'Free (MS Learn)', practiceCost: 'Free', usdEquivalent: 165 },
          { region: 'United Kingdom', currency: 'GBP', examCost: 113, learningCost: 'Free', practiceCost: 'Free', usdEquivalent: 165 },
          { region: 'Canada', currency: 'CAD', examCost: 215, learningCost: 'Free', practiceCost: 'Free', usdEquivalent: 165 },
          { region: 'India', currency: 'INR', examCost: 4800, learningCost: 'Free', practiceCost: 'Free', usdEquivalent: 58 }
        ],
        resources: [
          { id: 'ms-learn-pl300', title: 'PL-300 Official Learning Path', provider: 'Microsoft', type: 'Official Docs', url: 'https://learn.microsoft.com/en-us/certifications/exams/pl-300', isFree: true, category: 'Learning' },
          { id: 'pl-300-yt', title: 'Complete Power BI Course', provider: 'Alex The Analyst', type: 'Video Course', url: 'https://www.youtube.com/playlist?list=PLUaB-1hjhk8G7l29yZtc9jD-y80G5KzI4', isFree: true, category: 'Learning', lastVerified: 'April 2026' }
        ]
      },
      {
        id: 'google-da',
        name: 'Google Data Analytics Professional Certificate',
        provider: 'Google',
        level: 'Beginner',
        description: 'Learn the fundamentals of data analytics including SQL, R, and Tableau.',
        minExperienceYears: 0,
        costs: [
          { region: 'United States', currency: 'USD', examCost: 49, learningCost: '$49/mo', practiceCost: 'Included', usdEquivalent: 49 },
          { region: 'United Kingdom', currency: 'GBP', examCost: 39, learningCost: '£39/mo', practiceCost: 'Included', usdEquivalent: 49 },
          { region: 'Canada', currency: 'CAD', examCost: 65, learningCost: 'CA$65/mo', practiceCost: 'Included', usdEquivalent: 49 },
          { region: 'India', currency: 'INR', examCost: 3900, learningCost: '₹3900/mo', practiceCost: 'Included', usdEquivalent: 49 }
        ],
        resources: [
          { id: 'google-da-coursera', title: 'Google Analytics on Coursera', provider: 'Coursera', type: 'Video Course', url: 'https://www.coursera.org/professional-certificates/google-data-analytics', isFree: false, category: 'Learning' }
        ]
      },
      {
        id: 'tableau-spec',
        name: 'Tableau Desktop Specialist',
        provider: 'Tableau',
        level: 'Beginner',
        description: 'Demonstrate foundational knowledge of Tableau Desktop.',
        minExperienceYears: 0,
        costs: [
          { region: 'United States', currency: 'USD', examCost: 100, learningCost: 'Paid', practiceCost: 'Paid', usdEquivalent: 100 },
          { region: 'United Kingdom', currency: 'GBP', examCost: 80, learningCost: 'Paid', practiceCost: 'Paid', usdEquivalent: 100 },
          { region: 'Canada', currency: 'CAD', examCost: 135, learningCost: 'Paid', practiceCost: 'Paid', usdEquivalent: 100 },
          { region: 'India', currency: 'INR', examCost: 8300, learningCost: 'Paid', practiceCost: 'Paid', usdEquivalent: 100 }
        ],
        resources: [
          { id: 'tableau-docs', title: 'Tableau Training', provider: 'Tableau', type: 'Official Docs', url: 'https://www.tableau.com/learn/training', isFree: true, category: 'Learning' }
        ]
      },
      {
        id: 'ai-900',
        name: 'Microsoft Certified: Azure AI Fundamentals',
        provider: 'Microsoft',
        level: 'Beginner',
        code: 'AI-900',
        description: 'Foundational knowledge of machine learning and AI concepts and how to implement them on Azure.',
        minExperienceYears: 0,
        costs: [
          { region: 'United States', currency: 'USD', examCost: 99, learningCost: 'Free', practiceCost: 'Free', usdEquivalent: 99 },
          { region: 'United Kingdom', currency: 'GBP', examCost: 69, learningCost: 'Free', practiceCost: 'Free', usdEquivalent: 99 },
          { region: 'Canada', currency: 'CAD', examCost: 128, learningCost: 'Free', practiceCost: 'Free', usdEquivalent: 99 },
          { region: 'India', currency: 'INR', examCost: 3696, learningCost: 'Free', practiceCost: 'Free', usdEquivalent: 45 }
        ],
        resources: [{ id: 'ai900-docs', title: 'AI-900 Learning Path', provider: 'Microsoft', type: 'Official Docs', url: 'https://learn.microsoft.com/en-us/certifications/exams/ai-900', isFree: true, category: 'Learning' }]
      }
    ],
    roadmap: [
      { 
        id: 'da-1', 
        title: 'Data Strategy & Cleaning', 
        description: 'Begin by mastering Excel Advanced (Power Query/Pivot) to handle small-scale data. Learn statistical foundations including Mean/Standard Deviation and Hypothesis testing to validate your data subsets.', 
        level: 'Beginner', 
        order: 1,
        concepts: ['Power Query', 'Statistical Significance', 'Data Profiling'],
        outcomes: ['Build automated cleaning workflows', 'Perform basic statistical validation']
      },
      { 
        id: 'da-2', 
        title: 'Relational Database Querying', 
        description: 'Master SQL for data extraction. Focus on JOINS, complex Subqueries, Window Functions, and Common Table Expressions (CTEs). Learn to optimize queries for large datasets in PostgreSQL or SQL Server.', 
        level: 'Beginner', 
        order: 2,
        concepts: ['Window Functions', 'CTEs', 'Query Optimization', 'Relational Algebra'],
        outcomes: ['Extract complex datasets from enterprise DBs', 'Optimize query performance by 40%']
      },
      { 
        id: 'da-3', 
        title: 'Python for Data Automation', 
        description: 'Transition to Python using Pandas and NumPy. Learn to automate repetitive data cleaning tasks (ETL) and perform Exploratory Data Analysis (EDA) using Matplotlib and Seaborn for early trend detection.', 
        level: 'Beginner', 
        order: 3,
        concepts: ['Pandas/NumPy', 'EDA Patterns', 'Functional Programming for Data'],
        outcomes: ['Automate ETL scripts with Python', 'Visualize complex multidimensional trends']
      },
      { 
        id: 'da-4', 
        title: 'BI Visualization Mastery', 
        description: 'Build end-to-end dashboards in Power BI or Tableau. Focus on DAX (Data Analysis Expressions) or Tableau Calculations to create dynamic, drill-down reports that answer complex business questions.', 
        level: 'Intermediate', 
        order: 4,
        concepts: ['DAX/Tableau Calcs', 'UX for Dashboards', 'Drill-through Architecture'],
        outcomes: ['Design interactive stakeholder dashboards', 'Implement complex business logic in BI tools']
      },
      { 
        id: 'da-5', 
        title: 'AI-Enhanced Insights', 
        description: 'Integrate Generative AI tools (like Copilot for Fabric or GPT-4) to automate documentation, generate DAX formulas, and use natural language to query your semantic models for rapid insights.', 
        level: 'Intermediate', 
        order: 5,
        concepts: ['Natural Language Querying', 'Copilot Integration', 'AI Documentation'],
        outcomes: ['Reduce documentation time by 60%', 'Use AI for rapid formula generation']
      },
      { 
        id: 'da-6', 
        title: 'Enterprise Storytelling', 
        description: 'The final stage is communication. Learn to synthesize findings into "Executive Summaries." Use data storytelling frameworks to influence stakeholders and drive data-backed business decisions.', 
        level: 'Advanced', 
        order: 6,
        concepts: ['Narrative Design', 'Stakeholder Management', 'Decision Support Systems'],
        outcomes: ['Present data-driven insights to C-suite', 'Drive strategic organizational change']
      }
    ],
    jobPrep: [
      { id: 'da-resume-1', title: 'Data Analyst Modern Resume Template', provider: 'Canva', type: 'Interview Prep', url: 'https://www.canva.com/resumes/templates/data-analyst/', isFree: true, category: 'Applying' },
      { id: 'da-port-1', title: 'Data Analytics Portfolio Projects Guide', provider: 'Alex The Analyst', type: 'Portfolio Guide', url: 'https://www.youtube.com/playlist?list=PLUaB-1hjhk8HApX9SntHToit_k0YvNoY1', isFree: true, category: 'Applying', lastVerified: 'April 2026', alternativeUrls: ['https://www.youtube.com/playlist?list=PL0m9n86OAnFsc-GfX7E3KjX7_vO7Z0z5o'] },
      { id: 'da-mock-1', title: 'Real Data Analyst Interview walkthrough', provider: 'Alex The Analyst', type: 'Interview Prep', url: 'https://www.youtube.com/playlist?list=PLUaB-1hjhk8FvU3Zp4z_fKnd95_fU_PST', isFree: true, category: 'Applying', lastVerified: 'April 2026', alternativeUrls: ['https://www.youtube.com/watch?v=N_8a3m9eY6k'] },
      { id: 'da-mock-2', title: 'SQL Interview Questions Mastery', provider: 'Luke Barousse', type: 'Interview Prep', url: 'https://www.youtube.com/playlist?list=PL2_19Y0aCgGf228z2yT3K_Kz6b26P-P6O', isFree: true, category: 'Applying', lastVerified: 'April 2026' }
    ],
    portfolioProjects: [
      {
        id: 'da-p1',
        title: 'Customer Churn Analysis Dashboard',
        description: 'Build an end-to-end dashboard that identifies at-risk customers using historical data.',
        realWorldUseCase: 'Helps Subscription/SaaS businesses reduce revenue loss by predicting customer exits.',
        technicalStack: ['SQL', 'Power BI', 'Python (Pandas)'],
        difficulty: 'Intermediate'
      },
      {
        id: 'da-p2',
        title: 'Real-time Stock Market Sentiment Tracker',
        description: 'Scrape news/social data and visualize sentiment trends against price movements.',
        realWorldUseCase: 'Investment firms use this for rapid market sentiment monitoring.',
        technicalStack: ['Python', 'Tableau', 'BeautifulSoup'],
        difficulty: 'Advanced'
      }
    ]
  },
  {
    id: 'azure-data-engineering',
    name: 'Azure Data Engineering',
    category: 'Data Engineering',
    description: 'Design and implement data solutions on Microsoft Azure using Data Factory, Databricks, and Synapse.',
    icon: 'Cloud',
    roles: ['Azure Data Engineer', 'ETL/ELT Engineer', 'Lakehouse Architect', 'AI Data Platform Specialist'],
    certifications: [
      {
        id: 'dp-203',
        name: 'Microsoft Certified: Azure Data Engineer Associate',
        provider: 'Microsoft',
        level: 'Intermediate',
        code: 'DP-203',
        description: 'Integrate, transform, and consolidate data from various structured and unstructured data systems.',
        isHighDemand: true,
        minExperienceYears: 2,
        costs: [
          { region: 'United States', currency: 'USD', examCost: 165, learningCost: 'Free (MS Learn)', practiceCost: 'Free', usdEquivalent: 165 },
          { region: 'United Kingdom', currency: 'GBP', examCost: 113, learningCost: 'Free', practiceCost: 'Free', usdEquivalent: 165 },
          { region: 'Canada', currency: 'CAD', examCost: 215, learningCost: 'Free', practiceCost: 'Free', usdEquivalent: 165 },
          { region: 'India', currency: 'INR', examCost: 4800, learningCost: 'Free', practiceCost: 'Free', usdEquivalent: 58 }
        ],
        resources: [
          { id: 'ms-learn-dp203', title: 'DP-203 Official Path', provider: 'Microsoft', type: 'Official Docs', url: 'https://learn.microsoft.com/en-us/certifications/exams/dp-203', isFree: true, category: 'Learning' },
          { id: 'dp203-savill', title: 'Azure Data Engineer Cram', provider: 'John Savill', type: 'Video Course', url: 'https://www.youtube.com/playlist?list=PLlVtbbG169nEcO0B_G9m2-FqS5D_wW8vI', isFree: true, category: 'Learning', lastVerified: 'April 2026' }
        ]
      },
      {
        id: 'az-900',
        name: 'Microsoft Azure Fundamentals',
        provider: 'Microsoft',
        level: 'Beginner',
        code: 'AZ-900',
        description: 'Foundational knowledge of Azure cloud services.',
        minExperienceYears: 0,
        costs: [
          { region: 'United States', currency: 'USD', examCost: 99, learningCost: 'Free', practiceCost: 'Free', usdEquivalent: 99 },
          { region: 'United Kingdom', currency: 'GBP', examCost: 69, learningCost: 'Free', practiceCost: 'Free', usdEquivalent: 99 },
          { region: 'Canada', currency: 'CAD', examCost: 128, learningCost: 'Free', practiceCost: 'Free', usdEquivalent: 99 },
          { region: 'India', currency: 'INR', examCost: 3696, learningCost: 'Free', practiceCost: 'Free', usdEquivalent: 45 }
        ],
        resources: [
          { id: 'az900-docs', title: 'AZ-900 Learning Path', provider: 'Microsoft', type: 'Official Docs', url: 'https://learn.microsoft.com/en-us/certifications/exams/az-900', isFree: true, category: 'Learning' },
          { id: 'az900-yt', title: 'Azure Fundamentals Exam Prep', provider: 'John Savill', type: 'Video Course', url: 'https://www.youtube.com/playlist?list=PLlVtbbG169nED0_vMEniWBQjSoxpB3YmS', isFree: true, category: 'Learning', lastVerified: 'April 2026' }
        ]
      },
      {
        id: 'dp-900',
        name: 'Microsoft Azure Data Fundamentals',
        provider: 'Microsoft',
        level: 'Beginner',
        code: 'DP-900',
        description: 'Foundational knowledge of core data concepts and how they are implemented using Azure data services.',
        minExperienceYears: 0,
        costs: [
          { region: 'United States', currency: 'USD', examCost: 99, learningCost: 'Free', practiceCost: 'Free', usdEquivalent: 99 },
          { region: 'United Kingdom', currency: 'GBP', examCost: 69, learningCost: 'Free', practiceCost: 'Free', usdEquivalent: 99 },
          { region: 'Canada', currency: 'CAD', examCost: 128, learningCost: 'Free', practiceCost: 'Free', usdEquivalent: 99 },
          { region: 'India', currency: 'INR', examCost: 3696, learningCost: 'Free', practiceCost: 'Free', usdEquivalent: 45 }
        ],
        resources: [{ id: 'dp900-docs', title: 'DP-900 Learning Path', provider: 'Microsoft', type: 'Official Docs', url: 'https://learn.microsoft.com/en-us/certifications/exams/dp-900', isFree: true, category: 'Learning' }]
      },
      {
        id: 'ai-102',
        name: 'Microsoft Certified: Azure AI Engineer Associate',
        provider: 'Microsoft',
        level: 'Intermediate',
        code: 'AI-102',
        description: 'Design and implement AI solutions using Azure AI services, Azure OpenAI, and search.',
        isHighDemand: true,
        minExperienceYears: 2,
        costs: [
          { region: 'United States', currency: 'USD', examCost: 165, learningCost: 'Free', practiceCost: 'Free', usdEquivalent: 165 },
          { region: 'United Kingdom', currency: 'GBP', examCost: 113, learningCost: 'Free', practiceCost: 'Free', usdEquivalent: 165 },
          { region: 'Canada', currency: 'CAD', examCost: 215, learningCost: 'Free', practiceCost: 'Free', usdEquivalent: 165 },
          { region: 'India', currency: 'INR', examCost: 4800, learningCost: 'Free', practiceCost: 'Free', usdEquivalent: 58 }
        ],
        resources: [{ id: 'ai102-docs', title: 'AI-102 Learning Path', provider: 'Microsoft', type: 'Official Docs', url: 'https://learn.microsoft.com/en-us/certifications/exams/ai-102', isFree: true, category: 'Learning' }]
      }
    ],
    roadmap: [
      { 
        id: 'ade-1', 
        title: 'Cloud Infrastructure Setup', 
        description: 'Establish foundational storage using ADLS Gen2. Implement Hierarchical Namespaces and master RBAC (Role-Based Access Control) to secure sensitive data landing zones.', 
        level: 'Beginner', 
        order: 1,
        concepts: ['ADLS Gen2 Architecture', 'Azure RBAC', 'Storage Access Keys vs SAS'],
        outcomes: ['Secure and scalable landing zone setup', 'Resource level identity management']
      },
      { 
        id: 'ade-2', 
        title: 'Ingestion Orchestration', 
        description: 'Build scalable ELT/ETL pipelines using Azure Data Factory. Master Copy Activities, Mapping Data Flows, and self-hosted integration runtimes for on-premise connectivity.', 
        level: 'Beginner', 
        order: 2,
        concepts: ['ADF Linked Services', 'Trigger Architectures', 'Integration Runtimes'],
        outcomes: ['Build resilient data pipelines', 'Ingest data from 50+ on-prem/cloud sources']
      },
      { 
        id: 'ade-3', 
        title: 'Lakehouse Architecture', 
        description: 'Build unified data stores using Azure Synapse Analytics and Databricks. Learn the Medallion Architecture (Bronze, Silver, Gold layers) and Delta Lake for ACID transactions on big data.', 
        level: 'Intermediate', 
        order: 3,
        concepts: ['Medallion Architecture', 'Delta Lake ACID', 'Spark Optimization'],
        outcomes: ['Implement enterprise data lakehouse', 'Manage massive scale data with Spark']
      },
      { 
        id: 'ade-4', 
        title: 'Streaming & Real-time', 
        description: 'Implement real-time processing using Azure Event Hubs and Stream Analytics. Master sliding, tumbling, and hopping windows to analyze data-in-motion for instant alerts.', 
        level: 'Intermediate', 
        order: 4,
        concepts: ['Windowing Functions', 'Throughput Units', 'Real-time Dashboards'],
        outcomes: ['Develop low-latency stream processors', 'Implement real-time alerting systems']
      },
      { 
        id: 'ade-5', 
        title: 'AI & Vector Readiness', 
        description: 'Integrate Azure OpenAI and AI Search. Learn to vectorize enterprise data and build RAG (Retrieval Augmented Generation) pipelines directly within your data fabric for smarter apps.', 
        level: 'Advanced', 
        order: 5,
        concepts: ['Vector Embeddings', 'Semantic Search', 'RAG Frameworks'],
        outcomes: ['Build enterprise-ready AI search apps', 'Operationalize LLM workflows']
      },
      { 
        id: 'ade-6', 
        title: 'Governance & FinOps', 
        description: 'Finalize with Microsoft Purview for data lineage and cataloging. Implement auditing, monitoring with Log Analytics, and optimize costs using Reserved Instances and lifecycle management.', 
        level: 'Advanced', 
        order: 6,
        concepts: ['Data Lineage', 'Purview Classification', 'Compute Cost Optimization'],
        outcomes: ['Ensure 100% data compliance', 'Reduce cloud spend by 25% through FinOps']
      }
    ],
    jobPrep: [
      { id: 'ade-resume-1', title: 'Cloud Data Engineer Senior Resume', provider: 'HackerResume', type: 'Interview Prep', url: 'https://hackerresume.com/templates/data-engineer', isFree: true, category: 'Applying' },
      { id: 'ade-port-1', title: 'Modern Data Stack Portfolio Guide', provider: 'Seattle Data Guy', type: 'Portfolio Guide', url: 'https://www.youtube.com/playlist?list=PL2V6X0_f_P8-C-G7h-L_M-G9uofI7G-uV', isFree: true, category: 'Applying', lastVerified: 'April 2026', alternativeUrls: ['https://www.youtube.com/watch?v=R67XuYc_Ztk'] },
      { id: 'ade-mock-1', title: 'Azure Data Engineer Interview Prep', provider: 'Savill IT', type: 'Interview Prep', url: 'https://www.youtube.com/playlist?list=PLlVtbbG169nEcO0B_G9m2-FqS5D_wW8vI', isFree: true, category: 'Applying', lastVerified: 'April 2026', alternativeUrls: ['https://www.youtube.com/watch?v=N_8a3m9eY6k'] },
      { id: 'ade-mock-2', title: 'DP-203 Exam cram & Interview logic', provider: 'John Savill', type: 'Interview Prep', url: 'https://www.youtube.com/playlist?list=PLlVtbbG169nEcO0B_G9m2-FqS5D_wW8vI', isFree: true, category: 'Applying', lastVerified: 'April 2026' }
    ]
  },
  {
    id: 'aws-data-engineering',
    name: 'AWS Data Engineering',
    category: 'Data Engineering',
    description: 'Build enterprise-scale data solutions using AWS services like Glue, Redshift, EMR, and Kinesis.',
    icon: 'Database',
    roles: ['AWS Data Engineer', 'Analytics Architect', 'Cloud Data Developer', 'Machine Learning Platform Engineer'],
    certifications: [
      {
        id: 'aws-de-assoc',
        name: 'AWS Certified Data Engineer – Associate',
        provider: 'AWS',
        level: 'Intermediate',
        code: 'DEA-C01',
        description: 'Validate skills in data ingestion, transformation, and storage on AWS.',
        isHighDemand: true,
        minExperienceYears: 2,
        costs: [
          { region: 'United States', currency: 'USD', examCost: 150, learningCost: 'Free', practiceCost: 'Paid', usdEquivalent: 150 },
          { region: 'United Kingdom', currency: 'GBP', examCost: 120, learningCost: 'Free', practiceCost: 'Paid', usdEquivalent: 150 },
          { region: 'Canada', currency: 'CAD', examCost: 205, learningCost: 'Free', practiceCost: 'Paid', usdEquivalent: 150 },
          { region: 'India', currency: 'INR', examCost: 12500, learningCost: 'Free', practiceCost: 'Paid', usdEquivalent: 150 }
        ],
        resources: [
          { id: 'aws-de-official', title: 'DEA-C01 Exam Guide', provider: 'AWS', type: 'Official Docs', url: 'https://aws.amazon.com/certification/certified-data-engineer-associate/', isFree: true, category: 'Learning' },
          { id: 'aws-de-yt', title: 'AWS Data Engineering Essentials', provider: 'AWS Training', type: 'Video Course', url: 'https://www.youtube.com/playlist?list=PLhr1KZpdzukca0Zz6q5Z8vXf0y_x9m6z0', isFree: true, category: 'Learning', lastVerified: 'April 2026' }
        ]
      }
    ],
    roadmap: [
      { id: 'awde-1', title: 'Analytics Foundations', description: 'Begin by mastering S3 as a data lake, understanding partitioning strategies, and using Athena for serverless SQL querying. Master the Glue Data Catalog for metadata management.', level: 'Beginner', order: 1 },
      { id: 'awde-2', title: 'Orchestrated ETL', description: 'Master AWS Glue for ETL. Build Python/Spark scripts, implement Glue Workflows for orchestration, and learn to manage development endpoints for debugging.', level: 'Intermediate', order: 2 },
      { id: 'awde-3', title: 'Data Streaming', description: 'Implement real-time ingestion with Kinesis Data Streams and Firehose. Learn to analyze live data using Managed Service for Apache Flink.', level: 'Intermediate', order: 3 },
      { id: 'awde-4', title: 'Warehousing at Scale', description: 'Master Amazon Redshift. Learn about distribution keys, sort keys, and Redshift Spectrum to query data directly from S3 without ingestion.', level: 'Advanced', order: 4 },
      { id: 'awde-5', title: 'Generative AI on AWS', description: 'Leverage Amazon Bedrock for foundational model access and SageMaker for custom ML pipelines. Implement AI-driven data cleansing and pattern detection.', level: 'Advanced', order: 5 },
      { id: 'awde-6', title: 'Reliability & FinOps', description: 'Implement CloudWatch for observability and Lake Formation for fine-grained security. Optimize costs using Redshift Serverless and Glue Auto-scaling.', level: 'Advanced', order: 6 }
    ],
    jobPrep: [
      { id: 'aws-resume', title: 'AWS Cloud Engineer Resume Guide', provider: 'AWS Blog', type: 'Interview Prep', url: 'https://aws.amazon.com/blogs/training-and-certification/how-to-build-a-cloud-resume-and-get-hired/', isFree: true, category: 'Applying' },
      { id: 'aws-port', title: 'AWS Solutions Architecture Portfolio', provider: 'Forage', type: 'Portfolio Guide', url: 'https://www.theforage.com/virtual-internships/XfKrkHByP6X3p7d9z', isFree: true, category: 'Applying' },
      { id: 'aws-mock', title: 'AWS Solutions Architect Interview Mastery', provider: 'Technical Mock', type: 'Interview Prep', url: 'https://www.youtube.com/playlist?list=PL9nWRykSBSFjO7p1s7tY0Yf9mR9r0L9yO', isFree: true, category: 'Applying', lastVerified: 'April 2026' }
    ]
  },
  {
    id: 'gcp-data-engineering',
    name: 'GCP Data Engineering',
    category: 'Data Engineering',
    description: 'Design and build data processing systems using Google Cloud services like BigQuery, Dataflow, and Pub/Sub.',
    icon: 'Zap',
    roles: ['GCP Data Engineer', 'Cloud Data Architect', 'BigQuery Specialist', 'Vertex AI Data Engineer'],
    certifications: [
      {
        id: 'gcp-pde',
        name: 'Professional Data Engineer',
        provider: 'Google Cloud',
        level: 'Advanced',
        description: 'Design, build, and operationalize data-driven solutions on Google Cloud.',
        isHighDemand: true,
        minExperienceYears: 3,
        costs: [
          { region: 'United States', currency: 'USD', examCost: 200, learningCost: 'Paid', practiceCost: 'Paid', usdEquivalent: 200 },
          { region: 'United Kingdom', currency: 'GBP', examCost: 160, learningCost: 'Paid', practiceCost: 'Paid', usdEquivalent: 200 },
          { region: 'Canada', currency: 'CAD', examCost: 270, learningCost: 'Paid', practiceCost: 'Paid', usdEquivalent: 200 },
          { region: 'India', currency: 'INR', examCost: 16500, learningCost: 'Paid', practiceCost: 'Paid', usdEquivalent: 200 }
        ],
        resources: [
          { id: 'gcp-pde-official', title: 'Professional Data Engineer Page', provider: 'Google', type: 'Official Docs', url: 'https://cloud.google.com/learn/certification/data-engineer', isFree: true, category: 'Learning' },
          { id: 'gcp-pde-yt', title: 'Data Engineering on GCP', provider: 'Google Cloud Tech', type: 'Video Course', url: 'https://www.youtube.com/playlist?list=PLIivdWyY5uicfIs_mB0669O9L77v8fC-D', isFree: true, category: 'Learning', lastVerified: 'April 2026' }
        ]
      }
    ],
    roadmap: [
      { id: 'gcde-1', title: 'GCP Analytics Basics', description: 'Master Cloud Storage, BigQuery, and IAM for Data.', level: 'Beginner', order: 1 },
      { id: 'gcde-2', title: 'Data Warehousing', description: 'Master BigQuery SQL, Partitioning, and Clustering strategies.', level: 'Intermediate', order: 2 },
      { id: 'gcde-3', title: 'Data Ingestion', description: 'Master Pub/Sub for real-time and Cloud Dataflow for batch/stream.', level: 'Intermediate', order: 3 },
      { id: 'gcde-4', title: 'Hadoop & Spark on GCP', description: 'Migrate legacy workloads to Cloud Dataproc.', level: 'Advanced', order: 4 },
      { id: 'gcde-5', title: 'AI Platform (Vertex AI)', description: 'Operationalize ML models using Vertex AI and Feature Store.', level: 'Advanced', order: 5 },
      { id: 'gcde-6', title: 'Data Governance', description: 'Manage metadata and lineage with Dataplex and Data Catalog.', level: 'Advanced', order: 6 }
    ],
    jobPrep: [
      { id: 'gcp-resume', title: 'GCP Data Engineer Resume Review', provider: 'Awesome GCP', type: 'Interview Prep', url: 'https://www.youtube.com/playlist?list=PLQIsXNnNvv1mU3_z7R8c-z0G2o2P_Z0kH', isFree: true, category: 'Applying', lastVerified: 'April 2026' },
      { id: 'gcp-mock', title: 'Google Professional Data Engineer Interview', provider: 'Daily Interview', type: 'Interview Prep', url: 'https://www.youtube.com/playlist?list=PLQIsXNnNvv1n_m_S-fO4H0mEPrA1_R8X8', isFree: true, category: 'Applying', lastVerified: 'April 2026' }
    ]
  },
  {
    id: 'devops',
    name: 'DevOps Engineering',
    category: 'Cloud & DevOps',
    description: 'Bridge the gap between development and operations by automating workflows and managing infrastructure.',
    icon: 'Terminal',
    roles: ['DevOps Engineer', 'Site Reliability Engineer (SRE)', 'MLOps Engineer'],
    certifications: [
      {
        id: 'cka',
        name: 'Certified Kubernetes Administrator',
        provider: 'CNCF',
        level: 'Advanced',
        code: 'CKA',
        description: 'Demonstrate your proficiency in managing Kubernetes clusters.',
        isHighDemand: true,
        minExperienceYears: 3,
        costs: [
          { region: 'United States', currency: 'USD', examCost: 395, learningCost: 'Paid', practiceCost: 'Paid', usdEquivalent: 395 },
          { region: 'United Kingdom', currency: 'GBP', examCost: 310, learningCost: 'Paid', practiceCost: 'Paid', usdEquivalent: 395 },
          { region: 'Canada', currency: 'CAD', examCost: 540, learningCost: 'Paid', practiceCost: 'Paid', usdEquivalent: 395 },
          { region: 'India', currency: 'INR', examCost: 32000, learningCost: 'Paid', practiceCost: 'Paid', usdEquivalent: 395 }
        ],
        resources: [
          { id: 'cka-kodekloud', title: 'Kubernetes CKA Hands-on', provider: 'KodeKloud', type: 'Video Course', url: 'https://kodekloud.com/courses/certified-kubernetes-administrator-cka/', isFree: false, category: 'Learning' },
          { id: 'fcc-k8s', title: 'Kubernetes for Beginners', provider: 'freeCodeCamp', type: 'Video Course', url: 'https://www.youtube.com/playlist?list=PLA_36C87TfR8vO6P8O_oXqX5AIsx_OshR', isFree: true, category: 'Learning', lastVerified: 'April 2026' }
        ]
      },
      {
        id: 'terraform-assoc',
        name: 'HashiCorp Certified: Terraform Associate',
        provider: 'HashiCorp',
        level: 'Intermediate',
        description: 'Master Infrastructure as Code (IaC) principles to manage multi-cloud deployments.',
        minExperienceYears: 1,
        costs: [
          { region: 'United States', currency: 'USD', examCost: 70, learningCost: 'Paid', practiceCost: 'Paid', usdEquivalent: 70 },
          { region: 'United Kingdom', currency: 'GBP', examCost: 55, learningCost: 'Paid', practiceCost: 'Paid', usdEquivalent: 70 },
          { region: 'Canada', currency: 'CAD', examCost: 95, learningCost: 'Paid', practiceCost: 'Paid', usdEquivalent: 70 },
          { region: 'India', currency: 'INR', examCost: 5800, learningCost: 'Paid', practiceCost: 'Paid', usdEquivalent: 70 }
        ],
        resources: [
          { id: 'tf-official', title: 'Terraform Certification Prep', provider: 'HashiCorp', type: 'Official Docs', url: 'https://developer.hashicorp.com/terraform/tutorials/certification', isFree: true, category: 'Learning' },
          { id: 'tf-savill', title: 'Terraform Masterclass', provider: 'John Savill', type: 'Video Course', url: 'https://www.youtube.com/playlist?list=PLlVtbbG169nF_mZl3P81QW2qgqI6fI9Qd', isFree: true, category: 'Learning', lastVerified: 'April 2026' }
        ]
      }
    ],
    roadmap: [
      { id: 'do-1', title: 'Linux & Networking Deep-Dive', description: 'Master the command line, POSIX permissions, and shell scripting (Bash/Python). Deep-dive into TCP/IP, DNS, and load balancing fundamentals for cloud-native apps.', level: 'Beginner', order: 1 },
      { id: 'do-2', title: 'Containerization Strategy', description: 'Master Docker and OCI-compliant images. Learn multi-stage builds to optimize footprint, manage private registries, and understand container security scanning.', level: 'Beginner', order: 2 },
      { id: 'do-3', title: 'Continuous Automation', description: 'Build CI/CD pipelines with GitHub Actions or GitLab. Focus on "shift-left" testing, automated security gates, and blue/green deployment strategies.', level: 'Intermediate', order: 3 },
      { id: 'do-4', title: 'Kubernetes Orchestration', description: 'Master cluster management. Learn Pods, Deployments, Services, and Ingress. Master Helm for packaging and Kustomize for multi-environment configuration.', level: 'Intermediate', order: 4 },
      { id: 'do-5', title: 'Infrastructure as Code (IaC)', description: 'Master declarative infrastructure using Terraform and Ansible. Implement GitOps patterns using ArgoCD to maintain state and perform automated rollbacks.', level: 'Advanced', order: 5 },
      { id: 'do-6', title: 'Observability & AI-Ops', description: 'Deploy full-stack monitoring with Prometheus, Grafana, and ELK Stack. Integrate AIOps tools to predict failures and automate self-healing infrastructure.', level: 'Advanced', order: 6 }
    ],
    jobPrep: [
      { id: 'devops-resume', title: 'DevOps Engineer Resume Strategy', provider: 'TechWorld with Nana', type: 'Interview Prep', url: 'https://www.youtube.com/playlist?list=PL34gf7607-xV_8kG-xH9O7X0E6qXy0ZpR', isFree: true, category: 'Applying', lastVerified: 'April 2026' },
      { id: 'devops-port', title: 'DevOps Portfolio Project: 3-Tier Web App', provider: 'Cloud Champ', type: 'Portfolio Guide', url: 'https://www.youtube.com/playlist?list=PLmR7XInZ0T87c0iG0iXUAnWAbcT7R9bZ_', isFree: true, category: 'Applying', lastVerified: 'April 2026' },
      { id: 'devops-mock', title: 'Junior DevOps Interview Questions', provider: 'Simple DevOps', type: 'Interview Prep', url: 'https://www.youtube.com/playlist?list=PLmR7XInZ0T87kG-xH9O7X0E6qXy0ZpR', isFree: true, category: 'Applying', lastVerified: 'April 2026' }
    ]
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    category: 'Cybersecurity',
    description: 'Protect systems, networks, and programs from digital attacks.',
    icon: 'ShieldCheck',
    roles: ['Security Analyst', 'AI Security Specialist', 'Penetration Tester', 'Cloud Security Engineer'],
    certifications: [
      {
        id: 'comptia-sec-plus',
        name: 'CompTIA Security+',
        provider: 'CompTIA',
        level: 'Beginner',
        code: 'SY0-701',
        description: 'Establish the core knowledge required of any cybersecurity role.',
        isHighDemand: true,
        minExperienceYears: 0,
        costs: [
          { region: 'United States', currency: 'USD', examCost: 392, learningCost: 'Paid', practiceCost: 'Paid', usdEquivalent: 392 },
          { region: 'United Kingdom', currency: 'GBP', examCost: 310, learningCost: 'Paid', practiceCost: 'Paid', usdEquivalent: 392 },
          { region: 'Canada', currency: 'CAD', examCost: 540, learningCost: 'Paid', practiceCost: 'Paid', usdEquivalent: 392 },
          { region: 'India', currency: 'INR', examCost: 32000, learningCost: 'Paid', practiceCost: 'Paid', usdEquivalent: 392 }
        ],
        resources: [
          { id: 'sec-plus-comptia', title: 'Official CompTIA Exam Page', provider: 'CompTIA', type: 'Official Docs', url: 'https://www.comptia.org/certifications/security', isFree: true, category: 'Learning' },
          { id: 'prof-messer', title: 'Professor Messer Security+ Training', provider: 'Professor Messer', type: 'Video Course', url: 'https://www.professormesser.com/security-plus/sy0-701/sy0-701-video-index/', isFree: true, category: 'Learning' }
        ]
      }
    ],
    roadmap: [
      { id: 'cs-1', title: 'Hardened Networking', description: 'Master the OSI model, TCP/IP suite, and private subnetting. Learn to analyze traffic using Wireshark and master firewall (NGFW) configurations.', level: 'Beginner', order: 1 },
      { id: 'cs-2', title: 'Host & Endpoint Defense', description: 'Learn OS hardening techniques for Linux and Windows Server. Implement EDR (Endpoint Detection and Response) and master malware analysis basics.', level: 'Beginner', order: 2 },
      { id: 'cs-3', title: 'Identity Infrastructure', description: 'Master Zero Trust architecture. Implement OAuth 2.0, OpenID Connect, and multi-factor authentication (MFA) across enterprise cloud environments.', level: 'Intermediate', order: 3 },
      { id: 'cs-4', title: 'Securing the Stack', description: 'Perform technical vulnerability assessments using OWASP frameworks. Master static (SAST) and dynamic (DAST) analysis within the CI/CD pipeline.', level: 'Intermediate', order: 4 },
      { id: 'cs-5', title: 'AI-Driven Threat Intel', description: 'Harness LLMs to analyze logs at scale, identify zero-day patterns, and implement guardrails against prompt injection and data exfiltration.', level: 'Advanced', order: 5 },
      { id: 'cs-6', title: 'Digital Forensics & IR', description: 'Master the incident response lifecycle. Learn to contain breaches, preserve digital evidence, and conduct root-cause analysis using SIEM tools like Splunk or Sentinel.', level: 'Advanced', order: 6 }
    ],
    jobPrep: [
      { id: 'cyber-resume', title: 'SOC Analyst Resume Template', provider: 'CyberGrad', type: 'Interview Prep', url: 'https://www.cybergrad.com/resume-templates', isFree: true, category: 'Applying' },
      { id: 'cyber-port', title: 'Cybersecurity Analyst Portfolio Ideas', provider: 'Gerald Auger', type: 'Portfolio Guide', url: 'https://www.youtube.com/playlist?list=PL6Lq-5YidV3uPl8K8kU0oR4wH-Y78kQnC', isFree: true, category: 'Applying', lastVerified: 'April 2026' },
      { id: 'cyber-mock', title: 'Cybersecurity Analyst Interview', provider: 'Simplified Tech', type: 'Interview Prep', url: 'https://www.youtube.com/playlist?list=PLfN_Zp4z_fKnd95_fU_PSTn6ZfI6pXlU0', isFree: true, category: 'Applying', lastVerified: 'April 2026' }
    ]
  },
  {
    id: 'fullstack',
    name: 'Full Stack Development',
    category: 'Software Development',
    description: 'Build end-to-end web applications using modern frontend and backend technologies.',
    icon: 'Code2',
    roles: ['Junior Full Stack Developer', 'Frontend Engineer (React)', 'Backend Engineer (Node)', 'AI-Integrated Web Developer'],
    certifications: [
      {
        id: 'meta-fullstack',
        name: 'Meta Full-Stack Engineer Professional Certificate',
        provider: 'Meta',
        level: 'Beginner',
        description: 'Prepare for a career as a full-stack developer with professional training from Meta.',
        minExperienceYears: 0,
        costs: [
          { region: 'United States', currency: 'USD', examCost: 49, learningCost: '$49/mo', practiceCost: 'Included', usdEquivalent: 49 },
          { region: 'United Kingdom', currency: 'GBP', examCost: 39, learningCost: '£39/mo', practiceCost: 'Included', usdEquivalent: 49 },
          { region: 'Canada', currency: 'CAD', examCost: 65, learningCost: 'CA$65/mo', practiceCost: 'Included', usdEquivalent: 49 },
          { region: 'India', currency: 'INR', examCost: 3900, learningCost: '₹3900/mo', practiceCost: 'Included', usdEquivalent: 49 }
        ],
        resources: [
          { id: 'meta-fs-official', title: 'Professional Certificate Page', provider: 'Meta', type: 'Official Docs', url: 'https://www.coursera.org/professional-certificates/meta-full-stack-engineer', isFree: false, category: 'Learning' },
          { id: 'fcc-fs', title: 'Complete Web Development Path', provider: 'freeCodeCamp', type: 'Video Course', url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/', isFree: true, category: 'Learning' }
        ]
      }
    ],
    roadmap: [
      { id: 'fs-1', title: 'Modern Frontend Foundations', description: 'Master HTML5, CSS3 (Flexbox/Grid), and ESNext. Focus on asynchronous programming, fetch API, and responsive design patterns.', level: 'Beginner', order: 1 },
      { id: 'fs-2', title: 'Component Architectures', description: 'Build scalable UIs with React and Next.js. Master state management (Zustand/Context), server components, and performant styling with Tailwind CSS.', level: 'Beginner', order: 2 },
      { id: 'fs-3', title: 'Server-Side Engineering', description: 'Master Node.js and TypeScript for backend. Build type-safe REST/GraphQL APIs and implement robust authentication using JWT or NextAuth.', level: 'Intermediate', order: 3 },
      { id: 'fs-4', title: 'Data Persistence', description: 'Design SQL and NoSQL schemas. Master the Prisma ORM for type-safe database access and implement caching strategies using Redis.', level: 'Intermediate', order: 4 },
      { id: 'fs-5', title: 'AI Application Tier', description: 'Integrate LLMs via LangChain or Vercel AI SDK. Build RAG-enabled features and streaming AI responses into your application frontend.', level: 'Intermediate', order: 5 },
      { id: 'fs-6', title: 'Cloud-Native Delivery', description: 'Containerize with Docker. Deploy using Vercel or AWS (Amplify/ECS). Master GitHub Actions for automated unit testing and deployment staging.', level: 'Advanced', order: 6 }
    ],
    jobPrep: [
      { id: 'fs-resume', title: 'Fullstack Developer Portfolio Resume', provider: 'Zety', type: 'Interview Prep', url: 'https://zety.com/resume-examples/full-stack-developer-resume', isFree: true, category: 'Applying' },
      { id: 'fs-port', title: 'Modern Fullstack Portfolio Guide', provider: 'Josh Tried Coding', type: 'Portfolio Guide', url: 'https://www.youtube.com/playlist?list=PL3v6zZ8Xq2j3-eYy9ZfGfS1-O5S5h_vS-', isFree: true, category: 'Applying', lastVerified: 'April 2026' },
      { id: 'fs-mock', title: 'Senior Fullstack Mock Interview', provider: 'Interviewing.io', type: 'Interview Prep', url: 'https://www.youtube.com/playlist?list=PLfN_Zp4z_fKnd95_fU_PSTn6ZfI6pXlU0', isFree: true, category: 'Applying', lastVerified: 'April 2026' }
    ],
    portfolioProjects: [
      {
        id: 'fs-p1',
        title: 'SaaS Multi-tenant Project Management Tool',
        description: 'A full-stack app with RBAC, real-time notifications, and workspace isolation.',
        realWorldUseCase: 'Modern enterprise collaborations requiring secure, isolated team environments.',
        technicalStack: ['Next.js', 'Prisma', 'PostgreSQL', 'Socket.io'],
        difficulty: 'Advanced'
      },
      {
        id: 'fs-p2',
        title: 'AI-Powered Content Management System',
        description: 'A CMS that auto-generates SEO tags and summaries using OpenAI API.',
        realWorldUseCase: 'Content marketing teams looking for automated editorial workflows.',
        technicalStack: ['React', 'Node.js', 'OpenAI SDK', 'MongoDB'],
        difficulty: 'Intermediate'
      }
    ]
  },
  {
    id: 'data-science',
    name: 'Data Science',
    category: 'Data Science',
    description: 'Combine statistical analysis, machine learning, and domain expertise to extract insights and drive decision-making.',
    icon: 'BrainCircuit',
    roles: ['Data Scientist', 'Machine Learning Engineer', 'Generative AI Specialist', 'Applied AI Researcher'],
    certifications: [
      {
        id: 'azure-ds-associate',
        name: 'Microsoft Certified: Azure Data Scientist Associate',
        provider: 'Microsoft',
        level: 'Intermediate',
        code: 'DP-100',
        description: 'Design and implement a data science solution on Azure.',
        minExperienceYears: 2,
        costs: [
          { region: 'United States', currency: 'USD', examCost: 165, learningCost: 'Free', practiceCost: 'Free', usdEquivalent: 165 },
          { region: 'United Kingdom', currency: 'GBP', examCost: 113, learningCost: 'Free', practiceCost: 'Free', usdEquivalent: 165 },
          { region: 'Canada', currency: 'CAD', examCost: 215, learningCost: 'Free', practiceCost: 'Free', usdEquivalent: 165 },
          { region: 'India', currency: 'INR', examCost: 4800, learningCost: 'Free', practiceCost: 'Free', usdEquivalent: 58 }
        ],
        resources: [
          { id: 'dp100-official', title: 'DP-100 Exam Resource', provider: 'Microsoft', type: 'Official Docs', url: 'https://learn.microsoft.com/en-us/certifications/exams/dp-100', isFree: true, category: 'Learning' },
          { id: 'dp100-savill', title: 'Azure Data Science Cram', provider: 'John Savill', type: 'Video Course', url: 'https://www.youtube.com/playlist?list=PLlVtbbG169nHMVytzVEn_Fay-YI_Nsc3-', isFree: true, category: 'Learning', lastVerified: 'April 2026' }
        ]
      },
      {
        id: 'ibm-ds-pro',
        name: 'IBM Data Science Professional Certificate',
        provider: 'IBM',
        level: 'Beginner',
        description: 'Develop skills in data science, Python, SQL, and data visualization.',
        minExperienceYears: 0,
        costs: [
          { region: 'United States', currency: 'USD', examCost: 49, learningCost: '$49/mo', practiceCost: 'Included', usdEquivalent: 49 },
          { region: 'United Kingdom', currency: 'GBP', examCost: 39, learningCost: '£39/mo', practiceCost: 'Included', usdEquivalent: 49 },
          { region: 'Canada', currency: 'CAD', examCost: 65, learningCost: 'CA$65/mo', practiceCost: 'Included', usdEquivalent: 49 },
          { region: 'India', currency: 'INR', examCost: 3900, learningCost: '₹3900/mo', practiceCost: 'Included', usdEquivalent: 49 }
        ],
        resources: [
          { id: 'ibm-ds-coursera', title: 'Professional Certificate Path', provider: 'IBM', type: 'Official Docs', url: 'https://www.coursera.org/professional-certificates/ibm-data-science', isFree: false, category: 'Learning' },
          { id: 'fcc-ds-yt', title: 'Scientific Computing with Python', provider: 'freeCodeCamp', type: 'Video Course', url: 'https://www.freecodecamp.org/learn/scientific-computing-with-python/', isFree: true, category: 'Learning' }
        ]
      }
    ],
    roadmap: [
      { id: 'ds-1', title: 'Mathematics for ML', description: 'Master Linear Algebra, Probability, and optimization for models.', level: 'Beginner', order: 1 },
      { id: 'ds-2', title: 'Analysis & Cleaning', description: 'Master Pandas, NumPy, and data visualization with Seaborn.', level: 'Beginner', order: 2 },
      { id: 'ds-3', title: 'Supervised Learning', description: 'Implement Regression, Decision Trees, and Support Vector Machines.', level: 'Intermediate', order: 3 },
      { id: 'ds-4', title: 'Deep Learning', description: 'Build neural networks using PyTorch or TensorFlow for NLP and CV.', level: 'Intermediate', order: 4 },
      { id: 'ds-5', title: 'Large Language Models', description: 'Master transformers, fine-tuning techniques (LoRA), and LLM evaluation.', level: 'Advanced', order: 5 },
      { id: 'ds-6', title: 'Applied AI Deployment', description: 'Operationalize models using Gradio, Streamlit, or FastAPI.', level: 'Advanced', order: 6 }
    ],
    jobPrep: [
      { id: 'ds-resume', title: 'Data Science Resume for Top Companies', provider: 'Ken Jee', type: 'Interview Prep', url: 'https://www.youtube.com/playlist?list=PL2ovzhS-VjK_0v7709jTcmU6aZIdrUu8X', isFree: true, category: 'Applying', lastVerified: 'April 2026' },
      { id: 'ds-port', title: 'Portfolio Project from Scratch', provider: 'Ken Jee', type: 'Portfolio Guide', url: 'https://www.youtube.com/playlist?list=PL2ovzhS-VjKhQZrkI3NlXfWc8YI_vWn6J', isFree: true, category: 'Applying', lastVerified: 'April 2026' },
      { id: 'ds-mock', title: 'Data Science Interview Questions', provider: 'Krish Naik', type: 'Interview Prep', url: 'https://www.youtube.com/playlist?list=PLfN_Zp4z_fKnd95_fU_PSTn6ZfI6pXlU0', isFree: true, category: 'Applying', lastVerified: 'April 2026' }
    ]
  },
  {
    id: 'cloud-architecture',
    name: 'Cloud Architecture',
    category: 'Cloud & DevOps',
    description: 'Design and manage scalable, secure, and reliable cloud-native infrastructure.',
    icon: 'Globe',
    roles: ['Cloud Architect', 'Solutions Architect', 'AI Solutions Architect'],
    certifications: [
      {
        id: 'aws-sap',
        name: 'AWS Certified Solutions Architect – Professional',
        provider: 'AWS',
        level: 'Advanced',
        code: 'SAP-C02',
        description: 'Design, deploy, and evaluate complex applications on AWS within diverse, complex requirements.',
        minExperienceYears: 5,
        isHighDemand: true,
        costs: [
          { region: 'United States', currency: 'USD', examCost: 300, learningCost: 'Paid', practiceCost: 'Paid', usdEquivalent: 300 },
          { region: 'United Kingdom', currency: 'GBP', examCost: 240, learningCost: 'Paid', practiceCost: 'Paid', usdEquivalent: 300 },
          { region: 'Canada', currency: 'CAD', examCost: 410, learningCost: 'Paid', practiceCost: 'Paid', usdEquivalent: 300 },
          { region: 'India', currency: 'INR', examCost: 25000, learningCost: 'Paid', practiceCost: 'Paid', usdEquivalent: 300 }
        ],
        resources: [
          { id: 'aws-sap-exam', title: 'AWS SAP Official Exam Guide', provider: 'AWS', type: 'Official Docs', url: 'https://aws.amazon.com/certification/certified-solutions-architect-professional/', isFree: true, category: 'Learning' },
          { id: 'aws-sap-course', title: 'Solutions Architect Pro Course', provider: 'Adrian Cantrill', type: 'Video Course', url: 'https://learn.cantrill.io/p/aws-certified-solutions-architect-professional', isFree: false, category: 'Learning' }
        ]
      },
      {
        id: 'aws-caa',
        name: 'AWS Certified Solutions Architect – Associate',
        provider: 'AWS',
        level: 'Intermediate',
        code: 'SAA-C03',
        description: 'Design and deploy scalable, available, and fault-tolerant systems on AWS.',
        minExperienceYears: 2,
        isHighDemand: true,
        costs: [
          { region: 'United States', currency: 'USD', examCost: 150, learningCost: 'Paid', practiceCost: 'Paid', usdEquivalent: 150 },
          { region: 'United Kingdom', currency: 'GBP', examCost: 120, learningCost: 'Paid', practiceCost: 'Paid', usdEquivalent: 150 },
          { region: 'Canada', currency: 'CAD', examCost: 205, learningCost: 'Paid', practiceCost: 'Paid', usdEquivalent: 150 },
          { region: 'India', currency: 'INR', examCost: 12500, learningCost: 'Paid', practiceCost: 'Paid', usdEquivalent: 150 }
        ],
        resources: [
          { id: 'aws-saa-exam', title: 'AWS SAA Official Exam Guide', provider: 'AWS', type: 'Official Docs', url: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/', isFree: true, category: 'Learning' }
        ]
      }
    ],
    roadmap: [
      { id: 'ca-pre-1', title: 'Cloud Fundamentals', description: 'Begin with a deep understanding of shared responsibility models, global infrastructure (Regions/AZs), and core virtualization concepts.', level: 'Beginner', order: 1, concepts: ['Regions & AZs', 'Shared Responsibility', 'Compute Abstraction'], outcomes: ['Foundation for complex architecting'] },
      { id: 'ca-pre-2', title: 'Enterprise Networking', description: 'Prerequisite mastery of VPC peering, Transit Gateways, Direct Connect, and hybrid cloud connectivity patterns.', level: 'Intermediate', order: 2, concepts: ['Transit Gateway', 'Subnetting', 'BGP/Direct Connect'], outcomes: ['Design secure hybrid networks'] },
      { id: 'ca-pre-3', title: 'DevOps & Automation', description: 'Prerequisite skill in CI/CD pipelines, Infrastructure as Code (Terraform/CloudFormation), and automated testing strategies.', level: 'Intermediate', order: 3, concepts: ['IaC', 'CDK', 'GitOps'], outcomes: ['Implement automated deployment targets'] },
      { id: 'ca-4', title: 'Multi-Tier Architectures', description: 'Designing decoupled systems using SQS, SNS, and Microservices. Focus on migration strategies (6 Rs) for enterprise workloads.', level: 'Advanced', order: 4, concepts: ['Decoupling', 'Microservices', 'Migration Patterns'], outcomes: ['Build resilient decoupled applications'] },
      { id: 'ca-5', title: 'High Availability & DR', description: 'Implementing RTO/RPO requirements using Pilot Light, Warm Standby, and Multi-Site active-active architectures.', level: 'Advanced', order: 5, concepts: ['RTO/RPO', 'Pilot Light', 'Cross-Region Replication'], outcomes: ['Ensure business continuity for critical apps'] },
      { id: 'ca-6', title: 'Architectural Optimization', description: 'Final mastery of Cost Optimization, Performance Efficiency, and Operational Excellence through Well-Architected reviews.', level: 'Advanced', order: 6, concepts: ['Five Pillars', 'FinOps', 'Event-Driven Scaling'], outcomes: ['Deliver cost-effective, high-performing systems'] }
    ],
    jobPrep: [
      { id: 'ca-resume', title: 'Solutions Architect Resume Strategy', provider: 'Adrian Cantrill', type: 'Interview Prep', url: 'https://adriancantrill.io/resume-tips/', isFree: true, category: 'Applying' },
      { id: 'ca-mock', title: 'AWS Solutions Architect Mock Interview', provider: 'Tech Lead', type: 'Interview Prep', url: 'https://www.youtube.com/playlist?list=PLfN_Zp4z_fKnd95_fU_PSTn6ZfI6pXlU0', isFree: true, category: 'Applying', lastVerified: 'April 2026' }
    ],
    portfolioProjects: [
      {
        id: 'ca-p1',
        title: 'Serverless Global Image Processing API',
        description: 'Architecture for an image service that auto-resizes and stores images across multiple regions.',
        realWorldUseCase: 'E-commerce platforms serving high-resolution global assets with low latency.',
        technicalStack: ['Lambda', 'S3', 'CloudFront', 'Route53'],
        difficulty: 'Intermediate'
      },
      {
        id: 'ca-p2',
        title: 'High-Availability Multi-Region E-Commerce Backend',
        description: 'A resilient architecture with cross-region replication and failover strategies.',
        realWorldUseCase: 'Critical financial or retail applications requiring 99.99% uptime.',
        technicalStack: ['VPC Peering', 'Aurora Global DB', 'Global Accelerator'],
        difficulty: 'Advanced'
      }
    ]
  },
  {
    id: 'generative-ai',
    name: 'Generative AI Engineering',
    category: 'Data Science',
    description: 'Master the lifecycle of LLMs, from prompt engineering and RAG to fine-tuning and deploying scalable AI agents.',
    icon: 'Bot',
    roles: ['Generative AI Engineer', 'AI Agent Developer', 'Prompt Engineer', 'LLM Researcher'],
    certifications: [
      {
        id: 'google-ai-pro',
        name: 'Google Cloud: Generative AI Fundamentals',
        provider: 'Google',
        level: 'Beginner',
        description: 'Understand the core concepts of Generative AI and how it differs from traditional machine learning.',
        minExperienceYears: 0,
        costs: [{ region: 'Global', currency: 'USD', examCost: 0, learningCost: 'Free', practiceCost: 'Free', usdEquivalent: 0 }],
        resources: [
          { id: 'gcp-ai-fun', title: 'Generative AI Learning Path', provider: 'Google', type: 'Official Docs', url: 'https://www.cloudskillsboost.google/course_templates/536', isFree: true, category: 'Learning' },
          { id: 'gcp-ai-yt', title: 'Introduction to Generative AI', provider: 'Google Cloud', type: 'Video Course', url: 'https://www.youtube.com/playlist?list=PLIivdWyY5uicfIs_mB0669O9L77v8fC-D', isFree: true, category: 'Learning', lastVerified: 'April 2026' }
        ]
      },
      {
        id: 'deeplearning-ai-llm',
        name: 'Generative AI with LLMs (Specialization)',
        provider: 'DeepLearning.AI',
        level: 'Advanced',
        description: 'Design and build generative AI applications using foundation models.',
        minExperienceYears: 2,
        costs: [
          { region: 'United States', currency: 'USD', examCost: 49, learningCost: '$49/mo', practiceCost: 'Included', usdEquivalent: 49 },
          { region: 'United Kingdom', currency: 'GBP', examCost: 39, learningCost: '£39/mo', practiceCost: 'Included', usdEquivalent: 49 },
          { region: 'Canada', currency: 'CAD', examCost: 65, learningCost: 'CA$65/mo', practiceCost: 'Included', usdEquivalent: 49 },
          { region: 'India', currency: 'INR', examCost: 3900, learningCost: '₹3900/mo', practiceCost: 'Included', usdEquivalent: 49 }
        ],
        resources: [
          { id: 'dl-ai-coursera', title: 'GenAI with LLMs on Coursera', provider: 'DeepLearning.AI', type: 'Video Course', url: 'https://www.coursera.org/learn/generative-ai-with-llms', isFree: false, category: 'Learning' },
          { id: 'deeplearning-ai-yt', title: 'Short Courses for Developers', provider: 'DeepLearning.AI', type: 'Video Course', url: 'https://www.deeplearning.ai/short-courses/', isFree: true, category: 'Learning' }
        ]
      }
    ],
    roadmap: [
      { id: 'gai-1', title: 'Transformer Architecture', description: 'Master the technical anatomy of LLMs. Learn about multi-head attention, positional encoding, and the training objective of modern foundation models.', level: 'Beginner', order: 1 },
      { id: 'gai-2', title: 'Agentic Control Flows', description: 'Master prompt engineering beyond basics. Learn ReAct patterns, chain-of-thought, and few-shot optimization to reliably control model outputs.', level: 'Beginner', order: 2 },
      { id: 'gai-3', title: 'Vector Datastores & RAG', description: 'Build high-performance RAG pipelines. Learn to choose embedding models, optimize chunking strategies, and use Vector DBs (Pinecone/Milvus) for semantic retrieval.', level: 'Intermediate', order: 3 },
      { id: 'gai-4', title: 'Parameter-Efficient Fine-Tuning', description: 'Specialize models for private data using LoRA and QLoRA. Master dataset preparation and evaluation metrics like ROUGE or BERTScore.', level: 'Advanced', order: 4 },
      { id: 'gai-5', title: 'Deploying AI Agents', description: 'Build autonomous agents with tool-calling capabilities. Master agent orchestration frameworks (AutoGPT/CrewAI) and deploy using serverless AI endpoints.', level: 'Advanced', order: 5 }
    ],
    jobPrep: [
      { id: 'gai-resume', title: 'AI Engineer Resume Builder', provider: 'Levels.fyi', type: 'Interview Prep', url: 'https://www.levels.fyi/blog/ai-engineer-resume.html', isFree: true, category: 'Applying' },
      { id: 'gai-port', title: 'GenAI Portfolio: Building a RAG App', provider: 'Build Fast with AI', type: 'Portfolio Guide', url: 'https://www.youtube.com/playlist?list=PLQIsXNnNvv1n_m_S-fO4H0mEPrA1_R8X8', isFree: true, category: 'Applying', lastVerified: 'April 2026' }
    ]
  },
  {
    id: 'modern-workplace',
    name: 'Modern Workplace & AI',
    category: 'Modern Workplace',
    description: 'Transform business productivity using Power Platform, M365, and AI-powered Copilots.',
    icon: 'Monitor',
    roles: ['Power Platform Developer', 'M365 Consultant', 'Low-Code AI Developer', 'Automation Architect'],
    certifications: [
      {
        id: 'pl-900',
        name: 'Microsoft Certified: Power Platform Fundamentals',
        provider: 'Microsoft',
        level: 'Beginner',
        code: 'PL-900',
        description: 'Understand the business value and product capabilities of Power Platform.',
        minExperienceYears: 0,
        costs: [
          { region: 'United States', currency: 'USD', examCost: 99, learningCost: 'Free', practiceCost: 'Free', usdEquivalent: 99 },
          { region: 'United Kingdom', currency: 'GBP', examCost: 69, learningCost: 'Free', practiceCost: 'Free', usdEquivalent: 99 },
          { region: 'Canada', currency: 'CAD', examCost: 128, learningCost: 'Free', practiceCost: 'Free', usdEquivalent: 99 },
          { region: 'India', currency: 'INR', examCost: 3696, learningCost: 'Free', practiceCost: 'Free', usdEquivalent: 45 }
        ],
        resources: [{ id: 'pl900-docs', title: 'PL-900 Learning Path', provider: 'Microsoft', type: 'Official Docs', url: 'https://learn.microsoft.com/en-us/certifications/exams/pl-900', isFree: true, category: 'Learning' }]
      },
      {
        id: 'pl-100',
        name: 'Microsoft Certified: Power Platform App Maker Associate',
        provider: 'Microsoft',
        level: 'Intermediate',
        code: 'PL-100',
        description: 'Build low-code solutions to simplify and automate business tasks.',
        minExperienceYears: 1,
        costs: [
          { region: 'United States', currency: 'USD', examCost: 165, learningCost: 'Free', practiceCost: 'Free', usdEquivalent: 165 },
          { region: 'United Kingdom', currency: 'GBP', examCost: 113, learningCost: 'Free', practiceCost: 'Free', usdEquivalent: 165 },
          { region: 'Canada', currency: 'CAD', examCost: 215, learningCost: 'Free', practiceCost: 'Free', usdEquivalent: 165 },
          { region: 'India', currency: 'INR', examCost: 4800, learningCost: 'Free', practiceCost: 'Free', usdEquivalent: 58 }
        ],
        resources: [{ id: 'pl100-docs', title: 'PL-100 Learning Path', provider: 'Microsoft', type: 'Official Docs', url: 'https://learn.microsoft.com/en-us/certifications/exams/pl-100', isFree: true, category: 'Learning' }]
      },
      {
        id: 'ms-400',
        name: 'Microsoft 365 Certified: Administrator Expert',
        provider: 'Microsoft',
        level: 'Advanced',
        code: 'MS-102',
        description: 'Deploy and manage Microsoft 365, including security, compliance, and core services.',
        minExperienceYears: 3,
        costs: [
          { region: 'United States', currency: 'USD', examCost: 165, learningCost: 'Free', practiceCost: 'Free', usdEquivalent: 165 },
          { region: 'United Kingdom', currency: 'GBP', examCost: 113, learningCost: 'Free', practiceCost: 'Free', usdEquivalent: 165 },
          { region: 'Canada', currency: 'CAD', examCost: 215, learningCost: 'Free', practiceCost: 'Free', usdEquivalent: 165 },
          { region: 'India', currency: 'INR', examCost: 4800, learningCost: 'Free', practiceCost: 'Free', usdEquivalent: 58 }
        ],
        resources: [{ id: 'ms102-docs', title: 'MS-102 Learning Path', provider: 'Microsoft', type: 'Official Docs', url: 'https://learn.microsoft.com/en-us/certifications/exams/ms-102', isFree: true, category: 'Learning' }]
      }
    ],
    roadmap: [
      { id: 'mw-1', title: 'M365 Foundations', description: 'Master SharePoint, Teams, and standard productivity apps.', level: 'Beginner', order: 1 },
      { id: 'mw-2', title: 'Power Apps Basics', description: 'Build your first canvas app and connect to basic data sources.', level: 'Beginner', order: 2 },
      { id: 'mw-3', title: 'Automation with Flow', description: 'Build enterprise workflows using Power Automate and Dataverse.', level: 'Intermediate', order: 3 },
      { id: 'mw-4', title: 'AI Builder & Copilot', description: 'Integrate AI models and LLM-powered Copilots into custom apps.', level: 'Intermediate', order: 4 },
      { id: 'mw-5', title: 'Governance & DLP', description: 'Implement environment strategies, DLP policies, and admin centers.', level: 'Advanced', order: 5 },
      { id: 'mw-6', title: 'Custom Connectors', description: 'Connect Power Platform to external APIs and legacy systems.', level: 'Advanced', order: 6 }
    ]
  }
];
