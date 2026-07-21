
import Container from '../../Container/Container.jsx';
import AboutLeftside from '../../pages/aboutPage/AboutLeftPage';
import AboutRightSide from '../../pages/aboutPage/AboutRightPage.jsx';

const About = () => {
    return (
        <div className='mt-[120px] mb-[140px] flex items-center justify-center gap-[75px]'>
         <Container>
            <div className='ml-[160px]'>
                <AboutLeftside/>
              
            </div>
         </Container>
           <AboutRightSide/>
        </div>
    );
};

export default About;
