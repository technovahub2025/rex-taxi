import RawHtmlBlock from "../../../components/RawHtmlBlock.jsx";

const html = `<main>
		 <section class="sub-bnr cnt-ban cnt-bnr">
 <div class="container">
    <div class="sub-bnr-hed">
       <h1>Cancellation Policy</h1>
    </div>
 </div>
 <img class="bshape" src="/mirror/assets/www.redtaxi.co.in/images/taxi-service-banner-shape.webp" alt="Taxi Service Banner Shape">
</section>
<section>
<div class="container breadcrumb">
<ul class="b-ul">
<li><a href="/mirror/pages/index.html">Home</a></li>
<li>/</li>
<li><p>Cancellation Policy</p></li>
</ul>
</div>
</section>



<section class="pspace pad-reducer">
    <div class="container">
    <div class="tc">
    <h2 class="ch2 mb25"><span>Cancellation </span> Policy</h2>
</div>

<div class="cquick-main">
<ul class="cquick-links ascroll">
                    <li><a href="/mirror/pages/corporate-privacy-policy.html">Privacy Policy</a></li>
                    <li><a href="/mirror/pages/corporate-refund-policy.html">Refund Policy</a></li>
                    <li><a href="/mirror/pages/corporate-cancellation-policy.html" class="active">Cancellation Policy</a></li>
                </ul>
</div>




<div class="w60">

<p class="hlpara mb2" id="cancell">3. Cancellation Policy</p>
<p class="mb2">Cancellation Policy for Red Taxi - Business</p>
<p class="mb2">We offer a flexible cancellation policy to accommodate your business schedule.</p>

<p class="mb2"><span class="f600">Free Cancellations:</span></p>
<ul class="parrows1 mt2">
    <li>Cancellations made before a driver is assigned</li>
    <li>System-triggered cancellations due to vehicle unavailability or technical issues</li>
</ul>

<p class="mb2"><span class="f600">Chargeable Cancellations:</span></p>
<ul class="parrows1 mt2">
    <li>Cancellations after driver assignment may incur a nominal fee (based on distance and time)</li>
    <li>Repeated last-minute cancellations may lead to account review or temporary suspension</li>
</ul>

<p class="mb2"><span class="f600">Cancellation Channels:</span></p>
<ul class="parrows1 mt2">
    <li>Mobile App</li>
    <li>Business Portal</li>
</ul>

<p class=""><span class="f600">Need Help?</span> </p>  <p>Contact our support team at <a href="mailto:support@business.redtaxi.co.in" class="a-link">support@business.redtaxi.co.in</a></p>


</div>
</div>
</section>


        </main>`;

function Section04() {
  return <RawHtmlBlock html={html} />;
}

export default Section04;
