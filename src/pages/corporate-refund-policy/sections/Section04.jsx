import RawHtmlBlock from "../../../components/RawHtmlBlock.jsx";

const html = `<main>
		 <section class="sub-bnr cnt-ban cnt-bnr">
 <div class="container">
    <div class="sub-bnr-hed">
       <h1>Refund Policy</h1>
    </div>
 </div>
 <img class="bshape" src="/mirror/assets/www.redtaxi.co.in/images/sbner-shp.webp" alt="Banner">
</section>
<section>
<div class="container breadcrumb">
<ul class="b-ul">
<li><a href="/mirror/pages/index.html">Home</a></li>
<li>/</li>
<li><p>Refund Policy</p></li>
</ul>
</div>
</section>



<section class="pspace pad-reducer">
    <div class="container">
    <div class="tc">
    <h2 class="ch2 mb25"><span>Refund </span> Policy</h2>
</div>

<div class="cquick-main">
<ul class="cquick-links ascroll">
                    <li><a href="/mirror/pages/corporate-privacy-policy.html">Privacy Policy</a></li>
                    <li><a href="/mirror/pages/corporate-refund-policy.html" class="active">Refund Policy</a></li>
                    <li><a href="/mirror/pages/corporate-cancellation-policy.html">Cancellation Policy</a></li>
                </ul>
</div>




<div class="w60">
<p class="hlpara mb2" id="refund">2. Refund Policy</p>
<p class="mb2">Red Taxi - Business aims to maintain transparency and fairness in all financial transactions. This
    policy outlines the conditions under which refunds are issued.</p>

<p class="mb2"><span class="f600">2.1. Eligibility for Refunds</span></p>
<p>Refunds may be issued under the following circumstances:</p>

<ul class="parrows1 mt2">
    <li> <span class="f600">Ride Cancellations:</span>
        <ul>
            <li>Full refunds are provided for system-initiated cancellations or if the Business Client
                cancels a ride before driver assignment.</li>
                <li>If a prepaid booking is cancelled within 15 minutes and before dispatch, a full refund
                    is applicable.</li>
                </ul>
    </li>
    <li><span class="f600">Excess Payment Against Invoice:</span>
        <ul>
            <li>If a Business Client has made an excess payment against an invoice due to
                accounting errors or double payments, Red Taxi will verify the overpayment and
                initiate a refund for the excess amount.</li>
                <li>The client must provide payment proof and the relevant invoice number for
                    reconciliation.</li>
                </ul>
            </li>


        </ul>
<p class="mb2"><span class="f600">2.2. Refund Request Process</span></p>
<p class="mb2">To request a refund, please email  <a class="a-link" href="mailto:creditservice@redtaxi.co.in">creditservice@redtaxi.co.in</a> with the following:</p>
<ul class="parrows1 mt2">
    <li>Booking ID or Invoice Number</li>
    <li>Reason for refund</li>
    <li>Proof of excess payment (if applicable)</li>
</ul>

<p class="mb2"><span class="f600">2.3. Non-Refundable Scenarios:</span></p>
<ul class="parrows1 mt2">
    <li>No-show or failure to cancel within the permitted time</li>
    <li>Charges due to misuse or policy violations</li>
</ul>

<p class="mb2"><span class="f600">2.4. Processing Time:</span></p>
<ul class="parrows1 mt2">
    <li>Refunds are processed within 7–10 business days after verification.</li>
    <li>Refunds will be made via the original method of payment unless otherwise agreed.</li>
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
