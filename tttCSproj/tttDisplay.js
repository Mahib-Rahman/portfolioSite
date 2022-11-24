document.write(`
    <div class="container px-4 py-5" id="hanging-icons">
        <h2 class="pb-2 border-bottom">2-Player Tic-Tac-Toe Website</h2>
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
                        Made a local 2-Player Tic-Tac-toe game website
                        using HTML, CSS, and javaScript
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
                        <img src="./tttCSproj/TTTimg.png" alt="Tic Tac Toe 2-player game view" width="300">    
                    </p>
                    <a href="https://mahib7009.github.io/Tic-Tac-Toe/" class="btn btn-primary">
                        View Website
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
                        Wrote multiple functions to handle the logistics
                        of the game including a scoreboard that keeps
                        track of the player's wins. Designed the game 
                        such that the 2 players take turns going first.
                    </p>
                    <a href="https://github.com/Mahib7009/Tic-Tac-Toe" class="btn btn-primary">
                        View code
                    </a>
                </div>
            </div>
        </div>
    </div>`);
