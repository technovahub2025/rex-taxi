import RawHtmlBlock from "../../../components/RawHtmlBlock.jsx";

const html = `<main>

        <section class="sub-bnr driver-ban driver-mob">
 <div class="container">
    <div class="sub-bnr-hed">
       <h1>Become a Driver</h1>
    </div>
 </div>
 <img class="bshape" src="/mirror/assets/www.redtaxi.co.in/images/taxi-service-banner-shape.webp" alt="Taxi Service Banner Shape">
</section>
<section>
<div class="container breadcrumb">
<ul class="b-ul">
<li><a href="/mirror/pages/index.html">Home</a></li>
<li>/</li>
<li><p>Become a Driver</p></li>
</ul>
</div>
</section>
<section class="pspace pad-reducer">
    <div class="container">
    <div class="tc">
<p class="bpara">Driver</p>
    <h2 class="ch2 mb25"><span>Having a fleet, </span> Want to <br>join with us?</h2>
    <p class="mb2">Don't have a car to Drive, the Door is open for you.</p>
</div>

<div>


<div>

<div class="w60">

<p class="mb3 tc">RedTaxi provides a great opportunity to work as a Chauffeur! Yes, we call our drivers as chauffeurs. All our chauffeurs will get a great working experience through proper training and guidance. We hope the chauffeurs are great persons who represent our brand and so we expect our chauffeurs to adhere to the below rules.
</p>

<!-- form starts -->
<div class="form-grp career-form">
<h2 class="bpara">Submit Your Application</h2>
  <form id="myForm">
                                    <div class="form-flex">

                                        <div class="form-col">
                                            <label for="email">Your Name*</label>
                                            <input type="text" class="form-control" placeholder="Enter Your Name" pattern="[A-Za-z ]{1,32}" name="name" required="required">
                                        </div>
                                        <div class="form-col">
                                            <label for="phone_number">Your Mobile Number*</label>
                                            <input type="number" placeholder="Enter Your Mobile Number" class="form-control number-input" pattern="\\d{10}" name="mobile" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');" required="required">
                                        </div>
                                    </div>

                                    <div class="form-flex">

                                        <div class="form-col">
                                            <label for="phone_number">Email Id</label>
                                            <input type="email" class="form-control" placeholder="Enter Your Email Address" name="email" required="required">
                                        </div>
                                        <div class="form-col">
                                            <label for="city">City*</label>
                                            <select class="form-control" name="city" aria-label="select Pickup city" required="required">
                                                <option value="0" name="city">Select City</option>
                                                                                                <option value="Coimbatore">Coimbatore</option>
                                                                                            <option value="Chennai">Chennai</option>
                                                                                            <option value="Trichy">Trichy</option>
                                                                                            <option value="Madurai">Madurai</option>
                                                                                            <option value="Erode">Erode</option>
                                                                                            <option value="Salem">Salem</option>
                                                                                            <option value="Tirupur">Tirupur</option>
                                                                                            <option value="Pollachi">Pollachi</option>
                                                                                            <option value="Karur">Karur</option>
                                                                                            <option value="Tirunelveli">Tirunelveli</option>
                                                                                        </select>
                                        </div>
                                    </div>
                                    <div class="form-flex">

                                        <div class="form-col">
                                            <label for="licence_number">Driving Licence Number*</label>
                                            <input type="text" class="form-control" placeholder="Driving Licence Number" name="licence_number" required="">
                                        </div>
                                        
                                        <input type="hidden" name="website" value="www.redtaxi.co.in">
                                        <input type="hidden" name="useragent" value="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36">
                                        <input type="hidden" name="starttime" value="2026-02-25 18:26:20">
                                        <input type="hidden" name="enquiry_date" value="25-02-2026">
                                        <input type="hidden" name="enquiry_month" value="02-2026">
                                        <input type="hidden" name="enquiry_time" value="6:26 PM">
                                        <input type="hidden" name="checkvalue" value="">
                                       
                                    </div>
                                    <p class="rules">By proceeding you agree to <a href="/mirror/pages/rules.html" class="hover-line" target="_blank">RedTaxi Rules</a> and acknowledge you have read the <a href="/mirror/pages/privacy-policy.html" target="_blank" class="hover-line">Privacy Policy.</a> I also agree that RedTaxi or its representatives may contact me by email, phone, or SMS (including by automated means) at the email address or number I provide, including for marketing purposes.</p>
                                    <div class="submit-col1">
                                    <div class="g-captcha  w-100">
                                            <div class="g-recaptcha" data-sitekey="6LdP6T0rAAAAAGmK3ppbfkAwzftXMJ-TTJrQ7wZA" data-callback="verifyCaptcha"></div>
                                            <div id="g-recaptcha-error"></div>
                                        </div>
                                        <input type="button" value="Submit Application" class="subbtn" id="applyBtn">
                                    </div>
                                </form>
</div>
<!-- form ends -->
</div>
</div>
</div>
</div>
</section>
</main>`;

function Section04() {
  return <RawHtmlBlock html={html} />;
}

export default Section04;
