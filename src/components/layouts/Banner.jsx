import Button from '../Button'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import BannerImg from '../../assets/BannerImg.png'
import Poly from '../../assets/poly.png'

const Banner = () => {
  return (
    <>
    <section className='pt-[50px] pb-[100px] bg-bannerC'>
      <Container>
        <Flex className={'justify-between'}>
          <div className="w-[520px]">
            <h3 className='text-base text-allBtnC leading-1.5 font-poppins font-medium '>SAKIB AL HASAN</h3>
            <h1 className='text-6xl text-blackC leading-18 font-bold font-poppins py-9'>Hello, my name’s Sakib. I’m MERN Stack Developer.</h1>
          </div>
          <div className="relative">
            <Image className={'w-[500px]'} imgSrc={BannerImg}/>
            <div className="w-[30px] h-[30px] rounded-full bg-allBtnC absolute top-1/2 -left-3 "></div>
            <div className="w-[20px] h-[20px] rounded-full bg-allBtnC absolute top-3/4 right-6 "></div>
          </div>
            
        </Flex>
        <Button className={'bg-allBtnC  py-5 px-7 text-white'} allBtn={'CONTACT ME'}/>
        <Button className={'text-blackC ml-9'} allBtn={'DOWNLOAD CV'}/>
        <div className="absolute bottom-[30px] left-1/2 translate-1/2">
              <Image imgSrc={Poly}/>
            </div>
      </Container>
    </section>
    </>
  )
}

export default Banner