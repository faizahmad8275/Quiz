let questions = [
  {
    numb: 1,
    question:
      "Which of the following is one of the main purposes of a computer network?",
    answer: "Resource sharing",
    options: [
      "Resource sharing",
      "Removing all hardware",
      "Preventing communication",
      "Eliminating software",
    ],
  },

  {
    numb: 2,
    question:
      "Which component of data communication is responsible for sending the data?",
    answer: "Sender",
    options: ["Receiver", "Sender", "Medium", "Protocol"],
  },

  {
    numb: 3,
    question:
      "Which network normally covers a small area such as a building or campus?",
    answer: "LAN",
    options: ["WAN", "MAN", "LAN", "Internet"],
  },

  {
    numb: 4,
    question: "Which network covers a large geographical area?",
    answer: "WAN",
    options: ["LAN", "PAN", "WAN", "CAN"],
  },

  {
    numb: 5,
    question: "Which device primarily forwards traffic within a LAN?",
    answer: "Switch",
    options: ["Repeater", "Switch", "Modem", "NIC"],
  },

  {
    numb: 6,
    question: "What is the primary function of a repeater?",
    answer: "Regenerate and extend a signal",
    options: [
      "Regenerate and extend a signal",
      "Assign IP addresses",
      "Translate protocols",
      "Store web pages",
    ],
  },

  {
    numb: 7,
    question:
      "Which device connects different networks and forwards packets between them?",
    answer: "Router",
    options: ["Hub", "Router", "Repeater", "NIC"],
  },

  {
    numb: 8,
    question:
      "Which device can perform protocol translation between different network environments?",
    answer: "Gateway",
    options: ["Switch", "Gateway", "Repeater", "Hub"],
  },

  {
    numb: 9,
    question: "Which device broadcasts incoming data to all connected ports?",
    answer: "Hub",
    options: ["Router", "Switch", "Hub", "Gateway"],
  },

  {
    numb: 10,
    question: "Which device provides a computer with a network interface?",
    answer: "NIC",
    options: ["NIC", "Repeater", "Gateway", "Router"],
  },

  {
    numb: 11,
    question:
      "Which of the following defines rules for communication between devices?",
    answer: "Protocol",
    options: ["Medium", "Protocol", "Topology", "Hardware"],
  },

  {
    numb: 12,
    question: "How many layers are present in the OSI reference model?",
    answer: "7",
    options: ["4", "5", "7", "8"],
  },

  {
    numb: 13,
    question: "Which OSI layer is responsible for transmitting raw bits?",
    answer: "Physical layer",
    options: [
      "Physical layer",
      "Network layer",
      "Transport layer",
      "Application layer",
    ],
  },

  {
    numb: 14,
    question: "Which OSI layer is responsible for framing?",
    answer: "Data Link layer",
    options: [
      "Physical layer",
      "Data Link layer",
      "Network layer",
      "Session layer",
    ],
  },

  {
    numb: 15,
    question: "Which OSI layer is responsible for routing?",
    answer: "Network layer",
    options: [
      "Physical layer",
      "Data Link layer",
      "Network layer",
      "Application layer",
    ],
  },

  {
    numb: 16,
    question: "Which OSI layer provides end-to-end delivery?",
    answer: "Transport layer",
    options: [
      "Network layer",
      "Transport layer",
      "Session layer",
      "Physical layer",
    ],
  },

  {
    numb: 17,
    question: "Which OSI layer manages dialogs between applications?",
    answer: "Session layer",
    options: [
      "Session layer",
      "Network layer",
      "Physical layer",
      "Data Link layer",
    ],
  },

  {
    numb: 18,
    question:
      "Which OSI layer is responsible for data translation and encryption-related functions?",
    answer: "Presentation layer",
    options: [
      "Transport layer",
      "Presentation layer",
      "Network layer",
      "Physical layer",
    ],
  },

  {
    numb: 19,
    question: "Which OSI layer directly provides services to applications?",
    answer: "Application layer",
    options: [
      "Application layer",
      "Session layer",
      "Network layer",
      "Data Link layer",
    ],
  },

  {
    numb: 20,
    question: "What does encapsulation mean in networking?",
    answer: "Adding protocol information to data",
    options: [
      "Removing all data",
      "Adding protocol information to data",
      "Changing the destination",
      "Deleting headers",
    ],
  },

  {
    numb: 21,
    question: "Which guided transmission medium uses light signals?",
    answer: "Fiber-optic cable",
    options: ["Twisted pair", "Coaxial cable", "Fiber-optic cable", "Radio"],
  },

  {
    numb: 22,
    question:
      "Which cable consists of two insulated copper wires twisted together?",
    answer: "Twisted pair",
    options: ["Coaxial cable", "Twisted pair", "Fiber optic", "Microwave"],
  },

  {
    numb: 23,
    question:
      "Which transmission medium uses a central conductor surrounded by insulation and shielding?",
    answer: "Coaxial cable",
    options: ["Twisted pair", "Coaxial cable", "Fiber optic", "Infrared"],
  },

  {
    numb: 24,
    question: "Which of the following is an unguided transmission medium?",
    answer: "Radio waves",
    options: ["Twisted pair", "Coaxial cable", "Fiber optic", "Radio waves"],
  },

  {
    numb: 25,
    question:
      "What is the basic unit of information transmitted over a network?",
    answer: "Bit",
    options: ["Frame", "Packet", "Bit", "Segment"],
  },

  {
    numb: 26,
    question: "What is the data unit of the Data Link Layer?",
    answer: "Frame",
    options: ["Bit", "Packet", "Frame", "Segment"],
  },

  {
    numb: 27,
    question: "What is the data unit of the Network Layer?",
    answer: "Packet",
    options: ["Frame", "Packet", "Bit", "Message"],
  },

  {
    numb: 28,
    question: "What is the data unit of the Transport Layer?",
    answer: "Segment",
    options: ["Frame", "Packet", "Segment", "Bit"],
  },

  {
    numb: 29,
    question: "Which layer is responsible for hop-to-hop communication?",
    answer: "Data Link Layer",
    options: [
      "Application Layer",
      "Transport Layer",
      "Data Link Layer",
      "Session Layer",
    ],
  },

  {
    numb: 30,
    question: "Which layer is responsible for end-to-end communication?",
    answer: "Transport Layer",
    options: [
      "Physical Layer",
      "Data Link Layer",
      "Transport Layer",
      "Presentation Layer",
    ],
  },

  {
    numb: 31,
    question: "What is framing?",
    answer: "Dividing a data stream into manageable frames",
    options: [
      "Dividing a data stream into manageable frames",
      "Encrypting an IP address",
      "Assigning a MAC address",
      "Routing packets",
    ],
  },

  {
    numb: 32,
    question: "Which layer performs error detection at the data-link level?",
    answer: "Data Link Layer",
    options: [
      "Physical Layer",
      "Data Link Layer",
      "Network Layer",
      "Application Layer",
    ],
  },

  {
    numb: 33,
    question: "What is the purpose of flow control?",
    answer: "Preventing a fast sender from overwhelming a slow receiver",
    options: [
      "Increasing cable length",
      "Preventing a fast sender from overwhelming a slow receiver",
      "Changing IP addresses",
      "Encrypting frames",
    ],
  },

  {
    numb: 34,
    question: "What is the purpose of error control?",
    answer: "Detecting and recovering from transmission errors",
    options: [
      "Assigning port numbers",
      "Detecting and recovering from transmission errors",
      "Increasing processor speed",
      "Changing network topology",
    ],
  },

  {
    numb: 35,
    question: "Which protocol allows communication in only one direction?",
    answer: "Simplex",
    options: ["Simplex", "Half-duplex", "Full-duplex", "Multiplex"],
  },

  {
    numb: 36,
    question:
      "Which communication mode allows communication in both directions but not simultaneously?",
    answer: "Half-duplex",
    options: ["Simplex", "Half-duplex", "Full-duplex", "Broadcast"],
  },

  {
    numb: 37,
    question:
      "Which communication mode allows simultaneous communication in both directions?",
    answer: "Full-duplex",
    options: ["Simplex", "Half-duplex", "Full-duplex", "Unicast"],
  },

  {
    numb: 38,
    question: "What does ACK stand for?",
    answer: "Acknowledgement",
    options: [
      "Acknowledgement",
      "Automatic Control Key",
      "Access Control Kernel",
      "Address Check",
    ],
  },

  {
    numb: 39,
    question: "What does NAK generally indicate?",
    answer: "Negative acknowledgement",
    options: [
      "New acknowledgement",
      "Negative acknowledgement",
      "Network access key",
      "No address known",
    ],
  },

  {
    numb: 40,
    question:
      "What happens when a sender does not receive an expected acknowledgement before timeout?",
    answer: "The frame may be retransmitted",
    options: [
      "The frame may be retransmitted",
      "The frame is always deleted",
      "The receiver shuts down",
      "The IP address changes",
    ],
  },

  {
    numb: 41,
    question: "What is the main limitation of Stop-and-Wait protocol?",
    answer: "Poor channel utilization",
    options: [
      "Poor channel utilization",
      "No acknowledgement is possible",
      "No data can be transmitted",
      "It requires no receiver",
    ],
  },

  {
    numb: 42,
    question: "What is the main idea of a Sliding Window protocol?",
    answer: "Allow multiple frames to be sent before acknowledgement",
    options: [
      "Allow only one frame",
      "Allow multiple frames to be sent before acknowledgement",
      "Remove all acknowledgements",
      "Remove sequence numbers",
    ],
  },

  {
    numb: 43,
    question: "Why are sequence numbers used in reliable data transmission?",
    answer: "To identify frames",
    options: [
      "To identify frames",
      "To increase cable speed",
      "To assign IP addresses",
      "To encrypt messages",
    ],
  },

  {
    numb: 44,
    question: "What happens if a duplicate frame is received?",
    answer: "The duplicate can be identified using its sequence number",
    options: [
      "It is always treated as new",
      "The duplicate can be identified using its sequence number",
      "The network address changes",
      "The sender is permanently disconnected",
    ],
  },

  {
    numb: 45,
    question:
      "Which ARQ protocol retransmits the erroneous frame and subsequent frames?",
    answer: "Go-Back-N",
    options: ["Stop-and-Wait", "Go-Back-N", "Selective Repeat", "Simplex"],
  },

  {
    numb: 46,
    question:
      "Which ARQ protocol retransmits only the frames that are lost or damaged?",
    answer: "Selective Repeat",
    options: ["Stop-and-Wait", "Go-Back-N", "Selective Repeat", "Simplex"],
  },

  {
    numb: 47,
    question:
      "In Go-Back-N, what happens to frames received after a missing frame?",
    answer: "They may be discarded",
    options: [
      "They are always delivered immediately",
      "They may be discarded",
      "They become acknowledgements",
      "They are converted into packets",
    ],
  },

  {
    numb: 48,
    question:
      "In Selective Repeat, what can the receiver do with an out-of-order frame?",
    answer: "Buffer it",
    options: [
      "Always discard it",
      "Buffer it",
      "Convert it into an ACK",
      "Change its sequence number",
    ],
  },

  {
    numb: 49,
    question:
      "Which protocol generally provides better bandwidth utilization than Stop-and-Wait?",
    answer: "Sliding Window",
    options: [
      "Simplex",
      "Sliding Window",
      "Stop-and-Wait",
      "Basic transmission",
    ],
  },

  {
    numb: 50,
    question: "What is the purpose of a retransmission timer?",
    answer: "Detect a missing acknowledgement",
    options: [
      "Detect a missing acknowledgement",
      "Assign a MAC address",
      "Increase packet size",
      "Select a network topology",
    ],
  },

  {
    numb: 51,
    question:
      "Which layer is immediately above the Physical Layer in the OSI model?",
    answer: "Data Link Layer",
    options: [
      "Network Layer",
      "Data Link Layer",
      "Transport Layer",
      "Session Layer",
    ],
  },

  {
    numb: 52,
    question: "Which layer is immediately above the Data Link Layer?",
    answer: "Network Layer",
    options: [
      "Physical Layer",
      "Transport Layer",
      "Network Layer",
      "Application Layer",
    ],
  },

  {
    numb: 53,
    question: "Which layer is immediately above the Network Layer?",
    answer: "Transport Layer",
    options: [
      "Session Layer",
      "Transport Layer",
      "Physical Layer",
      "Presentation Layer",
    ],
  },

  {
    numb: 54,
    question: "Which layer is immediately below the Application Layer?",
    answer: "Presentation Layer",
    options: [
      "Transport Layer",
      "Network Layer",
      "Presentation Layer",
      "Data Link Layer",
    ],
  },

  {
    numb: 55,
    question: "Which layer of OSI is closest to the end user?",
    answer: "Application Layer",
    options: [
      "Physical Layer",
      "Network Layer",
      "Application Layer",
      "Data Link Layer",
    ],
  },

  {
    numb: 56,
    question: "Which layer deals with physical transmission of bits?",
    answer: "Physical Layer",
    options: [
      "Physical Layer",
      "Transport Layer",
      "Network Layer",
      "Session Layer",
    ],
  },

  {
    numb: 57,
    question: "Which layer handles logical addressing?",
    answer: "Network Layer",
    options: [
      "Physical Layer",
      "Data Link Layer",
      "Network Layer",
      "Application Layer",
    ],
  },

  {
    numb: 58,
    question: "Which layer handles MAC addressing?",
    answer: "Data Link Layer",
    options: [
      "Application Layer",
      "Transport Layer",
      "Data Link Layer",
      "Session Layer",
    ],
  },

  {
    numb: 59,
    question:
      "Which layer is associated with ports and process-to-process delivery?",
    answer: "Transport Layer",
    options: [
      "Physical Layer",
      "Transport Layer",
      "Data Link Layer",
      "Presentation Layer",
    ],
  },

  {
    numb: 60,
    question: "Which layer provides data formatting and translation?",
    answer: "Presentation Layer",
    options: [
      "Presentation Layer",
      "Network Layer",
      "Data Link Layer",
      "Physical Layer",
    ],
  },

  {
    numb: 61,
    question: "What is the main purpose of error detection?",
    answer: "Identify corrupted data",
    options: [
      "Identify corrupted data",
      "Increase cable length",
      "Assign IP addresses",
      "Create applications",
    ],
  },

  {
    numb: 62,
    question:
      "Which technique adds an extra bit to a group of bits for error detection?",
    answer: "Parity",
    options: ["Parity", "Routing", "Framing", "Multiplexing"],
  },

  {
    numb: 63,
    question: "What does CRC stand for?",
    answer: "Cyclic Redundancy Check",
    options: [
      "Cyclic Redundancy Check",
      "Central Routing Control",
      "Code Routing Check",
      "Cyclic Router Connection",
    ],
  },

  {
    numb: 64,
    question: "Which method is commonly used for powerful error detection?",
    answer: "CRC",
    options: ["CRC", "HTTP", "FTP", "DNS"],
  },

  {
    numb: 65,
    question: "What is the main purpose of a checksum?",
    answer: "Detect errors in transmitted data",
    options: [
      "Detect errors in transmitted data",
      "Assign MAC addresses",
      "Route packets",
      "Create frames",
    ],
  },

  {
    numb: 66,
    question: "What is redundancy in error detection?",
    answer: "Extra information added for checking",
    options: [
      "Extra information added for checking",
      "Removing headers",
      "Changing the destination",
      "Deleting frames",
    ],
  },

  {
    numb: 67,
    question: "What does ARQ stand for?",
    answer: "Automatic Repeat reQuest",
    options: [
      "Automatic Repeat reQuest",
      "Automatic Routing Queue",
      "Advanced Routing Query",
      "Address Repeat Query",
    ],
  },

  {
    numb: 68,
    question: "Which mechanism is commonly used with ARQ?",
    answer: "Acknowledgement and retransmission",
    options: [
      "Acknowledgement and retransmission",
      "Encryption only",
      "Routing only",
      "Compression only",
    ],
  },

  {
    numb: 69,
    question: "What does a timeout indicate to a sender?",
    answer: "Expected response was not received in time",
    options: [
      "Expected response was not received in time",
      "The frame was definitely correct",
      "The network is permanently closed",
      "The receiver changed its IP",
    ],
  },

  {
    numb: 70,
    question: "What is the main purpose of a receiver buffer?",
    answer: "Temporarily store received data",
    options: [
      "Temporarily store received data",
      "Assign IP addresses",
      "Create physical signals",
      "Route packets",
    ],
  },

  {
    numb: 71,
    question: "What does flow control regulate?",
    answer: "Rate of data transmission",
    options: [
      "Rate of data transmission",
      "MAC address size",
      "IP address format",
      "Cable material",
    ],
  },

  {
    numb: 72,
    question: "Why is flow control necessary?",
    answer: "To prevent receiver overflow",
    options: [
      "To prevent receiver overflow",
      "To increase errors",
      "To remove acknowledgements",
      "To change topology",
    ],
  },

  {
    numb: 73,
    question:
      "Which protocol sends one frame and waits for its acknowledgement?",
    answer: "Stop-and-Wait",
    options: [
      "Sliding Window",
      "Stop-and-Wait",
      "Go-Back-N",
      "Selective Repeat",
    ],
  },

  {
    numb: 74,
    question: "What is the sender window?",
    answer: "Set of frames the sender may transmit",
    options: [
      "Set of frames the sender may transmit",
      "Set of IP addresses",
      "Set of routers",
      "Set of cables",
    ],
  },

  {
    numb: 75,
    question: "What is the receiver window?",
    answer: "Set of frames the receiver is prepared to accept",
    options: [
      "Set of frames the receiver is prepared to accept",
      "Set of routers",
      "Set of ports",
      "Set of cables",
    ],
  },

  {
    numb: 76,
    question: "What does a larger window generally allow?",
    answer: "More frames in transit",
    options: [
      "More frames in transit",
      "Fewer frames in transit",
      "No acknowledgements",
      "No sequence numbers",
    ],
  },

  {
    numb: 77,
    question: "Which protocol uses a window to improve channel utilization?",
    answer: "Sliding Window",
    options: ["Simplex", "Sliding Window", "Basic Stop", "Physical Layer"],
  },

  {
    numb: 78,
    question:
      "Which protocol can retransmit several frames after one frame is lost?",
    answer: "Go-Back-N",
    options: ["Go-Back-N", "Selective Repeat", "Simplex", "Full Duplex"],
  },

  {
    numb: 79,
    question:
      "Which protocol can selectively retransmit individual lost frames?",
    answer: "Selective Repeat",
    options: ["Stop-and-Wait", "Go-Back-N", "Selective Repeat", "Simplex"],
  },

  {
    numb: 80,
    question: "Which ARQ protocol usually requires more receiver buffering?",
    answer: "Selective Repeat",
    options: ["Stop-and-Wait", "Go-Back-N", "Selective Repeat", "Simplex"],
  },

  {
    numb: 81,
    question: "Which ARQ method is simpler to implement?",
    answer: "Go-Back-N",
    options: ["Selective Repeat", "Go-Back-N", "Full Duplex", "Simplex"],
  },

  {
    numb: 82,
    question: "What is a duplicate ACK useful for?",
    answer: "Indicating that an expected frame is missing",
    options: [
      "Indicating that an expected frame is missing",
      "Assigning a new IP",
      "Changing the topology",
      "Increasing frame size",
    ],
  },

  {
    numb: 83,
    question: "What is an out-of-order frame?",
    answer: "A frame received with an unexpected sequence number",
    options: [
      "A frame received with an unexpected sequence number",
      "A frame with no physical signal",
      "A frame with an IP address",
      "A frame sent by a router",
    ],
  },

  {
    numb: 84,
    question: "What does retransmission mean?",
    answer: "Sending the data again",
    options: [
      "Sending the data again",
      "Deleting the data",
      "Encrypting the data",
      "Routing the data",
    ],
  },

  {
    numb: 85,
    question: "What is the purpose of sequence numbering?",
    answer: "Identify the order of frames",
    options: [
      "Identify the order of frames",
      "Increase bandwidth",
      "Assign IP addresses",
      "Change transmission media",
    ],
  },

  {
    numb: 86,
    question:
      "Which layer adds a header and trailer around network-layer data to form a frame?",
    answer: "Data Link Layer",
    options: [
      "Physical Layer",
      "Data Link Layer",
      "Transport Layer",
      "Application Layer",
    ],
  },

  {
    numb: 87,
    question: "What is a frame delimiter used for?",
    answer: "Identify frame boundaries",
    options: [
      "Identify frame boundaries",
      "Assign IP addresses",
      "Route packets",
      "Encrypt data",
    ],
  },

  {
    numb: 88,
    question:
      "Which technique can use special characters to identify frame boundaries?",
    answer: "Byte stuffing",
    options: ["Byte stuffing", "Routing", "Checksum", "Multiplexing"],
  },

  {
    numb: 89,
    question:
      "Which technique inserts bits to prevent accidental flag patterns?",
    answer: "Bit stuffing",
    options: [
      "Bit stuffing",
      "Byte routing",
      "Packet switching",
      "Port mapping",
    ],
  },

  {
    numb: 90,
    question: "What is the purpose of bit stuffing?",
    answer: "Prevent data from being mistaken for a frame delimiter",
    options: [
      "Prevent data from being mistaken for a frame delimiter",
      "Increase IP addresses",
      "Reduce the number of layers",
      "Assign ports",
    ],
  },

  {
    numb: 91,
    question:
      "Which address is associated with a network interface at the Data Link Layer?",
    answer: "MAC address",
    options: ["IP address", "MAC address", "Port number", "URL"],
  },

  {
    numb: 92,
    question: "Which address is primarily used at the Network Layer?",
    answer: "IP address",
    options: ["MAC address", "IP address", "Port number", "Frame number"],
  },

  {
    numb: 93,
    question: "Which device mainly operates at the Data Link Layer?",
    answer: "Switch",
    options: ["Switch", "Router", "Repeater", "Modem"],
  },

  {
    numb: 94,
    question: "Which device mainly operates at the Network Layer?",
    answer: "Router",
    options: ["Hub", "Router", "Repeater", "NIC"],
  },

  {
    numb: 95,
    question: "Which device operates mainly at the Physical Layer?",
    answer: "Repeater",
    options: ["Router", "Repeater", "Gateway", "Switch"],
  },

  {
    numb: 96,
    question: "Which topology connects all devices to a central device?",
    answer: "Star topology",
    options: [
      "Bus topology",
      "Ring topology",
      "Star topology",
      "Mesh topology",
    ],
  },

  {
    numb: 97,
    question: "Which topology uses a common backbone cable?",
    answer: "Bus topology",
    options: [
      "Star topology",
      "Bus topology",
      "Ring topology",
      "Mesh topology",
    ],
  },

  {
    numb: 98,
    question: "Which topology connects devices in a circular arrangement?",
    answer: "Ring topology",
    options: [
      "Star topology",
      "Bus topology",
      "Ring topology",
      "Tree topology",
    ],
  },

  {
    numb: 99,
    question:
      "Which topology provides a direct link between every pair of devices?",
    answer: "Mesh topology",
    options: [
      "Bus topology",
      "Ring topology",
      "Star topology",
      "Mesh topology",
    ],
  },

  {
    numb: 100,
    question: "Which topology uses a central connecting device?",
    answer: "Star topology",
    options: [
      "Bus topology",
      "Ring topology",
      "Star topology",
      "Mesh topology",
    ],
  },

  {
    numb: 101,
    question:
      "Which topology has a single central backbone connecting all devices?",
    answer: "Bus topology",
    options: [
      "Star topology",
      "Bus topology",
      "Ring topology",
      "Mesh topology",
    ],
  },

  {
    numb: 102,
    question:
      "Which topology can continue operating if one link between two nodes fails, provided alternative paths exist?",
    answer: "Mesh topology",
    options: [
      "Bus topology",
      "Ring topology",
      "Mesh topology",
      "Star topology",
    ],
  },

  {
    numb: 103,
    question: "Which topology has a central hub or switch?",
    answer: "Star topology",
    options: [
      "Bus topology",
      "Ring topology",
      "Star topology",
      "Mesh topology",
    ],
  },

  {
    numb: 104,
    question: "Which topology connects each device to two neighboring devices?",
    answer: "Ring topology",
    options: [
      "Star topology",
      "Ring topology",
      "Bus topology",
      "Mesh topology",
    ],
  },

  {
    numb: 105,
    question:
      "Which topology generally requires the greatest number of physical links?",
    answer: "Mesh topology",
    options: [
      "Bus topology",
      "Star topology",
      "Ring topology",
      "Mesh topology",
    ],
  },

  {
    numb: 106,
    question: "What is the main advantage of a star topology?",
    answer: "Easy management and fault isolation",
    options: [
      "Easy management and fault isolation",
      "No central device is required",
      "Uses only one cable for all communication",
      "Every device is directly connected to every other device",
    ],
  },

  {
    numb: 107,
    question: "What is a major disadvantage of a bus topology?",
    answer: "Failure of the backbone can affect the network",
    options: [
      "Failure of the backbone can affect the network",
      "It requires a separate cable for every pair of devices",
      "It requires no transmission medium",
      "It cannot connect multiple devices",
    ],
  },

  {
    numb: 108,
    question:
      "Which topology is generally easiest to expand by connecting another device to a central device?",
    answer: "Star topology",
    options: [
      "Ring topology",
      "Bus topology",
      "Star topology",
      "Mesh topology",
    ],
  },

  {
    numb: 109,
    question: "What is network topology?",
    answer: "Arrangement of network devices and connections",
    options: [
      "Arrangement of network devices and connections",
      "Speed of a processor",
      "Type of operating system",
      "Size of an IP address",
    ],
  },

  {
    numb: 110,
    question:
      "Which topology provides multiple possible paths between devices?",
    answer: "Mesh topology",
    options: [
      "Bus topology",
      "Mesh topology",
      "Star topology",
      "Ring topology",
    ],
  },

  {
    numb: 111,
    question:
      "Which type of communication sends data from one sender to one receiver?",
    answer: "Unicast",
    options: ["Broadcast", "Multicast", "Unicast", "Anycast"],
  },

  {
    numb: 112,
    question:
      "Which type of communication sends data to all devices in a network segment?",
    answer: "Broadcast",
    options: ["Unicast", "Broadcast", "Multicast", "Simplex"],
  },

  {
    numb: 113,
    question:
      "Which type of communication sends data to a selected group of receivers?",
    answer: "Multicast",
    options: ["Unicast", "Broadcast", "Multicast", "Half-duplex"],
  },

  {
    numb: 114,
    question: "What is bandwidth?",
    answer: "Capacity of a communication channel",
    options: [
      "Capacity of a communication channel",
      "Physical length of a cable",
      "Number of routers",
      "Number of applications",
    ],
  },

  {
    numb: 115,
    question: "What is propagation delay?",
    answer: "Time required for a signal to travel through the medium",
    options: [
      "Time required for a signal to travel through the medium",
      "Time required to create an application",
      "Time required to assign an IP address",
      "Time required to install a router",
    ],
  },

  {
    numb: 116,
    question: "What is transmission delay?",
    answer: "Time required to place bits onto the transmission medium",
    options: [
      "Time required to place bits onto the transmission medium",
      "Time required for a signal to travel",
      "Time required to route a packet",
      "Time required to encrypt a message",
    ],
  },

  {
    numb: 117,
    question: "What is latency?",
    answer: "Delay experienced during communication",
    options: [
      "Delay experienced during communication",
      "Number of devices in a network",
      "Size of a frame",
      "Type of cable",
    ],
  },

  {
    numb: 118,
    question:
      "Which transmission medium generally provides very high bandwidth?",
    answer: "Fiber-optic cable",
    options: ["Twisted pair", "Fiber-optic cable", "Radio", "Coaxial cable"],
  },

  {
    numb: 119,
    question:
      "Which transmission medium is immune to electromagnetic interference?",
    answer: "Fiber-optic cable",
    options: [
      "Coaxial cable",
      "Twisted pair",
      "Fiber-optic cable",
      "Copper wire",
    ],
  },

  {
    numb: 120,
    question:
      "Which medium transmits data through electrical signals over copper conductors?",
    answer: "Copper cable",
    options: ["Fiber optic", "Copper cable", "Radio wave", "Microwave"],
  },

  {
    numb: 121,
    question: "What is a protocol?",
    answer: "A set of rules for communication",
    options: [
      "A set of rules for communication",
      "A type of cable",
      "A network device",
      "A storage device",
    ],
  },

  {
    numb: 122,
    question: "Which protocol suite is widely used on the Internet?",
    answer: "TCP/IP",
    options: ["OSI", "TCP/IP", "HDLC only", "BIOS"],
  },

  {
    numb: 123,
    question: "How many layers are commonly represented in the TCP/IP model?",
    answer: "4",
    options: ["3", "4", "5", "7"],
  },

  {
    numb: 124,
    question:
      "Which TCP/IP layer corresponds closely to the OSI Application, Presentation, and Session layers?",
    answer: "Application layer",
    options: [
      "Internet layer",
      "Transport layer",
      "Application layer",
      "Network Access layer",
    ],
  },

  {
    numb: 125,
    question: "Which TCP/IP layer is responsible for end-to-end transport?",
    answer: "Transport layer",
    options: [
      "Application layer",
      "Transport layer",
      "Internet layer",
      "Network Access layer",
    ],
  },

  {
    numb: 126,
    question:
      "Which TCP/IP layer is responsible for internetworking and routing?",
    answer: "Internet layer",
    options: [
      "Application layer",
      "Transport layer",
      "Internet layer",
      "Network Access layer",
    ],
  },

  {
    numb: 127,
    question: "Which TCP/IP layer handles access to the physical network?",
    answer: "Network Access layer",
    options: [
      "Application layer",
      "Transport layer",
      "Internet layer",
      "Network Access layer",
    ],
  },

  {
    numb: 128,
    question:
      "Which protocol is used for reliable connection-oriented transport?",
    answer: "TCP",
    options: ["UDP", "TCP", "IP", "ARP"],
  },

  {
    numb: 129,
    question: "Which protocol is connectionless at the transport layer?",
    answer: "UDP",
    options: ["TCP", "UDP", "HTTP", "FTP"],
  },

  {
    numb: 130,
    question:
      "Which protocol provides logical addressing for network communication?",
    answer: "IP",
    options: ["TCP", "IP", "FTP", "HTTP"],
  },

  {
    numb: 131,
    question: "What is the main purpose of the Physical Layer?",
    answer: "Transmit raw bits",
    options: [
      "Transmit raw bits",
      "Provide application services",
      "Perform routing",
      "Manage sessions",
    ],
  },

  {
    numb: 132,
    question: "What is the main purpose of the Data Link Layer?",
    answer: "Provide reliable node-to-node delivery",
    options: [
      "Provide reliable node-to-node delivery",
      "Provide web services",
      "Perform domain-name translation",
      "Manage user accounts",
    ],
  },

  {
    numb: 133,
    question: "What is the main purpose of the Network Layer?",
    answer: "Deliver packets between networks",
    options: [
      "Deliver packets between networks",
      "Transmit individual bits",
      "Manage application dialogs",
      "Format text",
    ],
  },

  {
    numb: 134,
    question: "What is the main purpose of the Transport Layer?",
    answer: "Provide process-to-process delivery",
    options: [
      "Provide process-to-process delivery",
      "Transmit electrical signals",
      "Manage MAC addresses only",
      "Define physical cables",
    ],
  },

  {
    numb: 135,
    question:
      "Which layer is responsible for synchronization and dialog control?",
    answer: "Session Layer",
    options: [
      "Physical Layer",
      "Session Layer",
      "Network Layer",
      "Data Link Layer",
    ],
  },

  {
    numb: 136,
    question: "What is decapsulation?",
    answer: "Removal of protocol information at the receiving side",
    options: [
      "Removal of protocol information at the receiving side",
      "Adding more headers at the sender",
      "Changing the physical medium",
      "Creating a new network",
    ],
  },

  {
    numb: 137,
    question: "During encapsulation, what happens to application data?",
    answer: "It receives additional protocol information",
    options: [
      "It receives additional protocol information",
      "It is always deleted",
      "It becomes an IP address",
      "It is converted directly into a router",
    ],
  },

  {
    numb: 138,
    question: "Which device forwards frames based on MAC addresses?",
    answer: "Switch",
    options: ["Router", "Switch", "Repeater", "Modem"],
  },

  {
    numb: 139,
    question:
      "Which device forwards packets based on logical network addresses?",
    answer: "Router",
    options: ["Hub", "Router", "Repeater", "NIC"],
  },

  {
    numb: 140,
    question: "Which device simply regenerates a weakened signal?",
    answer: "Repeater",
    options: ["Router", "Repeater", "Switch", "Gateway"],
  },

  {
    numb: 141,
    question:
      "Which device converts digital signals to suitable signals for transmission over certain communication lines?",
    answer: "Modem",
    options: ["Switch", "Modem", "Hub", "Repeater"],
  },

  {
    numb: 142,
    question: "What does modem stand for?",
    answer: "Modulator-Demodulator",
    options: [
      "Modulator-Demodulator",
      "Module-Domain",
      "Modern-Digital",
      "Mobile-Demodulator",
    ],
  },

  {
    numb: 143,
    question:
      "Which device connects multiple devices in a LAN and forwards frames intelligently?",
    answer: "Switch",
    options: ["Hub", "Switch", "Repeater", "Modem"],
  },

  {
    numb: 144,
    question: "Which device sends incoming signals to all its ports?",
    answer: "Hub",
    options: ["Router", "Switch", "Hub", "Gateway"],
  },

  {
    numb: 145,
    question: "Which device can connect networks using different protocols?",
    answer: "Gateway",
    options: ["Gateway", "Hub", "Repeater", "NIC"],
  },

  {
    numb: 146,
    question: "What is a network interface card used for?",
    answer: "Connect a device to a network",
    options: [
      "Connect a device to a network",
      "Route packets between networks",
      "Regenerate signals",
      "Translate application data",
    ],
  },

  {
    numb: 147,
    question: "What is a MAC address?",
    answer: "A Data Link Layer hardware address",
    options: [
      "A Data Link Layer hardware address",
      "A transport-layer port",
      "A network application",
      "A routing protocol",
    ],
  },

  {
    numb: 148,
    question: "What is an IP address primarily used for?",
    answer: "Logical identification and routing",
    options: [
      "Logical identification and routing",
      "Physical signal generation",
      "Frame synchronization only",
      "Application formatting",
    ],
  },

  {
    numb: 149,
    question:
      "Which address normally remains associated with a network interface?",
    answer: "MAC address",
    options: ["MAC address", "Port number", "URL", "Protocol number"],
  },

  {
    numb: 150,
    question:
      "Which address can be assigned to identify a device on an IP network?",
    answer: "IP address",
    options: ["MAC address", "IP address", "Frame address", "Cable address"],
  },

  {
    numb: 151,
    question: "What is the purpose of framing in the Data Link Layer?",
    answer: "Divide the bit stream into identifiable frames",
    options: [
      "Divide the bit stream into identifiable frames",
      "Assign application names",
      "Route packets across networks",
      "Encrypt all communication",
    ],
  },

  {
    numb: 152,
    question: "What does frame synchronization help the receiver determine?",
    answer: "Beginning and end of a frame",
    options: [
      "Beginning and end of a frame",
      "IP address of the router",
      "Application name",
      "Cable length",
    ],
  },

  {
    numb: 153,
    question: "What is byte stuffing used for?",
    answer: "Distinguish control characters from data",
    options: [
      "Distinguish control characters from data",
      "Assign IP addresses",
      "Route packets",
      "Increase processor speed",
    ],
  },

  {
    numb: 154,
    question: "What is bit stuffing used for?",
    answer: "Prevent a data pattern from being mistaken for a flag",
    options: [
      "Prevent a data pattern from being mistaken for a flag",
      "Assign MAC addresses",
      "Increase bandwidth",
      "Select a router",
    ],
  },

  {
    numb: 155,
    question: "Which layer is responsible for detecting frame-level errors?",
    answer: "Data Link Layer",
    options: [
      "Application Layer",
      "Transport Layer",
      "Data Link Layer",
      "Session Layer",
    ],
  },

  {
    numb: 156,
    question: "What is the purpose of an error-detection code?",
    answer: "Detect corrupted data",
    options: [
      "Detect corrupted data",
      "Assign IP addresses",
      "Select network topology",
      "Increase CPU speed",
    ],
  },

  {
    numb: 157,
    question: "Which method uses a generator polynomial for error detection?",
    answer: "CRC",
    options: ["Parity", "CRC", "Routing", "Framing"],
  },

  {
    numb: 158,
    question: "What does CRC stand for?",
    answer: "Cyclic Redundancy Check",
    options: [
      "Cyclic Redundancy Check",
      "Central Routing Control",
      "Code Repeat Check",
      "Cyclic Router Communication",
    ],
  },

  {
    numb: 159,
    question:
      "Which technique uses an extra bit to check whether the number of 1s is even or odd?",
    answer: "Parity check",
    options: ["CRC", "Parity check", "Routing", "Bit stuffing"],
  },

  {
    numb: 160,
    question: "What is the purpose of error correction?",
    answer: "Recover correct data from errors",
    options: [
      "Recover correct data from errors",
      "Assign MAC addresses",
      "Create topologies",
      "Increase cable length",
    ],
  },

  {
    numb: 161,
    question: "What is the purpose of an acknowledgement frame?",
    answer: "Inform the sender about successful reception",
    options: [
      "Inform the sender about successful reception",
      "Change the receiver address",
      "Increase frame size",
      "Create a physical link",
    ],
  },

  {
    numb: 162,
    question:
      "What happens when a frame is damaged and the receiver detects the error?",
    answer: "The frame may need retransmission",
    options: [
      "The frame may need retransmission",
      "The frame is automatically corrected in every case",
      "The sender is permanently disconnected",
      "The IP address is changed",
    ],
  },

  {
    numb: 163,
    question: "What is the main idea of Automatic Repeat reQuest?",
    answer: "Retransmit data when necessary",
    options: [
      "Retransmit data when necessary",
      "Remove all acknowledgements",
      "Change the network topology",
      "Replace the physical medium",
    ],
  },

  {
    numb: 164,
    question:
      "Which protocol waits for an acknowledgement before sending the next frame?",
    answer: "Stop-and-Wait",
    options: [
      "Sliding Window",
      "Stop-and-Wait",
      "Selective Repeat",
      "Go-Back-N",
    ],
  },

  {
    numb: 165,
    question: "Why can Stop-and-Wait be inefficient on a long-delay link?",
    answer: "The sender spends time waiting for acknowledgements",
    options: [
      "The sender spends time waiting for acknowledgements",
      "It cannot use frames",
      "It cannot use sequence numbers",
      "It does not require a receiver",
    ],
  },

  {
    numb: 166,
    question: "What is the main purpose of a sliding window?",
    answer: "Allow multiple frames to be transmitted before waiting",
    options: [
      "Allow multiple frames to be transmitted before waiting",
      "Allow only one frame",
      "Remove error detection",
      "Remove acknowledgements",
    ],
  },

  {
    numb: 167,
    question: "What does the sender window represent?",
    answer: "Frames that can be sent without waiting",
    options: [
      "Frames that can be sent without waiting",
      "All routers in the network",
      "All IP addresses",
      "All physical cables",
    ],
  },

  {
    numb: 168,
    question: "What does the receiver window represent?",
    answer: "Frames the receiver can accept",
    options: [
      "Frames the receiver can accept",
      "Routers available in a network",
      "Ports available on a switch",
      "Physical links in a topology",
    ],
  },

  {
    numb: 169,
    question: "Which ARQ protocol retransmits from the lost frame onward?",
    answer: "Go-Back-N",
    options: ["Stop-and-Wait", "Go-Back-N", "Selective Repeat", "Simplex"],
  },

  {
    numb: 170,
    question:
      "Which ARQ protocol retransmits only selected damaged or lost frames?",
    answer: "Selective Repeat",
    options: ["Stop-and-Wait", "Go-Back-N", "Selective Repeat", "Simplex"],
  },

  {
    numb: 171,
    question:
      "In Go-Back-N, what normally happens to frames following a lost frame?",
    answer: "They may need to be retransmitted",
    options: [
      "They may need to be retransmitted",
      "They are always ignored permanently",
      "They become IP addresses",
      "They are converted into ACKs",
    ],
  },

  {
    numb: 172,
    question:
      "In Selective Repeat, what may the receiver do with correctly received out-of-order frames?",
    answer: "Buffer them",
    options: [
      "Delete them",
      "Buffer them",
      "Convert them to packets",
      "Change their sequence numbers",
    ],
  },

  {
    numb: 173,
    question: "Which protocol generally requires more receiver memory?",
    answer: "Selective Repeat",
    options: ["Stop-and-Wait", "Go-Back-N", "Selective Repeat", "Simplex"],
  },

  {
    numb: 174,
    question:
      "Which protocol can achieve better efficiency by allowing multiple outstanding frames?",
    answer: "Sliding Window",
    options: [
      "Simplex",
      "Stop-and-Wait",
      "Sliding Window",
      "Basic transmission",
    ],
  },

  {
    numb: 175,
    question: "What is the purpose of a sequence number in ARQ?",
    answer: "Identify a frame and its order",
    options: [
      "Identify a frame and its order",
      "Identify the cable",
      "Identify the application",
      "Identify the operating system",
    ],
  },

  {
    numb: 176,
    question: "What is a duplicate frame?",
    answer: "A frame received more than once",
    options: [
      "A frame received more than once",
      "A frame with no header",
      "A frame with a new IP address",
      "A frame sent to a router",
    ],
  },

  {
    numb: 177,
    question:
      "What can help a sender detect a lost frame when no acknowledgement arrives?",
    answer: "Timeout",
    options: ["Timeout", "Topology", "MAC address", "Gateway"],
  },

  {
    numb: 178,
    question: "What is retransmission?",
    answer: "Sending a frame again",
    options: [
      "Sending a frame again",
      "Deleting a frame",
      "Changing a frame into a packet",
      "Assigning an IP address",
    ],
  },

  {
    numb: 179,
    question: "Which communication method allows only the sender to transmit?",
    answer: "Simplex",
    options: ["Simplex", "Half-duplex", "Full-duplex", "Multicast"],
  },

  {
    numb: 180,
    question:
      "Which communication method allows both devices to transmit, but not at the same time?",
    answer: "Half-duplex",
    options: ["Simplex", "Half-duplex", "Full-duplex", "Broadcast"],
  },

  {
    numb: 181,
    question:
      "Which communication method allows simultaneous transmission in both directions?",
    answer: "Full-duplex",
    options: ["Simplex", "Half-duplex", "Full-duplex", "Unicast"],
  },

  {
    numb: 182,
    question: "Which transmission medium is a guided medium?",
    answer: "Twisted pair",
    options: ["Radio wave", "Microwave", "Twisted pair", "Infrared"],
  },

  {
    numb: 183,
    question: "Which transmission medium is an unguided medium?",
    answer: "Radio wave",
    options: ["Twisted pair", "Coaxial cable", "Fiber optic", "Radio wave"],
  },

  {
    numb: 184,
    question: "Which medium uses optical signals for communication?",
    answer: "Fiber optic",
    options: ["Coaxial cable", "Twisted pair", "Fiber optic", "Radio"],
  },

  {
    numb: 185,
    question: "Which medium uses copper as the conducting material?",
    answer: "Twisted pair",
    options: ["Fiber optic", "Twisted pair", "Infrared", "Microwave"],
  },

  {
    numb: 186,
    question:
      "Which transmission medium is most resistant to electromagnetic interference?",
    answer: "Fiber optic",
    options: ["Twisted pair", "Coaxial cable", "Fiber optic", "Copper wire"],
  },

  {
    numb: 187,
    question: "What is the Internet?",
    answer: "A global network of interconnected networks",
    options: [
      "A global network of interconnected networks",
      "A single local network",
      "A single computer",
      "A physical cable",
    ],
  },

  {
    numb: 188,
    question: "What was ARPANET?",
    answer: "An early packet-switched computer network",
    options: [
      "An early packet-switched computer network",
      "A programming language",
      "A type of network cable",
      "A modern web browser",
    ],
  },

  {
    numb: 189,
    question:
      "Which organization is associated with the development of ARPANET?",
    answer: "ARPA",
    options: ["ARPA", "NASA", "IEEE only", "IBM"],
  },

  {
    numb: 190,
    question: "What is packet switching?",
    answer: "Dividing data into packets for transmission",
    options: [
      "Dividing data into packets for transmission",
      "Sending only one continuous signal",
      "Deleting network headers",
      "Connecting only two computers",
    ],
  },

  {
    numb: 191,
    question:
      "Which switching technique divides a message into smaller packets?",
    answer: "Packet switching",
    options: [
      "Circuit switching",
      "Packet switching",
      "Frequency switching",
      "Signal switching",
    ],
  },

  {
    numb: 192,
    question: "In packet switching, packets may travel through what?",
    answer: "Different routes",
    options: [
      "Only one fixed route",
      "Different routes",
      "No route",
      "Only wireless routes",
    ],
  },

  {
    numb: 193,
    question: "What is a network node?",
    answer: "A device connected to a network",
    options: [
      "A device connected to a network",
      "Only a network cable",
      "Only a protocol",
      "Only an application",
    ],
  },

  {
    numb: 194,
    question:
      "Which device is commonly used as an intermediate node for forwarding packets?",
    answer: "Router",
    options: ["Keyboard", "Router", "Monitor", "Printer"],
  },

  {
    numb: 195,
    question: "What is a communication channel?",
    answer: "A path through which data travels",
    options: [
      "A path through which data travels",
      "A type of processor",
      "A type of operating system",
      "A network application",
    ],
  },

  {
    numb: 196,
    question: "What is a transmission medium?",
    answer: "The physical or wireless path used to carry data",
    options: [
      "The physical or wireless path used to carry data",
      "A routing table",
      "A network application",
      "A transport protocol",
    ],
  },

  {
    numb: 197,
    question:
      "Which factor represents the amount of data that can be transmitted per unit of time?",
    answer: "Data rate",
    options: ["Data rate", "Propagation delay", "Topology", "MAC address"],
  },

  {
    numb: 198,
    question: "What is throughput?",
    answer: "Actual rate of successful data delivery",
    options: [
      "Actual rate of successful data delivery",
      "Physical cable length",
      "Number of network layers",
      "Number of routers",
    ],
  },

  {
    numb: 199,
    question: "What is the difference between bandwidth and throughput?",
    answer: "Bandwidth is capacity while throughput is actual achieved rate",
    options: [
      "Bandwidth is capacity while throughput is actual achieved rate",
      "They are always exactly the same",
      "Bandwidth is a MAC address while throughput is an IP address",
      "Throughput is always greater than bandwidth",
    ],
  },

  {
    numb: 200,
    question:
      "Which combination is used to provide reliable data transmission?",
    answer: "Acknowledgement, sequence numbers and retransmission",
    options: [
      "Acknowledgement, sequence numbers and retransmission",
      "Only IP addresses",
      "Only physical cables",
      "Only network topology",
    ],
  },

  {
    numb: 201,
    question:
      "In Point-to-Point communication, how many devices share the communication link?",
    answer: "Two",
    options: ["Two", "Three", "Many", "All devices"],
  },
  {
    numb: 202,
    question: "In Multipoint communication, a single link is shared by:",
    answer: "Multiple devices",
    options: [
      "Only two devices",
      "Multiple devices",
      "Only one device",
      "Only routers",
    ],
  },
  {
    numb: 203,
    question: "Which topology connects every device to a central device?",
    answer: "Star",
    options: ["Bus", "Mesh", "Star", "Ring"],
  },
  {
    numb: 204,
    question: "Which topology uses a common backbone cable?",
    answer: "Bus",
    options: ["Star", "Bus", "Mesh", "Point-to-Point"],
  },
  {
    numb: 205,
    question: "In a mesh topology, devices are connected through:",
    answer: "Multiple direct links",
    options: [
      "A single backbone",
      "Multiple direct links",
      "Only one central hub",
      "One router only",
    ],
  },
  {
    numb: 206,
    question:
      "Which topology generally requires the highest number of physical links?",
    answer: "Mesh",
    options: ["Bus", "Star", "Mesh", "Point-to-Point"],
  },
  {
    numb: 207,
    question: "A LAN normally covers:",
    answer: "A small geographical area",
    options: [
      "The whole world",
      "A small geographical area",
      "Multiple countries",
      "Only satellites",
    ],
  },
  {
    numb: 208,
    question: "MAN stands for:",
    answer: "Metropolitan Area Network",
    options: [
      "Main Area Network",
      "Metropolitan Area Network",
      "Medium Access Network",
      "Multiple Area Network",
    ],
  },
  {
    numb: 209,
    question: "WAN stands for:",
    answer: "Wide Area Network",
    options: [
      "Wireless Area Network",
      "Wide Area Network",
      "World Access Network",
      "Web Area Network",
    ],
  },
  {
    numb: 210,
    question: "Which network generally covers a city or metropolitan area?",
    answer: "MAN",
    options: ["LAN", "MAN", "PAN", "CAN"],
  },

  {
    numb: 211,
    question: "What is the main purpose of a Network Interface Card?",
    answer: "To provide a network interface",
    options: [
      "To store files",
      "To provide a network interface",
      "To print documents",
      "To manage passwords",
    ],
  },
  {
    numb: 212,
    question: "NIC can support which type of network connection?",
    answer: "Wired or wireless",
    options: [
      "Only wired",
      "Only wireless",
      "Wired or wireless",
      "Only optical",
    ],
  },
  {
    numb: 213,
    question: "A repeater is mainly used to:",
    answer: "Regenerate signals",
    options: [
      "Assign IP addresses",
      "Regenerate signals",
      "Translate protocols",
      "Store packets",
    ],
  },
  {
    numb: 214,
    question:
      "Which device forwards signals to multiple connected devices without making routing decisions?",
    answer: "Hub",
    options: ["Router", "Hub", "Gateway", "Bridge"],
  },
  {
    numb: 215,
    question: "A hub works mainly at the:",
    answer: "Physical Layer",
    options: [
      "Application Layer",
      "Transport Layer",
      "Physical Layer",
      "Network Layer",
    ],
  },
  {
    numb: 216,
    question: "An active hub generally:",
    answer: "Regenerates signals",
    options: [
      "Only stores data",
      "Regenerates signals",
      "Assigns ports",
      "Translates protocols",
    ],
  },
  {
    numb: 217,
    question: "A passive hub mainly:",
    answer: "Provides physical connection without signal regeneration",
    options: [
      "Routes packets",
      "Regenerates every signal",
      "Provides physical connection without signal regeneration",
      "Translates protocols",
    ],
  },
  {
    numb: 218,
    question:
      "Which device connects network segments and can use MAC addresses for forwarding?",
    answer: "Bridge",
    options: ["Repeater", "Bridge", "Modem", "Gateway"],
  },
  {
    numb: 219,
    question: "A switch primarily uses which address for forwarding frames?",
    answer: "MAC address",
    options: ["Port number", "MAC address", "URL", "Password"],
  },
  {
    numb: 220,
    question: "A switch is more intelligent than a simple hub because it can:",
    answer: "Forward frames based on destination information",
    options: [
      "Generate electricity",
      "Forward frames based on destination information",
      "Replace all protocols",
      "Create websites",
    ],
  },

  {
    numb: 221,
    question: "A router primarily forwards:",
    answer: "Packets",
    options: ["Bits only", "Packets", "Files only", "Characters only"],
  },
  {
    numb: 222,
    question: "A router is mainly used to connect:",
    answer: "Different networks",
    options: [
      "Only keyboards",
      "Different networks",
      "Only printers",
      "Only storage devices",
    ],
  },
  {
    numb: 223,
    question:
      "Which device is responsible for choosing a path for packets between networks?",
    answer: "Router",
    options: ["Hub", "Repeater", "Router", "NIC"],
  },
  {
    numb: 224,
    question: "A gateway is commonly associated with:",
    answer: "Protocol or format translation",
    options: [
      "Signal amplification only",
      "Protocol or format translation",
      "File compression only",
      "MAC learning only",
    ],
  },
  {
    numb: 225,
    question: "Which device can connect networks using different protocols?",
    answer: "Gateway",
    options: ["Hub", "Gateway", "Repeater", "NIC"],
  },
  {
    numb: 226,
    question: "Which device mainly operates by examining MAC addresses?",
    answer: "Switch",
    options: ["Router", "Switch", "Gateway", "Repeater"],
  },
  {
    numb: 227,
    question:
      "Which device mainly makes forwarding decisions using network-layer addressing?",
    answer: "Router",
    options: ["Hub", "Router", "Repeater", "Bridge"],
  },
  {
    numb: 228,
    question:
      "Which device is used to extend the physical signal over a longer distance?",
    answer: "Repeater",
    options: ["Gateway", "Repeater", "Router", "Switch"],
  },
  {
    numb: 229,
    question:
      "Which device can divide a network into separate segments using MAC-based forwarding?",
    answer: "Bridge",
    options: ["Bridge", "Repeater", "Gateway", "NIC"],
  },
  {
    numb: 230,
    question:
      "Which device can perform translation between different protocols or formats?",
    answer: "Gateway",
    options: ["Hub", "Switch", "Gateway", "Repeater"],
  },

  {
    numb: 231,
    question: "The network edge refers mainly to:",
    answer: "End systems and access networks",
    options: [
      "Only routers",
      "End systems and access networks",
      "Only cables",
      "Only satellites",
    ],
  },
  {
    numb: 232,
    question: "Users typically access network services from the:",
    answer: "Network edge",
    options: [
      "Network core",
      "Network edge",
      "Physical medium only",
      "Router table",
    ],
  },
  {
    numb: 233,
    question: "The network core mainly consists of:",
    answer: "Interconnected network devices that forward data",
    options: [
      "Only user computers",
      "Interconnected network devices that forward data",
      "Only keyboards",
      "Only application software",
    ],
  },
  {
    numb: 234,
    question: "Access networks provide:",
    answer: "Connectivity between end systems and the network",
    options: [
      "Only file storage",
      "Connectivity between end systems and the network",
      "Only protocol translation",
      "Only signal encryption",
    ],
  },
  {
    numb: 235,
    question: "Which is part of the network edge?",
    answer: "End system",
    options: [
      "End system",
      "Only backbone router",
      "Only core switch",
      "Only gateway",
    ],
  },
  {
    numb: 236,
    question:
      "Which part of a network is responsible for carrying traffic through interconnected routers?",
    answer: "Network core",
    options: ["Network edge", "Network core", "NIC", "Application layer"],
  },
  {
    numb: 237,
    question: "Physical media are broadly divided into:",
    answer: "Guided and unguided media",
    options: [
      "Local and remote media",
      "Guided and unguided media",
      "Analog and digital media",
      "Simplex and duplex media",
    ],
  },
  {
    numb: 238,
    question: "Which is an example of guided transmission media?",
    answer: "Cable",
    options: [
      "Radio waves",
      "Cable",
      "Microwave through air",
      "Infrared through air",
    ],
  },
  {
    numb: 239,
    question: "Unguided media transmit signals through:",
    answer: "Free space",
    options: [
      "A physical cable only",
      "Free space",
      "Fiber core only",
      "Copper wire only",
    ],
  },
  {
    numb: 240,
    question:
      "Which medium does not require a physical cable between communicating devices?",
    answer: "Unguided medium",
    options: [
      "Guided medium",
      "Unguided medium",
      "Twisted pair",
      "Coaxial cable",
    ],
  },

  {
    numb: 241,
    question: "A network protocol defines:",
    answer: "Message format, order, and actions",
    options: [
      "Only cable length",
      "Message format, order, and actions",
      "Only computer speed",
      "Only IP addresses",
    ],
  },
  {
    numb: 242,
    question: "Which of the following is part of a protocol specification?",
    answer: "Message order",
    options: [
      "Monitor size",
      "Message order",
      "Keyboard type",
      "Hard disk capacity",
    ],
  },
  {
    numb: 243,
    question: "A protocol specifies what actions are taken when:",
    answer: "Messages are sent or received",
    options: [
      "A monitor is switched off",
      "Messages are sent or received",
      "A file is deleted locally",
      "A keyboard is changed",
    ],
  },
  {
    numb: 244,
    question: "Why is protocol standardization important in networking?",
    answer: "It allows devices to communicate using agreed rules",
    options: [
      "It increases monitor size",
      "It allows devices to communicate using agreed rules",
      "It removes all cables",
      "It eliminates software",
    ],
  },
  {
    numb: 245,
    question:
      "Which of these is NOT normally defined by a communication protocol?",
    answer: "Screen brightness",
    options: [
      "Message format",
      "Message order",
      "Actions taken",
      "Screen brightness",
    ],
  },
  {
    numb: 246,
    question: "A hardware diagnostic matrix is useful for:",
    answer: "Identifying network hardware and its functions",
    options: [
      "Writing application code",
      "Identifying network hardware and its functions",
      "Editing images",
      "Creating databases",
    ],
  },
  {
    numb: 247,
    question:
      "Which device is specifically associated with signal regeneration?",
    answer: "Repeater",
    options: ["Repeater", "Gateway", "Router", "Switch"],
  },
  {
    numb: 248,
    question:
      "Which device is associated with frame forwarding using MAC information?",
    answer: "Switch",
    options: ["Switch", "Repeater", "Gateway", "Modem"],
  },
  {
    numb: 249,
    question: "Which device is associated with packet routing?",
    answer: "Router",
    options: ["Hub", "Router", "Repeater", "NIC"],
  },
  {
    numb: 250,
    question: "Which device is associated with protocol translation?",
    answer: "Gateway",
    options: ["Switch", "Gateway", "Repeater", "Hub"],
  },

  {
    numb: 251,
    question:
      "At the Data Link Layer, a network-layer packet is placed inside a:",
    answer: "Frame",
    options: ["Segment", "Frame", "Bit only", "Message"],
  },
  {
    numb: 252,
    question: "A Data Link Layer frame provides delivery primarily:",
    answer: "Hop-to-hop",
    options: [
      "End-to-end",
      "Hop-to-hop",
      "Application-to-application",
      "Process-to-process",
    ],
  },
  {
    numb: 253,
    question: "Transport-layer communication is generally:",
    answer: "End-to-end",
    options: [
      "Hop-to-hop",
      "End-to-end",
      "Device-to-device only",
      "Switch-to-switch only",
    ],
  },
  {
    numb: 254,
    question: "A packet at the network layer becomes part of a frame during:",
    answer: "Encapsulation",
    options: ["Decapsulation", "Encapsulation", "Routing", "Translation"],
  },
  {
    numb: 255,
    question: "Removing the Data Link Layer frame information is called:",
    answer: "Decapsulation",
    options: [
      "Encapsulation",
      "Decapsulation",
      "Fragmentation",
      "Multiplexing",
    ],
  },
  {
    numb: 256,
    question: "Which layer is responsible for framing?",
    answer: "Data Link Layer",
    options: [
      "Application Layer",
      "Transport Layer",
      "Data Link Layer",
      "Session Layer",
    ],
  },
  {
    numb: 257,
    question: "The Data Link Layer operates between:",
    answer: "Network Layer and Physical Layer",
    options: [
      "Application and Presentation layers",
      "Network Layer and Physical Layer",
      "Transport and Session layers",
      "Application and Transport layers",
    ],
  },
  {
    numb: 258,
    question: "One important function of the Data Link Layer is:",
    answer: "Error detection",
    options: [
      "Web page design",
      "Error detection",
      "File compression",
      "Domain registration",
    ],
  },
  {
    numb: 259,
    question: "The Data Link Layer can help control:",
    answer: "Errors during hop-to-hop transmission",
    options: [
      "CPU temperature",
      "Errors during hop-to-hop transmission",
      "Screen resolution",
      "File names",
    ],
  },
  {
    numb: 260,
    question: "A frame is the data unit associated with the:",
    answer: "Data Link Layer",
    options: [
      "Physical Layer only",
      "Data Link Layer",
      "Application Layer",
      "Session Layer",
    ],
  },

  {
    numb: 261,
    question: "Physical transmission can cause data to become:",
    answer: "Corrupted",
    options: [
      "Encrypted automatically",
      "Corrupted",
      "Compressed automatically",
      "Deleted permanently",
    ],
  },
  {
    numb: 262,
    question: "Error detection attempts to determine whether:",
    answer: "An error has occurred",
    options: [
      "The computer is powered on",
      "An error has occurred",
      "The user is logged in",
      "The network is wireless",
    ],
  },
  {
    numb: 263,
    question: "Error correction attempts to:",
    answer: "Recover or correct erroneous data",
    options: [
      "Increase monitor size",
      "Recover or correct erroneous data",
      "Change an IP address",
      "Create a topology",
    ],
  },
  {
    numb: 264,
    question: "Error detection and error correction are related to:",
    answer: "Reliable data transmission",
    options: [
      "Screen design",
      "Reliable data transmission",
      "File naming",
      "User authentication only",
    ],
  },
  {
    numb: 265,
    question: "A Data Link Layer protocol defines rules for:",
    answer: "Data transmission between adjacent nodes",
    options: [
      "Only web development",
      "Data transmission between adjacent nodes",
      "Only database queries",
      "Only operating systems",
    ],
  },
  {
    numb: 266,
    question: "Which protocol type sends data in one direction only?",
    answer: "Simplex",
    options: ["Simplex", "Half-duplex", "Full-duplex", "Multiplex"],
  },
  {
    numb: 267,
    question: "In a simplex protocol, communication occurs:",
    answer: "In one direction",
    options: [
      "In both directions simultaneously",
      "In one direction",
      "Only through routers",
      "Only between servers",
    ],
  },
  {
    numb: 268,
    question: "Simplex communication does not provide:",
    answer: "Two-way communication",
    options: [
      "One-way communication",
      "Two-way communication",
      "Data transmission",
      "A sender",
    ],
  },
  {
    numb: 269,
    question: "The main idea of Stop-and-Wait is that the sender:",
    answer: "Sends one frame and waits before sending the next",
    options: [
      "Sends all frames at once",
      "Sends one frame and waits before sending the next",
      "Never waits",
      "Only receives frames",
    ],
  },
  {
    numb: 270,
    question: "In Stop-and-Wait, the sender waits for:",
    answer: "A response before continuing",
    options: [
      "A new IP address",
      "A response before continuing",
      "A new cable",
      "A router restart",
    ],
  },

  {
    numb: 271,
    question: "ACK stands for:",
    answer: "Acknowledgment",
    options: [
      "Acknowledgment",
      "Access Control Key",
      "Automatic Connection Kernel",
      "Address Check",
    ],
  },
  {
    numb: 272,
    question: "An ACK generally indicates that:",
    answer: "The frame was received successfully",
    options: [
      "The frame was deleted",
      "The frame was received successfully",
      "The network is disconnected",
      "The sender is offline",
    ],
  },
  {
    numb: 273,
    question: "In a reliable Stop-and-Wait protocol, the sender uses ACK to:",
    answer: "Know that it can proceed",
    options: [
      "Change the topology",
      "Know that it can proceed",
      "Assign an IP address",
      "Create a gateway",
    ],
  },
  {
    numb: 274,
    question: "A noisy channel is a channel in which:",
    answer: "Data may be corrupted or lost",
    options: [
      "Data is always perfect",
      "Data may be corrupted or lost",
      "No data can be sent",
      "Only wireless data exists",
    ],
  },
  {
    numb: 275,
    question: "Why is Stop-and-Wait more complex on a noisy channel?",
    answer: "Frames or acknowledgments may be lost or corrupted",
    options: [
      "There are no receivers",
      "Frames or acknowledgments may be lost or corrupted",
      "There are no protocols",
      "There are no frames",
    ],
  },
  {
    numb: 276,
    question:
      "What does the sender use to detect that an expected ACK has not arrived in time?",
    answer: "Timer",
    options: ["MAC address", "Timer", "Gateway", "NIC"],
  },
  {
    numb: 277,
    question:
      "When the timer expires before receiving the expected ACK, the sender may:",
    answer: "Retransmit the frame",
    options: [
      "Delete the receiver",
      "Retransmit the frame",
      "Change the topology",
      "Stop the network permanently",
    ],
  },
  {
    numb: 278,
    question: "A timeout means:",
    answer: "The expected response was not received within the allowed time",
    options: [
      "The frame was definitely received",
      "The expected response was not received within the allowed time",
      "The sender changed its IP",
      "The network became wireless",
    ],
  },
  {
    numb: 279,
    question: "Retransmission means:",
    answer: "Sending the frame again",
    options: [
      "Deleting the frame",
      "Sending the frame again",
      "Changing the frame into a packet",
      "Changing the MAC address",
    ],
  },
  {
    numb: 280,
    question: "Why is retransmission used in Stop-and-Wait protocols?",
    answer: "To recover from lost or corrupted transmissions",
    options: [
      "To increase screen resolution",
      "To recover from lost or corrupted transmissions",
      "To change network topology",
      "To assign port numbers",
    ],
  },

  {
    numb: 281,
    question: "Why are sequence numbers used in noisy-channel Stop-and-Wait?",
    answer: "To identify frames and detect duplicates",
    options: [
      "To identify computer brands",
      "To identify frames and detect duplicates",
      "To measure cable length",
      "To assign IP addresses",
    ],
  },
  {
    numb: 282,
    question: "Sequence numbers help the receiver distinguish between:",
    answer: "New and duplicate frames",
    options: [
      "LAN and WAN",
      "New and duplicate frames",
      "Switches and routers",
      "Cables and radios",
    ],
  },
  {
    numb: 283,
    question:
      "If a frame is retransmitted because its ACK was lost, the receiver may see:",
    answer: "A duplicate frame",
    options: [
      "A new topology",
      "A duplicate frame",
      "A new network",
      "A gateway",
    ],
  },
  {
    numb: 284,
    question: "A duplicate frame can occur when:",
    answer: "The original frame arrived but its ACK was lost",
    options: [
      "The sender never sent anything",
      "The original frame arrived but its ACK was lost",
      "The receiver has no NIC",
      "The network has a star topology",
    ],
  },
  {
    numb: 285,
    question: "How can a receiver detect a duplicate frame?",
    answer: "By checking its sequence number",
    options: [
      "By checking screen size",
      "By checking its sequence number",
      "By checking the cable color",
      "By checking the router brand",
    ],
  },
  {
    numb: 286,
    question: "Modulo-2 sequence numbering uses:",
    answer: "Two sequence numbers",
    options: [
      "One sequence number",
      "Two sequence numbers",
      "Three sequence numbers",
      "Four sequence numbers",
    ],
  },
  {
    numb: 287,
    question: "The sequence numbers in modulo-2 numbering are commonly:",
    answer: "0 and 1",
    options: ["1 and 2", "0 and 1", "2 and 3", "10 and 20"],
  },
  {
    numb: 288,
    question: "With modulo-2 sequence numbers, after sequence number 1 comes:",
    answer: "0",
    options: ["1", "2", "0", "3"],
  },
  {
    numb: 289,
    question: "The receiver can use sequence numbers to avoid:",
    answer: "Delivering duplicate data to the upper layer",
    options: [
      "Using a network",
      "Delivering duplicate data to the upper layer",
      "Using a NIC",
      "Using a frame",
    ],
  },
  {
    numb: 290,
    question:
      "Which problem can occur if sequence numbers are not used with retransmission?",
    answer: "Duplicate frames may be mistaken for new frames",
    options: [
      "The cable becomes longer",
      "Duplicate frames may be mistaken for new frames",
      "The router becomes a switch",
      "The network becomes wireless",
    ],
  },

  {
    numb: 291,
    question: "If a data frame is lost, the receiver:",
    answer: "Does not receive that frame",
    options: [
      "Automatically receives it",
      "Does not receive that frame",
      "Changes its MAC address",
      "Creates a gateway",
    ],
  },
  {
    numb: 292,
    question: "If an ACK is lost, what may the sender assume?",
    answer: "The frame may not have been received",
    options: [
      "The frame definitely failed",
      "The frame may not have been received",
      "The receiver changed its IP",
      "The network changed topology",
    ],
  },
  {
    numb: 293,
    question: "After an ACK is lost, the sender may:",
    answer: "Timeout and retransmit the frame",
    options: [
      "Delete the receiver",
      "Timeout and retransmit the frame",
      "Stop using frames forever",
      "Change the LAN to WAN",
    ],
  },
  {
    numb: 294,
    question:
      "If the receiver gets a retransmitted duplicate frame, it should:",
    answer: "Recognize it using the sequence number",
    options: [
      "Treat it as a completely new frame",
      "Recognize it using the sequence number",
      "Change the sender IP",
      "Forward it to a gateway",
    ],
  },
  {
    numb: 295,
    question: "Which event can cause unnecessary retransmission?",
    answer: "Loss of an ACK",
    options: [
      "Successful ACK arrival",
      "Loss of an ACK",
      "Correct sequence number",
      "Successful frame delivery",
    ],
  },
  {
    numb: 296,
    question: "Which sequence correctly describes noisy-channel Stop-and-Wait?",
    answer: "Send frame → wait for ACK → retransmit on timeout",
    options: [
      "Send frame → wait for ACK → retransmit on timeout",
      "Send all frames → never wait",
      "Receive frame → delete ACK → stop",
      "Route packet → change topology → transmit",
    ],
  },
  {
    numb: 297,
    question:
      "In noisy-channel Stop-and-Wait, a timer is started mainly after:",
    answer: "Sending a frame",
    options: [
      "Deleting a frame",
      "Sending a frame",
      "Changing an IP address",
      "Receiving a duplicate only",
    ],
  },
  {
    numb: 298,
    question:
      "When the correct ACK arrives before timeout, the sender normally:",
    answer: "Moves to the next frame",
    options: [
      "Retransmits the same frame forever",
      "Moves to the next frame",
      "Deletes the network",
      "Changes its MAC address",
    ],
  },
  {
    numb: 299,
    question:
      "Which combination provides reliability in noisy-channel Stop-and-Wait?",
    answer: "ACK, timer, retransmission, and sequence numbers",
    options: [
      "Only a hub",
      "Only a router",
      "ACK, timer, retransmission, and sequence numbers",
      "Only a NIC",
    ],
  },
  {
    numb: 300,
    question:
      "What is the main purpose of sequence numbers, ACKs, timers, and retransmissions together?",
    answer: "Reliable delivery over a noisy channel",
    options: [
      "Creating a network topology",
      "Reliable delivery over a noisy channel",
      "Assigning domain names",
      "Increasing monitor resolution",
    ],
  },
];
