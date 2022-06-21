document.write(`
    <div class="container px-4 py-5" id="hanging-icons">
        <h2 class="pb-2 border-bottom">Arduino Binary LED Counter</h2>
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
                        Made a binary LED Counter with Arduino.
                        Counter is made of 4 LEDs (4 bits).
                        Thus: counter goes from 1 to 15
                    </p>
                </div>
            </div>
            <div class="col d-flex align-items-start">
                <div class="icon-square bg-light text-dark d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                    <svg class="bi" width="1em" height="1em">
                        <use xlink:href="#cpu-fill"></use>
                    </svg>
                </div>
                <div>
                    <h2>Image</h2>
                    <p>
                        <img src="./proj1/4BitArduinoBinaryCounter.jpg" alt="4 Bit Counter" width="300">    
                    </p>
                    <a href="https://github.com/Mahib7009/ArduinoBinaryLEDCounter" class="btn btn-primary">
                        View Project On Github
                    </a>
                </div>
            </div>
            <div class="col d-flex align-items-start">
                <div class="icon-square bg-light text-dark d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                    <svg class="bi" width="1em" height="1em">
                        <use xlink:href="#tools"></use>
                    </svg>
                </div>
                <div>
                    <h2>Code</h2>
                    <p>
                        Wrote handelLight function that takes integer 
                        between 1 and 15 as input and translates it into
                        a 4-bit representation with the arduino LEDs
                    </p>
                    <a href="https://github.com/Mahib7009/ArduinoBinaryLEDCounter/blob/main/binaryLEDCounter.ino" class="btn btn-primary">
                        View code
                    </a>
                </div>
            </div>
        </div>
    </div>`);
