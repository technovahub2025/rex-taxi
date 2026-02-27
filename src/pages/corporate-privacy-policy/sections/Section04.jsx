import RawHtmlBlock from "../../../components/RawHtmlBlock.jsx";

const html = `<main>
		 <section class="sub-bnr cnt-ban cnt-bnr">
 <div class="container">
    <div class="sub-bnr-hed">
       <h1>Privacy Policy</h1>
    </div>
 </div>
 <img class="bshape" src="/mirror/assets/www.redtaxi.co.in/images/sbner-shp.webp" alt="Banner">
</section>
<section>
<div class="container breadcrumb">
<ul class="b-ul">
<li><a href="/mirror/pages/index.html">Home</a></li>
<li>/</li>
<li><p>Privacy Policy</p></li>
</ul>
</div>
</section>



<section class="pspace pad-reducer">
    <div class="container">
    <div class="tc">
    <h2 class="ch2 mb25"><span>Privacy </span> Policy</h2>
</div>

<div class="cquick-main">
                <ul class="cquick-links ascroll">
                    <li><a href="/mirror/pages/corporate-privacy-policy.html" class="active">Privacy Policy</a></li>
                    <li><a href="/mirror/pages/corporate-refund-policy.html">Refund Policy</a></li>
                    <li><a href="/mirror/pages/corporate-cancellation-policy.html">Cancellation Policy</a></li>
                </ul>
</div>




<div class="w60">
<p class="mb2 hlpara" id="privacy">1. Privacy Policy</p>
<p class="mb2"><span class="f600">Privacy Policy for Red Taxi - Business</span></p>
<p class="mb2">Red Taxi is committed to protecting the privacy and personal data of our Business Clients and their
    users. We collect only the necessary information to provide and improve our transportation services.</p>

<p class="mb2"><span class="f600">What We Collect:</span></p>
<ul class="parrows1 mt2">
    <li>Business contact information</li>
    <li>Employee or user details (name, phone, email)</li>
    <li>Location and ride history</li>
    <li>Payment and invoice records</li>
</ul>

<p class="mb2"><span class="f600">How We Use It:</span></p>
<ul class="parrows1 mt2">
    <li>To process bookings and provide transportation</li>
    <li>To generate analytics and reports</li>
    <li>To improve service quality</li>
    <li>To send service updates and notifications</li>
</ul>

<p class="mb2"><span class="f600">Data Protection:</span></p>
<p class="mb2">We implement industry-standard security measures to protect data against unauthorized access.
    Data is only accessible by authorized personnel and is not shared with third parties except as
    required to fulfill services or by law.</p>

<p class="mb2"><span class="f600">Your Rights:</span></p>
<p class="mb2">Clients may request access, correction, or deletion of data by contacting: <a href="mailto:support@business.redtaxi.co.in" class="a-link">support@business.redtaxi.co.in</a> </p>

<p class=""><span class="f600">Need Help?</span> </p>  <p>Contact our support team at <a href="mailto:support@business.redtaxi.co.in" class="a-link">support@business.redtaxi.co.in</a> </p>


</div>
</div>
</section>


        </main>`;

function Section04() {
  return <RawHtmlBlock html={html} />;
}

export default Section04;
