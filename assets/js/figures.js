let FIGURES = { 

  14: {
    "title":"Levels of machines in the computer hierarchy",
    "subtitle":"",  
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
    "title":"Machine Language and Assembly Language.",
    "subtitle":"Chapter 4",
    "texts": [
      {"title": "Instruction Set Architecture (ISA)","text": `
      The instruction set architecture is a protocol that defines how a computing machine appears to a machine language/assembly programmer or compiler. 
      The ISA describes the memory model, instruction format, types and modes, and operand registers, types, and data addressing. Instruction types include arithmetic, logical, data transfer, and flow control.
      The ISA contains all the <strong>programmer-accesible</strong> hardware.
      `},
      {"title": "Fetch-Decode-Execute Cycle","text": `
      The implementation of the ISA in hardware is  is couched in terms of the fetch-decode-execute cycle.  
      In the <strong>fetch</strong> step, operands are retrieved from memory. 
      The <strong>decode</strong> step puts the operands into a format that the ALU can manipulate. 
      The <strong>execute</strong> cycle performs the selected operation within the ALU. Control facilitates orderly routing of data, including I/O to the ALU's external environment (e.g., peripheral devices such as disk or keyboard). 
      `}
    ],
    "imagemap" : [
      {"coords" : "59,9,148,97", "shape": "rect", "title": "", "pointsto": "45", "text": `
      [EXTRAER UN PARRAFO DE SECCION SIGUIENTE]
      `},
      {"coords" : "192,7,283,98", "shape": "rect", "title": "", "pointsto": "440", "text": `
      [EXTRAER UN PARRAFO DE SECCION SIGUIENTE]
      `},
      {"coords" : "329,7,418,99", "shape": "rect", "title": "", "pointsto": "", "text": `
      [EXTRAER UN PARRAFO DE SECCION SIGUIENTE]
      `},
      {"coords" : "2,138,45,236", "shape": "rect", "title": "System Bus Model", "pointsto": "", "text": `
      [TEXTO DE SECCIONES 1.2 y 1.3 PARA HABLAR DE VON NEUMAN Y REFINAMIENTO]
      `}
    ]
  },

  440: {
    "title":"Memory",
    "subtitle":"",
    "texts": [
      {"title": "Memory","text": `
      Bit, byte, word, address
      <strong>diferencia data e info (address y word)</strong>
      `},
      {"title": "Addresability","text": `
      word addresable vs byte addresable
      `},
      {"title": "Endiannes","text": `
      big endian - little endian
      `}
    ],
    "imagemap" : [
      {"coords" : "12,89,145,223", "shape": "rect", "title": "Memory Map", "pointsto": "441", "text": `
      `}
    ]
  },

  441: {
    "title":"Memory Map",
    "subtitle":"",
    "texts": [
      {"title": "Address Space","text": `
      Divided into distinct regions
      `}
    ],
    "imagemap" : [
      {"coords" : "74,48,191,97", "shape": "rect", "title": "OS", "text": ``},
      {"coords" : "190,130,73,98", "shape": "rect", "title": "User Space", "text": ``},
      {"coords" : "74,199,190,248", "shape": "rect", "title": "System Stack", "text": ``},
      {"coords" : "189,340,74,306", "shape": "rect", "title": "Memory Mapped I/O", "text": `
      [Texto de la seccion de I/O]`},
      {"coords" : "145,354,195,373", "shape": "rect", "title": "Addreses", "text": `
      0 a 2 a la 32 -1
      a memory address that is n bits wide..
      `}
    ]
  },

  45: {
    "title":"High Level View of a CPU",
    "subtitle":"",
    "texts": [
      {"title": "Address Space","text": `
      Divided into distinct regions
      `}
    ],
    "imagemap" : [
      {"coords" : "11,143,135,215", "shape": "rect", "title": "Data Section", "pointsto": "46", "text": `
      The Data section (or datapath) is made up of a collection of registers and the ALU`},
      {"coords" : "199,146,306,212", "shape": "rect", "title": "Control Section", "text": `
      The Control section interprets instructions and effects register transfers`},
      {"coords" : "29,28,117,61", "shape": "rect", "title": "Register File", "text": `
      The register file can be though of as a small, fast memory, separate from the system memory, which is used for <em>temporary</em> storage during computation
      Like the system memory, each register is assigned an address. These register addresses are much smaller than main memory ones. A 32 registers file needs only 5-bit addresses (2<sup>5</sup> = 32).
      As the register file is contained within the CPU, it is much more faster than main memory.
      `},
      {"coords" : "29,83,118,116", "shape": "rect", "title": "Arithmetic Logic Unit", "text": ``},
      {"coords" : "209,26,297,117", "shape": "rect", "title": "Control Unit", "text": `
      The Control unit is responsible for executing the program instructions, which are stored in the main memory.
      `},
      {"coords" : "130,57,207,86", "shape": "rect", "title": "Interface between control unit and data unit", "text": `
      There are two registers that form the interface between both secitons.
      One is the <strong>Program Counter (PC)</strong>, also called the Instruction Pointer (IP). THis register contains the address of the instruction being executed.
      The instruction that is pointed by the PC is fetched from memory and stored in the <strong>Instruction Register (IR)</strong> where it is interpreted.
      `}
    ]
  },

  46: {
    "title":"Datapath",
    "subtitle":"",
    "texts": [
      {"title": "Busses","text": `
      There are several busses inside the datapath which connects it to the system bus, so that data can be transferred to and from the main memory and the register file.
      There are also three busses which connect the ALU to the register file, which allow two operands to be fetched from the register file (both register sources, rs1 and rs2), which are operated on by the ALU, and then the result is returned to the register file (the destination register, rd).
      `}
    ],
    "imagemap" : [
      {"coords" : "93,49,191,206", "shape": "rect", "title": "Register File", "text": `
      `},
      {"coords" : "262,1,390,49", "shape": "rect", "title": "Source Registers", "text": `
      `},
      {"coords" : "127,324,269,344", "shape": "rect", "title": "Destination Register", "text": `
      `},
      {"coords" : "255,246,315,245,323,256,335,245,391,246,345,294,303,294", "shape": "poly", "title": "Arithmetic Logic Unit", "text": `
      [The alu implements a variety....]
      [Paginas 111 y 112]`},
    ]
  }

}



