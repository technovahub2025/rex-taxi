import RawHtmlBlock from "../../../components/RawHtmlBlock.jsx";

const html = `<main>

        
        
        <section class="pspace pad-reducer">
            <div class="container">
                <div class="tc">
                    <p class="bpara">Partner</p>
                    <h2 class="ch2 mb25"><span>Having a fleet, </span> Want to <br>join with us?</h2>
                    <p class="mb2">We invite you to join hands with us to deliver world class Taxi service experience to
                        every Customers.</p>
                </div>

                <div>

                    <div>

                        <div class="w60">

                            <p class="mb3 tc">Being a part of our esteemed concern, we expect our business partners to
                                follow the standards of the company in order to satisfy our customers. We expect you to
                                give a professional driving experience also by maintaining your cabs in excellent
                                condition. It is mandatory to follow the rules and regulations of the concern in terms
                                of customer hospitality, behaviour, dressing and grooming culture as per standards.</p>

                            <!-- form starts -->
                            <div class="form-grp career-form">
                                <h2 class="bpara">Submit Your Application</h2>
                                <form id="myForm">
                                    <div class="form-flex">

                                        <div class="form-col">
                                            <label for="email">Name*</label>
                                            <input type="text" class="form-control" placeholder="Name" pattern="[A-Za-z ]{1,32}" name="name" required="required">
                                        </div>
                                    </div>

                                    <div class="form-flex">
                                        <div class="form-col">
                                            <label for="mobile">Your Mobile Number*</label>
                                            <input type="number" placeholder="Enter Your Mobile Number" class="form-control number-input" pattern="\\d{10}" name="mobile" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');" required="required">
                                        </div>
                                        <div class="form-col">
                                            <label for="mobile">Your Email Id*</label>
                                            <input type="email" class="form-control" placeholder="Enter Your Email Address" name="email" required="required">
                                        </div>

                                    </div>
                                    <div class="form-flex">
                                        <div class="form-col">
                                            <label for="city">Your City*</label>
                                            <select class="form-control" name="city" aria-label="select Pickup city" required="required">
                                                <option value="0" name="city">Select City</option>
                                                                                                    <option value="1">
                                                        Coimbatore                                                    </option>
                                                                                                        <option value="9">
                                                        Chennai                                                    </option>
                                                                                                        <option value="4">
                                                        Trichy                                                    </option>
                                                                                                        <option value="3">
                                                        Madurai                                                    </option>
                                                                                                        <option value="2">
                                                        Erode                                                    </option>
                                                                                                        <option value="5">
                                                        Salem                                                    </option>
                                                                                                        <option value="6">
                                                        Tirupur                                                    </option>
                                                                                                        <option value="10">
                                                        Pollachi                                                    </option>
                                                                                                        <option value="11">
                                                        Karur                                                    </option>
                                                                                                        <option value="12">
                                                        Tirunelveli                                                    </option>
                                                                                                </select>
                                        </div>
                                        <div class="form-col">
                                            <label for="city">Number of cabs to be attached</label>
                                            <input type="number" class="form-control number-input" placeholder="Number of cabs" name="no_of_cabs" required="">
                                        </div>
                                        
                                        <input type="hidden" name="website" value="www.redtaxi.co.in">
                                        <input type="hidden" name="useragent" value="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36">
                                        <input type="hidden" name="starttime" value="2026-02-25 18:26:20">
                                        <input type="hidden" name="enquiry_date" value="25-02-2026">
                                        <input type="hidden" name="enquiry_month" value="02-2026">
                                        <input type="hidden" name="enquiry_time" value="6:26 PM">
                                        <input type="hidden" name="checkvalue" value="">

                                    </div>
                                    <p class="rules">By proceeding you agree to <a href="/mirror/pages/rules.html" class="hover-line">Red
                                            Taxi Rules</a> and acknowledge you have read the <a href="/mirror/pages/privacy-policy.html" class="hover-line">Privacy Policy.</a>I also agree
                                        that Red Taxi or its representatives may contact me by email, phone, or SMS
                                        (including by automated means) at the email address or number I provide,
                                        including for marketing purposes.</p>
                                    <div class="submit-col1">
                                        <div class="g-captcha  w-100">
                                            <div class="g-recaptcha" data-sitekey="6LdP6T0rAAAAAGmK3ppbfkAwzftXMJ-TTJrQ7wZA" data-callback="verifyCaptcha"></div>
                                            <div id="g-recaptcha-error"></div>
                                        </div>
                                        <input type="button" value="Submit Application" id="applyBtn" class="subbtn">
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
