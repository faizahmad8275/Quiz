let questions = [
  {
    numb: 1,
    question: "What is the main purpose of a computer network?",
    answer: "To share data and resources",
    options: [
      "To increase computer size",
      "To share data and resources",
      "To reduce storage",
      "To remove protocols"
    ]
  },
  {
    numb: 2,
    question: "Who sends data in a communication system?",
    answer: "Sender",
    options: [
      "Receiver",
      "Router",
      "Sender",
      "Switch"
    ]
  },
  {
    numb: 3,
    question: "Which network covers a small geographical area such as a building?",
    answer: "LAN",
    options: [
      "WAN",
      "MAN",
      "LAN",
      "PAN"
    ]
  },
  {
    numb: 4,
    question: "Which network covers a large geographical area?",
    answer: "WAN",
    options: [
      "LAN",
      "WAN",
      "PAN",
      "CAN"
    ]
  },
  {
    numb: 5,
    question: "Which device forwards frames using MAC addresses?",
    answer: "Switch",
    options: [
      "Router",
      "Switch",
      "Repeater",
      "Modem"
    ]
  },
  {
    numb: 6,
    question: "Which device regenerates a weak signal?",
    answer: "Repeater",
    options: [
      "Router",
      "Gateway",
      "Repeater",
      "Switch"
    ]
  },
  {
    numb: 7,
    question: "Which device forwards packets between different networks?",
    answer: "Router",
    options: [
      "Hub",
      "Router",
      "Repeater",
      "Bridge"
    ]
  },
  {
    numb: 8,
    question: "Which device can connect networks using different protocols?",
    answer: "Gateway",
    options: [
      "Gateway",
      "Repeater",
      "Hub",
      "NIC"
    ]
  },
  {
    numb: 9,
    question: "Which device sends incoming data to all connected ports?",
    answer: "Hub",
    options: [
      "Router",
      "Switch",
      "Hub",
      "Gateway"
    ]
  },
  {
    numb: 10,
    question: "What does NIC stand for?",
    answer: "Network Interface Card",
    options: [
      "Network Internet Controller",
      "Network Interface Card",
      "Network Internal Connection",
      "Network Information Channel"
    ]
  },
  {
    numb: 11,
    question: "What is a protocol in computer networking?",
    answer: "A set of rules for communication",
    options: [
      "A physical cable",
      "A set of rules for communication",
      "A storage device",
      "A network topology"
    ]
  },
  {
    numb: 12,
    question: "How many layers are present in the OSI model?",
    answer: "7",
    options: [
      "4",
      "5",
      "6",
      "7"
    ]
  },
  {
    numb: 13,
    question: "Which OSI layer transmits raw bits?",
    answer: "Physical layer",
    options: [
      "Data Link layer",
      "Network layer",
      "Physical layer",
      "Transport layer"
    ]
  },
  {
    numb: 14,
    question: "Which OSI layer is responsible for framing?",
    answer: "Data Link layer",
    options: [
      "Physical layer",
      "Data Link layer",
      "Network layer",
      "Session layer"
    ]
  },
  {
    numb: 15,
    question: "Which OSI layer is responsible for routing?",
    answer: "Network layer",
    options: [
      "Transport layer",
      "Network layer",
      "Data Link layer",
      "Presentation layer"
    ]
  },
  {
    numb: 16,
    question: "Which OSI layer provides end-to-end delivery?",
    answer: "Transport layer",
    options: [
      "Network layer",
      "Transport layer",
      "Session layer",
      "Physical layer"
    ]
  },
  {
    numb: 17,
    question: "Which OSI layer manages dialogs between applications?",
    answer: "Session layer",
    options: [
      "Session layer",
      "Network layer",
      "Physical layer",
      "Data Link layer"
    ]
  },
  {
    numb: 18,
    question: "Which OSI layer handles translation, encryption and compression?",
    answer: "Presentation layer",
    options: [
      "Application layer",
      "Presentation layer",
      "Session layer",
      "Transport layer"
    ]
  },
  {
    numb: 19,
    question: "Which OSI layer is closest to the end user?",
    answer: "Application layer",
    options: [
      "Physical layer",
      "Transport layer",
      "Application layer",
      "Network layer"
    ]
  },
  {
    numb: 20,
    question: "What is encapsulation in networking?",
    answer: "Adding headers/trailers as data moves down layers",
    options: [
      "Removing all network data",
      "Adding headers/trailers as data moves down layers",
      "Deleting packets",
      "Changing hardware"
    ]
  },
  {
    numb: 21,
    question: "Which transmission medium uses light signals?",
    answer: "Optical fiber",
    options: [
      "Twisted pair",
      "Coaxial cable",
      "Optical fiber",
      "Radio"
    ]
  },
  {
    numb: 22,
    question: "Which medium consists of twisted copper wires?",
    answer: "Twisted pair",
    options: [
      "Optical fiber",
      "Twisted pair",
      "Microwave",
      "Satellite"
    ]
  },
  {
    numb: 23,
    question: "Which cable has a central conductor surrounded by shielding?",
    answer: "Coaxial cable",
    options: [
      "Twisted pair",
      "Coaxial cable",
      "Fiber cable",
      "Ribbon cable"
    ]
  },
  {
    numb: 24,
    question: "Which transmission medium does not use a physical cable?",
    answer: "Unguided medium",
    options: [
      "Guided medium",
      "Unguided medium",
      "Fiber",
      "Coaxial"
    ]
  },
  {
    numb: 25,
    question: "What is the basic unit of information in digital communication?",
    answer: "Bit",
    options: [
      "Byte",
      "Bit",
      "Frame",
      "Packet"
    ]
  },
  {
    numb: 26,
    question: "What is the data unit of the Data Link layer?",
    answer: "Frame",
    options: [
      "Bit",
      "Frame",
      "Packet",
      "Segment"
    ]
  },
  {
    numb: 27,
    question: "What is the data unit of the Network layer?",
    answer: "Packet",
    options: [
      "Frame",
      "Packet",
      "Segment",
      "Bit"
    ]
  },
  {
    numb: 28,
    question: "What is the data unit of the Transport layer?",
    answer: "Segment",
    options: [
      "Frame",
      "Packet",
      "Segment",
      "Bit"
    ]
  },
  {
    numb: 29,
    question: "Which type of delivery occurs between adjacent nodes?",
    answer: "Hop-to-hop delivery",
    options: [
      "End-to-end delivery",
      "Hop-to-hop delivery",
      "Application delivery",
      "Process delivery"
    ]
  },
  {
    numb: 30,
    question: "Which type of delivery occurs between source and destination processes?",
    answer: "End-to-end delivery",
    options: [
      "Hop-to-hop delivery",
      "End-to-end delivery",
      "Frame delivery",
      "Physical delivery"
    ]
  },
  {
    numb: 31,
    question: "What is the main purpose of framing?",
    answer: "To divide a bit stream into manageable units",
    options: [
      "To assign IP addresses",
      "To divide a bit stream into manageable units",
      "To encrypt all data",
      "To select routes"
    ]
  },
  {
    numb: 32,
    question: "Which Data Link layer function detects transmission errors?",
    answer: "Error detection",
    options: [
      "Routing",
      "Error detection",
      "Encryption",
      "Naming"
    ]
  },
  {
    numb: 33,
    question: "Which function prevents a fast sender from overwhelming a slow receiver?",
    answer: "Flow control",
    options: [
      "Routing",
      "Flow control",
      "Encryption",
      "Framing"
    ]
  },
  {
    numb: 34,
    question: "Which mechanism deals with lost or damaged frames?",
    answer: "Error control",
    options: [
      "Error control",
      "Addressing",
      "Routing",
      "Multiplexing"
    ]
  },
  {
    numb: 35,
    question: "In which transmission mode does data flow in only one direction?",
    answer: "Simplex",
    options: [
      "Simplex",
      "Half duplex",
      "Full duplex",
      "Multiplex"
    ]
  },
  {
    numb: 36,
    question: "In which mode can both devices transmit, but not at the same time?",
    answer: "Half duplex",
    options: [
      "Simplex",
      "Half duplex",
      "Full duplex",
      "Broadcast"
    ]
  },
  {
    numb: 37,
    question: "What does ACK indicate?",
    answer: "Successful receipt of data",
    options: [
      "Network failure",
      "Successful receipt of data",
      "Address change",
      "Route failure"
    ]
  },
  {
    numb: 38,
    question: "What does NAK generally indicate?",
    answer: "Negative acknowledgement",
    options: [
      "Successful delivery",
      "Negative acknowledgement",
      "New address",
      "Network access"
    ]
  },
  {
    numb: 39,
    question: "What happens when an expected ACK does not arrive within the specified time?",
    answer: "Timeout occurs",
    options: [
      "Routing occurs",
      "Timeout occurs",
      "Encryption occurs",
      "Framing stops permanently"
    ]
  },
  {
    numb: 40,
    question: "What is a major limitation of Stop-and-Wait protocol?",
    answer: "Poor channel utilization",
    options: [
      "No acknowledgement",
      "Poor channel utilization",
      "No retransmission",
      "No sequence numbers"
    ]
  },
  {
    numb: 41,
    question: "What technique allows multiple frames to be transmitted before receiving acknowledgements?",
    answer: "Sliding window",
    options: [
      "Stop-and-Wait",
      "Sliding window",
      "Parity",
      "CRC"
    ]
  },
  {
    numb: 42,
    question: "Why are sequence numbers used in reliable communication?",
    answer: "To identify and distinguish frames",
    options: [
      "To increase bandwidth",
      "To identify and distinguish frames",
      "To encrypt frames",
      "To assign MAC addresses"
    ]
  },
  {
    numb: 43,
    question: "What can happen if an ACK is lost?",
    answer: "The sender may retransmit a duplicate frame",
    options: [
      "The sender always stops",
      "The sender may retransmit a duplicate frame",
      "The receiver deletes its address",
      "The router changes protocol"
    ]
  },
  {
    numb: 44,
    question: "Which ARQ protocol retransmits the lost frame and all following frames?",
    answer: "Go-Back-N",
    options: [
      "Selective Repeat",
      "Go-Back-N",
      "Stop-and-Wait only",
      "Parity"
    ]
  },
  {
    numb: 45,
    question: "Which ARQ protocol retransmits only the specific lost or damaged frames?",
    answer: "Selective Repeat",
    options: [
      "Go-Back-N",
      "Selective Repeat",
      "Simplex",
      "CRC"
    ]
  },
  {
    numb: 46,
    question: "In Go-Back-N, what happens to correctly received out-of-order frames?",
    answer: "They are generally discarded",
    options: [
      "They are always delivered immediately",
      "They are generally discarded",
      "They are encrypted",
      "They become routers"
    ]
  },
  {
    numb: 47,
    question: "Which sliding-window protocol can buffer out-of-order frames?",
    answer: "Selective Repeat",
    options: [
      "Go-Back-N",
      "Selective Repeat",
      "Simplex",
      "Stop-and-Wait"
    ]
  },
  {
    numb: 48,
    question: "Which protocol generally provides better bandwidth utilization than Stop-and-Wait?",
    answer: "Sliding Window",
    options: [
      "Simplex",
      "Sliding Window",
      "Parity",
      "Broadcast"
    ]
  },
  {
    numb: 49,
    question: "What is the purpose of a retransmission timer?",
    answer: "To detect a missing acknowledgement",
    options: [
      "To assign an IP",
      "To detect a missing acknowledgement",
      "To encrypt packets",
      "To calculate MAC"
    ]
  },
  {
    numb: 50,
    question: "Which OSI layer is directly above the Physical layer?",
    answer: "Data Link layer",
    options: [
      "Network layer",
      "Data Link layer",
      "Transport layer",
      "Session layer"
    ]
  },
  {
    numb: 51,
    question: "Which OSI layer is directly above the Data Link layer?",
    answer: "Network layer",
    options: [
      "Physical layer",
      "Network layer",
      "Transport layer",
      "Application layer"
    ]
  },
  {
    numb: 52,
    question: "Which OSI layer is directly above the Network layer?",
    answer: "Transport layer",
    options: [
      "Session layer",
      "Transport layer",
      "Physical layer",
      "Data Link layer"
    ]
  },
  {
    numb: 53,
    question: "Which OSI layer is closest to the user?",
    answer: "Application layer",
    options: [
      "Physical layer",
      "Application layer",
      "Network layer",
      "Data Link layer"
    ]
  },
  {
    numb: 54,
    question: "Which OSI layer handles logical addressing?",
    answer: "Network layer",
    options: [
      "Physical layer",
      "Network layer",
      "Session layer",
      "Presentation layer"
    ]
  },
  {
    numb: 55,
    question: "Which OSI layer handles MAC addressing?",
    answer: "Data Link layer",
    options: [
      "Data Link layer",
      "Network layer",
      "Transport layer",
      "Application layer"
    ]
  },
  {
    numb: 56,
    question: "Which OSI layer uses port numbers for process-to-process communication?",
    answer: "Transport layer",
    options: [
      "Network layer",
      "Transport layer",
      "Data Link layer",
      "Physical layer"
    ]
  },
  {
    numb: 57,
    question: "Which layer handles formatting and translation of data?",
    answer: "Presentation layer",
    options: [
      "Session layer",
      "Presentation layer",
      "Network layer",
      "Physical layer"
    ]
  },
  {
    numb: 58,
    question: "What is the main purpose of error detection?",
    answer: "To determine whether data was corrupted",
    options: [
      "To select routes",
      "To determine whether data was corrupted",
      "To assign ports",
      "To increase storage"
    ]
  },
  {
    numb: 59,
    question: "Which error-detection technique adds a parity bit?",
    answer: "Parity check",
    options: [
      "CRC",
      "Parity check",
      "Routing",
      "Sliding window"
    ]
  },
  {
    numb: 60,
    question: "Which error-detection method uses polynomial division?",
    answer: "CRC",
    options: [
      "Parity",
      "CRC",
      "Checksum",
      "ACK"
    ]
  },
  {
    numb: 61,
    question: "Which error-detection method is generally more powerful than simple parity?",
    answer: "CRC",
    options: [
      "CRC",
      "Simplex",
      "ACK",
      "Timeout"
    ]
  },
  {
    numb: 62,
    question: "Which method calculates a value from data blocks for error detection?",
    answer: "Checksum",
    options: [
      "Checksum",
      "Routing",
      "Framing",
      "Flooding"
    ]
  },
  {
    numb: 63,
    question: "What are extra bits added for error detection or correction called?",
    answer: "Redundancy",
    options: [
      "Payload",
      "Redundancy",
      "Routing",
      "Bandwidth"
    ]
  },
  {
    numb: 64,
    question: "What does ARQ stand for?",
    answer: "Automatic Repeat reQuest",
    options: [
      "Automatic Routing Query",
      "Automatic Repeat reQuest",
      "Advanced Routing Queue",
      "Automatic Receiver Query"
    ]
  },
  {
    numb: 65,
    question: "Which mechanism is commonly used with ARQ to confirm receipt?",
    answer: "Acknowledgement",
    options: [
      "Acknowledgement",
      "Encryption",
      "Compression",
      "Routing"
    ]
  },
  {
    numb: 66,
    question: "What does timeout indicate in a reliable protocol?",
    answer: "Expected response was not received in time",
    options: [
      "Data was encrypted",
      "Expected response was not received in time",
      "The network is always successful",
      "MAC address changed"
    ]
  },
  {
    numb: 67,
    question: "What does flow control regulate?",
    answer: "Rate of data transmission between sender and receiver",
    options: [
      "IP address format",
      "Rate of data transmission between sender and receiver",
      "Cable length",
      "MAC address size"
    ]
  },
  {
    numb: 68,
    question: "Why is flow control required?",
    answer: "To prevent receiver buffer overflow",
    options: [
      "To prevent receiver buffer overflow",
      "To create IP addresses",
      "To increase cable length",
      "To remove protocols"
    ]
  },
  {
    numb: 69,
    question: "What does Stop-and-Wait do after sending one frame?",
    answer: "Waits for an acknowledgement",
    options: [
      "Sends unlimited frames",
      "Waits for an acknowledgement",
      "Changes the IP",
      "Closes the network"
    ]
  },
  {
    numb: 70,
    question: "What does the sender window represent?",
    answer: "Frames that the sender is allowed to transmit",
    options: [
      "Available MAC addresses",
      "Frames that the sender is allowed to transmit",
      "Router addresses",
      "Physical cables"
    ]
  },
  {
    numb: 71,
    question: "What does the receiver window represent?",
    answer: "Frames the receiver can accept",
    options: [
      "Frames the receiver can accept",
      "IP addresses",
      "Network cables",
      "Protocols"
    ]
  },
  {
    numb: 72,
    question: "What is the benefit of a larger sliding window?",
    answer: "Better utilization of the communication link",
    options: [
      "Lower storage",
      "Better utilization of the communication link",
      "No acknowledgements",
      "No sequence numbers"
    ]
  },
  {
    numb: 73,
    question: "Which protocol may retransmit several frames after one frame is lost?",
    answer: "Go-Back-N",
    options: [
      "Selective Repeat",
      "Go-Back-N",
      "Simplex",
      "Parity"
    ]
  },
  {
    numb: 74,
    question: "Which protocol uses selective retransmission?",
    answer: "Selective Repeat",
    options: [
      "Go-Back-N",
      "Selective Repeat",
      "Stop-and-Wait",
      "Simplex"
    ]
  },
  {
    numb: 75,
    question: "Which protocol requires receiver buffering for out-of-order frames?",
    answer: "Selective Repeat",
    options: [
      "Stop-and-Wait",
      "Selective Repeat",
      "Simplex",
      "Parity"
    ]
  },
  {
    numb: 76,
    question: "Which ARQ method is simpler to implement?",
    answer: "Go-Back-N",
    options: [
      "Selective Repeat",
      "Go-Back-N",
      "CRC",
      "Checksum"
    ]
  },
  {
    numb: 77,
    question: "What is a duplicate ACK?",
    answer: "An ACK referring to already acknowledged data",
    options: [
      "A new IP address",
      "An ACK referring to already acknowledged data",
      "A new route",
      "A network failure"
    ]
  },
  {
    numb: 78,
    question: "What is an out-of-order frame?",
    answer: "A frame received before an expected earlier frame",
    options: [
      "A corrupted frame only",
      "A frame received before an expected earlier frame",
      "A frame with no MAC",
      "A broadcast frame"
    ]
  },
  {
    numb: 79,
    question: "What is retransmission?",
    answer: "Sending data again",
    options: [
      "Deleting data",
      "Sending data again",
      "Encrypting data",
      "Routing data"
    ]
  },
  {
    numb: 80,
    question: "Which process adds a frame header and trailer at the Data Link layer?",
    answer: "Frame encapsulation",
    options: [
      "Routing",
      "Frame encapsulation",
      "Decryption",
      "Address resolution"
    ]
  },
  {
    numb: 81,
    question: "What is the purpose of a frame delimiter?",
    answer: "To identify the beginning or end of a frame",
    options: [
      "To assign an IP",
      "To identify the beginning or end of a frame",
      "To encrypt data",
      "To select a route"
    ]
  },
  {
    numb: 82,
    question: "What is byte stuffing used for?",
    answer: "To distinguish control bytes from data bytes",
    options: [
      "To increase IP addresses",
      "To distinguish control bytes from data bytes",
      "To route packets",
      "To reduce bandwidth"
    ]
  },
  {
    numb: 83,
    question: "What is bit stuffing used for?",
    answer: "To prevent data from being mistaken for a flag pattern",
    options: [
      "To assign MAC addresses",
      "To prevent data from being mistaken for a flag pattern",
      "To select a route",
      "To encrypt packets"
    ]
  },
  {
    numb: 84,
    question: "What type of address is a MAC address?",
    answer: "Data Link layer address",
    options: [
      "Application address",
      "Data Link layer address",
      "Transport address",
      "Session address"
    ]
  },
  {
    numb: 85,
    question: "What type of address is an IP address?",
    answer: "Network layer address",
    options: [
      "Physical layer address",
      "Network layer address",
      "Data Link layer address",
      "Application address"
    ]
  },
  {
    numb: 86,
    question: "Which device operates primarily at the Data Link layer?",
    answer: "Switch",
    options: [
      "Router",
      "Switch",
      "Repeater",
      "Gateway"
    ]
  },
  {
    numb: 87,
    question: "Which device primarily operates at the Network layer?",
    answer: "Router",
    options: [
      "Hub",
      "Router",
      "Repeater",
      "NIC"
    ]
  },
  {
    numb: 88,
    question: "Which device primarily operates at the Physical layer?",
    answer: "Repeater",
    options: [
      "Router",
      "Switch",
      "Repeater",
      "Gateway"
    ]
  },
  {
    numb: 89,
    question: "Which topology connects all devices to a central device?",
    answer: "Star topology",
    options: [
      "Bus topology",
      "Ring topology",
      "Star topology",
      "Mesh topology"
    ]
  },
  {
    numb: 90,
    question: "Which topology uses a single shared backbone cable?",
    answer: "Bus topology",
    options: [
      "Star topology",
      "Bus topology",
      "Ring topology",
      "Mesh topology"
    ]
  },
  {
    numb: 91,
    question: "Which topology connects devices in a circular arrangement?",
    answer: "Ring topology",
    options: [
      "Star topology",
      "Bus topology",
      "Ring topology",
      "Mesh topology"
    ]
  },
  {
    numb: 92,
    question: "Which topology provides multiple direct paths between devices?",
    answer: "Mesh topology",
    options: [
      "Bus topology",
      "Ring topology",
      "Mesh topology",
      "Star topology"
    ]
  },
  {
    numb: 93,
    question: "Which topology uses a central connecting device?",
    answer: "Star topology",
    options: [
      "Mesh",
      "Ring",
      "Star",
      "Bus"
    ]
  },
  {
    numb: 94,
    question: "What is the main advantage of mesh topology?",
    answer: "High reliability due to multiple paths",
    options: [
      "Lowest number of links",
      "High reliability due to multiple paths",
      "No cables",
      "No addressing"
    ]
  },
  {
    numb: 95,
    question: "Which topology is easiest to expand by adding devices to a central device?",
    answer: "Star topology",
    options: [
      "Star topology",
      "Ring topology",
      "Bus topology",
      "Mesh topology"
    ]
  },
  {
    numb: 96,
    question: "What is network topology?",
    answer: "Arrangement of network devices and links",
    options: [
      "Network speed",
      "Arrangement of network devices and links",
      "IP address",
      "Protocol type"
    ]
  },
  {
    numb: 97,
    question: "Which communication method sends data to exactly one destination?",
    answer: "Unicast",
    options: [
      "Broadcast",
      "Multicast",
      "Unicast",
      "Anycast"
    ]
  },
  {
    numb: 98,
    question: "Which communication method sends data to all devices in a network?",
    answer: "Broadcast",
    options: [
      "Unicast",
      "Broadcast",
      "Multicast",
      "Point-to-point"
    ]
  },
  {
    numb: 99,
    question: "Which communication method sends data to a selected group of receivers?",
    answer: "Multicast",
    options: [
      "Unicast",
      "Broadcast",
      "Multicast",
      "Simplex"
    ]
  },
  {
    numb: 100,
    question: "What is bandwidth?",
    answer: "Data-carrying capacity of a communication channel",
    options: [
      "Physical cable length",
      "Data-carrying capacity of a communication channel",
      "IP address size",
      "Number of routers"
    ]
  },
  {
    numb: 101,
    question: "What is propagation delay?",
    answer: "Time taken for a signal to travel through the medium",
    options: [
      "Time to process a packet",
      "Time taken for a signal to travel through the medium",
      "Time to encrypt data",
      "Time to assign an IP"
    ]
  },
  {
    numb: 102,
    question: "What is transmission delay?",
    answer: "Time required to put all bits of a packet onto the link",
    options: [
      "Time to route a packet",
      "Time required to put all bits of a packet onto the link",
      "Time to encrypt data",
      "Time to receive an ACK"
    ]
  },
  {
    numb: 103,
    question: "What does latency represent?",
    answer: "Delay experienced during data transmission",
    options: [
      "Network capacity",
      "Delay experienced during data transmission",
      "MAC address",
      "Cable type"
    ]
  },
  {
    numb: 104,
    question: "Which medium generally provides very high bandwidth?",
    answer: "Optical fiber",
    options: [
      "Optical fiber",
      "Twisted pair",
      "Radio",
      "Telephone wire"
    ]
  },
  {
    numb: 105,
    question: "Which medium is highly immune to electromagnetic interference?",
    answer: "Optical fiber",
    options: [
      "Coaxial cable",
      "Twisted pair",
      "Optical fiber",
      "Copper wire"
    ]
  },
  {
    numb: 106,
    question: "Which transmission medium carries electrical signals through copper?",
    answer: "Copper cable",
    options: [
      "Fiber",
      "Copper cable",
      "Radio",
      "Satellite"
    ]
  },
  {
    numb: 107,
    question: "Which protocol suite is used as the foundation of the Internet?",
    answer: "TCP/IP",
    options: [
      "OSI",
      "TCP/IP",
      "HTTP only",
      "FTP only"
    ]
  },
  {
    numb: 108,
    question: "How many layers are commonly described in the TCP/IP model?",
    answer: "4",
    options: [
      "3",
      "4",
      "5",
      "7"
    ]
  },
  {
    numb: 109,
    question: "Which TCP/IP layer combines OSI application, presentation and session functions?",
    answer: "Application layer",
    options: [
      "Internet layer",
      "Application layer",
      "Transport layer",
      "Network access layer"
    ]
  },
  {
    numb: 110,
    question: "Which TCP/IP protocol provides reliable end-to-end transport?",
    answer: "TCP",
    options: [
      "IP",
      "UDP",
      "TCP",
      "ARP"
    ]
  },
  {
    numb: 111,
    question: "Which protocol provides connectionless transport?",
    answer: "UDP",
    options: [
      "TCP",
      "UDP",
      "IP",
      "HTTP"
    ]
  },
  {
    numb: 112,
    question: "Which protocol provides logical addressing and internetworking?",
    answer: "IP",
    options: [
      "TCP",
      "IP",
      "FTP",
      "SMTP"
    ]
  },
  {
    numb: 113,
    question: "Which TCP/IP layer provides access to the physical network?",
    answer: "Network access layer",
    options: [
      "Application layer",
      "Transport layer",
      "Internet layer",
      "Network access layer"
    ]
  },
  {
    numb: 114,
    question: "What happens during decapsulation?",
    answer: "Headers and trailers are removed as data moves up layers",
    options: [
      "Headers are added only",
      "Headers and trailers are removed as data moves up layers",
      "Packets are destroyed",
      "IP addresses are created"
    ]
  },
  {
    numb: 115,
    question: "What does a switch use to forward frames?",
    answer: "MAC address",
    options: [
      "IP address only",
      "MAC address",
      "Port number only",
      "URL"
    ]
  },
  {
    numb: 116,
    question: "What does a router use for logical forwarding?",
    answer: "IP address",
    options: [
      "MAC address only",
      "IP address",
      "Username",
      "File name"
    ]
  },
  {
    numb: 117,
    question: "What is the main function of a repeater?",
    answer: "Regenerate and retransmit signals",
    options: [
      "Route packets",
      "Regenerate and retransmit signals",
      "Assign IP addresses",
      "Filter applications"
    ]
  },
  {
    numb: 118,
    question: "What is the primary purpose of a modem?",
    answer: "Convert signals for communication over a transmission medium",
    options: [
      "Route packets",
      "Convert signals for communication over a transmission medium",
      "Store files",
      "Assign MAC addresses"
    ]
  },
  {
    numb: 119,
    question: "What does MODEM stand for?",
    answer: "Modulator-Demodulator",
    options: [
      "Modern Device",
      "Modulator-Demodulator",
      "Module Decoder",
      "Mobile Demodulator"
    ]
  },
  {
    numb: 120,
    question: "What is the primary purpose of a hub?",
    answer: "Broadcast incoming signals to connected devices",
    options: [
      "Route packets",
      "Broadcast incoming signals to connected devices",
      "Assign IP addresses",
      "Encrypt data"
    ]
  },
  {
    numb: 121,
    question: "What is the main purpose of a gateway?",
    answer: "Connect networks that may use different protocols",
    options: [
      "Regenerate signals",
      "Connect networks that may use different protocols",
      "Only forward MAC frames",
      "Store data"
    ]
  },
  {
    numb: 122,
    question: "What is the primary purpose of a NIC?",
    answer: "Connect a device to a network",
    options: [
      "Connect a device to a network",
      "Route packets between networks",
      "Encrypt files",
      "Provide DNS"
    ]
  },
  {
    numb: 123,
    question: "Where is a MAC address primarily associated?",
    answer: "Network interface",
    options: [
      "Application",
      "Network interface",
      "File system",
      "Browser"
    ]
  },
  {
    numb: 124,
    question: "Where is an IP address assigned?",
    answer: "To a network interface/device for network communication",
    options: [
      "Only to files",
      "To a network interface/device for network communication",
      "Only to applications",
      "Only to cables"
    ]
  },
  {
    numb: 125,
    question: "What is the purpose of frame synchronization?",
    answer: "To identify frame boundaries",
    options: [
      "To assign IP addresses",
      "To identify frame boundaries",
      "To encrypt frames",
      "To route packets"
    ]
  },
  {
    numb: 126,
    question: "What type of errors can frame-level error detection identify?",
    answer: "Transmission errors",
    options: [
      "Programming errors",
      "Transmission errors",
      "User errors",
      "Application design errors"
    ]
  },
  {
    numb: 127,
    question: "What is the purpose of error correction?",
    answer: "To recover or correct corrupted data",
    options: [
      "To assign addresses",
      "To recover or correct corrupted data",
      "To increase cable length",
      "To select routes"
    ]
  },
  {
    numb: 128,
    question: "What does an ACK generally tell the sender?",
    answer: "The receiver received the expected data",
    options: [
      "The receiver received the expected data",
      "The network is disconnected",
      "The IP changed",
      "The cable is broken"
    ]
  },
  {
    numb: 129,
    question: "What does ARQ provide?",
    answer: "Reliable transmission using acknowledgements and retransmissions",
    options: [
      "Only encryption",
      "Reliable transmission using acknowledgements and retransmissions",
      "Only routing",
      "Only addressing"
    ]
  },
  {
    numb: 130,
    question: "What happens when a data frame is lost?",
    answer: "It can be retransmitted after detecting the loss",
    options: [
      "It can be retransmitted after detecting the loss",
      "It is always ignored",
      "The IP is deleted",
      "The network shuts down"
    ]
  },
  {
    numb: 131,
    question: "What happens when an ACK is lost?",
    answer: "The sender may retransmit the frame",
    options: [
      "The sender may retransmit the frame",
      "The receiver deletes the network",
      "The router stops forever",
      "The frame becomes a packet"
    ]
  },
  {
    numb: 132,
    question: "Why are sequence numbers important in Stop-and-Wait ARQ?",
    answer: "To distinguish new frames from duplicates",
    options: [
      "To increase bandwidth",
      "To distinguish new frames from duplicates",
      "To assign MAC addresses",
      "To route packets"
    ]
  },
  {
    numb: 133,
    question: "How many sequence numbers are needed for a simple alternating-bit protocol?",
    answer: "Two",
    options: [
      "One",
      "Two",
      "Four",
      "Eight"
    ]
  },
  {
    numb: 134,
    question: "Which sequence numbers are commonly used in the alternating-bit protocol?",
    answer: "0 and 1",
    options: [
      "1 and 2",
      "0 and 1",
      "2 and 3",
      "0 and 3"
    ]
  },
  {
    numb: 135,
    question: "After sequence number 1, what is the next sequence number in a modulo-2 protocol?",
    answer: "0",
    options: [
      "0",
      "1",
      "2",
      "3"
    ]
  },
  {
    numb: 136,
    question: "What problem do sequence numbers help solve after a lost ACK?",
    answer: "Duplicate frame detection",
    options: [
      "Routing failure",
      "Duplicate frame detection",
      "Cable failure",
      "Bandwidth calculation"
    ]
  },
  {
    numb: 137,
    question: "What happens if a receiver gets a duplicate frame?",
    answer: "It can identify it using the sequence number",
    options: [
      "It always accepts it as new",
      "It can identify it using the sequence number",
      "It changes its IP",
      "It becomes a router"
    ]
  },
  {
    numb: 138,
    question: "What does a lost data frame require in a reliable protocol?",
    answer: "Retransmission",
    options: [
      "Encryption",
      "Retransmission",
      "Broadcast",
      "Compression"
    ]
  },
  {
    numb: 139,
    question: "What does a timer start after in Stop-and-Wait?",
    answer: "After transmitting a frame and waiting for ACK",
    options: [
      "After changing IP",
      "After transmitting a frame and waiting for ACK",
      "After closing the connection",
      "After routing"
    ]
  },
  {
    numb: 140,
    question: "What happens if the correct ACK arrives before timeout?",
    answer: "The sender can proceed with the next frame",
    options: [
      "The sender retransmits immediately",
      "The sender can proceed with the next frame",
      "The sender shuts down",
      "The receiver changes address"
    ]
  },
  {
    numb: 141,
    question: "Which combination helps provide reliable Stop-and-Wait communication?",
    answer: "Sequence numbers, ACKs, timers and retransmission",
    options: [
      "Only IP addresses",
      "Sequence numbers, ACKs, timers and retransmission",
      "Only MAC addresses",
      "Only routing"
    ]
  },
  {
    numb: 142,
    question: "What is the overall purpose of sequence numbers, ACKs, timers and retransmissions?",
    answer: "Reliable data delivery",
    options: [
      "Reliable data delivery",
      "Increasing cable length",
      "Changing topology",
      "Assigning domain names"
    ]
  },
  {
    numb: 143,
    question: "What is the Internet?",
    answer: "A global network of interconnected networks",
    options: [
      "A single LAN",
      "A global network of interconnected networks",
      "A single computer",
      "A storage device"
    ]
  },
  {
    numb: 144,
    question: "What was ARPANET?",
    answer: "An early packet-switched computer network",
    options: [
      "A modern browser",
      "An early packet-switched computer network",
      "A programming language",
      "A database"
    ]
  },
  {
    numb: 145,
    question: "What does ARPA stand for?",
    answer: "Advanced Research Projects Agency",
    options: [
      "Advanced Research Projects Agency",
      "American Routing Protocol Agency",
      "Advanced Radio Processing Association",
      "Automatic Research Protocol Architecture"
    ]
  },
  {
    numb: 146,
    question: "What is packet switching?",
    answer: "Dividing data into packets for transmission",
    options: [
      "Sending only one huge message",
      "Dividing data into packets for transmission",
      "Encrypting all data",
      "Changing MAC addresses"
    ]
  },
  {
    numb: 147,
    question: "In packet switching, what happens to a large message?",
    answer: "It is divided into smaller packets",
    options: [
      "It is deleted",
      "It is divided into smaller packets",
      "It becomes a cable",
      "It is always broadcast"
    ]
  },
  {
    numb: 148,
    question: "Can packets of the same message take different paths?",
    answer: "Yes",
    options: [
      "No",
      "Yes",
      "Only in LAN",
      "Only in Bluetooth"
    ]
  },
  {
    numb: 149,
    question: "What is a network node?",
    answer: "A device or connection point in a network",
    options: [
      "Only a cable",
      "A device or connection point in a network",
      "Only an application",
      "Only a protocol"
    ]
  },
  {
    numb: 150,
    question: "What is an intermediate forwarding device?",
    answer: "A device that forwards data toward its destination",
    options: [
      "A printer only",
      "A device that forwards data toward its destination",
      "A keyboard",
      "A monitor"
    ]
  },
  {
    numb: 151,
    question: "What is a communication channel?",
    answer: "A path through which data travels",
    options: [
      "A storage device",
      "A path through which data travels",
      "An operating system",
      "A database"
    ]
  },
  {
    numb: 152,
    question: "What is a transmission medium?",
    answer: "The physical or wireless path used to carry signals",
    options: [
      "A routing table",
      "The physical or wireless path used to carry signals",
      "A browser",
      "An IP address"
    ]
  },
  {
    numb: 153,
    question: "What does throughput represent?",
    answer: "Actual rate of successful data transfer",
    options: [
      "Cable length",
      "Actual rate of successful data transfer",
      "IP address size",
      "Number of protocols"
    ]
  },
  {
    numb: 154,
    question: "How are bandwidth and throughput related?",
    answer: "Bandwidth is capacity, while throughput is actual achieved rate",
    options: [
      "They are always identical",
      "Bandwidth is capacity, while throughput is actual achieved rate",
      "Both mean cable length",
      "Both mean IP address"
    ]
  },
  {
    numb: 155,
    question: "Which combination can improve reliable data transmission?",
    answer: "Error detection, acknowledgements and retransmission",
    options: [
      "Only routing",
      "Error detection, acknowledgements and retransmission",
      "Only broadcasting",
      "Only compression"
    ]
  },
  {
    numb: 156,
    question: "What is point-to-point communication?",
    answer: "Communication between two directly connected endpoints",
    options: [
      "Communication among all devices",
      "Communication between two directly connected endpoints",
      "Only wireless communication",
      "Only broadcast communication"
    ]
  },
  {
    numb: 157,
    question: "What is multipoint communication?",
    answer: "A communication link shared by multiple devices",
    options: [
      "A link used by only one device",
      "A communication link shared by multiple devices",
      "Only a fiber link",
      "Only a router link"
    ]
  },
  {
    numb: 158,
    question: "What is MAN designed to cover?",
    answer: "A city or metropolitan area",
    options: [
      "A single room",
      "A city or metropolitan area",
      "The entire world",
      "Only one computer"
    ]
  },
  {
    numb: 159,
    question: "What is LAN designed to cover?",
    answer: "A relatively small geographic area",
    options: [
      "A relatively small geographic area",
      "An entire continent",
      "The entire Internet",
      "Only satellites"
    ]
  },
  {
    numb: 160,
    question: "What is WAN designed to cover?",
    answer: "Large geographic areas",
    options: [
      "One room",
      "One building only",
      "Large geographic areas",
      "One computer"
    ]
  },
  {
    numb: 161,
    question: "What is an active hub?",
    answer: "A hub that regenerates or amplifies signals",
    options: [
      "A hub that stores files",
      "A hub that regenerates or amplifies signals",
      "A router",
      "A modem"
    ]
  },
  {
    numb: 162,
    question: "What is a passive hub?",
    answer: "A hub that mainly connects signals without regeneration",
    options: [
      "A hub that mainly connects signals without regeneration",
      "A router",
      "A gateway",
      "A modem"
    ]
  },
  {
    numb: 163,
    question: "What is the main function of a bridge?",
    answer: "Connect and filter traffic between LAN segments",
    options: [
      "Connect and filter traffic between LAN segments",
      "Provide Internet DNS",
      "Encrypt files",
      "Generate IP addresses"
    ]
  },
  {
    numb: 164,
    question: "What makes a switch more intelligent than a hub?",
    answer: "It forwards frames based on learned MAC addresses",
    options: [
      "It broadcasts everything",
      "It forwards frames based on learned MAC addresses",
      "It has no addresses",
      "It only regenerates signals"
    ]
  },
  {
    numb: 165,
    question: "What is one main function of a router?",
    answer: "Select paths between networks",
    options: [
      "Select paths between networks",
      "Only regenerate signals",
      "Only connect keyboards",
      "Only store packets"
    ]
  },
  {
    numb: 166,
    question: "What is a gateway used for?",
    answer: "Connecting networks with different architectures or protocols",
    options: [
      "Connecting networks with different architectures or protocols",
      "Only regenerating signals",
      "Only storing files",
      "Only assigning MAC addresses"
    ]
  },
  {
    numb: 167,
    question: "Which address is primarily used by a switch for forwarding?",
    answer: "MAC address",
    options: [
      "IP address",
      "MAC address",
      "URL",
      "Port number"
    ]
  },
  {
    numb: 168,
    question: "Which device performs network-layer forwarding?",
    answer: "Router",
    options: [
      "Hub",
      "Router",
      "Repeater",
      "NIC"
    ]
  },
  {
    numb: 169,
    question: "What is the network edge?",
    answer: "The part of the network containing end systems and access networks",
    options: [
      "Only the core routers",
      "The part of the network containing end systems and access networks",
      "Only cables",
      "Only DNS servers"
    ]
  },
  {
    numb: 170,
    question: "What is an access network?",
    answer: "The network connecting end systems to the core",
    options: [
      "The network connecting end systems to the core",
      "Only a backbone",
      "Only a router table",
      "Only an application"
    ]
  },
  {
    numb: 171,
    question: "What is the network core?",
    answer: "The interconnected routers that carry traffic",
    options: [
      "The interconnected routers that carry traffic",
      "Only end users",
      "Only applications",
      "Only cables at home"
    ]
  },
  {
    numb: 172,
    question: "What is the role of access networks?",
    answer: "Connect end systems to the network",
    options: [
      "Connect end systems to the network",
      "Only encrypt packets",
      "Only calculate bandwidth",
      "Only assign MAC addresses"
    ]
  },
  {
    numb: 173,
    question: "Which part of a network contains end devices?",
    answer: "Network edge",
    options: [
      "Network core",
      "Network edge",
      "Backbone only",
      "Routing table"
    ]
  },
  {
    numb: 174,
    question: "Which part mainly handles traffic forwarding through interconnected routers?",
    answer: "Network core",
    options: [
      "Network edge",
      "Network core",
      "Application layer",
      "NIC"
    ]
  },
  {
    numb: 175,
    question: "What is a guided transmission medium?",
    answer: "A medium where signals travel through a physical path",
    options: [
      "A medium where signals travel through a physical path",
      "Only radio",
      "Only satellite",
      "Only infrared"
    ]
  },
  {
    numb: 176,
    question: "Which is an example of a guided medium?",
    answer: "Fiber-optic cable",
    options: [
      "Radio waves",
      "Fiber-optic cable",
      "Microwave",
      "Satellite"
    ]
  },
  {
    numb: 177,
    question: "Which transmission method sends signals through air?",
    answer: "Unguided transmission",
    options: [
      "Guided transmission",
      "Unguided transmission",
      "Fiber transmission",
      "Copper transmission"
    ]
  },
  {
    numb: 178,
    question: "Which medium uses no physical cable between communicating devices?",
    answer: "Wireless medium",
    options: [
      "Twisted pair",
      "Coaxial",
      "Wireless medium",
      "Fiber"
    ]
  },
  {
    numb: 179,
    question: "What does a network protocol specify?",
    answer: "Rules governing communication",
    options: [
      "Only hardware size",
      "Rules governing communication",
      "Only cable length",
      "Only storage capacity"
    ]
  },
  {
    numb: 180,
    question: "What can a protocol define?",
    answer: "Message format, order and actions taken on transmission or receipt",
    options: [
      "Only computer size",
      "Message format, order and actions taken on transmission or receipt",
      "Only cable material",
      "Only screen size"
    ]
  },
  {
    numb: 181,
    question: "Why are protocols standardized?",
    answer: "To allow different systems to communicate consistently",
    options: [
      "To increase monitor size",
      "To allow different systems to communicate consistently",
      "To remove all networks",
      "To eliminate hardware"
    ]
  },
  {
    numb: 182,
    question: "What does a protocol generally not define?",
    answer: "The physical appearance of a computer",
    options: [
      "Message format",
      "Communication rules",
      "The physical appearance of a computer",
      "Message sequence"
    ]
  },
  {
    numb: 183,
    question: "Which device is associated mainly with signal regeneration?",
    answer: "Repeater",
    options: [
      "Repeater",
      "Router",
      "Gateway",
      "Switch"
    ]
  },
  {
    numb: 184,
    question: "Which device is associated mainly with MAC-based forwarding?",
    answer: "Switch",
    options: [
      "Switch",
      "Router",
      "Repeater",
      "Gateway"
    ]
  },
  {
    numb: 185,
    question: "Which device is associated mainly with IP-based routing?",
    answer: "Router",
    options: [
      "Hub",
      "Router",
      "Repeater",
      "NIC"
    ]
  },
  {
    numb: 186,
    question: "Which device can translate between different network protocols?",
    answer: "Gateway",
    options: [
      "Gateway",
      "Repeater",
      "Hub",
      "NIC"
    ]
  },
  {
    numb: 187,
    question: "What can be carried inside a Data Link frame?",
    answer: "A network-layer packet",
    options: [
      "Only a MAC address",
      "A network-layer packet",
      "Only a cable",
      "Only a protocol name"
    ]
  },
  {
    numb: 188,
    question: "What type of delivery is provided by the Data Link layer?",
    answer: "Node-to-node delivery",
    options: [
      "Node-to-node delivery",
      "Application-to-application only",
      "Country-to-country only",
      "User-to-user only"
    ]
  },
  {
    numb: 189,
    question: "Which layer provides process-to-process communication?",
    answer: "Transport layer",
    options: [
      "Physical layer",
      "Data Link layer",
      "Transport layer",
      "Network layer"
    ]
  },
  {
    numb: 190,
    question: "At which layer does a packet become a frame?",
    answer: "Data Link layer",
    options: [
      "Application layer",
      "Transport layer",
      "Data Link layer",
      "Physical layer"
    ]
  },
  {
    numb: 191,
    question: "What happens to headers during decapsulation?",
    answer: "They are removed as data moves upward",
    options: [
      "They are always duplicated",
      "They are removed as data moves upward",
      "They become cables",
      "They become IP addresses"
    ]
  },
  {
    numb: 192,
    question: "Which layer sits between the Physical and Network layers?",
    answer: "Data Link layer",
    options: [
      "Transport layer",
      "Data Link layer",
      "Session layer",
      "Application layer"
    ]
  },
  {
    numb: 193,
    question: "What is a major function of the Data Link layer?",
    answer: "Reliable node-to-node frame delivery",
    options: [
      "Reliable node-to-node frame delivery",
      "Application design",
      "Domain registration",
      "File compression"
    ]
  },
  {
    numb: 194,
    question: "Which Data Link function regulates sender and receiver speeds?",
    answer: "Flow control",
    options: [
      "Flow control",
      "Routing",
      "Encryption",
      "Naming"
    ]
  },
  {
    numb: 195,
    question: "What is the Data Link layer data unit?",
    answer: "Frame",
    options: [
      "Bit",
      "Frame",
      "Packet",
      "Segment"
    ]
  },
  {
    numb: 196,
    question: "What does the Data Link layer add to network-layer data?",
    answer: "Frame header and trailer",
    options: [
      "Only an IP address",
      "Frame header and trailer",
      "Only a port",
      "Only a URL"
    ]
  },
  {
    numb: 197,
    question: "Which Data Link function detects damaged frames?",
    answer: "Error detection",
    options: [
      "Routing",
      "Error detection",
      "Encryption",
      "Application control"
    ]
  },
  {
    numb: 198,
    question: "Which type of protocols are used at the Data Link layer?",
    answer: "Data Link protocols",
    options: [
      "Data Link protocols",
      "Only application protocols",
      "Only transport protocols",
      "Only routing protocols"
    ]
  },
  {
    numb: 199,
    question: "What is simplex communication?",
    answer: "Communication in one direction only",
    options: [
      "Communication in one direction only",
      "Communication in both directions simultaneously",
      "Communication in both directions alternately",
      "Communication with no medium"
    ]
  },
  {
    numb: 200,
    question: "What is a key characteristic of simplex communication?",
    answer: "No reverse communication channel",
    options: [
      "No reverse communication channel",
      "Both devices transmit simultaneously",
      "Both devices alternate transmission",
      "Multiple routers are required"
    ]
  },
  {
    numb: 201,
    question: "What is the basic idea of Stop-and-Wait?",
    answer: "Send one frame and wait for its acknowledgement",
    options: [
      "Send unlimited frames",
      "Send one frame and wait for its acknowledgement",
      "Send no frames",
      "Broadcast all frames"
    ]
  },
  {
    numb: 202,
    question: "What does an ACK confirm?",
    answer: "Successful receipt of the expected frame",
    options: [
      "Successful receipt of the expected frame",
      "A routing failure",
      "A MAC change",
      "A cable break"
    ]
  },
  {
    numb: 203,
    question: "Why is Stop-and-Wait inefficient on a long-delay link?",
    answer: "The sender spends much time waiting for acknowledgements",
    options: [
      "The sender spends much time waiting for acknowledgements",
      "It has no receiver",
      "It uses no frames",
      "It cannot transmit bits"
    ]
  },
  {
    numb: 204,
    question: "What problem is especially important on a noisy channel?",
    answer: "Frames or acknowledgements may be lost or corrupted",
    options: [
      "Frames or acknowledgements may be lost or corrupted",
      "The monitor changes color",
      "The keyboard stops",
      "The CPU becomes larger"
    ]
  },
  {
    numb: 205,
    question: "Why does a noisy channel make reliable communication more complex?",
    answer: "Data and acknowledgements may need retransmission",
    options: [
      "Data and acknowledgements may need retransmission",
      "No packets can exist",
      "Only routers are used",
      "IP addresses disappear"
    ]
  },
  {
    numb: 206,
    question: "What detects that an expected ACK has not arrived?",
    answer: "Timer expiration",
    options: [
      "Timer expiration",
      "MAC address",
      "DNS",
      "Gateway"
    ]
  },
  {
    numb: 207,
    question: "What normally happens after a timeout?",
    answer: "The sender retransmits the frame",
    options: [
      "The sender retransmits the frame",
      "The sender deletes the frame permanently",
      "The router changes topology",
      "The receiver shuts down"
    ]
  },
  {
    numb: 208,
    question: "What is the purpose of retransmission?",
    answer: "To resend data that may not have been successfully delivered",
    options: [
      "To resend data that may not have been successfully delivered",
      "To assign IP addresses",
      "To create topology",
      "To increase storage"
    ]
  },
  {
    numb: 209,
    question: "Why are sequence numbers used with noisy Stop-and-Wait?",
    answer: "To detect duplicate frames",
    options: [
      "To detect duplicate frames",
      "To calculate cable length",
      "To assign MAC addresses",
      "To select a network topology"
    ]
  },
  {
    numb: 210,
    question: "How can sequence numbers distinguish frames?",
    answer: "Each frame carries a sequence identifier",
    options: [
      "Each frame carries a sequence identifier",
      "Each frame uses a different cable",
      "Each frame has a different computer",
      "Each frame changes the protocol"
    ]
  },
  {
    numb: 211,
    question: "What can happen when an ACK is lost but the original frame was received?",
    answer: "The sender may retransmit the original frame",
    options: [
      "The sender may retransmit the original frame",
      "The sender always sends a new IP",
      "The receiver becomes a router",
      "The network is permanently closed"
    ]
  },
  {
    numb: 212,
    question: "Why can duplicate frames occur?",
    answer: "Because a sender retransmits when an ACK is lost or delayed",
    options: [
      "Because a sender retransmits when an ACK is lost or delayed",
      "Because MAC addresses are too long",
      "Because routers cannot route",
      "Because cables are wireless"
    ]
  },
  {
    numb: 213,
    question: "How does a receiver detect a duplicate frame?",
    answer: "By checking its sequence number",
    options: [
      "By checking its sequence number",
      "By checking cable color",
      "By checking screen size",
      "By checking the keyboard"
    ]
  },
  {
    numb: 214,
    question: "What happens when a retransmitted frame is identified as a duplicate?",
    answer: "The receiver can discard the duplicate and send the appropriate ACK",
    options: [
      "The receiver can discard the duplicate and send the appropriate ACK",
      "The receiver always delivers it twice",
      "The receiver changes its IP",
      "The receiver shuts down"
    ]
  },
  {
    numb: 215,
    question: "What is modulo-2 sequence numbering?",
    answer: "Using two sequence states, 0 and 1",
    options: [
      "Using two sequence states, 0 and 1",
      "Using ten addresses",
      "Using four routers",
      "Using seven layers"
    ]
  },
  {
    numb: 216,
    question: "What happens after sequence number 1 in modulo-2 numbering?",
    answer: "It wraps back to 0",
    options: [
      "It wraps back to 0",
      "It becomes 2",
      "It becomes 7",
      "It is deleted"
    ]
  },
  {
    numb: 217,
    question: "What problem occurs if sequence numbers are not used?",
    answer: "The receiver may not distinguish a new frame from a duplicate",
    options: [
      "The receiver may not distinguish a new frame from a duplicate",
      "The cable becomes longer",
      "The IP becomes shorter",
      "The router becomes a switch"
    ]
  },
  {
    numb: 218,
    question: "What happens when a data frame is lost?",
    answer: "The sender detects the problem through timeout and retransmits",
    options: [
      "The sender detects the problem through timeout and retransmits",
      "The receiver always receives it",
      "The router creates a new network",
      "The MAC address changes"
    ]
  },
  {
    numb: 219,
    question: "What happens when an ACK is lost?",
    answer: "The sender eventually retransmits after timeout",
    options: [
      "The sender eventually retransmits after timeout",
      "The receiver deletes all data",
      "The network changes topology",
      "The IP is removed"
    ]
  },
  {
    numb: 220,
    question: "Why can a retransmission after a lost ACK be unnecessary?",
    answer: "Because the receiver may already have received the original frame",
    options: [
      "Because the receiver may already have received the original frame",
      "Because no frame was sent",
      "Because routers never receive frames",
      "Because IP addresses are duplicated"
    ]
  },
  {
    numb: 221,
    question: "What should the receiver do with a duplicate frame?",
    answer: "Detect and avoid delivering the duplicate as new data",
    options: [
      "Detect and avoid delivering the duplicate as new data",
      "Deliver it twice",
      "Change its IP",
      "Convert it into a router"
    ]
  },
  {
    numb: 222,
    question: "Which mechanism is essential for detecting missing ACKs?",
    answer: "Timer",
    options: [
      "Timer",
      "MAC address",
      "Gateway",
      "Hub"
    ]
  },
  {
    numb: 223,
    question: "What happens if the expected ACK arrives before the timer expires?",
    answer: "No retransmission is needed for that frame",
    options: [
      "No retransmission is needed for that frame",
      "The frame is always discarded",
      "The sender changes IP",
      "The router shuts down"
    ]
  },
  {
    numb: 224,
    question: "What provides reliability in a Stop-and-Wait protocol?",
    answer: "Acknowledgement, timeout and retransmission",
    options: [
      "Acknowledgement, timeout and retransmission",
      "Only bandwidth",
      "Only routing",
      "Only MAC addressing"
    ]
  },
  {
    numb: 225,
    question: "Which transmission mode allows simultaneous two-way communication?",
    answer: "Full duplex",
    options: [
      "Simplex",
      "Half duplex",
      "Full duplex",
      "Broadcast"
    ]
  },
  {
    numb: 226,
    question: "Which transmission type uses a physical guided path?",
    answer: "Guided transmission",
    options: [
      "Guided transmission",
      "Unguided transmission",
      "Broadcast",
      "Multicast"
    ]
  },
  {
    numb: 227,
    question: "Which medium is an optical transmission medium?",
    answer: "Fiber-optic cable",
    options: [
      "Twisted pair",
      "Fiber-optic cable",
      "Coaxial cable",
      "Radio"
    ]
  },
  {
    numb: 228,
    question: "Which technology was important in the development of packet-switched networks?",
    answer: "ARPANET",
    options: [
      "ARPANET",
      "Bluetooth",
      "USB",
      "VGA"
    ]
  },
  {
    numb: 229,
    question: "What is the main purpose of packet switching?",
    answer: "Efficiently share network resources by sending data as packets",
    options: [
      "Efficiently share network resources by sending data as packets",
      "Use only one computer",
      "Remove addressing",
      "Eliminate routing"
    ]
  },
  {
    numb: 230,
    question: "What can happen to packets while traveling through a network?",
    answer: "They may experience different delays or paths",
    options: [
      "They may experience different delays or paths",
      "They always use identical paths",
      "They cannot be routed",
      "They become physical cables"
    ]
  },
  {
    numb: 231,
    question: "Which device can connect different network segments at the Data Link layer?",
    answer: "Bridge",
    options: [
      "Bridge",
      "Repeater",
      "Modem",
      "Hub"
    ]
  },
  {
    numb: 232,
    question: "Which network device selects the best available path?",
    answer: "Router",
    options: [
      "Router",
      "Hub",
      "Repeater",
      "NIC"
    ]
  },
  {
    numb: 233,
    question: "What is a backbone in networking?",
    answer: "A high-capacity part of a network carrying major traffic",
    options: [
      "A high-capacity part of a network carrying major traffic",
      "A user password",
      "A MAC address",
      "A single application"
    ]
  },
  {
    numb: 234,
    question: "Which topology has the highest number of physical links among the common basic topologies?",
    answer: "Mesh topology",
    options: [
      "Star topology",
      "Bus topology",
      "Ring topology",
      "Mesh topology"
    ]
  },
  {
    numb: 235,
    question: "What is a major disadvantage of bus topology?",
    answer: "Failure of the shared backbone can affect the network",
    options: [
      "Failure of the shared backbone can affect the network",
      "It requires one link per pair",
      "It has no shared medium",
      "It cannot transmit data"
    ]
  },
  {
    numb: 236,
    question: "What is an advantage of star topology?",
    answer: "Failure of one individual link usually affects only that device",
    options: [
      "Failure of one individual link usually affects only that device",
      "No central device is needed",
      "No cables are required",
      "All devices share one cable"
    ]
  },
  {
    numb: 237,
    question: "Which topology provides high redundancy?",
    answer: "Mesh topology",
    options: [
      "Bus topology",
      "Mesh topology",
      "Ring topology",
      "Star topology"
    ]
  },
  {
    numb: 238,
    question: "Which device usually acts as the central device in a modern star network?",
    answer: "Switch",
    options: [
      "Switch",
      "Repeater",
      "Modem",
      "Router only"
    ]
  },
  {
    numb: 239,
    question: "In ring topology, each node is generally connected to how many neighboring nodes?",
    answer: "Two",
    options: [
      "One",
      "Two",
      "Three",
      "All"
    ]
  },
  {
    numb: 240,
    question: "Which topology requires a direct link between every pair of devices in a full mesh?",
    answer: "Mesh topology",
    options: [
      "Star topology",
      "Bus topology",
      "Ring topology",
      "Mesh topology"
    ]
  },
  {
    numb: 241,
    question: "Which layer is responsible for logical addressing?",
    answer: "Network layer",
    options: [
      "Physical layer",
      "Network layer",
      "Session layer",
      "Application layer"
    ]
  },
  {
    numb: 242,
    question: "Which layer is responsible for physical transmission of bits?",
    answer: "Physical layer",
    options: [
      "Physical layer",
      "Network layer",
      "Transport layer",
      "Application layer"
    ]
  },
  {
    numb: 243,
    question: "Which layer provides end-to-end process communication?",
    answer: "Transport layer",
    options: [
      "Data Link layer",
      "Network layer",
      "Transport layer",
      "Physical layer"
    ]
  },
  {
    numb: 244,
    question: "Which layer is responsible for frame delivery between adjacent nodes?",
    answer: "Data Link layer",
    options: [
      "Data Link layer",
      "Transport layer",
      "Session layer",
      "Application layer"
    ]
  },
  {
    numb: 245,
    question: "Which layer provides network services directly to applications?",
    answer: "Application layer",
    options: [
      "Application layer",
      "Physical layer",
      "Data Link layer",
      "Network layer"
    ]
  },
  {
    numb: 246,
    question: "Which OSI layer manages communication sessions?",
    answer: "Session layer",
    options: [
      "Session layer",
      "Network layer",
      "Physical layer",
      "Data Link layer"
    ]
  },
  {
    numb: 247,
    question: "Which OSI layer performs data translation?",
    answer: "Presentation layer",
    options: [
      "Presentation layer",
      "Transport layer",
      "Network layer",
      "Physical layer"
    ]
  },
  {
    numb: 248,
    question: "Which device broadcasts data to all connected ports?",
    answer: "Hub",
    options: [
      "Hub",
      "Switch",
      "Router",
      "Bridge"
    ]
  },
  {
    numb: 249,
    question: "Which device forwards data selectively based on MAC addresses?",
    answer: "Switch",
    options: [
      "Hub",
      "Switch",
      "Repeater",
      "Modem"
    ]
  },
  {
    numb: 250,
    question: "Which device forwards packets based on network-layer information?",
    answer: "Router",
    options: [
      "Router",
      "Hub",
      "Repeater",
      "NIC"
    ]
  },
  {
    numb: 251,
    question: "Which device connects a computer to a network?",
    answer: "NIC",
    options: [
      "NIC",
      "Router",
      "Gateway",
      "Hub"
    ]
  },
  {
    numb: 252,
    question: "Which address identifies a network interface at the Data Link layer?",
    answer: "MAC address",
    options: [
      "MAC address",
      "IP address",
      "Port number",
      "URL"
    ]
  },
  {
    numb: 253,
    question: "Which address identifies a device/interface logically on an IP network?",
    answer: "IP address",
    options: [
      "MAC address",
      "IP address",
      "Port number",
      "Frame number"
    ]
  },
  {
    numb: 254,
    question: "Which technique helps mark the boundaries of frames?",
    answer: "Framing",
    options: [
      "Framing",
      "Routing",
      "Encryption",
      "Multiplexing"
    ]
  },
  {
    numb: 255,
    question: "Which technique inserts an extra byte when a special control byte appears in data?",
    answer: "Byte stuffing",
    options: [
      "Bit stuffing",
      "Byte stuffing",
      "CRC",
      "Checksum"
    ]
  },
  {
    numb: 256,
    question: "Which technique inserts bits to avoid a flag pattern appearing in data?",
    answer: "Bit stuffing",
    options: [
      "Bit stuffing",
      "Byte stuffing",
      "Checksum",
      "Parity"
    ]
  },
  {
    numb: 257,
    question: "Which method detects errors using a polynomial calculation?",
    answer: "CRC",
    options: [
      "CRC",
      "ACK",
      "ARQ",
      "Sliding window"
    ]
  },
  {
    numb: 258,
    question: "Which method uses an additional bit to detect certain errors?",
    answer: "Parity",
    options: [
      "Parity",
      "CRC",
      "Routing",
      "Framing"
    ]
  },
  {
    numb: 259,
    question: "Which method calculates a numerical value from data for error detection?",
    answer: "Checksum",
    options: [
      "Checksum",
      "Timeout",
      "ACK",
      "Gateway"
    ]
  },
  {
    numb: 260,
    question: "Which protocol controls reliable delivery using acknowledgements and retransmissions?",
    answer: "ARQ",
    options: [
      "ARQ",
      "DNS",
      "ARP",
      "HTTP"
    ]
  },
  {
    numb: 261,
    question: "Which protocol sends one frame and waits for ACK?",
    answer: "Stop-and-Wait",
    options: [
      "Stop-and-Wait",
      "Go-Back-N",
      "Selective Repeat",
      "Broadcast"
    ]
  },
  {
    numb: 262,
    question: "Which protocol retransmits from the lost frame onward?",
    answer: "Go-Back-N",
    options: [
      "Selective Repeat",
      "Go-Back-N",
      "Simplex",
      "CRC"
    ]
  },
  {
    numb: 263,
    question: "Which protocol retransmits only selected lost frames?",
    answer: "Selective Repeat",
    options: [
      "Go-Back-N",
      "Selective Repeat",
      "Stop-and-Wait",
      "Parity"
    ]
  },
  {
    numb: 264,
    question: "Which protocol generally needs more receiver buffering?",
    answer: "Selective Repeat",
    options: [
      "Stop-and-Wait",
      "Selective Repeat",
      "Simplex",
      "Parity"
    ]
  },
  {
    numb: 265,
    question: "Which protocol generally discards out-of-order frames?",
    answer: "Go-Back-N",
    options: [
      "Selective Repeat",
      "Go-Back-N",
      "Stop-and-Wait",
      "TCP only"
    ]
  },
  {
    numb: 266,
    question: "Which mechanism allows several frames to be outstanding at once?",
    answer: "Sliding window",
    options: [
      "Sliding window",
      "Parity",
      "Simplex",
      "Checksum"
    ]
  },
  {
    numb: 267,
    question: "What does the sender window control?",
    answer: "How many frames can be sent without waiting for individual ACKs",
    options: [
      "How many frames can be sent without waiting for individual ACKs",
      "Number of IP addresses",
      "Number of routers",
      "Cable length"
    ]
  },
  {
    numb: 268,
    question: "What does the receiver window control?",
    answer: "How many frames the receiver can accept or buffer",
    options: [
      "How many frames the receiver can accept or buffer",
      "Number of cables",
      "IP address length",
      "Number of protocols"
    ]
  },
  {
    numb: 269,
    question: "What is the main benefit of sliding window over Stop-and-Wait?",
    answer: "Higher link utilization",
    options: [
      "Higher link utilization",
      "No error detection",
      "No ACKs",
      "No sequence numbers"
    ]
  },
  {
    numb: 270,
    question: "What is the main purpose of sequence numbering in reliable protocols?",
    answer: "To identify frames and detect duplicates or ordering",
    options: [
      "To identify frames and detect duplicates or ordering",
      "To increase cable length",
      "To assign DNS names",
      "To encrypt all traffic"
    ]
  },
  {
    numb: 271,
    question: "What is the overall purpose of reliable Data Link protocols?",
    answer: "To provide reliable transfer of frames over a link",
    options: [
      "To provide reliable transfer of frames over a link",
      "To replace the Internet",
      "To remove addressing",
      "To eliminate physical transmission"
    ]
  }
];