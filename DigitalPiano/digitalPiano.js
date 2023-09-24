document.write(`
    <div class="container px-4 py-5" id="hanging-icons">
        <h2 class="pb-2 border-bottom">
            Digital Piano 
        </h2>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div class="col d-flex align-items-start">
                <div class="icon-square bg-light text-dark d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                    <svg class="bi" width="1em" height="1em">
                        <use xlink:href="#toggles2"></use>
                    </svg>
                </div>   
                <div>
                    <h2>About</h2>
                    <p>
                        Programmed a Digilent Basys 3 Artix-7 Fpga Trainer Board
                        to send chosen frequencies to speakers.
                          
                        
                    </p>
                    <img src="./DigitalPiano/picOfBoard.jpg" alt="A Digilent Basys 3 Artix-7 Fpga Board" width="300">
                </div>
            </div>
            <div class="col d-flex align-items-start">
                <div class="icon-square bg-light text-dark d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                    <svg class="bi" width="1em" height="1em">
                        <use xlink:href="#cpu-fill"></use>
                    </svg>
                </div>
                <div>
                    <h2>Process</h2>
                    <p>
                    The segment display uses time multiplexing that switches at a high
                     speed that appears like a steady display to the human eye. Every
                     clock cycle, a new display is MUXed. NOTE_IN selects via cases of
                     NOTE_IN, a 9 bit buffer, where bits 8 through 5 specify the letter
                     (A,B,C,D,E,F or G)  bits 4 through 1 specify the number, and the 
                     last bit specifies if the note is sharp or not(1 is sharp 0 is not 
                     sharp)
                    </p>
                    <img src="./DigitalPiano/picOfspec.jpg" alt="Waveform of a piece playing on the board" width="300">
                </div>
            </div>
            <div class="col d-flex align-items-start">
                <div class="icon-square bg-light text-dark d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                    <svg class="bi" width="1em" height="1em">
                        <use xlink:href="#tools"></use>
                    </svg>
                </div>
                <div>
                    <h2>Why</h2>
                    <p>
                        Learned to code in VHDL to program an FPGA Board to play different 
                        frequencies to emulate a instrument.  
                    </p>
                    <img src="./DigitalPiano/musicSheet.jpg" alt="Physical Simulation" width="300">
                    <a href="https://github.com/Mahib-Rahman/portfolioSite/blob/main/DigitalPiano/code.vhd" class="btn btn-primary">
                        View code
                    </a>
                </div>
            </div>
        </div>
    </div>`);
