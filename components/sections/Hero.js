import React, { useState } from "react";
import classNames from "classnames";
// import { SectionProps } from '../../utils/SectionProps';
// import ButtonGroup from '../elements/ButtonGroup';
// import Button from '../elements/Button';
// import Image from '../elements/Image';
// import Modal from '../elements/Modal';

const propTypes = {
  //   ...SectionProps.types
};

const defaultProps = {
  //   ...SectionProps.defaults
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <div className="hero-content">
            <div>
              {/* <img src={require('../../assets/images/logoTangente.png')} className="img-size"/> */}
            </div>
            <div className="container-xs">
              <h2
                className="mt-0 mb-16 reveal-from-bottom"
                data-reveal-delay="200"
              >
                Innovación digital para
              </h2>
              <h2
                className="mt-0 mb-16 reveal-from-bottom"
                data-reveal-delay="200"
              >
                resolver problemas
              </h2>
              <p
                className="m-0 mb-32 reveal-from-bottom text-sm"
                data-reveal-delay="400"
              >
                Desarrollamos e impulsamos iniciativas sociales centradas en las
                personas.
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                {/* <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="https://cruip.com/">
                    Postula ahora
                    </Button>
                </ButtonGroup> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
