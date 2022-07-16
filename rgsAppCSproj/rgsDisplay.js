document.write(`
    <div class="container px-4 py-5" id="hanging-icons">
        <h2 class="pb-2 border-bottom">Religion Gender and Sexuality React Website</h2>
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
                        Made a multi page React website highlighting 
                        Religion, Gender and Sexuality in society.
                        Wrote an analysis of A popular movie Moonlight(2016)
                        and it is placed in the website under the movie 
                        recommendation page of the website titled Movie Picks.
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
                        <img src="./rgsAppCSproj/RGSimg.png" alt="Religion Gender and Sexuality App view" width="300">    
                    </p>
                    <a href="https://mahib7009.github.io/ReligionGenderSexuality/" class="btn btn-primary">
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
                    <h2>Code and Content</h2>
                    <p>
                        One feature of the website is it recommends 
                        a random movie (related to the topic(s) of 
                        Religion, Gender, and Sexuality) with the 
                        click of a button. I made by scraping IMDB
                        using a puthon script and storing the data
                        in a .json file. In the video page I have a 
                        video that I filmed/edited. It was uploaded 
                        to youtube as an unlisted video and embeded 
                        to the website.
                    </p>
                    <a href="https://github.com/Mahib7009/ReligionGenderSexuality" class="btn btn-primary">
                        View code
                    </a>
                </div>
            </div>
        </div>
    </div>`);
