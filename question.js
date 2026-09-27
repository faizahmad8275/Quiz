let questions = [

  // ==========================================
  // FUNDAMENTALS OF DATA
  // ==========================================

  {
    numb: 1,
    question: "The term 'Data' is derived from which Latin word?",
    answer: "Datum",
    options: ["Datum", "Scientia", "Datae", "Datus"]
  },

  {
    numb: 2,
    question: "Data represents:",
    answer: "Recorded facts, observations, measurements, or symbols",
    options: [
      "Only numerical values",
      "Only text",
      "Recorded facts, observations, measurements, or symbols",
      "Only computer programs"
    ]
  },

  {
    numb: 3,
    question: "An entity is something that:",
    answer: "Can be uniquely identified and described by attributes",
    options: [
      "Can only exist physically",
      "Can be uniquely identified and described by attributes",
      "Must always be a number",
      "Must be a database"
    ]
  },

  {
    numb: 4,
    question: "Which of the following is an example of an entity?",
    answer: "Student",
    options: ["Student", "Marks only", "Age only", "Name only"]
  },

  {
    numb: 5,
    question: "An attribute is:",
    answer: "A measurable or describable property of an entity",
    options: [
      "A database server",
      "A measurable or describable property of an entity",
      "A programming language",
      "A machine learning algorithm"
    ]
  },

  {
    numb: 6,
    question: "Which is an attribute of a Student entity?",
    answer: "Marks",
    options: ["Student", "University", "Marks", "Database"]
  },

  {
    numb: 7,
    question: "Data can exist in which forms?",
    answer: "Numerical, textual, graphical, audio, and video",
    options: [
      "Only numerical",
      "Only textual",
      "Only graphical",
      "Numerical, textual, graphical, audio, and video"
    ]
  },

  {
    numb: 8,
    question: "Data is the foundation of:",
    answer: "Data Science",
    options: ["Only databases", "Data Science", "Only networking", "Only operating systems"]
  },

  {
    numb: 9,
    question: "Which technology has contributed significantly to the growth of data?",
    answer: "Internet of Things",
    options: ["Only printers", "Internet of Things", "Only calculators", "Only keyboards"]
  },

  {
    numb: 10,
    question: "Which of the following is NOT a common form of data?",
    answer: "Compiler",
    options: ["Text", "Audio", "Video", "Compiler"]
  },

  // ==========================================
  // DIKW
  // ==========================================

  {
    numb: 11,
    question: "What does DIKW stand for?",
    answer: "Data, Information, Knowledge, Wisdom",
    options: [
      "Data, Information, Knowledge, Wisdom",
      "Data, Internet, Knowledge, Web",
      "Database, Information, Key, Wisdom",
      "Data, Intelligence, Knowledge, Work"
    ]
  },

  {
    numb: 12,
    question: "Which comes first in the DIKW hierarchy?",
    answer: "Data",
    options: ["Wisdom", "Knowledge", "Information", "Data"]
  },

  {
    numb: 13,
    question: "Which comes after Data in DIKW?",
    answer: "Information",
    options: ["Knowledge", "Information", "Wisdom", "Decision"]
  },

  {
    numb: 14,
    question: "Information is best described as:",
    answer: "Organized, refined, and contextualized data",
    options: [
      "Raw facts only",
      "Organized, refined, and contextualized data",
      "Only numerical data",
      "Unprocessed data"
    ]
  },

  {
    numb: 15,
    question: "Knowledge is:",
    answer: "Organized information preserved for repeated use",
    options: [
      "Raw data",
      "Organized information preserved for repeated use",
      "Only observations",
      "Only measurements"
    ]
  },

  {
    numb: 16,
    question: "Wisdom refers to:",
    answer: "Judicious application of knowledge, skill, and experience",
    options: [
      "Collection of raw data",
      "Judicious application of knowledge, skill, and experience",
      "Data storage",
      "Data duplication"
    ]
  },

  {
    numb: 17,
    question: "The correct DIKW order is:",
    answer: "Data → Information → Knowledge → Wisdom",
    options: [
      "Knowledge → Data → Wisdom → Information",
      "Data → Information → Knowledge → Wisdom",
      "Wisdom → Knowledge → Data → Information",
      "Information → Data → Wisdom → Knowledge"
    ]
  },

  {
    numb: 18,
    question: "Class average calculated from student marks is an example of:",
    answer: "Information",
    options: ["Raw data", "Information", "Wisdom", "Entity"]
  },

  {
    numb: 19,
    question: "Identifying a relationship between attendance and marks represents:",
    answer: "Knowledge",
    options: ["Data", "Information", "Knowledge", "Entity"]
  },

  {
    numb: 20,
    question: "Taking action based on knowledge represents:",
    answer: "Wisdom",
    options: ["Data", "Information", "Knowledge", "Wisdom"]
  },

  // ==========================================
  // DATA QUALITY & VALUE
  // ==========================================

  {
    numb: 21,
    question: "Which characteristic indicates whether recorded data correctly represent true values?",
    answer: "Accuracy",
    options: ["Completeness", "Accuracy", "Rarity", "Novelty"]
  },

  {
    numb: 22,
    question: "Completeness refers to:",
    answer: "Presence of all required data",
    options: [
      "Correctness of every value",
      "Presence of all required data",
      "Number of databases",
      "Data visualization"
    ]
  },

  {
    numb: 23,
    question: "Missing values mainly affect:",
    answer: "Completeness",
    options: ["Completeness", "Novelty", "Rarity", "Scalability"]
  },

  {
    numb: 24,
    question: "A phone number is present but incorrect. This is mainly a problem of:",
    answer: "Accuracy",
    options: ["Completeness", "Accuracy", "Rarity", "Novelty"]
  },

  {
    numb: 25,
    question: "A phone number is missing from a required field. This is mainly a problem of:",
    answer: "Completeness",
    options: ["Accuracy", "Completeness", "Novelty", "Rarity"]
  },

  {
    numb: 26,
    question: "Consistency means data should be:",
    answer: "Uniform, coherent, and free from contradictions",
    options: [
      "Random",
      "Uniform, coherent, and free from contradictions",
      "Always numerical",
      "Always complete"
    ]
  },

  {
    numb: 27,
    question: "Which is a common data quality problem?",
    answer: "Duplicate records",
    options: ["Duplicate records", "Good formatting", "Correct values", "Complete records"]
  },

  {
    numb: 28,
    question: "Which of the following can reduce data quality?",
    answer: "Typographical errors",
    options: [
      "Validation",
      "Typographical errors",
      "Correct formatting",
      "Complete records"
    ]
  },

  {
    numb: 29,
    question: "Data quality improvement commonly involves:",
    answer: "Cleaning and validation",
    options: [
      "Only visualization",
      "Cleaning and validation",
      "Only storage",
      "Only collection"
    ]
  },

  {
    numb: 30,
    question: "Rarity refers to data representing:",
    answer: "Uncommon or infrequent observations",
    options: [
      "Common observations",
      "Uncommon or infrequent observations",
      "Only numerical values",
      "Only duplicate records"
    ]
  },

  {
    numb: 31,
    question: "Why can rare data be valuable?",
    answer: "They may reveal anomalies or hidden patterns",
    options: [
      "They are always accurate",
      "They may reveal anomalies or hidden patterns",
      "They are always complete",
      "They require no analysis"
    ]
  },

  {
    numb: 32,
    question: "Novelty refers to data that provide:",
    answer: "New or previously unknown information",
    options: [
      "Duplicate information",
      "New or previously unknown information",
      "Only old information",
      "Only numerical information"
    ]
  },

  {
    numb: 33,
    question: "Which characteristic supports innovation and discovery?",
    answer: "Novelty",
    options: ["Novelty", "Duplication", "Inconsistency", "Missingness"]
  },

  // ==========================================
  // DATA TYPES
  // ==========================================

  {
    numb: 34,
    question: "Structured data are generally organized in:",
    answer: "Rows and columns",
    options: ["Random files", "Rows and columns", "Images only", "Audio only"]
  },

  {
    numb: 35,
    question: "Which is an example of structured data?",
    answer: "SQL database",
    options: ["Video", "SQL database", "Audio", "Social media image"]
  },

  {
    numb: 36,
    question: "Semi-structured data does not follow:",
    answer: "A fixed relational schema",
    options: [
      "Any structure",
      "A fixed relational schema",
      "Any format",
      "Any organization"
    ]
  },

  {
    numb: 37,
    question: "Which is an example of semi-structured data?",
    answer: "JSON",
    options: ["JSON", "Relational table", "Image", "Video"]
  },

  {
    numb: 38,
    question: "Which is an example of unstructured data?",
    answer: "Image",
    options: ["SQL table", "Image", "Relational database", "Structured spreadsheet"]
  },

  {
    numb: 39,
    question: "Unstructured data has:",
    answer: "No predefined format",
    options: [
      "A fixed relational schema",
      "No predefined format",
      "Only numerical values",
      "Only categorical values"
    ]
  },

  {
    numb: 40,
    question: "Qualitative data are also called:",
    answer: "Categorical data",
    options: ["Numerical data", "Categorical data", "Continuous data", "Ratio data"]
  },

  {
    numb: 41,
    question: "Which is qualitative data?",
    answer: "Blood Group",
    options: ["Height", "Weight", "Blood Group", "Income"]
  },

  {
    numb: 42,
    question: "Quantitative data represent:",
    answer: "Measurable quantities",
    options: [
      "Only categories",
      "Measurable quantities",
      "Only names",
      "Only descriptions"
    ]
  },

  {
    numb: 43,
    question: "Which is quantitative data?",
    answer: "Height",
    options: ["Blood group", "Department", "Height", "City"]
  },

  {
    numb: 44,
    question: "Discrete data contain:",
    answer: "Countable values",
    options: [
      "Only text",
      "Countable values",
      "Only continuous measurements",
      "Only categories"
    ]
  },

  {
    numb: 45,
    question: "Number of students is an example of:",
    answer: "Discrete data",
    options: ["Continuous data", "Discrete data", "Unstructured data", "Nominal data"]
  },

  {
    numb: 46,
    question: "Height is generally an example of:",
    answer: "Continuous data",
    options: ["Discrete data", "Continuous data", "Nominal data", "Unstructured data"]
  },

  // ==========================================
  // PRIMARY / SECONDARY DATA
  // ==========================================

  {
    numb: 47,
    question: "Primary data are:",
    answer: "Collected directly for a specific purpose",
    options: [
      "Always obtained from government",
      "Collected directly for a specific purpose",
      "Always obtained from Kaggle",
      "Always historical"
    ]
  },

  {
    numb: 48,
    question: "Which is an example of primary data collection?",
    answer: "Survey",
    options: ["Government report", "Census report", "Survey", "Research article"]
  },

  {
    numb: 49,
    question: "Secondary data are:",
    answer: "Data collected previously by someone else",
    options: [
      "Always collected directly",
      "Data collected previously by someone else",
      "Always experimental",
      "Always real-time"
    ]
  },

  {
    numb: 50,
    question: "Which is an example of secondary data?",
    answer: "Government report",
    options: ["Interview conducted by you", "Government report", "New experiment", "Your questionnaire"]
  },

  // ==========================================
  // LEVELS OF MEASUREMENT
  // ==========================================

  {
    numb: 51,
    question: "Which measurement scale represents categories without order?",
    answer: "Nominal",
    options: ["Nominal", "Ordinal", "Interval", "Ratio"]
  },

  {
    numb: 52,
    question: "Gender is an example of:",
    answer: "Nominal data",
    options: ["Nominal data", "Ordinal data", "Interval data", "Ratio data"]
  },

  {
    numb: 53,
    question: "Ordinal data contain:",
    answer: "Ordered categories",
    options: [
      "Categories without order",
      "Ordered categories",
      "Equal intervals with true zero",
      "Only numerical measurements"
    ]
  },

  {
    numb: 54,
    question: "Satisfaction rating is an example of:",
    answer: "Ordinal",
    options: ["Nominal", "Ordinal", "Interval", "Ratio"]
  },

  {
    numb: 55,
    question: "Which scale has equal intervals but no true zero?",
    answer: "Interval",
    options: ["Nominal", "Ordinal", "Interval", "Ratio"]
  },

  {
    numb: 56,
    question: "Temperature in Celsius is an example of:",
    answer: "Interval",
    options: ["Nominal", "Ordinal", "Interval", "Ratio"]
  },

  {
    numb: 57,
    question: "Which scale has equal intervals and a true zero?",
    answer: "Ratio",
    options: ["Nominal", "Ordinal", "Interval", "Ratio"]
  },

  {
    numb: 58,
    question: "Height is an example of:",
    answer: "Ratio",
    options: ["Nominal", "Ordinal", "Interval", "Ratio"]
  },

  {
    numb: 59,
    question: "Income is generally classified as:",
    answer: "Ratio data",
    options: ["Nominal", "Ordinal", "Interval", "Ratio"]
  },

  // ==========================================
  // DATA SOURCES
  // ==========================================

  {
    numb: 60,
    question: "Which is a common source of Data Science data?",
    answer: "Relational databases",
    options: [
      "Relational databases",
      "Only keyboards",
      "Only monitors",
      "Only compilers"
    ]
  },

  {
    numb: 61,
    question: "Which source stores data in tabular relational form?",
    answer: "Relational database",
    options: ["Relational database", "Image", "Video", "Audio"]
  },

  {
    numb: 62,
    question: "CSV is commonly used for:",
    answer: "Storing tabular data",
    options: [
      "Storing tabular data",
      "Only storing images",
      "Only storing audio",
      "Only running programs"
    ]
  },

  {
    numb: 63,
    question: "REST APIs can be used for:",
    answer: "Data acquisition",
    options: ["Data acquisition", "Only visualization", "Only printing", "Only compilation"]
  },

  {
    numb: 64,
    question: "Web scraping is a method of collecting data from:",
    answer: "Websites",
    options: ["Databases only", "Websites", "RAM only", "CPU only"]
  },

  {
    numb: 65,
    question: "Which device can continuously generate sensor data?",
    answer: "IoT device",
    options: ["IoT device", "Printer only", "Keyboard only", "Monitor only"]
  },

  {
    numb: 66,
    question: "Which is a modern data source?",
    answer: "Social media platforms",
    options: [
      "Social media platforms",
      "Only calculators",
      "Only compilers",
      "Only text editors"
    ]
  },

  // ==========================================
  // DATA REPRESENTATION
  // ==========================================

  {
    numb: 67,
    question: "Computers store data fundamentally in:",
    answer: "Binary form",
    options: ["Decimal only", "Binary form", "Roman numerals", "Text only"]
  },

  {
    numb: 68,
    question: "Which is a common data representation?",
    answer: "Integer",
    options: ["Integer", "Algorithm only", "Compiler only", "Operating system"]
  },

  {
    numb: 69,
    question: "Which data type represents True/False values?",
    answer: "Boolean",
    options: ["String", "Boolean", "Float", "Date"]
  },

  {
    numb: 70,
    question: "BLOB is commonly associated with:",
    answer: "Multimedia data",
    options: ["Only integers", "Multimedia data", "Only Boolean values", "Only dates"]
  },

  // ==========================================
  // DEFINITION & NATURE OF DATA SCIENCE
  // ==========================================

  {
    numb: 71,
    question: "Data Science is an:",
    answer: "Interdisciplinary field",
    options: [
      "Only programming field",
      "Interdisciplinary field",
      "Only statistical field",
      "Only database field"
    ]
  },

  {
    numb: 72,
    question: "Data Science combines statistics, mathematics, computer science and:",
    answer: "Domain knowledge",
    options: ["Only networking", "Domain knowledge", "Only hardware", "Only operating systems"]
  },

  {
    numb: 73,
    question: "The main goal of Data Science is to:",
    answer: "Extract useful insights and support decision-making",
    options: [
      "Only store data",
      "Extract useful insights and support decision-making",
      "Only create websites",
      "Only write code"
    ]
  },

  {
    numb: 74,
    question: "Data Science works with:",
    answer: "Structured and unstructured data",
    options: [
      "Only structured data",
      "Only unstructured data",
      "Structured and unstructured data",
      "Only numerical data"
    ]
  },

  {
    numb: 75,
    question: "Which question can Data Science help answer?",
    answer: "What is likely to happen next?",
    options: [
      "Only what is the file name?",
      "What is likely to happen next?",
      "Only what is the database password?",
      "Only what is the computer brand?"
    ]
  },

  {
    numb: 76,
    question: "Which is a characteristic of Data Science?",
    answer: "Problem-oriented",
    options: ["Problem-oriented", "Data-independent", "Non-predictive", "Non-scalable"]
  },

  {
    numb: 77,
    question: "Data Science is described as data-driven because:",
    answer: "Decisions are based on evidence from data",
    options: [
      "It avoids data",
      "Decisions are based on evidence from data",
      "It uses only intuition",
      "It never uses statistics"
    ]
  },

  {
    numb: 78,
    question: "A predictive characteristic of Data Science means it can:",
    answer: "Forecast future outcomes",
    options: [
      "Only store historical data",
      "Forecast future outcomes",
      "Only clean databases",
      "Only display charts"
    ]
  },

  // ==========================================
  // MATHEMATICS & STATISTICS
  // ==========================================

  {
    numb: 79,
    question: "Probability measures:",
    answer: "Likelihood of events occurring",
    options: [
      "Data storage",
      "Likelihood of events occurring",
      "Number of columns",
      "Database size"
    ]
  },

  {
    numb: 80,
    question: "Probability is important in Data Science because it:",
    answer: "Handles uncertainty",
    options: [
      "Removes all data",
      "Handles uncertainty",
      "Creates databases",
      "Only creates charts"
    ]
  },

  {
    numb: 81,
    question: "Statistics is the science of:",
    answer: "Collecting, summarizing, and interpreting data",
    options: [
      "Only programming",
      "Collecting, summarizing, and interpreting data",
      "Only storing data",
      "Only creating websites"
    ]
  },

  {
    numb: 82,
    question: "Which is a measure of central tendency?",
    answer: "Mean",
    options: ["Mean", "API", "Database", "Pipeline"]
  },

  {
    numb: 83,
    question: "Which is another measure of central tendency?",
    answer: "Median",
    options: ["Median", "SQL", "API", "CSV"]
  },

  {
    numb: 84,
    question: "Which is another measure of central tendency?",
    answer: "Mode",
    options: ["Mode", "JSON", "ETL", "REST"]
  },

  {
    numb: 85,
    question: "Standard deviation is used to describe:",
    answer: "Variation in data",
    options: [
      "Database structure",
      "Variation in data",
      "Data source",
      "Programming syntax"
    ]
  },

  {
    numb: 86,
    question: "Descriptive statistics mainly describes:",
    answer: "Observed data",
    options: [
      "Only future data",
      "Observed data",
      "Only databases",
      "Only algorithms"
    ]
  },

  {
    numb: 87,
    question: "Which is an example of descriptive statistics?",
    answer: "Mean",
    options: ["Mean", "Hypothesis testing", "Confidence interval", "A/B testing"]
  },

  {
    numb: 88,
    question: "Inferential statistics uses:",
    answer: "Samples to make conclusions about populations",
    options: [
      "Only complete populations",
      "Samples to make conclusions about populations",
      "Only databases",
      "Only visualizations"
    ]
  },

  {
    numb: 89,
    question: "Which is an example of inferential statistics?",
    answer: "Hypothesis testing",
    options: [
      "Mean",
      "Median",
      "Hypothesis testing",
      "Histogram"
    ]
  },

  {
    numb: 90,
    question: "A/B testing is associated with:",
    answer: "Inferential statistics",
    options: [
      "Inferential statistics",
      "Data storage",
      "Data acquisition",
      "Data representation"
    ]
  },

  {
    numb: 91,
    question: "Linear algebra is heavily based on:",
    answer: "Vectors and matrices",
    options: [
      "Web pages",
      "Vectors and matrices",
      "HTML tags",
      "SQL queries"
    ]
  },

  {
    numb: 92,
    question: "Images can be represented as:",
    answer: "Matrices of pixel values",
    options: [
      "Only strings",
      "Matrices of pixel values",
      "Only SQL tables",
      "Only graphs"
    ]
  },

  {
    numb: 93,
    question: "Calculus is used in machine learning for:",
    answer: "Optimization",
    options: ["Only data storage", "Optimization", "Only web scraping", "Only reporting"]
  },

  {
    numb: 94,
    question: "Gradient Descent is related to:",
    answer: "Optimization",
    options: ["Optimization", "Data collection", "Data storage", "Data cleaning only"]
  },

  {
    numb: 95,
    question: "Optimization aims to:",
    answer: "Find the best solution among many possibilities",
    options: [
      "Delete all data",
      "Find the best solution among many possibilities",
      "Only collect data",
      "Only visualize data"
    ]
  },

  // ==========================================
  // COMPUTER SCIENCE & AI
  // ==========================================

  {
    numb: 96,
    question: "Which programming language is commonly used in Data Science?",
    answer: "Python",
    options: ["Python", "HTML", "CSS", "XML"]
  },

  {
    numb: 97,
    question: "Which language is commonly used for querying databases?",
    answer: "SQL",
    options: ["SQL", "HTML", "CSS", "XML"]
  },

  {
    numb: 98,
    question: "Which is a NoSQL database?",
    answer: "MongoDB",
    options: ["MySQL", "PostgreSQL", "MongoDB", "SQL Server"]
  },

  {
    numb: 99,
    question: "Which is a relational database?",
    answer: "MySQL",
    options: ["MongoDB", "MySQL", "Redis", "Cassandra"]
  },

  {
    numb: 100,
    question: "Machine Learning automatically learns patterns from:",
    answer: "Data",
    options: ["Only code", "Data", "Only hardware", "Only databases"]
  },

  {
    numb: 101,
    question: "Supervised learning uses:",
    answer: "Labeled data",
    options: ["Unlabeled data only", "Labeled data", "No data", "Only images"]
  },

  {
    numb: 102,
    question: "Which is an example of supervised learning?",
    answer: "Spam detection",
    options: ["Spam detection", "Customer segmentation", "PCA", "Clustering"]
  },

  {
    numb: 103,
    question: "Which algorithm is associated with supervised learning?",
    answer: "Linear Regression",
    options: ["K-Means", "Linear Regression", "PCA", "Hierarchical clustering"]
  },

  {
    numb: 104,
    question: "Unsupervised learning is used to:",
    answer: "Find hidden patterns",
    options: [
      "Find hidden patterns",
      "Only use labeled data",
      "Only calculate averages",
      "Only store data"
    ]
  },

  {
    numb: 105,
    question: "Customer segmentation is an example of:",
    answer: "Unsupervised learning",
    options: [
      "Supervised learning",
      "Unsupervised learning",
      "Reinforcement learning",
      "Data cleaning"
    ]
  },

  {
    numb: 106,
    question: "Which algorithm is associated with unsupervised learning?",
    answer: "K-Means",
    options: ["Linear Regression", "K-Means", "Decision Tree", "Random Forest"]
  },

  {
    numb: 107,
    question: "Reinforcement learning learns through:",
    answer: "Rewards and penalties",
    options: [
      "Labels only",
      "Rewards and penalties",
      "Database tables",
      "Missing values"
    ]
  },

  {
    numb: 108,
    question: "Which is an application of reinforcement learning?",
    answer: "Game-playing AI",
    options: ["Game-playing AI", "CSV cleaning", "Data entry", "SQL storage"]
  },

  {
    numb: 109,
    question: "Machine Learning is a subset of:",
    answer: "Artificial Intelligence",
    options: ["Statistics", "Artificial Intelligence", "Databases", "Data Cleaning"]
  },

  {
    numb: 110,
    question: "Which is an example of Artificial Intelligence?",
    answer: "Speech recognition",
    options: ["Speech recognition", "CSV file", "SQL table", "DataFrame"]
  },

  // ==========================================
  // DATA ACQUISITION - CSV
  // ==========================================

  {
    numb: 111,
    question: "Which Pandas function reads a CSV file?",
    answer: "pd.read_csv()",
    options: ["pd.read_csv()", "pd.open_csv()", "pd.csv_read()", "pd.load_csv()"]
  },

  {
    numb: 112,
    question: "A Pandas DataFrame is commonly used to:",
    answer: "Represent tabular data",
    options: [
      "Represent tabular data",
      "Run operating systems",
      "Compile programs",
      "Create network connections"
    ]
  },

  {
    numb: 113,
    question: "Which function displays the first records of a DataFrame?",
    answer: "df.head()",
    options: ["df.first()", "df.head()", "df.start()", "df.top()"]
  },

  {
    numb: 114,
    question: "Which attribute gives DataFrame dimensions?",
    answer: "df.shape",
    options: ["df.size()", "df.shape", "df.dimension()", "df.length()"]
  },

  {
    numb: 115,
    question: "Which property displays column names?",
    answer: "df.columns",
    options: ["df.names", "df.columns", "df.fields", "df.headers()"]
  },

  {
    numb: 116,
    question: "Which property displays data types?",
    answer: "df.dtypes",
    options: ["df.types", "df.dtypes", "df.datatypes()", "df.kind"]
  },

  {
    numb: 117,
    question: "Which function helps identify missing values?",
    answer: "df.isnull().sum()",
    options: [
      "df.missing()",
      "df.isnull().sum()",
      "df.empty()",
      "df.nulls()"
    ]
  },

  {
    numb: 118,
    question: "Which parameter allows reading only selected CSV columns?",
    answer: "usecols",
    options: ["columns", "usecols", "selectcols", "fields"]
  },

  {
    numb: 119,
    question: "Which parameter specifies a separator in read_csv()?",
    answer: "sep",
    options: ["separator", "sep", "split", "delimiterOnly"]
  },

  {
    numb: 120,
    question: "Which parameter can convert CSV date columns into datetime?",
    answer: "parse_dates",
    options: ["date", "parse_dates", "datetime_only", "convert_date"]
  },

  {
    numb: 121,
    question: "Which parameter is useful when a CSV has no header row?",
    answer: "header=None",
    options: ["header=None", "noheader=True", "header=FalseOnly", "columns=None"]
  },

  {
    numb: 122,
    question: "How can a very large CSV be read in smaller portions?",
    answer: "Using chunksize",
    options: ["Using rowsize", "Using chunksize", "Using pagesize", "Using splitfile"]
  },

  {
    numb: 123,
    question: "The built-in Python module for basic CSV processing is:",
    answer: "csv",
    options: ["csv", "pandasCSV", "dataframe", "table"]
  },

  {
    numb: 124,
    question: "For Data Science applications, which approach is generally preferred for CSV analysis?",
    answer: "Pandas",
    options: ["Pandas", "Only csv module", "Only text editor", "Only Excel"]
  },

  // ==========================================
  // JSON ACQUISITION
  // ==========================================

  {
    numb: 125,
    question: "Which Pandas function reads JSON data?",
    answer: "pd.read_json()",
    options: ["pd.read_json()", "pd.open_json()", "pd.json_read()", "pd.load_json()"]
  },

  {
    numb: 126,
    question: "Which Python function can read JSON from a file?",
    answer: "json.load()",
    options: ["json.load()", "json.read()", "json.file()", "json.open()"]
  },

  {
    numb: 127,
    question: "Which method converts an API response into JSON/Python data?",
    answer: "response.json()",
    options: [
      "response.json()",
      "response.data()",
      "response.parse()",
      "response.load()"
    ]
  },

  {
    numb: 128,
    question: "Which function converts structured data into a DataFrame?",
    answer: "pd.DataFrame()",
    options: [
      "pd.DataFrame()",
      "pd.CreateTable()",
      "pd.Structure()",
      "pd.Table()"
    ]
  },

  {
    numb: 129,
    question: "Which function is useful for flattening nested JSON?",
    answer: "pd.json_normalize()",
    options: [
      "pd.json_normalize()",
      "pd.flatten()",
      "pd.json_flat()",
      "pd.normalize_json()"
    ]
  },

  // ==========================================
  // DATA CLEANING & NOISE
  // ==========================================

  {
    numb: 130,
    question: "Noise in data refers to:",
    answer: "Random errors, irrelevant information, or meaningless variations",
    options: [
      "Useful information only",
      "Random errors, irrelevant information, or meaningless variations",
      "Only duplicate records",
      "Only missing values"
    ]
  },

  {
    numb: 131,
    question: "Noise can reduce:",
    answer: "Data quality",
    options: ["Data quality", "Data storage only", "CPU speed", "Internet speed"]
  },

  {
    numb: 132,
    question: "In Y = X + ε, ε represents:",
    answer: "Noise",
    options: ["True signal", "Noise", "Input alphabet", "Output"]
  },

  {
    numb: 133,
    question: "Which can be an example of noise?",
    answer: "Incorrect sensor reading",
    options: [
      "Correct measurement",
      "Incorrect sensor reading",
      "Valid observation",
      "Correct record"
    ]
  },

  {
    numb: 134,
    question: "Which technique can smooth numerical data?",
    answer: "Binning",
    options: ["Binning", "Joining", "Sorting only", "Indexing"]
  },

  {
    numb: 135,
    question: "Which technique can smooth time-series data?",
    answer: "Moving average",
    options: ["Moving average", "SQL join", "CSV parsing", "Encoding"]
  },

  {
    numb: 136,
    question: "Which technique is commonly used to identify extreme values?",
    answer: "Outlier detection",
    options: ["Outlier detection", "Data storage", "Data acquisition", "Encoding"]
  },

  {
    numb: 137,
    question: "Which method removes repeated records?",
    answer: "Duplicate removal",
    options: ["Duplicate removal", "Normalization", "Aggregation", "Visualization"]
  },

  {
    numb: 138,
    question: "Which technique fills missing values?",
    answer: "Missing-value imputation",
    options: [
      "Missing-value imputation",
      "Data integration",
      "Sorting",
      "Visualization"
    ]
  },

  {
    numb: 139,
    question: "Which Pandas function removes duplicate records?",
    answer: "drop_duplicates()",
    options: ["remove_duplicates()", "drop_duplicates()", "delete_duplicates()", "unique_remove()"]
  },

  {
    numb: 140,
    question: "Which Pandas function can replace missing values?",
    answer: "fillna()",
    options: ["replaceNull()", "fillna()", "missing()", "fillNullOnly()"]
  },

  // ==========================================
  // DATA TRANSFORMATION
  // ==========================================

  {
    numb: 141,
    question: "Data transformation converts data into:",
    answer: "A more useful form for analysis",
    options: [
      "A completely unusable form",
      "A more useful form for analysis",
      "Only binary code",
      "Only images"
    ]
  },

  {
    numb: 142,
    question: "Normalization commonly rescales values to:",
    answer: "A range such as 0 to 1",
    options: [
      "Only -100 to 100",
      "A range such as 0 to 1",
      "Only 1 to 10",
      "Only 10 to 100"
    ]
  },

  {
    numb: 143,
    question: "Which technique converts data to a common scale using mean and standard deviation?",
    answer: "Standardization",
    options: ["Normalization", "Standardization", "Aggregation", "Filtering"]
  },

  {
    numb: 144,
    question: "The Z-score is associated with:",
    answer: "Standardization",
    options: ["Aggregation", "Standardization", "Binning", "Encoding"]
  },

  {
    numb: 145,
    question: "Aggregation means:",
    answer: "Combining multiple records into a summary",
    options: [
      "Deleting all records",
      "Combining multiple records into a summary",
      "Adding random noise",
      "Changing data to images"
    ]
  },

  {
    numb: 146,
    question: "Discretization converts:",
    answer: "Continuous data into categories",
    options: [
      "Categories into databases",
      "Continuous data into categories",
      "Text into audio",
      "Images into videos"
    ]
  },

  {
    numb: 147,
    question: "Encoding converts:",
    answer: "Categorical data into numerical representation",
    options: [
      "Numerical data into images",
      "Categorical data into numerical representation",
      "Data into websites",
      "Tables into databases"
    ]
  },

  {
    numb: 148,
    question: "Log transformation can help reduce:",
    answer: "Skewness",
    options: ["Database size", "Skewness", "Number of columns", "Number of records"]
  },

  {
    numb: 149,
    question: "In time-series analysis, differencing can be used to:",
    answer: "Remove trends",
    options: ["Remove trends", "Add duplicates", "Create JSON", "Remove columns"]
  },

  {
    numb: 150,
    question: "Smoothing in time-series analysis is used to:",
    answer: "Reduce noise",
    options: ["Increase noise", "Reduce noise", "Create databases", "Add categories"]
  }

];