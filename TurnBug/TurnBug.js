document.write(`
    <div class="container px-4 py-5" id="hanging-icons">
        <h2 class="pb-2 border-bottom">
            Turn Bug 
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
                        Used CAD to design and 3D printer/laser cutter to 
                        develop parts and built a walking robot.

                    </p>
                    <img src="./TurnBug/partsPic.jpg" alt="A Digilent Basys 3 Artix-7 Fpga Board" width="300">
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
                        First and foremost, developed sketches of the robot,
                        and developed the mechanism of the overall movement.
                        Then developed detailed cad andprinted
                        the parts needed in a 3D printer. Identified and ordered any 
                        parts needed, and assembled all the parts to the laser cut base of the robot. 
                        Made modifications along the to the parts during assemblr 
                        as needed. Wrote python scripts to program and optimize a walking robot. 
                    </p>
                    <img src="./TurnBug/glammourPic.jpg" alt="Waveform of a piece playing on the board" width="300">
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
                        Learned to use CAD, 3D printing, laser-cutting and much more to 
                        develop a walking robot.  
                    </p>
                    <img src="./TurnBug/videoPic.jpg" alt="Youtube Video" width="300">
                    <a href="https://www.youtube.com/watch?v=4eqNVqfL_fg&t=1s" class="btn btn-primary">
                        View Video
                    </a>
                </div>
            </div>
        </div>
    </div>`);
