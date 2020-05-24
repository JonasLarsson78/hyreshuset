import React from 'react';

import Header from '../../components/header';
import Meny from '../../components/meny';
import Footer from '../../components/footer';

import './omoss.css';

const OmOss = () => {
  return (
    <>
      <Header />
      <Meny />
      <div className="marginTop omossImg"></div>
      <h3 style={{ textAlign: 'center' }}>OmOss</h3>
      <p style={{ padding: '10px 60px 10px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget
        dapibus orci. Aliquam accumsan diam eros, at tempus urna porta a. Donec
        ac imperdiet turpis. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Integer tellus sem, viverra vitae vestibulum in, ultricies sit
        amet sapien. Sed sem nisi, lacinia sed bibendum id, ornare interdum
        lacus. Fusce sit amet elit a leo volutpat porttitor ac eu libero. Morbi
        sed nulla suscipit, facilisis arcu vel, laoreet mauris. Nulla sit amet
        orci diam. Cras nec ligula nec tellus vulputate laoreet. Nullam eget
        tellus ut justo tincidunt suscipit. Nam vel consequat quam, at cursus
        nulla. Quisque eros purus, auctor in metus ac, blandit gravida risus.
        Etiam consequat eleifend elit, eu lacinia orci. Sed molestie ante urna.
        Nam eleifend commodo felis, et pellentesque lacus porta tincidunt.
        Maecenas eu metus vitae libero pulvinar sagittis a nec ex. Nullam in
        risus arcu. Maecenas rutrum, ipsum at tincidunt sodales, ex turpis
        fringilla ipsum, non dictum justo mi euismod purus. Ut eget felis id
        sapien bibendum pretium. Etiam sit amet turpis id urna scelerisque
        maximus. Cras efficitur magna placerat tellus volutpat, id vulputate
        eros viverra. Vestibulum nec ipsum orci. Praesent neque erat, finibus
        eget massa vitae, dictum tincidunt orci. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Suspendisse sed quam scelerisque, accumsan
        ante a, rhoncus arcu.
      </p>
      <Footer />
    </>
  );
};

export default OmOss;
