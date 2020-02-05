let FIGURES = { 

  14: {
    "title":"Levels of machines in the computer hierarchy",
    "subtitle":"Section 1.5",  
    "texts": [
      {"title": "The Levels","text": `
      As with any complex system, the computer can be viewed from a number of perspectives. Each of these levels represents a separate, independent <strong>abstraction</strong> of the computer.

      While the whole book talks about every single level in the figure, this site only pays attention to the “Assembly Language/Machine Code” level (chapter 4 of the book) and the “Microprogrammed/Hardwired Control” level (chapter 6 of the book).
      `}
    ],
    "imagemap" : [
      {"coords" : "100,1,353,30", "shape": "rect", "title": "User or Application-Program Level", "text": `
      <strong>The  user</strong>  sees  the  computer  through  the  programs  that  run  on  it,  and  knows nothing about programming.
      `},
      {"coords" : "100,45,353,75", "shape": "rect", "title": "High Level Language Level", "text": `
      <strong>The programmer</strong>  sees  only  the  language,  and  none  of  the  low-level hardware details  of  the machine.
      `},
      {"coords" : "100,90,353,116", "shape": "rect", "title": "Assembly Language/Machine Code Level", "pointsto": "41", "text": `
      <strong>The compiler</strong>, translates the high-level program into assembly language.
      Then, <strong>the assembler</strong> translates assembly language to the actual 1's and 0's, which is the machine code.
      `},
      {"coords" : "100,130,353,158", "shape": "rect", "title": "The Control Level", "pointsto": "610", "text": `
      <strong>The control unit</strong> interprets the machine instructions one by one and transfers data from register to register by control signals.
      `},
      {"coords" : "100,175,353,202", "shape": "rect", "title": "Functional Unit Level", "text": `
      <strong>The functional units</strong> (CPU registers, the ALU, the main memory) perform operations over the data transfered by the control unit.
      `},
      {"coords" : "100,220,353,245", "shape": "rect", "title": "Logic Gates", "text": `
      <strong>The logic  gates</strong>  implement  the  lowest-level  logical  operations  upon  which  the computer’s functioning depends. It is from logic gates that the functional units are built.
      `},
      {"coords" : "100,265,353,290", "shape": "rect", "title": "Transistors, and Wires", "text": `
      At the very lowest level, a computer consists of electrical  components  such  as  <strong>transistors  and  wires</strong>,  which  make  up  the  logic gates, but at this level the functioning of the computer is lost in details of voltage,current, signal propagation delays, quantum effects, and other low-level matters
      `}
    ]
  },

  41: {
    "title":"Chapter 4: Machine Language and Assembly Language.",
    "subtitle":"",
    "texts": [
      {"title": "Instruction Set Architecture (ISA)","text": `
      The instruction set architecture is a protocol that defines how a computing machine appears to a machine language/assembly programmer or compiler. 
      The ISA describes the memory model, instruction format, types and modes, and operand registers, types, and data addressing.

      The ISA contains all the <strong>programmer-accesible</strong> hardware and can be viewed with the system bus model, which consists of three units:
      <strong>The CPU</strong>, <strong>The memory unit</strong> and the <strong>I/O unit</strong>
      `}
    ],
    "imagemap" : [
      {"coords" : "59,9,148,97", "shape": "rect", "title": "", "pointsto": "45", "text": `
      `},
      {"coords" : "192,7,283,98", "shape": "rect", "title": "", "pointsto": "440", "text": `
      `},
      {"coords" : "2,138,45,236", "shape": "rect", "title": "System Bus Model", "pointsto": "", "text": `
      Conventional  digital  computers  have  a  common  form  called the von Neumann model which consists of five components: The Input Unit, The Memory Unit, The Arithmetic and Logic Unit, The Control Unit and The Output Unit
      
      With the passing of the years, this model has been streamlined, ending up with a system bus model. This model now decomposes every computer into three units instead of five, combining the units in the von Neumann model.

      The main purpose of this model is to reduce the number of interconnections between the CPU and its subsystems. Instead of having separate communication paths between memory and each I/O device, the CPU is interconnected with the other two units via a shared system bus (which consists of different busses).
      Not all the components are connected to the bus in the same way, as not every component has the same needs of each bus.
      `}
    ]
  },

  440: {
    "title":"Memory",
    "subtitle":"Figure 4.4",
    "texts": [
      {"title": "Memory","text": `
      Computer memory is just a collection of consecutive items which hold one byte, where each of this item has an <strong>address</strong>, by which we reference them. One byte is a collection of 8 bits (and a bit is the little switch that can only be 1 or 0).
      `},
      {"title": "Addresability","text": `
      A machine can be byte-addressable or word-addressable. This means that the smallest object which can be referenced could be either a byte in some machines, or a <strong>word</strong>. A word is just a collection of N bytes, where the N is defined by the processor type. A 32-bit processor has 32-bit words (so, 4 bytes per word), whereas a 64-bit processor has 64-bit words (8 bytes).
      `},
      {"title": "Endiannes","text": `
      So, what happens when a byte-addressable machine wants to access a word? How is that word stored?

      Lets say we have the word 0x00000401. 
      As we are on the hexadecimal system, each pair of numbers is a byte, because each number can be any number between 0 and 16. If we have 2<sup>4</sup>=16 possibilities, we have 4 different bits. So, a pair of numbers are 8 bits, which are one byte.
      
      This means, we have the 4-byte word composed by the bytes 00, 00, 04 and 01. When we try to access the whole word, we must do it by addressing it by the <strong>lowest</strong> byte address. 
      So now the question is, which byte do we place on the lowest address?

      There are two choices: we either store this word as the sequence 00 00 04 01 (that means, presented as it is written), placing its <strong>most significat byte at the lowest address</strong>, referred to as <strong>big-endian</strong>,
      or we store it as the sequence 01 04 00 00, placing its <strong>least significat byte at the lowest address</strong>, referred to as <strong>little-endian</strong>.
      `}
    ],
    "imagemap" : [
      {"coords" : "12,89,145,223", "shape": "rect", "title": "", "pointsto": "441", "text": `
      `}
    ]
  },

  441: {
    "title":"Memory Map",
    "subtitle":"Figure 4.4",
    "texts": [
      {"title": "Address Space","text": `
      A memory address that is n bits can specify any one of 2<sup>n</sup> items, so the total size of the memory becomes 2<sup>n</sup>.
      Since addresses are counted in sequence beginning with zero, the highest address is one less than the size of the memory. So, in a 2<sup>32</sup> byte memory (i.e a 4GB memory), the range of addresses goes from 0 to 2<sup>32</sup>-1. 
      `}
    ],
    "imagemap" : [
      {"coords" : "74,48,191,97", "shape": "rect", "title": "OS", "text": `
      The lowest 2<sup>11</sup>=2048 addresses are reserved for use by the operating system.
      `},
      {"coords" : "190,130,73,98", "shape": "rect", "title": "User Space", "text": `
      The user space is where a user's assembled program is loaded and can grow during operation, until it meets up with the system stack.
      `},
      {"coords" : "74,199,190,248", "shape": "rect", "title": "System Stack", "text": `
      The system stack starts at location 2<sup>31</sup>-4 and grows toward lower addresses.
      `},
      {"coords" : "74,251,191,340", "shape": "rect", "title": "Memory Mapped I/O", "text": `
      
      The method for interacting with I/O devices is through the use of <strong>memory mapped I/O</strong>, in which devices occupy sections of the address space between 2<sup>31</sup> and 2<sup>32</sup>-1 and are read and written as if they are memory locations.
      `}
    ]
  },

  45: {
    "title":"High Level View of a CPU",
    "subtitle":"Figure 4.5",
    "texts": [
      {"title": "","text": `
      From this point of view, the CPU is composed by two sections:
      <strong>The Control section</strong> and  <strong>The Data section</strong>.
      `},
      {"title": "Fetch-Decode-Execute Cycle","text": `
      The ISA hardware implementation is couched in terms of the <strong>fetch-decode-execute cycle</strong>.
      In the <strong>fetch</strong> step, operands are retrieved from memory. 
      The <strong>decode</strong> step puts the operands into a format that the ALU can manipulate. 
      The <strong>execute</strong> cycle performs the selected operation within the ALU. 
      `}
    ],
    "imagemap" : [
      {"coords" : "16,17,131,127", "shape": "rect", "title": "Data Section", "pointsto": "46", "text": `
      The Data section is made up of a collection of registers and the ALU`},
      {"coords" : "208,26,297,118", "shape": "rect", "title": "Control Section", "text": `
      The Control section interprets instructions and effects register transfers and consists only of the control unit.
      The Control unit is responsible for executing the program instructions, which are stored in the main memory.
      `},
      {"coords" : "130,57,207,86", "shape": "rect", "title": "Interface between control unit and data unit", "text": `
      There are two registers that form the interface between both secitons.
      One is the <strong>Program Counter (PC)</strong>, also called the Instruction Pointer (IP). This register contains the address of the instruction being executed.
      The instruction that is pointed by the PC is fetched from memory and stored in the <strong>Instruction Register (IR)</strong> where it is interpreted.
      `}
    ]
  },

  46: {
    "title":"Datapath",
    "subtitle":"Figure 4.6",
    "texts": [
      {"title": "","text": `
      `}
    ],
    "imagemap" : [
      {"coords" : "93,49,191,206", "shape": "rect", "title": "Register File", "text": `
      The register file can be though of as a small, fast memory, separate from the system memory, which is used for <em>temporary</em> storage during computation
      Like the system memory, each register is assigned an address. 
      These register addresses are much smaller than main memory ones. For example, a 32 registers file needs only 5-bit addresses (2<sup>5</sup> = 32).
      As the register file is contained within the CPU, it is much more faster than main memory.
      `},
      {"coords" : "262,1,390,49", "shape": "rect", "title": "Source Registers", "text": `
      Two buses allow operands to be fecthed from the register file, which are then operated on by the ALU.
      `},
      {"coords" : "127,324,269,344", "shape": "rect", "title": "Destination Register", "text": `
      The result of the ALU operation over the two sources is then returned to the register file.
      `},
      {"coords" : "255,246,315,245,323,256,335,245,391,246,345,294,303,294", "shape": "poly", "title": "Arithmetic Logic Unit", "text": `
      [Paginas 110, 111 y 112]`},
    ]
  },

  610: {
    "title":"Chapter 6: Datapath and Control",
    "subtitle":"The Famous Figure 6.10",
    "texts": [
      {"title": "Microarchitecture Level","text": `
      The microarchitecture is one level deeper than the architecture, and it is composed of the same units (the control section, the datapath, etc) but seen in a different context: hardwired control, registers and what is actually happening under the hood.
      It consists of the control unit and the programmer-visible registers, functional units (the ALU, and others) and any additional registers that are required, and is the one responsible for actually making the fetch-execute cycle happen.

      The execution of each microinstrucion is controlled by the microprogram instruction register, the processor status register, and a mechanism for determining the next microinstruction to be executed. As the microinstruction is recomputed on every clock cycle, it does not need to be stored.
      `}
    ],


    "imagemap" : [
      {"coords" : "308,188,484,231", "shape": "rect", "title": "Read Only Memory", "text": `
      The heart of the control unit.
      This ROM contains values for all of the lines that must be controlled to implement each user-level instruction.
      `},
      {"coords" : "302,305,499,321", "shape": "rect", "pointsto": "611", "title": "Microprogram Instruction Register", "text": ``},
      {"coords" : "84,324,132,354", "shape": "rect", "title": "Timing", "text": `
      The microarchitecture operates on a two-phase clock cycle. The master section of all the registers (which are falling edge-triggered master/slave D flip-flops) change on the rising edge of the clock, and the slave sections change on the falling edge. 
      On the <strong>falling edge</strong>, data stored in the master sections of the registers are clocked into the slave sections. This makes the data available for operations involving the ALU. 
      While the clock is low, the ALU, CBLU and MUX functions are perfomed (and the condition code flags are become stable), which settle in time for the rising edge of the clock. 
      On the <strong>rising edge</strong> of the clock, the new values of the registers are written into the master sections. 
      The registers settle while the clock is high, and the process repeat.`},
      {"coords" : "3,1,295,44", "shape": "rect", "pointsto": "63", "title": "Datapath", "text": `
      The datapath consists of The ALU, the Scratchpad with the 32 user-accesible data registers (%r0 through %r31), 4 temporary registers not visible at the ISA level (nor visible to the user), the program counter (%pc) and the instruction register (%ir), and the A, B and C decoders.
      `},
      {"coords" : "298,1,547,43", "shape": "rect", "title": "Control Section", "text": `
      We now explore the part of the machine that is responsible for implementing the instruction set (ISA), and effects the operations on registers and memory: <strong>The Control Unit.</strong>

      When the microarchitecture begins operation (at boot), a reset circuit places the microword at location 0 in the control store into the MIR and executes it.
      Then, a microword is selected for execution from the Next/Decode/Jump inputs to the CS Address Mux, according to the settings in the COND field of the MIR and the output of the CBL logic.
      After each microword is placed in the MIR, the datapath performs operations according to the settings in the individual fields of the MIR.
      `},
      {"coords" : "276,536,294,556", "shape": "rect", "title": "Wires", "text": `
      This indicates the number of separate wires that are represented in the line.
      For example, as the psr needs 4 bits from the ALU, there are 4 separate wires connecting them.
      `},
    ]
  },

  63: {
    "title":"Datapath (microarchitecture)",
    "subtitle":"Figure 6.3",
    "texts": [
      {"title": "","text": ``}
    ],
    "imagemap" : [
      {"coords" : "239,610,255,662,305,661,319,612,295,611,289,629,271,628,264,610", "shape": "poly", "pointsto":"65", "title": "Arithmetic Logic Unit", "text": `
      The ALU generates the c (carry), n (negative), z (zero) and v (overflow) condition codes, which are only changed for the operations which end on CC (such as ANDCC, ORCC).
      A signal (SCC) is generated that tells the %psr register when to update the condition codes.
      `},
      {"coords" : "136,52,204,72", "shape": "rect", "pointsto":"68", "title": "", "text": `
      The ALU performs one of 16 operations (such as AND, OR, SRL) on the A and B busses, and for each operation, the 32-bit result is placed on the C bus, unless it is blocked by the C bus MUX when a word of memory is placed onto the C bus insted`},
      {"coords" : "134,302,205,369", "shape": "rect", "title": "Register %r14 and %r15", "text": `
      There are two distinct registers in this set of general-purpose register:
      
      <strong>%r14</strong> serves as the <strong>stack pointer</strong>, which contains the address of the top of she stack.
      <strong>%r15</strong> serves as the <strong>link register</strong>. In  order  to  allow  nested  calls  and  returns,  the  current  value  of this register should be saved on the stack, to be restored after the return.
      `},
      
      {"coords" : "342,26,396,72", "shape": "rect", "title": "Decoders", "text": `
      The A, B and C decoders simplify register selection. The six-bit inputs to the decoders select a single register for each of the A, B and C buses.
      
      There are 2<sup>6</sup>=64 possible outputs from the decoders, but there are only 38 data registers. The A and B decoders go from register 0 to 37, and the C decoder goes from register 1 to 37, because %r0 cannot be written. 
      
      Any number above 37 is free to be used when no register are to be connected to a bus (as they do not correspond to any register).
      `},
      {"coords" : "133,547,204,567", "shape": "rect", "pointsto":"69", "title": "Register %ir", "text": `This register holds the current instruction that is being executed and <strong>is not visible to the user</strong>`},
      {"coords" : "136,26,206,46", "shape": "rect", "title": "Register %r0", "text": `This register always contains the value 0 and cannot be changed, thus it has no inputs from the C bus nor any inputs from the C decoder, and does not need flip-flops.`},
      {"coords" : "136,423,204,442", "shape": "rect", "title": "Register %pc", "text": `This register keeps track of the next instruction to be read.
      The user has direct access to %pc only through the <tt>call</tt> and <tt>jmpl</tt> instructions.
      As this register can only contain values that are evenly divisible by 4, the rightmost two bits can be hardwired to 0.`}
    ]
  },

  65: {
    "title":"Arithmetic Logic Unit",
    "subtitle":"Figure 6.5",
    "texts": [
      {"title": "Hardware Implementation","text": `
      The ALU can be implemented in a number of ways. The simplest one is a lookup table (LUT) approeacho.
      The ALU has two 32-bit data inputs A and B and a 32-bit data output C, a four-bit control input F, a four-bit condition code output (N, V, C, Z) and a signal (SCC) that sets the flags in the %psr register.
      The ALU can be decomposed into a cascade of 32 LUTs (that are almost identically implemented) that implement the functions, and a barrel shifter that implements the shifts.
      `}
    ],
    "imagemap" : [
      {"coords" : "72,222,429,280", "shape": "rect", "pointsto":"66", "title": "Barrel Shifter", "text": `
      The barrel shifter shifts the input word by an arbitrary amount (from 0 to 31 bits) according to the settings of the control inputs.
      The barrel shifter performs shifts in levels, in which a different bit of the Shift Amount (SA) input is observed at each level.
      `},
      {"coords" : "1,462,141,504", "shape": "rect", "title": "Condition Codes", "text": `
      The n, z, v and c condition codes are implemented directly.
      The n and c bits are taken from the c<sub>31</sub> output of the barrel shifter and the carry-out position of the ALU LUT<sub>31</sub>.
      The z bit is computed as the NOR over the barrel shifter outputs. It is 1 only if all of the barrel shifter outputs are 0.
      The v bit is set if the carry into the most signitifacnt position is different than the cary out of the most significant position, which is implemented with an XOR gate.
      `}
    ]
  },

  66: {
    "title":"Barrel shifter",
    "subtitle":"Figure 6.6",
    "texts": [
      {"title": "Gate-level layout of the barrel shifter","text": `
      Starting at the bottom of the circuit, we can see that the outputs of the bottom stage will be the same as the inputs to that stage if SA<sub>0</sub> is 0.
      If SA<sub>0</sub> is 1, then each output position will take on the value of its immediate left or right neighbor (according to the shift direction, indicated in the Shift Right input).
      At the next higher level, the method is applied again, except that SA<sub>1</sub> is observed now and the amount of shift is doubled.
      This pattern continues until SA<sub>4</sub> is observed at the highest level.
      Zeros are copied into positions that have no corresponding inputs.
      `}
    ],
    "imagemap" : [
    ]
  },
  
  68: {
    "title":"Design of register %r1",
    "subtitle":"Registers %r1 through %r31 are identical in design",
    "texts": [
      {"title": "","text": `
      All of the registers are composed of falling edge-triggered D flip-flops.
      This means that the outputs of the flip-flops do not change until the clock makes a transition from high to low (the <em>falling edge</em> of the clock).
      All of the datapath registers are 32 bits wide, so 32 flip-flops are used in the design.
      `}
    ],
    "imagemap" : [
      {"coords" : "10,65,33,90", "shape": "rect", "title": "", "text": `
      The CLK input to the register is ANDed with the select line (c<sub>1</sub>) from the C decoder.
      This ensures that the register only changes when the control section instructs it to change.
      `},
      {"coords" : "67,7,241,44", "shape": "rect", "title": "Inputs", "text": `
      The data inputs to the register are taken directly from the corresponding lines of the C bus.
      `},
      {"coords" : "110,215,286,257", "shape": "rect", "title": "Outputs", "text": `
      The outputs are written to the corresponding lines of the A and B busses through tri-state buffers, which are 'electrically disconnected' unless their enable inputs are set to 1. The outputs of the buffers are enabled onto the A and B busses by the a<sub>1</sub> and b<sub>1</sub> outputs of the A and B decoders. If neither a<sub>1</sub> nor b<sub>1</sub> are equal to 1, then the outputs are electrically disconnected from both the A and B buseses since the tri-state buffers are disabled.    
      `}
    ]
  },

  69: {
    "title":"Instruction register",
    "subtitle":"Figure 6.9",
    "texts": [
      {"title": "","text": `
      Different from the other registers, the instruction register has additional outputs that correspond to the rd, rs1, rs2, op, op2, op3 and bit 13 fields of an instruction.
      This bits are used by the control section in interpreting the instruction
      `}
    ],
    "imagemap" : [
    ]
  },  

  611: {
    "title":"Microprogram Instruction Register",
    "subtitle":"Figure 6.11",
    "texts": [
    ],
    "imagemap" : [
      {"coords" : "55,75,121,113", "shape": "rect", "title": "", "text": `
      The A, B and C fields determine which of the registers are placed at the A, B or C busses. As there are 32 registers, 5 bits are needed to select each one of them.
      `},
      {"coords" : "123,74,133,114", "shape": "rect", "title": "", "text": `
      The AMUX, BMUX and CMUX one-bit fields select whether the A/B/C decoder take the input (or write the output in the case of C) from the field of the MIR or from the %rs1/2/d field of %ir.

      Since %r0 cannot be changed, the bit pattern 00000 can be used in the C field when none of the registers are to be changed.
      `},
      {"coords" : "291,75,313,113", "shape": "rect", "title": "", "text": `
      The RD and WR bits determine wheter memory will be read or written. Both cannot be set to 1 at the same time. The address to be read/written is taken directly from the A bus, the data input from the B bus, and the output is placed on the C bus.
      
      The RD line controls the 64-to-32 C Bus MUX which determines wheter the C bus is loaded from the memory or from the ALU.
      `},
      {"coords" : "314,74,357,114", "shape": "rect", "title": "", "text": `
      The ALU field determines which of the ALU operations is performed. As there are 16 possible operations, 4 bits are needed. The ALU cannot be turned off when it is not needed (such as in a read or write from memory), so an instruction without side effects is needed to put in place (for example, AND instead of ANDCC which changes the condition codes).
      `},
      {"coords" : "359,74,392,113", "shape": "rect", "title": "", "text": `
      The COND field instructs the microcontroller to take the next microword from the control store location or from the JUMP ADDR of the MIR, or from the opcode bits of the %ir.
      `},
      {"coords" : "393,74,516,113", "shape": "rect", "title": "", "text": `
      The JUMP ADDR field appears in the rightmost 11 bits of the microword format. There are 2<sup>11</sup> microwords in the control store, so 11 bits are needed to jump to any microstore location.
      `}
    ]
  }  
}
