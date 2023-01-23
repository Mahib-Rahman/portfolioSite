document.write(`
    <div class="container px-4 py-5" id="hanging-icons">
        <h2 class="pb-2 border-bottom">
            Second Order Differrential Equation Analog Computer
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
                        Built a secoond order differential equation solver.
                        Below are the schematic and the physical circuit:  
                        
                    </p>
                    <img src="./AnalogComp/pic1.jpg" alt="Schematic" width="300">
                    <img src="./AnalogComp/pic2.jpg" alt="Physical circuit" width="250">
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
                        Used an oscilloscope to measure the <b>Output Voltage</b>
                        which is a solution to the second order differential 
                        equation given the input voltage. This was possible thanks
                        to capicitors. The way Capicitors accumulate charge and
                        develop a voltage can be moveled with a differential equation.
                        Thus, using two capicitors, we can model a second order differential 
                        equation. We can measure the voltage readings at the output 
                        which is the solution to the equation. By choosing values of the elements
                        We can model different responces. The picture below shows the 
                        oscilloscope measuring the "overdamped" responce.
                    </p>
                    <img src="./AnalogComp/pic3.jpg" alt="Oscilloscope and Physical Setup" width="300">
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
                    Given any second order differential equation, this circuit is able to model
                    its solution using voltage.The picture below shows the LtSpice simulation 
                    and an oscilloscope measuring the "underrdamped" responce of the circuit.
                    </p>
                    <img src="./AnalogComp/pic4.jpg" alt="LtSpice Simulation" width="300">
                    <img src="./AnalogComp/pic5.jpg" alt="Physical Simulation" width="300">
                </div>
            </div>
        </div>
    </div>`);
