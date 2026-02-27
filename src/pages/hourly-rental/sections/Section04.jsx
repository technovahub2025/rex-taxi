import RawHtmlBlock from "../../../components/RawHtmlBlock.jsx";

const html = `<main>

        <section class="sub-bnr hourbanner hourmob">
            <div class="container">
                <div class="sub-bnr-hed">
                    <h1>Hourly Rental</h1>
                </div>
            </div>
            <img class="bshape" src="/mirror/assets/www.redtaxi.co.in/images/taxi-service-banner-shape.webp" alt="Taxi Service Banner Shape">
        </section>
        <section>
            <div class="container breadcrumb">
                <ul class="b-ul">
                    <li><a href="/mirror/pages/index.html">Home</a></li>
                    <li>/</li>
                    <li><a href="/mirror/pages/booking.html">Book a Trip</a></li>
                    <li>/</li>
                    <li>
                        <p>Hourly Rental</p>
                    </li>
                </ul>
            </div>
        </section>

        <section class="pspace hoursajax pad-reducer">
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
                            <li><a href="/mirror/pages/hourly-rental.html" class="active">Hourly Rental</a></li>
							 <li><a href="/mirror/pages/bulk-booking.html">Bulk Booking</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 class="ch2 mb3">Hourly Rental Fare</h2>




                        <div class="fl-cnt">
                            <div>
                                <!-- Filter Form -->
                                <form id="myForm" class="my-3">
                                    <div class="row m-0 htt-form-grid">
                                        <div class="col-md-4 form-col">
                                            <label for="city">City*</label>
                                            <select name="city" id="city" required="" onchange="updateTaxiTypes()">
                                                <option value="">Select City</option>
                                                <!-- <option value="All">All</option> -->
                                                <option value="Coimbatore">Coimbatore</option>
                                                <option value="Tirupur">Tirupur</option>
                                                <option value="Erode">Erode</option>
                                                <option value="Salem">Salem</option>
                                                <option value="Madurai">Madurai</option>
                                                <option value="Trichy">Trichy</option>
                                            </select>
                                        </div>

                                        <div class="col-md-4 form-col">
                                            <label for="taxitype">Taxi Type*</label>
                                            <select name="taxitype" id="taxitype" required="">
                                                <option value="">Select Taxi Type</option>
                                            </select>
                                        </div>

                                        <!-- Hours Selection -->
                                        <div class="col-md-4 form-col">
                                            <label for="hours">Hours*</label>
                                            <select name="hours" id="hours" required="">
                                                <option value="">Select Hours</option>
                                                                                                    <option value="1Hour">1 Hour</option>
                                                                                                    <option value="2Hours">2 Hours</option>
                                                                                                    <option value="3Hours">3 Hours</option>
                                                                                                    <option value="4Hours">4 Hours</option>
                                                                                                    <option value="5Hours">5 Hours</option>
                                                                                                    <option value="6Hours">6 Hours</option>
                                                                                                    <option value="7Hours">7 Hours</option>
                                                                                                    <option value="8Hours">8 Hours</option>
                                                                                                    <option value="9Hours">9 Hours</option>
                                                                                                    <option value="10Hours">10 Hours</option>
                                                                                                    <option value="11Hours">11 Hours</option>
                                                                                                    <option value="12Hours">12 Hours</option>
                                                                                            </select>
                                        </div>

                                        <!-- Submit Button -->
                                        <div class="submit-col1 htf-left">
                                            <button type="submit" class="subbtn btn-top0 subbtnajax">Submit</button>
                                        </div>
                                    </div>
                                </form>

                                <!-- Data Table -->
                                <div class="pos-sti">
                                    <div class="htt-border">
                                        <table class="ftable ftable1 hourly-trip-table">
                                            <thead class="hourly-trip-head">
                                                <tr>
                                                    <th>City</th>
                                                    <th>Taxi Type</th>
                                                    <th>Hours</th>
                                                    <th>Base Fare</th>
                                                    <th>Free KM</th>
                                                    <th>Extra Fare</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <!-- Data will be appended here dynamically -->
                                            </tbody>
                                        </table>
                                    </div>
                                    <div>
                                        <p class="mtop15 pleft10"><b>Note:</b> **GST &amp; BCF are included.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- form starts -->
                            <div class="form-grp" id="hourly">
                                <h2 class="bpara">Your Reliable Ride for Every Business Need.</h2>
                                <form id="myFormm" name="hourlytripform">

                                    <div class="form-col">
                                        <label>Name<span class="req">*</span></label>
                                        <input type="text" name="name" placeholder="Your Name" required="">
                                    </div>
                                    <div class="form-col">
                                        <label>Email Id  <span class="req">*</span></label>
                                        <input type="email" id="email" name="emailid" placeholder="Your Email Id" required="">
                                    </div>
                                    <div class="form-col">
                                        <label>Mobile Number<span class="req">*</span></label>
                                        <input type="number" id="mobile" name="mobile" placeholder="Your Mobile Number" required="" maxlength="10" minlength="10" onkeypress="return isNumberKey(event)">
                                    </div>

                                    <div class="form-col">
                                        <label>Pickup Date<span class="req">*</span></label>
                                        <input min="2026-02-25" id="hrpickupdate" type="date" name="pickupdate" placeholder="Enter Pickup date" required="" onkeydown="return false">
                                    </div>


                                    <div class="form-col">
                                        <label>Pick up Time  <span class="req">*</span></label>
                                       <select class="form-control" name="pickuptime1" aria-label="Select Pick up Time" id="myhrSelect" required="">
                                            <option value="" name="pickuptime">Select Pick up Time</option>
                                        </select>

                                    </div>

                                    <div class="form-col" id="hourdiv">
                                        <label>Hourly Basis *</label>
                                        <select class="form-col" name="hourrental" aria-label="Select Hourly Basics" required="">
                                            <option value="">Select Hour package From List</option>
                                            <option name="hourrental" value="1">1 Hour</option>
                                            <option name="hourrental" value="2">2 Hours</option>
                                            <option name="hourrental" value="3">3 Hours</option>
                                            <option name="hourrental" value="4">4 Hours</option>
                                            <option name="hourrental" value="5">5 Hours</option>
                                            <option name="hourrental" value="6">6 Hours</option>
                                            <option name="hourrental" value="7">7 Hours</option>
                                            <option name="hourrental" value="8">8 Hours</option>
                                            <option name="hourrental" value="9">9 Hours</option>
                                            <option name="hourrental" value="10">10 Hours</option>
                                            <option name="hourrental" value="11">11 Hours</option>
                                            <option name="hourrental" value="12">12 Hours</option>
                                        </select>
                                    </div>


                                    <div class="form-col" id="hourly_picupcitydiv">
                                        <label>Pickup City <span class="req">*</span></label>
                                        <select class="" id="hourly_pickup_city" name="pickup_city" aria-label="Hourly Pickup" required="">
                                            <option value="" name="pickup_city">Select Pickup City</option>
                                                                                            <option value="1" name="pickup_city">Coimbatore</option>
                                                                                            <option value="9" name="pickup_city">Chennai</option>
                                                                                            <option value="4" name="pickup_city">Trichy</option>
                                                                                            <option value="3" name="pickup_city">Madurai</option>
                                                                                            <option value="2" name="pickup_city">Erode</option>
                                                                                            <option value="5" name="pickup_city">Salem</option>
                                                                                            <option value="6" name="pickup_city">Tirupur</option>
                                                                                            <option value="10" name="pickup_city">Pollachi</option>
                                                                                            <option value="11" name="pickup_city">Karur</option>
                                                                                            <option value="12" name="pickup_city">Tirunelveli</option>
                                                                                    </select>
                                    </div>

                                    <div class="form-col">
                                        <label for="comments">Comments</label>
                                        <textarea id="comments" name="message" rows="4" placeholder="Enter Your Comments"></textarea>
                                                                                <input type="hidden" name="website" value="www.redtaxi.co.in">
                                        <input type="hidden" name="useragent" value="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36">
                                        <input type="hidden" name="starttime" value="2026-02-25 18:26:19">
                                        <input type="hidden" name="enquiry_date" value="25-02-2026">
                                        <input type="hidden" name="enquiry_month" value="02-2026">
                                        <input type="hidden" name="enquiry_time" value="6:26 PM">
                                        <input type="hidden" name="checkvalue" value="">
                                    </div>

                                    <div class="submit-col1">
                                        <div class="g-captcha">
                                            <div class="g-recaptcha" data-sitekey="6LdP6T0rAAAAAGmK3ppbfkAwzftXMJ-TTJrQ7wZA" data-callback="verifyCaptcha"></div>
                                            <div id="g-recaptcha-error"></div>
                                        </div>
                                        <button type="submit" id="applyBtn" class="subbtn hourrentdtbn">Book Now</button>
                                    </div>

                                </form>
                            </div>
                            <!-- form ends -->
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
