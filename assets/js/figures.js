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
      The microarchitecture is one level deeper than the architecture, and is composed of the same units (the control section, the datapath) but seen in a different context: hardwired control, registers and what is actually happening under the hood.
      
      It consists of the control unit and the programmer-visible registers, functional units (the ALU, and others) and any additional registers that are required, and is the one responsible for actually making the fetch-execute cycle happen.

      The general idea is that the Control Section is the one responsible for <em>selecting</em> the microinstruction to be executed, while the Data Section is the one responsible for actually <em>executing</em> it.

      When the microarchitecture begins operation (at boot), a reset circuit places the microword at location 0 in the control store into the MIR and executes it. From there on, the fetch-execute cycle starts, and each unit viewed at its level does its job in order for the cycle to continue.
      `}
    ],


    "imagemap" : [
      {"coords" : "308,188,484,231", "shape": "rect", "title": "Read Only Memory", "text": `
      This <strong>Control Store</strong> is the heart of the control unit.
      
      This <strong>read-only</strong> memory(ROM) contains values for all of the <strong>microinstructions</strong> that can be executed at the microarchitecture level.

      There are 2048 possible microinstructions, so their address are 11 bit long, and each one of them is 41-bit long.

      The only <strong>input</strong> this unit has is the 11-bit address it receives from the Control Store Address Multiplexer, which has the responsibility for selecting the instruction to be executed.

      The function of this unit is to get the 41-bit microinstruction referenced by the address received, and placing it on the Microcode Instruction Register.

      The only <strong>output</strong> of this unit is the 41 bits which are feeded to the MIR.
      `},
      {"coords" : "302,305,499,321", "shape": "rect", "pointsto": "611", "title": "Microprogram Instruction Register", "text": `
      The MIR is where the microinstruction is placed. The purpose of this register is to derivate each bit to its correct place all over the machine.

      This microinstruction is a 41-bit word divided into 11 fields which define the different important things a microinstruction needs (such as the operands when adding two numbers, or the JUMP address if a jump is to be made).

      The MIR <strong>inputs</strong> are only the clock unit (so that the MIR updates on each clock cycle) and the 41-bit instruction that comes from the ROM.

      The MIR <strong>outputs</strong> are each field in the instruction and are scattered all over the CPU:

      First of all, there are A, B and C 6-bit fields which represent the registers on which the microinstruction will operate, if necessary. This are both the sources of the instruction (A and B), and the destination of it (C). This fields are 6 bit long, as one out of 38 registers can be selected. This fields are passed onto the A, B and C Multiplexers, which will then decide if the A, B and C registers the datapath will operate on come from the MIR, or anywhere else. For this decision to be made by the multiplexer, this MUXs need one more bit: the A/B/C MUX field. This field is set when an instruction operates on the registers.

      After the first 21 most significant bits of the MIR comes the RD and WR fields. This one bit fields are feeded to main memory, and are set when a load or store operation takes place. This is because this machine only allows reading and writing from main memory on specific instructions. The RD line also controls the 64-to-32 C Bus Mux, which is in charge of determining whether the destination of the operation, that is, where the result will be written, is the result from the operation, or is loaded from the main memory.

      Then, the ALU 4-bit field refers to one of 16 possible ALU operations to be performed, and is feeded to the ALU to actually perform it. After this field comes the 3-bit COND field, which instructions from where to take the next microword: either from the literal NEXT location in the ROM, or from the JUMP ADDR field, or from the opcode bits in the instruction register. This COND field is feeded to the Control Branch Logic unit, which is in charge of the logic of determining the next microword out of this different conditions.

      Finally, there is the 11-bit address in the JUMP ADDR field, which goes directly to the Address Multiplexer, as for the case in which the COND field indicated that a jump must be made, so that there is a direct jump to that particular address.

      `},
      {"coords" : "84,324,132,354", "shape": "rect", "title": "Timing", "text": `
      The microarchitecture operates on a two-phase clock cycle. The master section of all the registers (which are falling edge-triggered master/slave D flip-flops) change on the rising edge of the clock, and the slave sections change on the falling edge. 
      
      On the <strong>falling edge</strong>, data stored in the master sections of the registers are clocked into the slave sections. This makes the data available for operations involving the ALU. 
      While the clock is low, the ALU, CBL and MUX functions are perfomed (and the condition code flags are become stable), which settle in time for the rising edge of the clock. 
      
      On the <strong>rising edge</strong> of the clock, the new values of the registers are written into the master sections. 
      The registers settle while the clock is high, and the process repeat.`},
      {"coords" : "3,1,295,44", "shape": "rect", "title": "Datapath", "text": `
      The purpose of the datapath is to actually perform the microinstruction over the data inside the registers.
      `},
      {"coords" : "298,1,547,43", "shape": "rect", "title": "Control Section", "text": `
      We now explore the part of the machine that is responsible for implementing the instruction set (ISA), and effects the operations on registers and memory. The control section consists solely of <strong>The Control Unit</strong>.

      The whole purpose of the control section is to get the actual correct microinstruction in the MIR, which will be then feeded to the data section, which will actually perform the operation in it.
      
      The execution of each microinstrucion is controlled by the microprogram instruction register, the processor status register, and a mechanism for determining the next microinstruction to be executed. 
      As the microinstruction is recomputed on every clock cycle, it does not need to be stored.
      `},
      {"coords" : "276,536,294,556", "shape": "rect", "title": "Wires", "text": `
      This indicates the number of separate wires that are represented in the line, which equals to the number of bits being passed.
      For example, as the %psr needs 4 bits from the ALU, so there are 4 separate wires connecting them.
      `},
      {"coords" : "313,120,440,159", "shape": "rect", "title": "Control Store Address MUX", "text": `
      This multiplexer has the responsibility of selecting (but not deciding!) the control store microinstruction to be executed, and passing it on to the actual Control Store. There are three possible scenarios: get the NEXT instruction, DECODE an instruction, or JUMP to a specific address.
      
      This unit has several <strong>inputs</strong>. First of all, there is a 2-bit control input from the Control Branch Logic (which decided what will happen). Then, there is an 11-bit address from the JUMP field inside the MIR (as to jump to that instruction, if necessary), an 11-bit address from the Incrementer (for a NEXT operation), and finally, an 8-bit opcode coming from the IR (needed for a DECODE operation).
      
      If the <strong>NEXT</strong> instruction will be taken, then a unit should decide which is the next instruction. But this is not as simple as incrementing the current instruction by one, because read and write operations from main memory have unpredictable timing. This is why the Control Store Address Incrementer exists, a unit which sole purpose is to increment this unit's current output. 

      That is, the CS Address Mux is on instruction 1045 and it received the command from the CBL to get the NEXT instruction, then it sends 11 bits (any of the 2048 instructions are possible) to the CSAI, which takes this 1045, adds it one, and now sends back the 11 bits with 1046 again to the CS Address Mux.

      If a <strong>DECODE</strong> is to be done, then the instruction comes from the ISA level, as it was selected by the user. So, the instruction in the IR  must be transformed into a microinstruction for the MIR.

      This decoding must transform the 8-bit unique opcode (in the ops field of the IR) into an 11-bit address. With little bit of logic (adding 1s and 0s here and there), the DECODE step gets from the possible instructions an address for the microinstruction to be executed.

      Finally, if a <strong>JUMP</strong> is to be done, then the microinstruction comes from the MIR itself. Here there is no decoding needed, as we already have our 11-bit address to jump to.

      The only <strong>output</strong of this unit is simply the 11-bit address of the next microinstruction to execute, which is feeded to the Control Store.
      `},
      {"coords" : "452,477,525,540", "shape": "rect", "title": "Control Branch Logic", "text": `
      The CBL is the middleman between the instructions and the CS Address Mux. Is the first step in deciding which will be the next instruction, with the second and final step being done in the CS Address Multiplexer. 
      
      This unit decides whether the next instruction to be executed should be literally the next microinstruction in the control store, should be decoded from the IR (not the MIR!) or should be a direct JUMP to the JUMP ADDR in the MIR.

      This unit is necessary in particular because of the several branch instructions that exist at user level, such as branch if equal to zero (be) or branch if the result is negative (bneg). The logic that checks if the different conditions are met is complicated in a way that it requires a unit all to itself to apply it.

      This unit has several <strong>inputs</strong>:
      
      The first input is the 3-bit COND field of the MIR, which instructs from where to take the next instruction: get the NEXT instruction address in the ROM control store, DECODE the instruction from the IR, or JUMP to the address specified by the MIR according to the different branching conditions.

      Another input for this unit is the sole thirteenth bit in the instruction register. This bit serves as a condition for the next microinstruction to be executed. This is because we are at such low level that each microinstruction is very specific, and there is a real difference between calling, for example, an addition between two registers (one microinstruction in the ROM) or an addition between a register and a literal integer.
      
      Finally, the last input for this unit are the four condition codes (n, z, v, c) in the %psr, which indicate the different arithmetic flags of the operation's result.

      With all of this inputs, the CBL applies the logic and resolves which one of the three scenario takes place: either take the next instruction, decode it, or jump according to one of the five possible conditions. 
      
      The <strong>output</strong> of this unit is the options out of the three possible one. One of three numbers is encoded in 2 bits. This 2 bits are feeded to the CS Address Multiplexer, which will determine the actual microinstruction to take place, whereas this unit only decided from where to take it.
      `},
      {"coords" : "208,69,261,113", "shape": "rect", "title": "Multiplexers", "text": `
      The A, B and C multiplexers purpose is to decide the source from where to select the register.
          
      The idea behind this is to either select a register from the microarchitecture (internal) level, taking one of 38 possible registers from the MIR, or to select a register from the ISA user level, taking one of 32 possible (user visible) registers from the IR.

      The decoders <strong>input</strong> depend on if a user instruction takes place, or an internal microinstruction does.
      
      From the microarchitecture level, the inputs come from the Control Section. This are the 6-bit A, B and C fields of the MIR, which correspond to any number between 0 and 37 and the one-bit AMUX/BMUX/CMUX field, which is unset when the selection will take place at this level.
      
      From the architecture level, the inputs come from the register file itself, as the instruction is inside the %ir. This are the 5-bit rs1, rs2 fields, or the rd field in the case of C. 

      If the AMUX field is 0, then the register to be selected will be the A field of the MIR. But if the AMUX field is 1, then the register to be placed on the A bus is the rs1.

      The same thing happens with the BMUX field, the B bus and the rs2 field, and with the CMUX field, the C bus and the rd field.

      The <strong>output</strong> of the MUX is simply the 6-bit register to be selected, which is feeded into the corresponding decoder (inside the scratchpad) which will then decode this 6 bits into a series of 38 bits.
      `},
      {"coords" : "132,611,266,706", "shape": "rect", "title": "Main Memory", "text": `
      Even though the main memory of a machine is a whole different subject, a broad overview of it is needed at this level, because of the role it takes on the fetch-execute cycle.

      When an instruction needs an operand from main memory, this must be accessed.

      This machine is a <strong>load-store</strong> machine: Only allowable memory access operations can load or store a value into or from one of the registers. This means that every arithmetic or logic function must operate on values contained <em>in</em> registers, and the results are also placed in a register.

      The <strong>inputs</strong> of the memory are the RD and WR bits that come from the MIR, which indicate that a read or write instruction is taking place. 
      
      The A, B busses also serve as inputs for the memory, as this busses contain the operands of the instruction and one possible scenario is having a memory address as an operand.

      The <strong>outputs</strong> of the memory are the data retrieved from memory, which goes to the C Bus Multiplexer (and from there will go to the C Bus to be stored at the destination register), and an acknowledge bit which signals the Address Mux that the memory access has been completed, so that the control store can continue with its usual cycle.
      
      `},
      {"coords" : "96,33,200,258", "shape": "rect", "pointsto": "63", "title": "Scratchpad", "text": `
      (This link goes to a view of not only the register scratchpad, but also the ALU, the A/B/C decoders and the clock unit)

      The scratchpad memory is a high-speed internal memory used for a temporary storage of the different datapath operations, and is placed really closed to the ALU. Similar to an actual scrathpad, this pad is both small in size and serves for quick calculations. This high-speed access is key for having a usable machine: small items of data can be stored and retreived rapidly in the registers so that the operations are performed quickly.
      `},
      {"coords" : "96,260,200,278", "shape": "rect", "pointsto": "69", "title": "Instruction Register", "text": `
      The 32-bit instruction register contains the user-level instruction to be executed. It is divided in several fields, and this depend on the actual instruction, as different instruction have different formats (an arithmetic instruction is different from a memory one).

      The <strong>outputs</strong> of this register are the different fields in it and are scattered throughout the whole processor. 
      
      There are the fields representing the source and destination registers, which are one out of 32 possible ones (at user level). This 5-bit fields are feeded into the A, B and C decoders so that the register selection can take place.

      There are also the 8-bit op codes which symbolize the instruction selected. This unique operation codes are needed by the Address Mux so that they are decoded and transformed into the actual microinstruction that takes place.
      
      Finally, the thirteenth bit in the register is an important one, as it symbolizes if the instruction has two registers as their operands, or if the operation uses an integer. This bit (set when a literal number is an operand) is feeded to the Control Branch Logic which will apply the neccesary jump.
      `},
      {"coords" : "339,546,407,561", "shape": "rect", "title": "Processor Status Register", "text": `
      This special register contains information about the state of the processor, including information about the results of the arithmetic operations. 
      
      The arithmetic flags are called condition codes, and they specify whether an ALU operation which set the condition codes (the ones ending on CC, such as ADDCC) resulted in a zero value (flag z), a negative value (n), a carry out from the result (c) or when the result is too large to be handled (v).

      The <strong>inputs</strong> for this register is the clock unit (as all registers are implemented in a two-phase cycle flip flop, they all need the CLK), the four flags set by the ALU in relation to the operation's result, and a signal from the ALU which indicates this register to update the bits.

      This register merely contains the condition codes and has no calculation whatsoever. The register is 32 bits long (as all registers are), and the n, z, v and c flags correspond to the bits 23 to 20, respectively.

      This unit <strong>output</strong> are the updated condition codes, and are feeded onto the Control Branch Logic, which is the unit in charge of determining the next instruction taking into account the codes.
      `},
      {"coords" : "303,49,420,80", "shape": "rect", "title": "Control Store Address Incrementer", "text": `
      The CSAI has only one purpose: increment by one an instruction.

      Its <strong>inputs</strong> are the instruction being executed, which comes from the CS Address Multiplexer, and an ACK bit from main memory.

      The ACK bit is a signal which is sent by the main memory to acknowledge that the memory has completed its operation. This is because memory access time is variable (it depends on the memory organization) and usually takes more time to complete than the time required for one microinstruction to execute. As it is impossible to predict when a read or write will end, until the signal is not received, the CSAI does not increment the address.

      Then, the CSAI simply adds one to the instruction received.

      Keep in mind, this unit only operates when the Address Mux received a NEXT instruction. In the case of a DECODE or JUMP, this unit is not called.
      
      The <strong>output</strong> is the new instruction to be executed, which is feeded to the Address Mux.
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
      {"coords" : "136,547,204,567", "shape": "rect", "title": "Register %ir", "text": `This register holds the current instruction that is being executed and <strong>is not visible to the user</strong>.
      
      This register has more outputs than the general purpose registers, and this are directed at the control unit.
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
      The LUT <strong>inputs</strong> are only one bit of each ALU data input (the 32-bit A and B), the full 4-bit control input F (to look the operation up in the truth table), and the carry out of its right LUT, which serves as the carry into for the operation (in the case of the first LUT, the carry into is set to 0). 
      
      This LUT resolves the operations by looking the bit combination in the truth table (where each 2-bit binary operation such as an AND between a 1 and a 0 is explicitly detailed).
      
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
      The A, B and C fields determine which of the registers are placed at the A, B or C busses. 
      
      As there are 38 possible registers (remember, we are at microarchitecture level, so not only are the 32 general-purpose user-visible registers available, but also the four temporary ones, the %ir and the %pc), 6 bits are needed to select each one of them.

      Since %r0 cannot be changed, the bit pattern 00000 can be used in the C field when none of the registers are to be changed.
      `},
      {"coords" : "123,74,133,114", "shape": "rect", "title": "", "text": `
      The AMUX, BMUX and CMUX one-bit fields are set if the sources/destination of the operation comes from the IR.
      `},
      {"coords" : "291,75,313,113", "shape": "rect", "title": "", "text": `
      The RD and WR bits determine whether memory will be read or written. Both cannot be set to 1 at the same time.       
      `},
      {"coords" : "314,74,357,114", "shape": "rect", "title": "", "text": `
      The ALU field determines which of the ALU operations is performed. 
      
      As there are 16 possible operations, 4 bits are needed. 
      
      The ALU cannot be turned off when it is not needed (such as in a read or write from memory), so an instruction without side effects is needed to put in place when this happens. For example, an AND operation (but not an ANDCC, which has the side effect of changing the condition codes).
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
