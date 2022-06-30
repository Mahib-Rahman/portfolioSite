document.write(`
    <div class="container px-4 py-5" id="hanging-icons">
        <h2 class="pb-2 border-bottom">Arduino Voltmeter with LCD Display</h2>
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
                        Learned to use LCD screen with Arduino and read the
                        voltage from the pins on the breadboard. Used the
                        voltage reading from the pins and displayed it on 
                        the LCD screen, essentially making a voltmeter.
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
                        <img src="./arduinoProj2/Voltmeter.jpg" alt="Voltmeter using Arduino" width="300">
                    </p>
                    <a href="https://github.com/Mahib7009/VoltmeterWithLCD" class="btn btn-primary">
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
                        First hooked up the LCD screed with Arduino using all
                        the required pins. Then red in the voltage value using
                        an empty analog pin on the arduino. Then calculated the 
                        and displayed it on the screen.
                    </p>
                    <a href="https://github.com/Mahib7009/VoltmeterWithLCD/blob/main/voltmeterWithLCD.ino" class="btn btn-primary">
                        View code
                    </a>
                </div>
            </div>
        </div>
    </div>`);
