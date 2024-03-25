export type Result = {
    type: string;
    name: string;
    description: string;
}

const probabilityDistributions = [
  {
    type: 'Discrete',
    name: 'Binomial Distribution',
    description: 'Models the number of successes in a fixed number of independent trials.',
  },
  {
    type: 'Continuous',
    name: 'Normal Distribution',
    description: 'Describes continuous data that follows a bell-shaped curve.',
  },
  {
    type: 'Discrete',
    name: 'Poisson Distribution',
    description: 'Models the number of events occurring in a fixed interval of time or space.',
  },
  {
    type: 'Continuous',
    name: 'Exponential Distribution',
    description: 'Models the time between events in a Poisson process.',
  },
  {
    type: 'Discrete',
    name: 'Geometric Distribution',
    description: 'Models the number of trials needed to achieve the first success.',
  },
  {
    type: 'Continuous',
    name: 'Uniform Distribution',
    description: 'Describes a situation where all outcomes are equally likely.',
  },
  {
    type: 'Discrete',
    name: 'Bernoulli Distribution',
    description: 'Models a single trial with two possible outcomes (success or failure).',
  },
  {
    type: 'Continuous',
    name: 'Beta Distribution',
    description: 'Describes probabilities of success in a binomial trial with unknown probability.',
  },
  {
    type: 'Discrete',
    name: 'Multinomial Distribution',
    description: 'Generalizes the binomial distribution to multiple categories.',
  },
  {
    type: 'Continuous',
    name: 'Gamma Distribution',
    description: 'Models waiting times between Poisson-distributed events.',
  },
  {
    type: 'Discrete',
    name: 'Hypergeometric Distribution',
    description: 'Models the number of successes in a fixed number of draws without replacement.',
  },
  {
    type: 'Continuous',
    name: 'Chi-Square Distribution',
    description: 'Describes the sum of squared standard normal random variables.',
  },
  {
    type: 'Discrete',
    name: 'Negative Binomial Distribution',
    description: 'Models the number of failures before a specified number of successes.',
  },
  {
    type: 'Continuous',
    name: 'Student\'s t-Distribution',
    description: 'Describes the distribution of the mean of a sample drawn from a normal distribution.',
  },
  {
    type: 'Discrete',
    name: 'Discrete Uniform Distribution',
    description: 'Models a situation where a finite number of outcomes are equally likely.',
  },
  {
    type: 'Continuous',
    name: 'F-Distribution',
    description: 'Describes the ratio of two chi-square random variables.',
  },
];

const technologies = [
  {
    type: 'Programming Languages',
    name: 'Python',
    description: 'A versatile language widely used for data science and machine learning.',
  },
  {
    type: 'Programming Languages',
    name: 'SQL',
    description: 'A standard language for managing and querying relational databases.',
  },
  {
    type: 'Libraries/Frameworks',
    name: 'NumPy',
    description: 'A fundamental package for scientific computing with Python.',
  },
  {
    type: 'Libraries/Frameworks',
    name: 'Pandas',
    description: 'A powerful data manipulation and analysis library for Python.',
  },
  {
    type: 'Libraries/Frameworks',
    name: 'scikit-learn',
    description: 'A machine learning library featuring various classification and regression algorithms.',
  },
  {
    type: 'Libraries/Frameworks',
    name: 'Apache Spark',
    description: 'A fast and general-purpose cluster computing system for big data processing.',
  },
  {
    type: 'Libraries/Frameworks',
    name: 'Matplotlib',
    description: 'A plotting library for creating static, animated, and interactive visualizations.',
  },
  {
    type: 'Programming Languages',
    name: 'R',
    description: 'A programming language and environment for statistical computing and graphics.',
  },
  {
    type: 'Libraries/Frameworks',
    name: 'TensorFlow',
    description: 'An open-source machine learning framework for building and deploying ML models.',
  },
  {
    type: 'Libraries/Frameworks',
    name: 'Keras',
    description: 'A high-level neural networks API, written in Python and capable of running on top of TensorFlow.',
  },
  {
    type: 'Libraries/Frameworks',
    name: 'PyTorch',
    description: 'An open-source machine learning library for Python, used for computer vision and natural language processing.',
  },
  {
    type: 'Programming Languages',
    name: 'Java',
    description: 'A general-purpose programming language that is class-based and object-oriented.',
  },
  {
    type: 'Libraries/Frameworks',
    name: 'Apache Hadoop',
    description: 'A framework that allows for the distributed processing of large datasets across clusters of computers.',
  },
  {
    type: 'Libraries/Frameworks',
    name: 'SciPy',
    description: 'A Python-based ecosystem of open-source software for mathematics, science, and engineering.',
  },
  {
    type: 'Programming Languages',
    name: 'Scala',
    description: 'A general-purpose programming language providing support for functional programming and a strong static type system.',
  },
  {
    type: 'Libraries/Frameworks',
    name: 'Plotly',
    description: 'A graphing library that makes interactive, publication-quality graphs in various programming languages.',
  },
  {
    type: 'Libraries/Frameworks',
    name: 'Seaborn',
    description: 'A Python data visualization library based on matplotlib, providing a high-level interface for drawing statistical graphics.',
  },
  {
    type: 'Libraries/Frameworks',
    name: 'XGBoost',
    description: 'An optimized distributed gradient boosting library designed to be highly efficient, flexible, and portable.',
  },
];

const algorithmsAndModels = [
  {
    type: 'Models',
    name: 'Linear Regression',
    description: 'A model that finds the best-fitting linear relationship between variables.',
  },
  {
    type: 'Models',
    name: 'Decision Trees',
    description: 'A model that makes predictions based on a series of decision rules.',
  },
  {
    type: 'Supervised',
    name: 'Support Vector Machines',
    description: 'An algorithm that finds the optimal hyperplane to separate classes.',
  },
  {
    type: 'Unsupervised',
    name: 'K-Means Clustering',
    description: 'An algorithm that partitions data into K clusters based on similarity.',
  },
  {
    type: 'Unsupervised',
    name: 'Principal Component Analysis',
    description: 'A technique for reducing the dimensionality of a dataset while retaining most of the information.',
  },
  {
    type: 'RL',
    name: 'Q-Learning',
    description: 'A reinforcement learning algorithm that learns an optimal action-selection policy.',
  },
  {
    type: 'Models',
    name: 'Random Forests',
    description: 'An ensemble learning method that combines multiple decision trees.',
  },
  {
    type: 'Supervised',
    name: 'Logistic Regression',
    description: 'A model used for binary classification problems.',
  },
  {
    type: 'Unsupervised',
    name: 'Hierarchical Clustering',
    description: 'An algorithm that builds a hierarchy of clusters based on similarity.',
  },
  {
    type: 'RL',
    name: 'SARSA',
    description: 'An on-policy reinforcement learning algorithm for learning a Markov decision process policy.',
  },
  {
    type: 'Supervised',
    name: 'Naive Bayes',
    description: 'A probabilistic algorithm based on applying Bayes\' theorem with strong independence assumptions.',
  },
  {
    type: 'Models',
    name: 'Gradient Boosting',
    description: 'A machine learning technique that produces a prediction model in the form of an ensemble of weak prediction models.',
  },
  {
    type: 'RL',
    name: 'Deep Q-Networks (DQN)',
    description: 'A reinforcement learning algorithm that combines Q-learning with deep neural networks.',
  },
  {
    type: 'Unsupervised',
    name: 'Gaussian Mixture Models',
    description: 'A probabilistic model that assumes all the data points are generated from a mixture of a finite number of Gaussian distributions.',
  },
  {
    type: 'Supervised',
    name: 'K-Nearest Neighbors (KNN)',
    description: 'A non-parametric algorithm used for classification and regression based on the majority vote of its neighbors.',
  },
  {
    type: 'Models',
    name: 'Neural Networks',
    description: 'A model inspired by the structure and function of biological neural networks, used for various tasks such as classification and regression.',
  },
  {
    type: 'Unsupervised',
    name: 't-SNE (t-Distributed Embedding)',
    description: 'An algorithm for dimensionality reduction that is particularly well-suited for the visualization of high-dimensional datasets.',
  },
  {
    type: 'RL',
    name: 'Policy Gradients',
    description: 'A class of reinforcement learning algorithms that directly optimize the policy function.',
  },
];

export const getProbabilityMockData = (): Result[] => {
    return probabilityDistributions;
}

export const getTechnologiesMockData = (): Result[] => {
    return technologies;
}

export const getAlgorithmsMockData = (): Result[] => {
    return algorithmsAndModels;
}