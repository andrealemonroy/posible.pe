import Hero from '../components/sections/Hero';
const IndexPage = (props) => {
  return (
    <>
      <Hero />
      {/* <FeaturesTiles />
      <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <Testimonial topDivider />
      <Apps topDivider />
      <HowWeDo topDivider />
      <Cta split /> */}
    </>
  );
};

IndexPage.layout = "default";

export default IndexPage;
