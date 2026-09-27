let questions = [

  // =========================
  // ALPHABETS, STRINGS & LANGUAGES
  // =========================

  {
    numb: 1,
    question: "In Theory of Computation, what is an alphabet?",
    answer: "A finite non-empty set of symbols",
    options: [
      "A finite non-empty set of symbols",
      "An infinite set of states",
      "A collection of machines",
      "A set of grammars"
    ]
  },

  {
    numb: 2,
    question: "Which symbol is commonly used to represent an alphabet?",
    answer: "Σ",
    options: ["Q", "Σ", "F", "δ"]
  },

  {
    numb: 3,
    question: "Which of the following can be an alphabet?",
    answer: "{0,1}",
    options: [
      "{0,1}",
      "{0,1,2,...} only",
      "All real numbers",
      "All English sentences"
    ]
  },

  {
    numb: 4,
    question: "A string is a finite sequence of:",
    answer: "Symbols from an alphabet",
    options: [
      "States",
      "Symbols from an alphabet",
      "Grammars",
      "Machines"
    ]
  },

  {
    numb: 5,
    question: "What is the length of a string?",
    answer: "Number of symbols in the string",
    options: [
      "Number of states",
      "Number of symbols in the string",
      "Number of languages",
      "Number of transitions"
    ]
  },

  {
    numb: 6,
    question: "What is the length of the empty string ε?",
    answer: "0",
    options: ["0", "1", "-1", "Undefined"]
  },

  {
    numb: 7,
    question: "Which symbol represents the empty string?",
    answer: "ε",
    options: ["Σ", "ε", "δ", "λ"]
  },

  {
    numb: 8,
    question: "Σ* represents:",
    answer: "All finite strings over Σ including ε",
    options: [
      "Only strings of length 1",
      "All finite strings over Σ including ε",
      "Only non-empty strings",
      "Only alphabet symbols"
    ]
  },

  {
    numb: 9,
    question: "Σ+ represents:",
    answer: "All non-empty strings over Σ",
    options: [
      "Only ε",
      "All finite strings including ε",
      "All non-empty strings over Σ",
      "Only strings of length 1"
    ]
  },

  {
    numb: 10,
    question: "What is the difference between Σ* and Σ+?",
    answer: "Σ* contains ε, while Σ+ does not",
    options: [
      "Σ+ contains ε, while Σ* does not",
      "Σ* contains ε, while Σ+ does not",
      "There is no difference",
      "Both contain only ε"
    ]
  },

  {
    numb: 11,
    question: "If Σ = {0,1}, which is a string over Σ?",
    answer: "0101",
    options: ["012", "0101", "abc", "2ab"]
  },

  {
    numb: 12,
    question: "If w = 10101, what is |w|?",
    answer: "5",
    options: ["3", "4", "5", "6"]
  },

  {
    numb: 13,
    question: "Which of the following is NOT a string over Σ = {a,b}?",
    answer: "abc",
    options: ["aab", "abba", "bbb", "abc"]
  },

  {
    numb: 14,
    question: "Concatenation of two strings means:",
    answer: "Joining one string after another",
    options: [
      "Deleting both strings",
      "Joining one string after another",
      "Reversing both strings",
      "Sorting symbols"
    ]
  },

  {
    numb: 15,
    question: "If x = ab and y = cd, then xy is:",
    answer: "abcd",
    options: ["cdab", "abcd", "acbd", "badc"]
  },

  {
    numb: 16,
    question: "If x = ab and y = cd, then yx is:",
    answer: "cdab",
    options: ["abcd", "cdab", "acbd", "dcba"]
  },

  {
    numb: 17,
    question: "The reverse of the string abc is:",
    answer: "cba",
    options: ["abc", "bac", "cba", "acb"]
  },

  {
    numb: 18,
    question: "The reverse of ε is:",
    answer: "ε",
    options: ["0", "1", "ε", "Undefined"]
  },

  {
    numb: 19,
    question: "A substring of a string is:",
    answer: "A consecutive part of the string",
    options: [
      "A non-consecutive part only",
      "A consecutive part of the string",
      "Always the entire string",
      "Always one symbol"
    ]
  },

  {
    numb: 20,
    question: "A prefix of a string must occur:",
    answer: "At the beginning of the string",
    options: [
      "At the end",
      "At the beginning of the string",
      "Only in the middle",
      "Outside the string"
    ]
  },

  {
    numb: 21,
    question: "A suffix of a string must occur:",
    answer: "At the end of the string",
    options: [
      "At the beginning",
      "At the end of the string",
      "Only in the middle",
      "Anywhere outside the string"
    ]
  },

  {
    numb: 22,
    question: "A language over an alphabet is:",
    answer: "A set of strings over the alphabet",
    options: [
      "A set of states",
      "A set of strings over the alphabet",
      "A set of transitions",
      "A grammar only"
    ]
  },

  {
    numb: 23,
    question: "Which of the following can be a language over {0,1}?",
    answer: "{0, 01, 101}",
    options: [
      "{0, 01, 101}",
      "{a,b,c}",
      "{2,3,4}",
      "{x,y,z}"
    ]
  },

  {
    numb: 24,
    question: "Can the empty string ε belong to a language?",
    answer: "Yes",
    options: ["Yes", "No", "Only in DFA", "Only in NFA"]
  },

  {
    numb: 25,
    question: "Which operation combines two strings in sequence?",
    answer: "Concatenation",
    options: [
      "Union",
      "Concatenation",
      "Intersection",
      "Complement"
    ]
  },

  // =========================
  // GRAMMARS
  // =========================

  {
    numb: 26,
    question: "A grammar is formally represented by:",
    answer: "G = (N, T, P, S)",
    options: [
      "G = (Q, Σ, δ, F)",
      "G = (N, T, P, S)",
      "G = (Q, T, P, F)",
      "G = (N, Σ, δ, S)"
    ]
  },

  {
    numb: 27,
    question: "In G = (N,T,P,S), N represents:",
    answer: "Non-terminals",
    options: [
      "Terminals",
      "Non-terminals",
      "Productions",
      "Start states"
    ]
  },

  {
    numb: 28,
    question: "In a grammar, T represents:",
    answer: "Terminals",
    options: [
      "Terminals",
      "Non-terminals",
      "Transitions",
      "States"
    ]
  },

  {
    numb: 29,
    question: "In a grammar, P represents:",
    answer: "Production rules",
    options: [
      "States",
      "Production rules",
      "Final states",
      "Input symbols"
    ]
  },

  {
    numb: 30,
    question: "In a grammar, S represents:",
    answer: "Start symbol",
    options: [
      "Final state",
      "Start symbol",
      "Terminal symbol",
      "Transition function"
    ]
  },

  {
    numb: 31,
    question: "Which component of a grammar contains production rules?",
    answer: "P",
    options: ["N", "T", "P", "S"]
  },

  {
    numb: 32,
    question: "Which component represents the set of non-terminals?",
    answer: "N",
    options: ["N", "T", "P", "S"]
  },

  {
    numb: 33,
    question: "Which component represents the set of terminals?",
    answer: "T",
    options: ["N", "T", "P", "S"]
  },

  {
    numb: 34,
    question: "Which component represents the starting point of grammar derivation?",
    answer: "S",
    options: ["N", "T", "P", "S"]
  },

  // =========================
  // CHOMSKY HIERARCHY
  // =========================

  {
    numb: 35,
    question: "How many major types are included in the Chomsky hierarchy?",
    answer: "Four",
    options: ["Two", "Three", "Four", "Five"]
  },

  {
    numb: 36,
    question: "Type 0 grammar is known as:",
    answer: "Unrestricted grammar",
    options: [
      "Regular grammar",
      "Context-free grammar",
      "Context-sensitive grammar",
      "Unrestricted grammar"
    ]
  },

  {
    numb: 37,
    question: "Type 1 grammar is known as:",
    answer: "Context-sensitive grammar",
    options: [
      "Regular grammar",
      "Context-free grammar",
      "Context-sensitive grammar",
      "Unrestricted grammar"
    ]
  },

  {
    numb: 38,
    question: "Type 2 grammar is known as:",
    answer: "Context-free grammar",
    options: [
      "Regular grammar",
      "Context-free grammar",
      "Context-sensitive grammar",
      "Unrestricted grammar"
    ]
  },

  {
    numb: 39,
    question: "Type 3 grammar is known as:",
    answer: "Regular grammar",
    options: [
      "Regular grammar",
      "Context-free grammar",
      "Context-sensitive grammar",
      "Unrestricted grammar"
    ]
  },

  {
    numb: 40,
    question: "Which type of grammar is the most restricted in the Chomsky hierarchy?",
    answer: "Type 3",
    options: ["Type 0", "Type 1", "Type 2", "Type 3"]
  },

  {
    numb: 41,
    question: "Which type of grammar is the least restricted?",
    answer: "Type 0",
    options: ["Type 0", "Type 1", "Type 2", "Type 3"]
  },

  {
    numb: 42,
    question: "Type 3 grammar is related to:",
    answer: "Finite automata",
    options: [
      "Turing machines only",
      "Finite automata",
      "Pushdown automata only",
      "Linear bounded automata only"
    ]
  },

  {
    numb: 43,
    question: "A Type 2 grammar is also called:",
    answer: "Context-free grammar",
    options: [
      "Regular grammar",
      "Context-free grammar",
      "Context-sensitive grammar",
      "Unrestricted grammar"
    ]
  },

  {
    numb: 44,
    question: "Which grammar type corresponds to regular languages?",
    answer: "Type 3",
    options: ["Type 0", "Type 1", "Type 2", "Type 3"]
  },

  {
    numb: 45,
    question: "Type 3 productions may have the form:",
    answer: "A → aB or A → a",
    options: [
      "A → aB or A → a",
      "AB → CD",
      "S → SS only",
      "A → BCDE"
    ]
  },

  {
    numb: 46,
    question: "In a right-linear grammar, the non-terminal generally appears:",
    answer: "On the right side after a terminal",
    options: [
      "Before every terminal",
      "On the right side after a terminal",
      "Only on the left side",
      "Only at the beginning of grammar"
    ]
  },

  {
    numb: 47,
    question: "Which machine recognizes regular languages according to the module?",
    answer: "Finite automaton",
    options: [
      "Finite automaton",
      "Only Turing machine",
      "Only stack machine",
      "Only compiler"
    ]
  },

  // =========================
  // DFA
  // =========================

  {
    numb: 48,
    question: "DFA stands for:",
    answer: "Deterministic Finite Automaton",
    options: [
      "Deterministic Finite Automaton",
      "Dynamic Finite Algorithm",
      "Deterministic Formal Automaton",
      "Direct Finite Automaton"
    ]
  },

  {
    numb: 49,
    question: "A DFA is formally represented as:",
    answer: "M = (Q, Σ, δ, q0, F)",
    options: [
      "M = (Q, Σ, δ, q0, F)",
      "M = (N, T, P, S)",
      "M = (Q, T, P, S)",
      "M = (Σ, δ, F)"
    ]
  },

  {
    numb: 50,
    question: "In DFA, Q represents:",
    answer: "Set of states",
    options: [
      "Input alphabet",
      "Set of states",
      "Final transitions",
      "Output symbols"
    ]
  },

  {
    numb: 51,
    question: "In DFA, Σ represents:",
    answer: "Input alphabet",
    options: [
      "Set of states",
      "Input alphabet",
      "Final states",
      "Transition table"
    ]
  },

  {
    numb: 52,
    question: "In DFA, δ represents:",
    answer: "Transition function",
    options: [
      "Start state",
      "Transition function",
      "Final state",
      "Alphabet"
    ]
  },

  {
    numb: 53,
    question: "In DFA, q0 represents:",
    answer: "Initial state",
    options: [
      "Final state",
      "Initial state",
      "Dead state",
      "Output state"
    ]
  },

  {
    numb: 54,
    question: "In DFA, F represents:",
    answer: "Set of final states",
    options: [
      "Set of inputs",
      "Set of final states",
      "Transition function",
      "Start state"
    ]
  },

  {
    numb: 55,
    question: "The DFA transition function is:",
    answer: "δ : Q × Σ → Q",
    options: [
      "δ : Q × Σ → Q",
      "δ : Q → Σ",
      "δ : Σ → Q × Q",
      "δ : Q × Q → Σ"
    ]
  },

  {
    numb: 56,
    question: "For every state and input symbol, a DFA has:",
    answer: "Exactly one next state",
    options: [
      "Zero next states",
      "Exactly one next state",
      "Multiple mandatory next states",
      "Two final states"
    ]
  },

  {
    numb: 57,
    question: "The word deterministic means:",
    answer: "Only one next state is determined",
    options: [
      "No next state exists",
      "Only one next state is determined",
      "Many next states are mandatory",
      "The machine has no states"
    ]
  },

  {
    numb: 58,
    question: "Can a DFA have multiple transitions for the same state and same input symbol?",
    answer: "No",
    options: ["Yes", "No", "Only for ε", "Only for final states"]
  },

  {
    numb: 59,
    question: "A DFA accepts a string when computation ends in:",
    answer: "A final state",
    options: [
      "Initial state only",
      "A final state",
      "Any state",
      "No state"
    ]
  },

  {
    numb: 60,
    question: "In a DFA, each input symbol causes:",
    answer: "Exactly one transition",
    options: [
      "Exactly one transition",
      "No transition always",
      "Multiple transitions",
      "Only ε-transition"
    ]
  },

  {
    numb: 61,
    question: "Which machine has exactly one computation path for an input string?",
    answer: "DFA",
    options: ["DFA", "NFA", "ε-NFA", "Grammar"]
  },

  {
    numb: 62,
    question: "A DFA can be represented using:",
    answer: "Transition diagram",
    options: [
      "Only equations",
      "Transition diagram",
      "Only grammar",
      "Only source code"
    ]
  },

  {
    numb: 63,
    question: "A DFA transition diagram uses arrows to represent:",
    answer: "Transitions",
    options: [
      "Languages",
      "Transitions",
      "Grammars",
      "Strings only"
    ]
  },

  {
    numb: 64,
    question: "The initial state in a DFA is indicated by:",
    answer: "An incoming arrow from outside",
    options: [
      "A double circle",
      "An incoming arrow from outside",
      "A square",
      "A star"
    ]
  },

  {
    numb: 65,
    question: "Final states in a DFA are generally represented by:",
    answer: "Double circles",
    options: [
      "Squares",
      "Single arrows",
      "Double circles",
      "Triangles"
    ]
  },

  // =========================
  // NFA
  // =========================

  {
    numb: 66,
    question: "NFA stands for:",
    answer: "Nondeterministic Finite Automaton",
    options: [
      "Nondeterministic Finite Automaton",
      "New Finite Automaton",
      "Non-Finite Algorithm",
      "Normal Finite Automaton"
    ]
  },

  {
    numb: 67,
    question: "The NFA transition function is:",
    answer: "δ : Q × Σ → 2^Q",
    options: [
      "δ : Q × Σ → Q",
      "δ : Q × Σ → 2^Q",
      "δ : Q → Σ",
      "δ : Σ → Q"
    ]
  },

  {
    numb: 68,
    question: "In an NFA, for a state and input symbol there may be:",
    answer: "Zero, one, or multiple next states",
    options: [
      "Exactly one next state only",
      "Zero, one, or multiple next states",
      "Only two next states",
      "Only final states"
    ]
  },

  {
    numb: 69,
    question: "NFA can have:",
    answer: "Multiple possible paths",
    options: [
      "Only one possible path",
      "Multiple possible paths",
      "No paths",
      "Only final paths"
    ]
  },

  {
    numb: 70,
    question: "An NFA accepts a string if:",
    answer: "At least one path reaches a final state",
    options: [
      "Every path reaches a final state",
      "At least one path reaches a final state",
      "No path reaches a final state",
      "Only the first path reaches a final state"
    ]
  },

  {
    numb: 71,
    question: "Can an NFA have zero transitions for a particular state and input?",
    answer: "Yes",
    options: ["Yes", "No", "Only in DFA", "Only for final states"]
  },

  {
    numb: 72,
    question: "Which machine allows multiple possible next states?",
    answer: "NFA",
    options: ["DFA", "NFA", "Only grammar", "Moore machine"]
  },

  {
    numb: 73,
    question: "Which machine is deterministic?",
    answer: "DFA",
    options: ["DFA", "NFA", "ε-NFA", "Both NFA and ε-NFA only"]
  },

  {
    numb: 74,
    question: "Which machine can have zero next states for an input?",
    answer: "NFA",
    options: ["DFA", "NFA", "Both never", "Only Moore"]
  },

  {
    numb: 75,
    question: "The main difference between DFA and NFA is related to:",
    answer: "Number of possible next states",
    options: [
      "Number of alphabets",
      "Number of possible next states",
      "Number of languages",
      "Number of grammars"
    ]
  },

  // =========================
  // DFA-NFA EQUIVALENCE
  // =========================

  {
    numb: 76,
    question: "Are DFA and NFA equivalent in computational power?",
    answer: "Yes",
    options: ["Yes", "No", "Only sometimes", "Only for ε"]
  },

  {
    numb: 77,
    question: "Every NFA can be converted into:",
    answer: "An equivalent DFA",
    options: [
      "Only a grammar",
      "An equivalent DFA",
      "Only a Moore machine",
      "Nothing"
    ]
  },

  {
    numb: 78,
    question: "The standard method for converting NFA to DFA is:",
    answer: "Subset construction",
    options: [
      "Table filling",
      "Subset construction",
      "Grammar construction",
      "String reversal"
    ]
  },

  {
    numb: 79,
    question: "Subset construction is also known as:",
    answer: "Powerset construction",
    options: [
      "State elimination",
      "Powerset construction",
      "Grammar construction",
      "Output construction"
    ]
  },

  {
    numb: 80,
    question: "If an NFA has n states, the equivalent DFA can have at most:",
    answer: "2^n states",
    options: [
      "n states",
      "n² states",
      "2^n states",
      "n+2 states"
    ]
  },

  {
    numb: 81,
    question: "If an NFA has 3 states, maximum possible DFA states are:",
    answer: "8",
    options: ["3", "6", "8", "9"]
  },

  {
    numb: 82,
    question: "If an NFA has 4 states, 2^n gives:",
    answer: "16",
    options: ["8", "12", "16", "20"]
  },

  {
    numb: 83,
    question: "In subset construction, a DFA state represents:",
    answer: "A subset of NFA states",
    options: [
      "One alphabet symbol",
      "A subset of NFA states",
      "Only one final state",
      "A grammar"
    ]
  },

  {
    numb: 84,
    question: "The DFA obtained from an NFA accepts:",
    answer: "The same language as the NFA",
    options: [
      "A completely different language",
      "The same language as the NFA",
      "Only ε",
      "No language"
    ]
  },

  {
    numb: 85,
    question: "NFA is generally useful because it can:",
    answer: "Represent multiple possible transitions",
    options: [
      "Remove all states",
      "Represent multiple possible transitions",
      "Have no alphabet",
      "Eliminate final states"
    ]
  },

  // =========================
  // ε-NFA
  // =========================

  {
    numb: 86,
    question: "An ε-transition occurs:",
    answer: "Without consuming an input symbol",
    options: [
      "Only after consuming two symbols",
      "Without consuming an input symbol",
      "Only after final state",
      "Only in DFA"
    ]
  },

  {
    numb: 87,
    question: "Which automaton allows ε-transitions?",
    answer: "ε-NFA",
    options: ["DFA", "ε-NFA", "Only Moore", "Only grammar"]
  },

  {
    numb: 88,
    question: "ε is used to represent:",
    answer: "Empty string",
    options: ["Final state", "Empty string", "Alphabet", "Transition table"]
  },

  {
    numb: 89,
    question: "ε-closure of a state contains:",
    answer: "States reachable using zero or more ε-transitions",
    options: [
      "Only final states",
      "States reachable using zero or more ε-transitions",
      "Only unreachable states",
      "Only the initial state"
    ]
  },

  {
    numb: 90,
    question: "The ε-closure of a state always contains:",
    answer: "The state itself",
    options: [
      "Only final states",
      "The state itself",
      "Only unreachable states",
      "No state"
    ]
  },

  {
    numb: 91,
    question: "ε-transitions consume:",
    answer: "No input symbol",
    options: [
      "One input symbol",
      "Two input symbols",
      "No input symbol",
      "All input symbols"
    ]
  },

  {
    numb: 92,
    question: "An ε-NFA can be converted to:",
    answer: "An equivalent NFA",
    options: [
      "Only a grammar",
      "An equivalent NFA",
      "Only a Moore machine",
      "No other machine"
    ]
  },

  {
    numb: 93,
    question: "After removing ε-transitions, the resulting NFA can be converted to:",
    answer: "DFA",
    options: [
      "DFA",
      "Only grammar",
      "Only Mealy machine",
      "Nothing"
    ]
  },

  {
    numb: 94,
    question: "The purpose of ε-closure is to identify states reachable through:",
    answer: "ε-transitions",
    options: [
      "Only input 0",
      "Only input 1",
      "ε-transitions",
      "Final states"
    ]
  },

  {
    numb: 95,
    question: "ε-NFA has greater computational power than DFA.",
    answer: "False",
    options: ["True", "False", "Only sometimes", "Cannot be determined"]
  },

  {
    numb: 96,
    question: "An ε-NFA and DFA can recognize:",
    answer: "The same class of languages",
    options: [
      "Completely different classes",
      "The same class of languages",
      "Only finite strings",
      "Only empty strings"
    ]
  },

  // =========================
  // DFA MINIMIZATION
  // =========================

  {
    numb: 97,
    question: "DFA minimization is used to:",
    answer: "Reduce the number of states",
    options: [
      "Increase the alphabet",
      "Reduce the number of states",
      "Remove all transitions",
      "Create a grammar"
    ]
  },

  {
    numb: 98,
    question: "Two states are equivalent if:",
    answer: "They cannot be distinguished by any input string",
    options: [
      "They have different names",
      "They cannot be distinguished by any input string",
      "They are both initial",
      "They have different alphabets"
    ]
  },

  {
    numb: 99,
    question: "Before minimization, unreachable states should be:",
    answer: "Removed",
    options: [
      "Duplicated",
      "Removed",
      "Made final",
      "Made initial"
    ]
  },

  {
    numb: 100,
    question: "The table-filling method is used for:",
    answer: "DFA minimization",
    options: [
      "NFA creation",
      "DFA minimization",
      "Grammar generation",
      "String concatenation"
    ]
  },

  {
    numb: 101,
    question: "In DFA minimization, states are initially divided into:",
    answer: "Final and non-final states",
    options: [
      "Initial and final only",
      "Final and non-final states",
      "Odd and even states",
      "Input and output states"
    ]
  },

  {
    numb: 102,
    question: "The partitioning process in DFA minimization is:",
    answer: "Repeated until no further refinement is possible",
    options: [
      "Performed only once",
      "Repeated until no further refinement is possible",
      "Never repeated",
      "Done only for NFA"
    ]
  },

  {
    numb: 103,
    question: "Equivalent states can be:",
    answer: "Merged",
    options: [
      "Deleted individually without replacement",
      "Merged",
      "Converted into symbols",
      "Converted into grammars"
    ]
  },

  {
    numb: 104,
    question: "The minimized DFA has:",
    answer: "The smallest number of equivalent states",
    options: [
      "Maximum states",
      "The smallest number of equivalent states",
      "No final states",
      "No transitions"
    ]
  },

  {
    numb: 105,
    question: "A minimized DFA recognizes:",
    answer: "The same language as the original DFA",
    options: [
      "A different language",
      "The same language as the original DFA",
      "Only ε",
      "No language"
    ]
  },

  {
    numb: 106,
    question: "The minimized DFA is unique up to:",
    answer: "Renaming of states",
    options: [
      "Changing the alphabet",
      "Renaming of states",
      "Changing the language",
      "Changing all transitions"
    ]
  },

  {
    numb: 107,
    question: "Myhill–Nerode method is associated with:",
    answer: "State equivalence and minimization",
    options: [
      "String concatenation",
      "State equivalence and minimization",
      "Grammar creation",
      "ε-transition creation"
    ]
  },

  {
    numb: 108,
    question: "In table-filling minimization, distinguishable states are:",
    answer: "Marked",
    options: ["Merged", "Marked", "Deleted immediately", "Ignored"]
  },

  {
    numb: 109,
    question: "If two states are distinguishable, they:",
    answer: "Cannot be merged",
    options: [
      "Must be merged",
      "Cannot be merged",
      "Must become initial",
      "Must become final"
    ]
  },

  {
    numb: 110,
    question: "The main objective of DFA minimization is:",
    answer: "Obtain an equivalent DFA with minimum states",
    options: [
      "Create more states",
      "Obtain an equivalent DFA with minimum states",
      "Remove the alphabet",
      "Remove the language"
    ]
  },

  // =========================
  // MEALY MACHINE
  // =========================

  {
    numb: 111,
    question: "A Mealy machine produces output based on:",
    answer: "Current state and current input",
    options: [
      "Current state only",
      "Current state and current input",
      "Final state only",
      "Alphabet size only"
    ]
  },

  {
    numb: 112,
    question: "The output of a Mealy machine is associated with:",
    answer: "Transitions",
    options: [
      "States only",
      "Transitions",
      "Alphabet only",
      "Initial state only"
    ]
  },

  {
    numb: 113,
    question: "Mealy machine output depends on:",
    answer: "State and input",
    options: [
      "Only state",
      "Only input",
      "State and input",
      "Only final state"
    ]
  },

  {
    numb: 114,
    question: "In a Mealy machine, output can change when:",
    answer: "Input changes",
    options: [
      "Only state is deleted",
      "Input changes",
      "Alphabet is removed",
      "Grammar changes"
    ]
  },

  {
    numb: 115,
    question: "Which machine associates output with transitions?",
    answer: "Mealy machine",
    options: [
      "Moore machine",
      "Mealy machine",
      "DFA",
      "NFA"
    ]
  },

  {
    numb: 116,
    question: "A Mealy machine can produce output on:",
    answer: "Transitions",
    options: [
      "Only states",
      "Transitions",
      "Only final states",
      "Only initial state"
    ]
  },

  {
    numb: 117,
    question: "The output sequence of a Mealy machine generally has length:",
    answer: "Equal to the input sequence",
    options: [
      "Always zero",
      "Equal to the input sequence",
      "One more than input always",
      "Twice the input always"
    ]
  },

  // =========================
  // MOORE MACHINE
  // =========================

  {
    numb: 118,
    question: "A Moore machine produces output based on:",
    answer: "Current state",
    options: [
      "Current input only",
      "Current state",
      "Previous grammar",
      "Alphabet size"
    ]
  },

  {
    numb: 119,
    question: "The output of a Moore machine is associated with:",
    answer: "States",
    options: [
      "Transitions",
      "States",
      "Input symbols only",
      "Production rules"
    ]
  },

  {
    numb: 120,
    question: "Which machine associates output with states?",
    answer: "Moore machine",
    options: [
      "Mealy machine",
      "Moore machine",
      "DFA",
      "NFA"
    ]
  }

];