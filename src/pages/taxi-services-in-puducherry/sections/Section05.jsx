import RawHtmlBlock from "../../../components/RawHtmlBlock.jsx";

const html = `<div class="ftop-img">
<picture>
<source srcset="/images/red-taxi-outline-city-480.webp" media="(max-width: 480px)" class="hauto">
<img src="/mirror/assets/www.redtaxi.co.in/images/cabs/red-taxi-outline-city-graphic.webp" alt="Red Taxi Outline City Graphic" width="1920" height="120" class="hauto" loading="lazy">
</picture>
						   

</div>`;

function Section05() {
  return <RawHtmlBlock html={html} />;
}

export default Section05;
