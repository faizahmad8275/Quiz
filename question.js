let questions = [
  {
    numb: 1,
    question: "What does learning mean in Artificial Intelligence?",
    answer: "A system improving its performance using experience",
    options: [
      "Writing more code manually",
      "A system improving its performance using experience",
      "Increasing computer memory",
      "Increasing processor speed",
    ],
  },
  {
    numb: 2,
    question: "A learning system can improve its performance based on:",
    answer: "All of the above",
    options: ["Experience", "Examples", "Feedback", "All of the above"],
  },
  {
    numb: 3,
    question: "Why is learning necessary in AI?",
    answer: "All of the above",
    options: [
      "Designers cannot anticipate every situation",
      "Environments may change over time",
      "Learning can discover useful patterns",
      "All of the above",
    ],
  },
  {
    numb: 4,
    question:
      "Which ability allows an AI system to handle previously unseen situations?",
    answer: "Generalization",
    options: ["Memorization", "Generalization", "Compilation", "Encryption"],
  },
  {
    numb: 5,
    question:
      "Which is the simplest form of learning mentioned in the tutorial?",
    answer: "Rote learning",
    options: [
      "Neural learning",
      "Genetic learning",
      "Rote learning",
      "Inductive learning",
    ],
  },
  {
    numb: 6,
    question: "Rote learning primarily involves:",
    answer: "Memorizing facts or results",
    options: [
      "Finding statistical patterns",
      "Memorizing facts or results",
      "Evolving solutions",
      "Adjusting neural weights",
    ],
  },
  {
    numb: 7,
    question: "Which statement about rote learning is TRUE?",
    answer: "It stores information for direct lookup",
    options: [
      "It always generalizes to new situations",
      "It involves extensive reasoning",
      "It stores information for direct lookup",
      "It requires neural networks",
    ],
  },
  {
    numb: 8,
    question:
      "A chess program stores the best move for a board position so that it does not calculate it again. This is an example of:",
    answer: "Rote learning",
    options: ["Inductive learning", "Rote learning", "Genetic learning", "EBL"],
  },
  {
    numb: 9,
    question: "Learning by Taking Advice involves:",
    answer: "Receiving rules or advice from a teacher/expert",
    options: [
      "Receiving rules or advice from a teacher/expert",
      "Randomly changing solutions",
      "Adjusting neural network weights",
      "Finding entropy",
    ],
  },
  {
    numb: 10,
    question:
      "In Learning by Taking Advice, most of the thinking has already been done by:",
    answer: "The teacher/expert",
    options: [
      "The computer",
      "The learner",
      "The teacher/expert",
      "The operating system",
    ],
  },
  {
    numb: 11,
    question: "Learning from Examples is also called:",
    answer: "Induction",
    options: ["Deduction", "Induction", "Mutation", "Selection"],
  },
  {
    numb: 12,
    question: "Learning from Examples attempts to:",
    answer: "Find the pattern behind examples",
    options: [
      "Memorize every example exactly",
      "Find the pattern behind examples",
      "Remove all examples",
      "Generate random rules",
    ],
  },
  {
    numb: 13,
    question:
      "Which form of learning generally requires only one example along with background knowledge?",
    answer: "Explanation-Based Learning",
    options: [
      "Rote learning",
      "Inductive learning",
      "Explanation-Based Learning",
      "Genetic learning",
    ],
  },
  {
    numb: 14,
    question: "Neural Net Learning is inspired by:",
    answer: "Human brain structure",
    options: [
      "Natural selection",
      "Human brain structure",
      "Database systems",
      "Mathematical logic only",
    ],
  },
  {
    numb: 15,
    question: "Genetic Learning is inspired by:",
    answer: "Natural evolution",
    options: [
      "Human memory",
      "Natural evolution",
      "Decision trees",
      "Database normalization",
    ],
  },
  {
    numb: 16,
    question: "Inductive learning moves from:",
    answer: "Specific → general",
    options: [
      "General → specific",
      "Specific → general",
      "General → general",
      "Specific → specific",
    ],
  },
  {
    numb: 17,
    question: "Deductive reasoning moves from:",
    answer: "General rules to specific conclusions",
    options: [
      "Specific observations to general conclusions",
      "General rules to specific conclusions",
      "Random examples to rules",
      "Examples to mutations",
    ],
  },
  {
    numb: 18,
    question: "In inductive learning, the learner is given:",
    answer: "Training examples",
    options: [
      "Training examples",
      "Only random numbers",
      "Only an algorithm",
      "Only a neural network",
    ],
  },
  {
    numb: 19,
    question: "A training example generally contains:",
    answer: "Features/attributes and a correct label",
    options: [
      "Features/attributes and a correct label",
      "Only a label",
      "Only an attribute",
      "Only an algorithm",
    ],
  },
  {
    numb: 20,
    question: "The general rule produced by inductive learning is called a:",
    answer: "Hypothesis",
    options: ["Mutation", "Hypothesis", "Chromosome", "Neuron"],
  },
  {
    numb: 21,
    question:
      "The set of all possible rules that could be constructed from given attributes is called:",
    answer: "Hypothesis space",
    options: [
      "Search tree",
      "Hypothesis space",
      "Neural space",
      "Fitness space",
    ],
  },
  {
    numb: 22,
    question: "What is inductive bias?",
    answer: "A built-in preference for choosing one hypothesis over another",
    options: [
      "Random selection of training examples",
      "A built-in preference for choosing one hypothesis over another",
      "A method of calculating neural weights",
      "A mutation operation",
    ],
  },
  {
    numb: 23,
    question: "Occam's Razor generally prefers:",
    answer: "The simplest possible rule",
    options: [
      "The most complicated rule",
      "The simplest possible rule",
      "A random rule",
      "The longest rule",
    ],
  },
  {
    numb: 24,
    question: "Which statement about inductive conclusions is correct?",
    answer: "They are not guaranteed and depend on the examples",
    options: [
      "They are always 100% guaranteed",
      "They are never useful",
      "They are not guaranteed and depend on the examples",
      "They require genetic algorithms",
    ],
  },
  {
    numb: 25,
    question:
      "A spam filter learning from emails labeled spam and not spam is an example of:",
    answer: "Inductive learning",
    options: [
      "Inductive learning",
      "Rote learning only",
      "Mutation",
      "Crossover",
    ],
  },
  {
    numb: 26,
    question: "A decision tree resembles a:",
    answer: "Flowchart",
    options: ["Database", "Flowchart", "Neural network", "Genetic chromosome"],
  },
  {
    numb: 27,
    question: "In a decision tree, an internal node represents:",
    answer: "An attribute test",
    options: [
      "Final classification",
      "An attribute test",
      "A mutation",
      "A fitness value",
    ],
  },
  {
    numb: 28,
    question: "In a decision tree, branches represent:",
    answer: "Outcomes of attribute tests",
    options: [
      "Outcomes of attribute tests",
      "Neural weights",
      "Training errors",
      "Population size",
    ],
  },
  {
    numb: 29,
    question: "In a decision tree, a leaf represents:",
    answer: "A final decision/classification",
    options: [
      "An attribute",
      "A final decision/classification",
      "A training example only",
      "An input layer",
    ],
  },
  {
    numb: 30,
    question:
      "Which algorithm is specifically mentioned for building decision trees?",
    answer: "ID3",
    options: ["BFS", "DFS", "ID3", "Dijkstra"],
  },
  {
    numb: 31,
    question: "ID3 builds a decision tree:",
    answer: "Top-down",
    options: ["Bottom-up", "Top-down", "Randomly", "Horizontally"],
  },
  {
    numb: 32,
    question: "Entropy measures:",
    answer: "Uncertainty or impurity",
    options: [
      "Number of attributes",
      "Uncertainty or impurity",
      "Number of neurons",
      "Population size",
    ],
  },
  {
    numb: 33,
    question: "If all examples in a group have the same label, entropy is:",
    answer: "Zero",
    options: ["Maximum", "Zero", "One", "Infinite"],
  },
  {
    numb: 34,
    question: "For a 50-50 mixture of two labels, entropy is:",
    answer: "At its highest",
    options: ["Zero", "At its highest", "Negative", "Undefined"],
  },
  {
    numb: 35,
    question: "Information Gain measures:",
    answer: "How much an attribute reduces uncertainty",
    options: [
      "How much an attribute reduces uncertainty",
      "Number of neurons",
      "Number of mutations",
      "Size of the training dataset",
    ],
  },
  {
    numb: 36,
    question: "ID3 chooses the attribute having:",
    answer: "Highest information gain",
    options: [
      "Lowest information gain",
      "Highest information gain",
      "Lowest entropy always",
      "Maximum number of values",
    ],
  },
  {
    numb: 37,
    question: "A major advantage of decision trees is:",
    answer: "They are easy for humans to understand",
    options: [
      "They are difficult to interpret",
      "They are easy for humans to understand",
      "They require huge computing power",
      "They cannot classify data",
    ],
  },
  {
    numb: 38,
    question: "A major limitation of decision trees is:",
    answer: "They can overfit the training data",
    options: [
      "They cannot represent decisions",
      "They can overfit the training data",
      "They cannot use attributes",
      "They cannot be used for classification",
    ],
  },
  {
    numb: 39,
    question:
      "The process of removing branches that provide little predictive value is called:",
    answer: "Pruning",
    options: ["Mutation", "Pruning", "Crossover", "Selection"],
  },
  {
    numb: 40,
    question: "Pruning helps to:",
    answer: "Reduce overfitting",
    options: [
      "Increase irrelevant information",
      "Reduce overfitting",
      "Increase mutation",
      "Increase entropy",
    ],
  },
  {
    numb: 41,
    question: "Explanation-Based Learning is abbreviated as:",
    answer: "EBL",
    options: ["EBL", "EDL", "EBLR", "EIL"],
  },
  {
    numb: 42,
    question: "EBL can potentially learn a general rule from:",
    answer: "One training example",
    options: [
      "Thousands of examples only",
      "One training example",
      "No example and no knowledge",
      "Random data only",
    ],
  },
  {
    numb: 43,
    question: "EBL heavily depends on:",
    answer: "Background/domain knowledge",
    options: [
      "Background/domain knowledge",
      "Random mutations",
      "Large populations",
      "High entropy",
    ],
  },
  {
    numb: 44,
    question:
      "Which of the following is NOT one of the four key ingredients of EBL?",
    answer: "Mutation Rate",
    options: [
      "Training Example",
      "Goal Concept",
      "Domain Theory",
      "Mutation Rate",
    ],
  },
  {
    numb: 45,
    question: "The four key ingredients of EBL include:",
    answer: "All four",
    options: [
      "Training example",
      "Goal concept",
      "Domain theory",
      "Operationality criteria",
    ],
  },
  {
    numb: 46,
    question: "In EBL, Domain Theory refers to:",
    answer: "Background rules and facts already known",
    options: [
      "Background rules and facts already known",
      "Random training data",
      "Genetic population",
      "Neural network weights",
    ],
  },
  {
    numb: 47,
    question: "Operationality Criteria specify:",
    answer: "How the final learned rule should be represented so it is usable",
    options: [
      "How the final learned rule should be represented so it is usable",
      "How many neurons are required",
      "How mutation occurs",
      "How entropy is calculated",
    ],
  },
  {
    numb: 48,
    question:
      "Which learning method primarily relies on statistical patterns across examples?",
    answer: "Inductive Learning",
    options: [
      "Explanation-Based Learning",
      "Inductive Learning",
      "Genetic Learning",
      "Rote Learning",
    ],
  },
  {
    numb: 49,
    question:
      "Which learning method primarily relies on existing background/domain knowledge?",
    answer: "EBL",
    options: ["EBL", "Rote learning", "Genetic learning", "Neural learning"],
  },
  {
    numb: 50,
    question: "Which statement correctly compares Inductive Learning and EBL?",
    answer:
      "Induction uses many examples, while EBL can use one example with background knowledge",
    options: [
      "Both always require thousands of examples",
      "Induction uses many examples, while EBL can use one example with background knowledge",
      "EBL does not require background knowledge",
      "Induction does not generalize",
    ],
  },
  {
    numb: 51,
    question: "Relevant information means:",
    answer: "Information that truly influences the outcome",
    options: [
      "Information that truly influences the outcome",
      "All available information",
      "Random information",
      "Information that increases dataset size",
    ],
  },
  {
    numb: 52,
    question: "Irrelevant attributes can cause a learning algorithm to:",
    answer: "Find false patterns",
    options: [
      "Find false patterns",
      "Always improve accuracy",
      "Remove overfitting",
      "Reduce the dataset automatically",
    ],
  },
  {
    numb: 53,
    question: "Adding many unnecessary attributes can lead to:",
    answer: "Curse of dimensionality",
    options: [
      "Curse of dimensionality",
      "Mutation",
      "Crossover",
      "Rote learning",
    ],
  },
  {
    numb: 54,
    question: "Focusing on relevant information can reduce:",
    answer: "Overfitting",
    options: ["Overfitting", "Generalization", "Accuracy", "Learning ability"],
  },
  {
    numb: 55,
    question:
      "Which technique systematically tests subsets of attributes to determine which combination works best?",
    answer: "Wrapper method",
    options: ["Wrapper method", "Rote learning", "Mutation", "Selection"],
  },
  {
    numb: 56,
    question: "A filter method generally:",
    answer: "Scores attributes individually",
    options: [
      "Scores attributes individually",
      "Evolves entire populations",
      "Uses neural networks only",
      "Uses crossover",
    ],
  },
  {
    numb: 57,
    question: "Information Gain can help identify:",
    answer: "Relevant attributes",
    options: [
      "Relevant attributes",
      "Genetic chromosomes",
      "Neural layers only",
      "CPU speed",
    ],
  },
  {
    numb: 58,
    question:
      "Suppose a system predicts whether a fruit is ripe. Which is most likely irrelevant?",
    answer: "Shopkeeper's name",
    options: ["Colour", "Firmness", "Shopkeeper's name", "Sweetness/smell"],
  },
  {
    numb: 59,
    question: "Neural networks are inspired by:",
    answer: "Human brain",
    options: [
      "Human brain",
      "Genetic algorithms",
      "Decision trees",
      "Databases",
    ],
  },
  {
    numb: 60,
    question: "The basic processing units of a neural network are called:",
    answer: "Neurons/nodes",
    options: ["Chromosomes", "Neurons/nodes", "Branches", "Genes"],
  },
  {
    numb: 61,
    question: "Neural networks are generally organized into:",
    answer: "Layers",
    options: ["Rows only", "Layers", "Trees only", "Populations"],
  },
  {
    numb: 62,
    question: "Which layer receives input features?",
    answer: "Input layer",
    options: ["Input layer", "Hidden layer", "Output layer", "Fitness layer"],
  },
  {
    numb: 63,
    question: "The layer that produces the prediction is:",
    answer: "Output layer",
    options: ["Input layer", "Hidden layer", "Output layer", "Mutation layer"],
  },
  {
    numb: 64,
    question: "Neural networks learn primarily by adjusting:",
    answer: "Connection weights",
    options: ["Branches", "Connection weights", "Chromosomes", "Entropy"],
  },
  {
    numb: 65,
    question:
      "The prediction is compared with the correct answer to calculate:",
    answer: "Error",
    options: ["Fitness", "Error", "Entropy only", "Mutation"],
  },
  {
    numb: 66,
    question:
      "The process commonly used to adjust neural network weights based on error is:",
    answer: "Backpropagation",
    options: ["Backpropagation", "Crossover", "Pruning", "Selection"],
  },
  {
    numb: 67,
    question:
      "Modern networks with many hidden layers are commonly associated with:",
    answer: "Deep Learning",
    options: [
      "Rote Learning",
      "Deep Learning",
      "Genetic Learning",
      "Decision Tree Learning",
    ],
  },
  {
    numb: 68,
    question: "A major limitation of neural networks is:",
    answer: "They often require large amounts of data and computing power",
    options: [
      "They cannot learn patterns",
      "They often require large amounts of data and computing power",
      "They cannot process inputs",
      "They cannot adjust weights",
    ],
  },
  {
    numb: 69,
    question: "Neural networks are sometimes called black boxes because:",
    answer: "Their decisions can be difficult to explain",
    options: [
      "They have no input",
      "Their decisions can be difficult to explain",
      "They cannot produce outputs",
      "They only use black-colored diagrams",
    ],
  },
  {
    numb: 70,
    question:
      "Which is an example of neural network application mentioned in the tutorial?",
    answer: "All of the above",
    options: [
      "Image recognition",
      "Speech recognition",
      "Self-driving cars",
      "All of the above",
    ],
  },
  {
    numb: 71,
    question: "Genetic learning is inspired by:",
    answer: "Natural evolution",
    options: [
      "Natural evolution",
      "Human memory",
      "Database systems",
      "Decision trees",
    ],
  },
  {
    numb: 72,
    question: "Genetic learning is also called:",
    answer: "Genetic Algorithm",
    options: [
      "Genetic Algorithm",
      "Genetic Tree",
      "Genetic Network",
      "Genetic Database",
    ],
  },
  {
    numb: 73,
    question: "A genetic algorithm maintains:",
    answer: "A population of candidate solutions",
    options: [
      "A single fixed solution",
      "A population of candidate solutions",
      "A single neuron",
      "A decision tree",
    ],
  },
  {
    numb: 74,
    question: "The quality of a candidate solution is measured using:",
    answer: "Fitness function",
    options: [
      "Entropy",
      "Fitness function",
      "Information gain",
      "Backpropagation",
    ],
  },
  {
    numb: 75,
    question: "Solutions with higher fitness are more likely to be:",
    answer: "Selected as parents",
    options: [
      "Deleted",
      "Selected as parents",
      "Ignored",
      "Mutated immediately",
    ],
  },
  {
    numb: 76,
    question: "Combining parts of two parent solutions is called:",
    answer: "Crossover",
    options: ["Mutation", "Crossover", "Selection", "Pruning"],
  },
  {
    numb: 77,
    question: "A small random change in a solution is called:",
    answer: "Mutation",
    options: ["Crossover", "Selection", "Mutation", "Entropy"],
  },
  {
    numb: 78,
    question:
      "Which sequence correctly represents the major genetic algorithm operations?",
    answer: "Selection → Crossover → Mutation",
    options: [
      "Selection → Crossover → Mutation",
      "Mutation → Selection → Entropy",
      "Pruning → Selection → Backpropagation",
      "Entropy → Mutation → Pruning",
    ],
  },
  {
    numb: 79,
    question: "A candidate solution is often represented as a:",
    answer: "Chromosome/string",
    options: ["Chromosome/string", "Decision tree only", "Neuron", "Leaf"],
  },
  {
    numb: 80,
    question: "What is one purpose of mutation?",
    answer: "To explore new possibilities",
    options: [
      "To explore new possibilities",
      "To calculate entropy",
      "To build a decision tree",
      "To remove all solutions",
    ],
  },
  {
    numb: 81,
    question: "Genetic algorithms:",
    answer: "Do not guarantee the absolute best solution",
    options: [
      "Always guarantee the absolute best solution",
      "Do not guarantee the absolute best solution",
      "Never require computation",
      "Only work with labelled examples",
    ],
  },
  {
    numb: 82,
    question: "Genetic algorithms are particularly useful when:",
    answer: "The search space is huge",
    options: [
      "The search space is huge",
      "There is only one possible solution",
      "No fitness function exists",
      "No candidate solutions exist",
    ],
  },
  {
    numb: 83,
    question: "Which operation combines traits from two parent solutions?",
    answer: "Crossover",
    options: ["Mutation", "Crossover", "Fitness evaluation", "Pruning"],
  },
  {
    numb: 84,
    question: "Which operation introduces a small random change?",
    answer: "Mutation",
    options: ["Selection", "Crossover", "Mutation", "Entropy"],
  },
  {
    numb: 85,
    question:
      "Which of the following can be solved using genetic algorithms according to the tutorial?",
    answer: "All of the above",
    options: [
      "Travelling Salesman Problem",
      "Delivery route optimization",
      "Timetable optimization",
      "All of the above",
    ],
  },
  {
    numb: 86,
    question:
      "Which learning method needs the least direct reasoning from the learner?",
    answer: "Rote learning",
    options: ["Rote learning", "Inductive learning", "EBL", "Genetic learning"],
  },
  {
    numb: 87,
    question: "Which learning method generalizes from many labelled examples?",
    answer: "Inductive learning",
    options: ["EBL", "Inductive learning", "Rote learning", "Genetic learning"],
  },
  {
    numb: 88,
    question:
      "Which learning method can generalize from one example because it already possesses domain knowledge?",
    answer: "EBL",
    options: ["Inductive learning", "Rote learning", "EBL", "Genetic learning"],
  },
  {
    numb: 89,
    question: "Which pair is correctly matched?",
    answer: "Genetic Algorithm — Selection, Crossover, Mutation",
    options: [
      "Decision Tree — Connection weights",
      "Neural Network — Information Gain",
      "Genetic Algorithm — Selection, Crossover, Mutation",
      "EBL — Mutation",
    ],
  },
  {
    numb: 90,
    question: "Which pair is INCORRECTLY matched?",
    answer: "Entropy — Genetic Algorithm",
    options: [
      "ID3 — Decision Tree",
      "Backpropagation — Neural Network",
      "Mutation — Genetic Algorithm",
      "Entropy — Genetic Algorithm",
    ],
  },
  {
    numb: 91,
    question:
      "If all examples in a decision-tree group belong to the same class, the entropy is:",
    answer: "Zero",
    options: ["Maximum", "Zero", "0.5", "Infinite"],
  },
  {
    numb: 92,
    question: "ID3 selects an attribute based primarily on:",
    answer: "Highest information gain",
    options: [
      "Lowest fitness",
      "Highest information gain",
      "Highest mutation rate",
      "Lowest number of examples",
    ],
  },
  {
    numb: 93,
    question:
      "Which learning approach is most dependent on good background knowledge?",
    answer: "EBL",
    options: ["Rote learning", "EBL", "Genetic learning", "Neural learning"],
  },
  {
    numb: 94,
    question: "Which one is NOT a genetic algorithm operation?",
    answer: "Backpropagation",
    options: ["Selection", "Crossover", "Mutation", "Backpropagation"],
  },
  {
    numb: 95,
    question: "Which one is NOT a neural network learning operation?",
    answer: "Crossover",
    options: [
      "Adjusting weights",
      "Comparing prediction with correct answer",
      "Backpropagation",
      "Crossover",
    ],
  },
];
