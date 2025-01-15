const Footer = `
<footer>
    <section class="back-to-top">
        <a href="#banner"><span><img src="./assets/icons/arrow-right.png" alt=""></span>Back to Top</a>
    </section>
    <section class="find-us">

        <div class="left">
            <div class="top">
                <h4>Find Us</h4>
                <div class="line"></div>
                <div class="address">

                    <div>
                        <h5>10 - 13 Grosvenor Square, Mayfair</h5>
                        <h5>London</h5>
                        <h5>W1K 6JP</h5>
                    </div>

                    <div>
                        <h5>0207 495 2211</h5>
                        <h5>barandgrill@gordonramsay.com</h5>
                        <p>Restaurant enquiries</p>
                        <p class="italic">Please note that all our bookings are managed online. For anything else,
                            please
                            call
                            us on
                            the number above.</p>
                    </div>

                    <div>
                        <h5>0207 592 1373</h5>
                        <h5>events@gordonramsay.com</h5>
                        <p>Group reservations</p>
                    </div>
                    <div class="view">
                        <div class="line bold"></div>
                        <h4>View Map</h4>
                    </div>
                </div>
            </div>
            <div class="info">
                <h4>Restaurant Information</h4>
                <div class="line bold"></div>
                <p>Casual dress code</p>
                <p>Children of all ages are welcome to dine with us</p>
                <p>We welcome small dogs & guide dogs to our restaurant</p>
                <p>We would kindly ask that payment is made by credit or debit card only</p>
                <div class="line"></div>
            </div>
        </div>
        <div class="right">
            <div class="hours">
                <h4>Opening Hours</h4>
                <div class="line"></div>
                <div>
                    <h5>Monday - Wednesday</h5>
                    <p>7:30am-11:30pm</p>
                </div>
                <div>
                    <h5>Thursday - Friday</h5>
                    <p>7:30am-12am</p>
                </div>
                <div>
                    <h5>Saturday</h5>
                    <p>11:30am-11:30pm</p>
                </div>
                <div>
                    <h5>Sunday</h5>
                    <p>7:30am-10pm</p>
                </div>
            </div>
            <div class="festive-hours">
                <h4>Festive Opening Hours</h4>
                <div>
                    <h5>27 December:</h5>
                    <p>7:30am-12am</p>
                </div>
                <div>
                    <h5>28 December:</h5>
                    <p>11:30am-11:30pm</p>
                </div>
                <div>
                    <h5>29 December:</h5>
                    <p>11:30am-11:30pm</p>
                </div>
                <div>
                    <h5>30 December:</h5>
                    <p>7:30am-11:30pm</p>
                </div>
                <div>
                    <h5>31 December:</h5>
                    <p>6:45am-11am, 11:30am-3am</p>
                </div>
                <div>
                    <h5>27 December:</h5>
                    <p>11:30am-10pm</p>
                </div>
                <div class="line"></div>
                <h4>View All Menues</h4>
            </div>
            <div class="book">
                <h4>Book a table</h4>
                <div class="line bold"></div>
                <form id="book-table" method="post">
                    <input type="date" id="date" name="date" id="">
                    <input type="time" id="time" name="time" id="">
                    <select name="size" id="size" class="custom-select">
                        <option value="0">*Party size</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                    <button type="submit">Book now <span><img src="/assets/icons/arrow-right.png"
                                alt=""></span></button>
                </form>
            </div>
        </div>
    </section>
    <section class="socials">
        <div class="icons">
            <img src="/assets//icons/white/x.png" alt="x">
            <img src="/assets//icons/white/facebook-logo.png" alt="facebook">
            <img src="/assets//icons/white/instagram-symbol.png" alt="instagram">
            <img src="/assets//icons/white/Tiktok-icon-on-transparent-background-PNG.png" alt="tiktok">
            <img src="/assets//icons/white/linkedin-logo.png" alt="linkedin">
        </div>
        <button>
            Newsletter sign up
            <span>
                <img src="/assets/icons/arrow-right.png" alt="arrow">
            </span>
        </button>
    </section>
    <section class="policy">
        <div class="title">
            <h4>GORDON RAMSAY RESTAURANTS</h4>
            <p>©Copyright 2024</p>
            <p>Gordonramsayrestaurants.com</p>
        </div>
        <div class="links">
            <a href="">Disclaimer</a>
            <a href="">Privacy Policy</a>
            <a href="">Cookie Policy</a>
            <a href="">Terms & Conditions</a>
        </div>
    </section>
    <section class="action">
        <p>Interested in Gordon Ramsay the chef?</p>
        <a href="">Click here <span><img src="/assets//icons//brown/arrow-right.png" alt=""></span></a>
    </section>
</footer>
`

export { Footer }
