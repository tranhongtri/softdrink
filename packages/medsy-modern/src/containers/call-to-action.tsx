import CTABlock from 'components/cta-block';
import Button from 'components/button';
import ArrowRight from 'assets/icons/arrow-right';

export default function CallToAction() {
  return (
    <CTABlock background={'/images/CTA-image.png'}>
      <h3 className="font-normal text-white text-36px mb-6 text-center lg:text-left">
        Fast, Free Shipping,
        <br />
        <span className="font-bold">Contactless Delivery.</span>
      </h3>

      <p className="text-white text-center lg:text-left mb-10">
        Try it for now, risk free!
      </p>

      <Button variant="elevation">
        <span className="mr-2">Shop Now</span> <ArrowRight width="13px" />
      </Button>
    </CTABlock>
  );
}
