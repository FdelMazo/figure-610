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
      {"coords" : "100,260,353,288", "shape": "rect", "title": "Transistors, and Wires", "text": `
      At the very lowest level, a computer consists of electrical  components  such  as  <strong>transistors  and  wires</strong>,  which  make  up  the  logic gates, but at this level the functioning of the computer is lost in details of voltage,current, signal propagation delays, quantum effects, and other low-level matters
      `}
    ]
  },

  41: {
    "title":"Chapter 4: Machine Language and Assembly Language.",
    "subtitle":"",
    "texts": [
      {"title": "Instruction Set Architecture (ISA)","text": `
      The instruction set architecture is a protocol that defines how a computing machine appears to an assembly programmer or a compiler. 
      
      The ISA describes the memory model, instruction format, types and modes, and operand registers, types, and data addressing.

      The ISA contains all the <strong>programmer-accesible</strong> hardware and can be viewed with the system bus model, which consists of three units:
      <strong>The CPU</strong>, <strong>the memory unit</strong> and the <strong>I/O unit</strong>
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
      `},
      {"coords" : "427,140,510,160", "shape": "rect", "title": "Data Bus", "text": `
      This bus carries the information being transmitted.
      `},
      {"coords" : "427,180,510,199", "shape": "rect", "title": "Address Bus", "text": `
      This bus identifies where the information is being sent.
      
      Regarding the connections, the CPU generates addresses, but it never receives addresses, and it is the other way around with the memory unit.
      `},
      {"coords" : "427,218,510,236", "shape": "rect", "title": "Control Bus", "text": `
      This bus describes aspects of how the information is being sent and in what manner.
      `}
    ]
  },

  440: {
    "title":"Memory",
    "subtitle":"Figure 4.4",
    "texts": [
      {"title": "Memory","text": `
      Computer memory is just a collection of consecutive items which hold one byte, where each of this item has an <strong>address</strong>, by which we reference them. One byte is a collection of 8 bits (and a bit is the little switch that can only be 1 or 0).
      A word is just a collection of N bytes, where the N is defined by the processor type. A 32-bit processor has 32-bit words (so, 4 bytes per word), whereas a 64-bit processor has 64-bit words (8 bytes).
      `},
      {"title": "Endiannes","text": `
      So, what happens when a machine wants to access a word? How is that word stored?

      Lets say we have the word 0x00000401. 
      As we are on the hexadecimal system, each number can be any number between 0 and 16. A collection of 4 bits is also any number between 0 and 16 (2<sup>4</sup>=16 possibilities). So, a pair of numbers are 8 bits, which are one byte.
      
      This means, we have the 4-byte word composed by the bytes 00, 00, 04 and 01. When we try to access the whole word, we must do it by addressing it by the <strong>lowest</strong> byte address. 
      So now the question is, which byte do we place on the lowest address?

      There are two choices: we either store this word as the sequence 00 00 04 01 (that means, presented as it is written), placing its <strong>most significant byte at the lowest address</strong>, referred to as <strong>big-endian</strong>,
      or we store it as the sequence 01 04 00 00, placing its <strong>least significant byte at the lowest address</strong>, referred to as <strong>little-endian</strong>.
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
      The lowest 2<sup>11</sup>=2048 addresses (going from 0 to 2047) are reserved for use by the operating system.
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
      {"title": "Fetch-Decode-Execute Cycle","text": `
      The ISA hardware implementation is couched in terms of the <strong>fetch-decode-execute cycle</strong>.
      In the <strong>fetch</strong> step, operands are retrieved from memory. 
      The <strong>decode</strong> step puts the operands into a format that the ALU can manipulate. 
      The <strong>execute</strong> cycle performs the selected operation within the ALU. 
      `}
    ],
    "imagemap" : [
      {"coords" : "16,17,131,127", "shape": "rect", "title": "Data Section", "pointsto": "46", "text": `
      The Data section is made up of a collection of registers and the ALU, which is the unit that actually executes the operations.`},
      {"coords" : "208,26,297,118", "shape": "rect", "title": "Control Section", "text": `
      The Control section interprets instructions and effects register transfers and consists only of the control unit.
      
      The Control unit is responsible for controlling the program instructions, and then giving the instruction for the datapath to actually execute the different arithmetic and logic operations.
      `},
      {"coords" : "130,57,207,86", "shape": "rect", "title": "Interface between control unit and data unit", "text": `
      There are two registers that form the interface between both sections.

      One is the <strong>Program Counter (PC)</strong>. This register contains the address of the instruction being executed.

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
      {"coords" : "95,49,191,206", "shape": "rect", "title": "Register File", "text": `
      The register file can be though of as a small, fast memory, separate from the system memory, which is used for <em>temporary</em> storage during computation
      Like the system memory, each register is assigned an address. 
      
      These register addresses are much smaller than main memory ones. For example, a 32 registers file needs only 5-bit addresses (2<sup>5</sup> = 32).
      As the register file is contained within the CPU, it is much more faster than main memory.
      `},
      {"coords" : "262,1,390,52", "shape": "rect", "title": "Source Registers", "text": `
      Two buses allow operands to be fecthed from the register file, which are then operated on by the ALU.
      `},
      {"coords" : "127,322,269,344", "shape": "rect", "title": "Destination Register", "text": `
      The result of the ALU operation over the two sources is then returned to the register file.
      `},
      {"coords" : "255,246,315,245,323,256,335,245,391,246,345,294,303,294", "shape": "poly", "title": "Arithmetic Logic Unit", "text": `
      The ALU implements a variety of operations, such as add, not, or. This operations (in the ALU) and the operands they use (the registers in the register file) are selected by the Control Unit.
      `}
    ]
  },

  610: {
    "title":"Chapter 6: Datapath and Control",
    "subtitle":"The Famous Figure 6.10",
    "texts": [
      {"title": "Microarchitecture Level","text": `
      The microarchitecture is one level deeper than the architecture, and it is composed of the same units (the control section, the datapath) but seen in a different context: hardwired control, registers and what is actually happening under the hood.
      It consists of the control unit and the programmer-visible registers, functional units (the ALU, and others) and any additional registers that are required, and is the one responsible for actually making the fetch-execute cycle happen.

      The general idea is that the Control Section is the one responsible for <em>selecting</em> the microinstruction to be executed, while the Data Section is the one responsible for actually <em>executing</em> it.
      `}
    ],


    "imagemap" : [
      {"coords" : "308,188,484,231", "shape": "rect", "title": "Read Only Memory", "text": `
      This <strong>Control Store</strong> is the heart of the control unit.
      This ROM contains values for all of the lines that must be controlled to implement each user-level instruction.
      This lines are the 41-bit <strong>microinstructions</strong>.
      `},
      {"coords" : "302,305,499,321", "shape": "rect", "pointsto": "611", "title": "Microprogram Instruction Register", "text": `
      The MIR is where the microinstruction is placed. 
      This microinstruction is a 41-bit word divided into 11 fields which define the different important things a microinstruction needs, such as the JUMP address if a jump is to be made, the operands when adding two numbers, etc.

      When the microarchitecture begins operation (at boot), a reset circuit places the microword at location 0 in the control store into the MIR and executes it.
      Then, a microword is selected for execution from the Next/Decode/Jump inputs to the CS Address Mux, according to the settings in the COND field of the MIR and the output of the CBL logic.
      After each microword is placed in the MIR, the datapath performs operations (in the ALU) according to the settings in the individual fields of the MIR.

      The MIR <strong>inputs</strong> are only the clock unit (so that the MIR updates on each clock cycle) and the ROM which contains every instruction, so that the instruction can be placed on it.

      The MIR <strong>outputs</strong> are each field out of the 11 in the instruction and are scattered all over the CPU and specified on each unit.  
      `},
      {"coords" : "84,324,132,354", "shape": "rect", "title": "Timing", "text": `
      The microarchitecture operates on a two-phase clock cycle. The master section of all the registers (which are falling edge-triggered master/slave D flip-flops) change on the rising edge of the clock, and the slave sections change on the falling edge. 
      On the <strong>falling edge</strong>, data stored in the master sections of the registers are clocked into the slave sections. This makes the data available for operations involving the ALU. 
      While the clock is low, the ALU, CBL and MUX functions are perfomed (and the condition code flags are become stable), which settle in time for the rising edge of the clock. 
      On the <strong>rising edge</strong> of the clock, the new values of the registers are written into the master sections. 
      The registers settle while the clock is high, and the process repeat.`},
      {"coords" : "3,1,295,44", "shape": "rect", "pointsto": "63", "title": "Datapath", "text": `
      The datapath consists of The ALU, the register file with 38 data registers, and the A, B and C decoders.
      `},
      {"coords" : "298,1,547,43", "shape": "rect", "title": "Control Section", "text": `
      We now explore the part of the machine that is responsible for implementing the instruction set (ISA), and effects the operations on registers and memory: <strong>The Control Unit.</strong>

      The whole purpose of the control section is to get the actual correct microinstruction in the MIR, which will be then feeded to the datapath and will actually perform the operation in it.
      
      The execution of each microinstrucion is controlled by the microprogram instruction register, the processor status register, and a mechanism for determining the next microinstruction to be executed. As the microinstruction is recomputed on every clock cycle, it does not need to be stored.
      `},
      {"coords" : "276,536,294,556", "shape": "rect", "title": "Wires", "text": `
      This indicates the number of separate wires that are represented in the line, which equals to the number of bits being passed.
      For example, as the psr needs 4 bits from the ALU, so there are 4 separate wires connecting them.
      `},
      {"coords" : "313,120,440,159", "shape": "rect", "title": "Control Store Address MUX", "text": `
      This multiplexer has the responsibility of selecting (but not deciding!) the control store microinstruction to be executed according.

      This unit has several inputs. First of all, there are the two bits of the Control Branch Logic (which decided what will happen next), which tells it to get either the NEXT instruction, DECODE an instruction from the MIR, or JUMP to the address in the MIR.

      If the NEXT instruction will be taken, then a unit should decide which is the next instruction. This is why the Control Store Address Incrementer exists, a unit which sole purpose is to increment this units current output by one. 
      That is, the CS Add Mux is on instruction 1045 and it received the command to get the NEXT instruction, then it sends 11 bits (any of the 2048 instructions is possible) to the CSAI, which takes this 1045, adds it one, and now sends back the 11 bits with 1046 again to the CS Address Mux, which will then go on and execute it.

      If a DECODE is to be done, then the instruction in the IR should be decoded and executed. That is, any instruction in the IR is designed an specific op code. For example, an add instruction has the arithmetic format (op=10) and its specific op code (which is called either op2 or op3) is 010000. All of this bits are inside the IR, and they serve as an input to the CS Addr Mux. With this opcodes, and a little bit of logic, the DECODE step gets from the possible instructions an address for the microinstruction to be executed.

      Finally, if a JUMP is to be done, then the CS Add Mux must know which is the JUMP address to go to! For this, it needs a direct connection to the MIR. The 11 bit JUMP ADDR field of the MIR serves as the input for this unit.

      Whichever step is to be taken, this must be communicated to the Control Store. That is why this unit's only output is the 11 bits of the next instruction to be executed.
      `},
      {"coords" : "452,477,525,540", "shape": "rect", "title": "Control Branch Logic", "text": `
      The CBL is a middleman between the MIR and the CS Address Mux, and it decides whether the next instruction to be executed should be literally the next instruction in the control store, should be decoded from the IR (not the MIR!) or should be a direct JUMP to the JUMP ADDR in the MIR.

      This is because there are several branch instructions such as branch if equal to zero (be) or branch if the result is negative (bneg), but the logic that checks if the conditions are met is complicated in a way that it requires a unit all to itself to apply it.

      The MIR, in the COND field, decides what will happen next: get the NEXT instruction address, DECODE the instruction from the IR, or JUMP according to several conditions.

      Then, the CBL checks if this conditions are met. For this to happen, it needs inputs from the COND field of the MIR (as to know what was instructed) and the four condition codes in the psr (as to know if the flags such as n or z are set to 1 or 0).

      Besides branching if the condition codes are set, another jump can be taken if the 13 bit of the IR is set. This is because several instructions have more than one way to be written. For example, one could either make an add betwen two registers, or it could do it between a register and a literal integer. As this are two separate microinstructions, when a literal integer is used, the 13th bit of the IR is set, and a JUMP must be made. It is because of this that the CBL needs another input: the 13th bit of the IR.

      After the logic was applied there are three possible scenarios, either take the next instruction, decode it, or jump. This 3 options (2 bits) are the output that the CBL gives to the CS Address Mux.
      `},
      {"coords" : "208,69,261,111", "shape": "rect", "title": "", "text": `
      `},
      {"coords" : "132,611,266,706", "shape": "rect", "title": "", "text": `
      `},
      {"coords" : "96,34,201,278", "shape": "rect", "title": "", "text": `
      `},
      {"coords" : "339,546,407,561", "shape": "rect", "title": "", "text": `
      `},
      {"coords" : "303,49,420,80", "shape": "rect", "title": "", "text": `
      `}
    ]
  },

  63: {
    "title":"Datapath (microarchitecture)",
    "subtitle":"Figure 6.3",
    "texts": [
      {"title": "Registers","text": `
      As we are now on the microarchitecture perspective, we now have some more registers than the usual seen at programmer-accessible level.
      
      First of all, from 0 to 31, we have the 32 general purpose level registers. Then, at number 32, we have the program counter. From 33 to 36, there are four temporary registers. Finally, at position 37, the instruction register.

      The way we think about registers at microarchitecture level should change from before. Instead of having 32 registers, where any time we tried to access one of them we needed 5 bits, we now have 38 registers, so to select between them we need 6 bits.

      This is only one of the reasons that a microword instruction (41 bits) is longer than a normal instruction (32 bits), as we now need some more bits to represent the selection of registers.
      `}
    ],
    "imagemap" : [
      {"coords" : "239,610,255,662,305,661,319,612,295,611,289,629,271,628,264,610", "shape": "poly", "pointsto":"65", "title": "Arithmetic Logic Unit", "text": `
      The ALU <strong>inputs</strong> are two 32-bit A and B operands which come in the source busses of the register file, and the ALU field of the MIR, which is the four-bit control input F (representing any of the possible 16 ALU instructions).

      The ALU then performs the operation on A and B, and returns the result C and the condition codes.
      
      The ALU <strong>outputs</strong> are the 32-bit C result (which is feeded to a bus multiplexer, and from there is reinserted to the register file) and the 4-bit condition codes (c, n, z, v) with the signal that they must be updated, which serve as the %psr input.
      `},
      {"coords" : "136,52,204,72", "shape": "rect", "pointsto":"68", "title": "General Purpose registers", "text": `
      Almost every register in the register file is designed identically.

      The <strong>inputs</strong> of a general register is the clock unit, because their change depends on the clock cycle, one bit per decoder (A, B and C decoders), which is the select line and will be set only if the register is the one selected and the 32-bit input from the C bus.

      The register purpose is to either write the result of the ALU operation from the C bus to the register selected as destination, or to read which register was selected by the control unit, and load that register into the A/B bus for it to be the sources of the operation.

      The <strong>outputs</strong> of a register are the two 32-bits to write to the A or B buses which will be feeded to the ALU for the operation to take place.
      `},
      {"coords" : "136,302,205,369", "shape": "rect", "title": "Register %r14 and %r15", "text": `
      There are two special registers in this set of general-purpose register:
      
      <strong>%r14</strong> serves as the <strong>stack pointer</strong>, which contains the address of the top of she stack.
      
      <strong>%r15</strong> serves as the <strong>link register</strong>. In  order  to  allow  nested  calls  and  returns,  the  current  value  of this register should be saved on the stack, to be restored after the return.
      `},
      
      {"coords" : "342,26,396,72", "shape": "rect", "title": "Decoders", "text": `
      The A, B and C decoders simplify register selection. 
      
      Their <strong>input</strong> is the 6-bit representation of the register number (from 0 to 37), coming from the respective multiplexers (A MUX, B MUX and C MUX).

      Their <strong>output</strong> is 38 different bits, one for each register with only one of them activated, the one corresponding to the register selected. This activated bit will enable the reading/writing from the registers to the different buses.

      There are 2<sup>6</sup>=64 possible outputs from the decoders, but there are only 38 data registers. The A and B decoders go from register 0 to 37, and the C decoder goes from register 1 to 37, because %r0 cannot be written. 

      Any number above 37 is free to be used when no register are to be connected to a bus (as they do not correspond to any register).
      `},
      {"coords" : "136,547,204,567", "shape": "rect", "pointsto":"69", "title": "Register %ir", "text": `This register holds the current instruction that is being executed and <strong>is not visible to the user</strong>.
      
      This register has more outputs than the general purpose registers: 24 out of its 32 bits go directly to the control unit.
      `},
      {"coords" : "136,28,206,48", "shape": "rect", "title": "Register %r0", "text": `This register always contains the value 0 and cannot be changed, thus it has no inputs from the C bus nor any inputs from the C decoder, and does not need flip-flops.`},
      {"coords" : "136,423,204,442", "shape": "rect", "title": "Register %pc", "text": `This register keeps track of the next instruction to be read.
      
      The user has direct access to %pc only through the <tt>call</tt> and <tt>jmpl</tt> instructions.
      
      As this register can only contain values that are divisible by 4 (it contains instruction addresses, which are 4 bytes long), the two least significant bits can be hardwired to 0.`},
      {"coords" : "4,477,65,517", "shape": "rect", "title": "C Bus Multiplexer", "text": `
      The only purpose of the C Bus multiplexer is to select which 32 bits will be placed in the C Bus. It's behaviour is similar to the A and B MUXs detailed in Figure 6.10.
      
      The <strong>inputs</strong> are the 32-bit result from the ALU operation, another 32-bit word coming from the main memory, and the 1-bit RD field from the MIR. 
      
      This is a 64-to-32 Mux: Between the 64 bits received (32 from main memory, 32 from the ALU), only 32 must be selected, and the control depends on the RD bit.

      The RD bit indicates that a read from memory is being executed. So, when this bit is set, the word input from memory is placed on the C Bus. If the bit is not set, then an ALU operation is being executed, so the 32 bits received from the ALU are placed on the bus.

      The <strong>output</strong> is simply the 32-bit word selected, which is placed on the C Bus. This bits in the C Bus work as the input for the register selected as the destination register, as to store that word inside the register.
      `}
    ]
  },

  65: {
    "title":"Arithmetic Logic Unit",
    "subtitle":"Figure 6.5",
    "texts": [
      {"title": "Hardware Implementation","text": `      
      The ALU functions can be divided in two different types. 
      
      On one hand, we have the <strong>arithmetic and logic operations</strong>: the simplest hardware implementation of this functions is a lookup table (LUT) approach. The ALU can be decomposed into a cascade of 32 LUTs which are all (almost) identically implemented. 
      
      On the other hand, we have the <strong>shift functions</strong>: the hardware implementation involves a barrel-shifter, with a corresponding control LUT (constructed similarly to the other LUTs, but with different entries).

      The ALU must also deal with the condition codes (where arithmetic functions like ADDCC must flag if the result is negative, zero, etc), n, z, v and c, which are implemented directly, and a signal that tells the %psr to update these codes.
      `}
    ],
    "imagemap" : [
      {"coords" : "72,222,429,280", "shape": "rect", "pointsto":"66", "title": "Shift Functions", "text": `      
      The Barrel Shifter Control LUT <strong>inputs</strong> are the control input F (to know if a shift is to take place), and the first 5 bits of the B bus (because that's the operand which says how many shifts, from 0 to 31, will take place on the A operand). 

      The LUT <strong>outputs</strong>, which serve as the the Shifter <strong>inputs</strong> are the direction (left or right) to which the shift must be applied, and the amount of bits to shift (Shift Amount). 
      The shifter must also get the results of the 32 LUTs, i.e, the bits to shift.
            
      The barrel shifter shifts the input word by an arbitrary amount (from 0 to 31 bits).

      Even if no shift takes place (that is, the shift amount is 0), the different results of the LUTs must pass through the barrel shifter. 

      Finally, the Barrel Shifter <strong>output</strong> is the result of the operation, and therefore the main (but not only) output of the ALU: The 32-bit data output C. This result is then used by the ALU to set (if necessary) the condition codes.
      `},
      {"coords" : "73,70,130,128", "shape": "rect", "title": "Arithmetic and Logic Functions", "text": `
      The LUT <strong>inputs</strong> are only one bit of each ALU data input (the 32-bit A and B), the full 4-bit control input F (to look the operation up in the table), and the carry out of its right LUT, which serves as the carry into for the operation (in the case of the first LUT, the carry into is set to 0). 
      
      This LUT resolves the operations by looking the bit combination in the table itself (where each 2-bit binary operation such as an AND between a 1 and a 0 is explicitly detailed).
      
      The LUT <strong>outputs</strong> is simply the result of the operation. This are both the result itself (the z bit, not to be confused with zero) which will be feeded to the barrel shifter and the carry out of the operation, which will be useful for the LUT at its left.
      `},
      {"coords" : "1,462,141,504", "shape": "rect", "title": "Condition Codes", "text": `
      The <strong>implementation</strong> of the n condition code is directly the most significant bit of the barrel shifter output.
     
      The <strong>implementation</strong> of the c condition code is directly the carry out of the most significant LUT (that is, the carry out of the whole operation).
      
      The v bit is set if the two most significant carry bits are different. The <strong>implementation</strong> of this condition code is a XOR gate between the results of the two most significant LUTs. That is, a XOR gate between the carry out and the carry into of the most significant LUT.
      `},
      {"coords" : "238,374,305,472", "shape": "rect", "title": "Condition Code Z", "text": `     
      Collecting every one bit output given by each lookup table (after going through the barrel shifter), if every bit is 0, then the NOR will return that the condition code Z is set to 1.

      The <strong>implementation</strong> of this condition code is a NOR gate between every one-bit result of each LUT.
      `},
      {"coords" : "444,331,508,481", "shape": "rect", "title": "Condition Code Signal", "text": `     
      As in the table of ALU instructions the operations which must set the condition codes (those which end on CC) are the only ones where the two most significant bits of the control input F are 0, the SCC will be set to 1 only if both are 0.

      The <strong>implementation</strong> of this condition code is a NOR gate between the two most significant bits of the control input.
      `}
    ]
  },

  66: {
    "title":"Barrel shifter",
    "subtitle":"Figure 6.6",
    "texts": [
      {"title": "Gate-level layout of the barrel shifter","text": `      
      The shifts are performed in levels, in which a different bit of the Shift Amount input is observed at each level. 

      Starting at the bottom of the circuit, we can see that the outputs of the bottom stage will be the same as the inputs to that stage if SA<sub>0</sub> is 0.

      If SA<sub>0</sub> is 1, then each output position will take on the value of its immediate left or right neighbour (according to the shift direction, indicated in the Shift Right input).
      
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
      {"coords" : "10,65,35,90", "shape": "rect", "title": "", "text": `
      The CLK input to the register is ANDed with the select line (c<sub>1</sub> for register 1) from the C decoder.
      This ensures that the register only changes when the control section instructs it to change.
      `},
      {"coords" : "67,7,241,44", "shape": "rect", "title": "Inputs", "text": `
      The data inputs to the register are taken directly from the corresponding lines of the C bus.
      `},
      {"coords" : "110,215,286,257", "shape": "rect", "title": "Outputs", "text": `
      The outputs are written to the corresponding lines of the A and B busses.

      The <strong>implementation</strong> is a tri-state buffer, where the outputs of the buffers are enabled onto the A and B busses by the a<sub>i</sub> and b<sub>i</sub> outputs of the A and B decoders, where i is the register number. If neither a<sub>i</sub> nor b<sub>i</sub> are equal to 1, then the outputs are electrically disconnected from both the A and B buseses since the tri-state buffers are disabled.    
      `}
    ]
  },

  69: {
    "title":"Instruction register",
    "subtitle":"Figure 6.9",
    "texts": [
      {"title": "","text": `
      Different from the other registers, the instruction register has additional outputs that correspond to the rd, rs1, rs2, op, op2, op3 and bit 13 fields of an instruction.

      This bits are used by the control section in interpreting the instruction.
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
      The A, B and C fields determine which of the registers are placed at the A, B or C busses. As there are 38 possible registers (remember, we are at microarchitecture level, so not only are the 32 general-purpose user-visible registers available, but also the four temporary ones, the %ir and the %pc), 6 bits are needed to select each one of them.
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
      The JUMP ADDR field appears in the rightmost 11 bits of the microword format. There are 2<sup>11</sup>=2048 microwords in the control store, so 11 bits are needed to jump to any microstore location.
      `}
    ]
  }  
}
