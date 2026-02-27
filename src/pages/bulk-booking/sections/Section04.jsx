import RawHtmlBlock from "../../../components/RawHtmlBlock.jsx";

const html = `<main>
        <section class="sub-bnr cnt-ban test-bnr test-mob">
            <div class="container">
                <div class="sub-bnr-hed">
                    <h1>Bulk Booking</h1>
                </div>
            </div>
           <img class="bshape" src="/mirror/assets/www.redtaxi.co.in/images/taxi-service-banner-shape.webp" alt="Taxi Service Banner Shape">
        </section>
        <section>
            <div class="container breadcrumb">
                <ul class="b-ul">
                    <li><a href="/mirror/pages/index.html">Home</a></li>
                    <li>/</li>
                    <li><a href="/mirror/pages/booking.html">Trips</a></li>
                    <li>/</li>
                    <li>
                        <p>Bulk Booking</p>
                    </li>
                </ul>
            </div>
        </section>

        <section class="pspace pad-reducer">
            <div class="container">
                <div class="tc">
                    <p class="bpara">Trips</p>
                    <h2 class="ch2 mb25"><span>Reach Us,</span> We are here <br>to help you</h2>
                    <p>Hassle-Free Bookings on-time Pick-up. Your Reliable Ride for Every Business Need.</p>
                </div>
                <div>
                    <div class="cquick-main">
                        <ul class="cquick-links">
                            <li><a href="/mirror/pages/oneway-trip.html">Oneway Trip</a></li>
                            <li><a href="/mirror/pages/round-trip.html">Round Trip</a></li>
                            <li><a href="/mirror/pages/hourly-rental.html">Hourly Rental</a></li>
							 <li><a href="/mirror/pages/bulk-booking.html" class="active">Bulk Booking</a></li>
                        </ul>
                    </div>
                    <div>
					<div class="fl-cnt">
					<div>
					<h2 class="ch2 mb3">Bulk Booking</h2>
					</div>
					<div></div>
					</div>
                        <div class="fl-cnt">
                            <div>

                                <!-- form starts -->
                            <div class="form-grp" id="oneway">
                                <h2 class="bpara">Your Reliable Ride for Every Business Need.</h2>
                                <form id="myForm">
                                    <input type="text" name="checkvalue" placeholder="Your name" class="noreason">
									<div class="form-grid">
                                    <div class="form-col">
                                        <label for="name">Name <span class="req">*</span></label>
                                        <input type="text" name="name" placeholder="Your Name" required="">

                                    </div>
                                    <div class="form-col">
                                        <label>Email Id <span class="req">*</span></label>
                                        <input type="email" name="emailid" placeholder="Your Email Id" required="">
                                    </div>
                                    <div class="form-col">
                                        <label>Mobile Number <span class="req">*</span></label>
                                        <input type="number" id="mobile" name="mobile" placeholder="Your Mobile Number" maxlength="10" minlength="10" onkeypress="return isNumberKey(event)" required="">
                                    </div>

                                    <div class="form-col">
                                        <label>Pickup Date<span class="req">*</span></label>
                                        <input type="date" onchange="checkowdate()" id="owpickupdate" min="2026-02-25" name="pickupdate" placeholder="Enter Pickup date" required="" onkeydown="return false">
                                    </div>
                                    <div class="form-col" id="oneway_picupcitydiv">
                                        <label for="pickup-city">Pickup City<span class="req">*</span></label>
                                        <select class="form-col" id="oneway_pickup_city" name="pickup_city" onchange="onewayvalidate()" aria-label="Pickup City" required="">
                                            <option value="">Select Pickup City</option>
                                                                                            <option value="1">Coimbatore</option>
                                                                                            <option value="9">Chennai</option>
                                                                                            <option value="4">Trichy</option>
                                                                                            <option value="3">Madurai</option>
                                                                                            <option value="2">Erode</option>
                                                                                            <option value="5">Salem</option>
                                                                                            <option value="6">Tirupur</option>
                                                                                            <option value="10">Pollachi</option>
                                                                                            <option value="11">Karur</option>
                                                                                            <option value="12">Tirunelveli</option>
                                                                                    </select>
                                    </div>
</div>
                                    <div class="form-col">
                                        <label>Comments</label>
                                        <textarea id="comments" name="message" rows="4" placeholder="Enter Your Comments"></textarea>
                                    </div>

                                    
                                    <input type="hidden" name="website" value="www.redtaxi.co.in">
                                    <input type="hidden" name="useragent" value="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36">
                                    <input type="hidden" name="starttime" value="2026-02-25 18:26:19">
                                    <input type="hidden" name="enquiry_date" value="25-02-2026">
                                    <input type="hidden" name="enquiry_month" value="02-2026">
                                    <input type="hidden" name="enquiry_time" value="6:26 PM">
                                    <input type="hidden" name="checkvalue" value="">

                                    <div class="submit-col1">
									 <div class="g-captcha">
                                            <div class="g-recaptcha" data-sitekey="6LdP6T0rAAAAAGmK3ppbfkAwzftXMJ-TTJrQ7wZA" data-callback="verifyCaptcha"></div>
                                            <div id="g-recaptcha-error"></div>
                                        </div>
                                        <button type="submit" class="subbtn bulkboobtn" id="applyBtn">Book Now</button>
                                    </div>

                                </form>
                            </div>
                            <!-- form ends -->
                            </div>

                            <div></div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="pspace ride-deserve">
            <div class="container w70">
                <div class="taxi-col">
                    <div class="taxi-cnt">
                        <h2 class="ch2">Get the Ride <br>You Deserve</h2>
                        <div class="appbtn"><a href="https://play.google.com/store/apps/details?id=com.eaglefleet.redtaxi&amp;hl=en_IN" target="_blank">Download the Red Taxi App Now !</a></div>
                    </div>
                    <div class="phone-img">
                        <img src="/mirror/assets/www.redtaxi.co.in/images/phone-booking.webp" alt="Call to Book">
                    </div>
                    <img src="/mirror/assets/www.redtaxi.co.in/images/taxi.webp" alt="Red Cab Service" class="taxi">
                </div>
            </div>
        </section>
    </main>`;

function Section04() {
  return <RawHtmlBlock html={html} />;
}

export default Section04;
