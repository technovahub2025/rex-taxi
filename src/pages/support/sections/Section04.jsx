import RawHtmlBlock from "../../../components/RawHtmlBlock.jsx";

const html = `<main>
		<section class="sub-bnr support-bnr support-mob">
 <div class="container">
    <div class="sub-bnr-hed">
	   <h1>Support</h1>
	</div>
 </div>
 <img class="bshape" src="/mirror/assets/www.redtaxi.co.in/images/taxi-service-banner-shape.webp" alt="Taxi Service Banner Shape">
</section>
<section class="">
<div class="container  breadcrumb">
<ul class="b-ul">
<li><a href="/mirror/pages/index.html">Home</a></li>
<li>/</li>
<li><p>Support</p></li>
</ul>
</div>
</section>
<section class="pspace pad-reducer">
    <div class="container">
    <div class="tc">
<p class="bpara">Support</p>
    <h2 class="ch2 mb25"> How can we <span>Help You</span></h2>
<p>We are here to support you 24/7. Please write to us here.</p>
</div>

<div>
<div class="cquick-main">
</div>

<div>

<div class="w60">

<!-- form starts -->
<div class="form-grp career-form">
<h2 class="bpara">Send us your Query</h2>
  <form id="myForm">
                                    <div class="form-flex">
                                        <div class="form-col">
                                            <label for="name">Name*</label>
                                            <input type="text" id="name" name="name" pattern="[A-Za-z ]{1,32}" placeholder="Your Name" required="">
                                        </div>
                                        <div class="form-col">
                                            <label for="email">Email*</label>
                                            <input type="email" name="email" placeholder="Your Email Id" required="">
                                        </div>
                                    </div>
                                    <div class="form-flex">
                                        <div class="form-col">
                                            <label for="mobile">Mobile*</label>
                                            <input type="number" name="mobile" pattern="[0-9]{10}" placeholder="Your Mobile Number" required="">
                                        </div>
                                        <div class="form-col">
                                            <label for="city">City*</label>
                                            <input type="text" name="city" pattern="[A-Za-z ]{1,32}" placeholder="Your City" required="">
                                        </div>
                                    </div>
                                    <div class="form-flex">
                                        <div class="form-col">
                                            <label for="city">Current organization*</label>
                                            <select class="form-control" name="action" aria-label="Select From the List" required="">
                                                <option>Select From the List</option>
                                                <option value="complaints">Complaints</option>
                                                <option value="feedback">Feedback</option>
                                                <option value="suggestions">Suggestions</option>
                                                <option value="enquiry">Enquiry</option>
                                                <option value="others">Others</option>
                                            </select>
                                        </div>
                                        <div class="form-col">
                                            <label for="comments">Comments*</label>
                                            <textarea type="text" name="message" rows="4" placeholder="Your Message" required=""></textarea>
                                        </div>
                                    </div>

                                    
                                        <input type="hidden" name="website" value="www.redtaxi.co.in">
                                        <input type="hidden" name="useragent" value="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36">
                                        <input type="hidden" name="starttime" value="2026-02-25 18:26:27">
                                        <input type="hidden" name="enquiry_date" value="25-02-2026">
                                        <input type="hidden" name="enquiry_month" value="02-2026">
                                        <input type="hidden" name="enquiry_time" value="6:26 PM">
                                        <input type="hidden" name="checkvalue" value="">
                                          
                                    <div class="submit-col1">
									  <div class="g-captcha  w-100">
                                            <div class="g-recaptcha" data-sitekey="6LdP6T0rAAAAAGmK3ppbfkAwzftXMJ-TTJrQ7wZA" data-callback="verifyCaptcha"></div>
                                            <div id="g-recaptcha-error"></div>
                                        </div>
                                        <input type="button" id="applyBtn" name="support_data" value="Submit Your Query" class="subbtn">
                                        <!-- <button class="subbtn" >Submit Your Query</button> -->
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
