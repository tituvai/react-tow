import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import PartName from '../PartName'
import TextHading from '../TextHading'
import Peragrap from '../Peragrap'
import Image from '../Image'
import Card from '../../assets/CardOne.png'
import CardTwo from '../../assets/CardTwo.png'
import CardThree from '../../assets/CardThree.png'

const Service = () => {
  return (
    <>
    <section className='py-[100px]'>
        <Container>
            <Flex className={'justify-between text-center'}>
                <div className="">
                    <h3 className='text-5xl text-blackC font-semibold font-poppins'>100+</h3>
                    <h5 className='text-base text-stone-500 font-poppins font-medium leading-[0.5px] pt-4'>PROJECTS</h5>
                </div>
                <div className="">
                    <h3 className='text-5xl text-blackC font-semibold font-poppins'>24</h3>
                    <h5 className='text-base text-stone-500 font-poppins font-medium leading-[0.5px] pt-4'>WINNING AWARD</h5>
                </div>
                <div className="">
                    <h3 className='text-5xl text-blackC font-semibold font-poppins'>70+</h3>
                    <h5 className='text-base text-stone-500 font-poppins font-medium leading-[0.5px] pt-4'>HAPPY CLIENTS</h5>
                </div>
                <div className="">
                    <h3 className='text-5xl text-blackC font-semibold font-poppins'>10</h3>
                    <h5 className='text-base text-stone-500 font-poppins font-medium leading-[0.5px] pt-4'>YEAR EXPERIENCE</h5>
                </div>
            </Flex>
            <div className=" text-center pt-[100px]">
                <PartName partText={'SERVICES'}/>
                <TextHading className={'py-4'} hadeText={'What I Do For My Customer.'}/>
            </div>
            <div className="w-[600px] m-auto text-center">
                <Peragrap peraText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl.'}/>
            </div>

            <Flex className={'pt-16 justify-between'}>
                <div className="w-[376px] py-14 px-12 bg-cardC rounded-xl text-center shadow-2xl">
                    <Image className={'m-auto'} imgSrc={Card}/>
                    <h3 className='text-xl text-blackC font-medium font-poppins pt-7 pb-3'>UI/UX Design</h3>
                    <Peragrap peraText={'lorem ipsum dolor sit amet consectur adi pising leo'}/>
                </div>
                 <div className="w-[376px] py-14 px-12 bg-cardC rounded-xl text-center shadow-2xl">
                    <Image className={'m-auto'} imgSrc={CardTwo}/>
                    <h3 className='text-xl text-blackC font-medium font-poppins pt-7 pb-3'>Product Design</h3>
                    <Peragrap peraText={'lorem ipsum dolor sit amet consectur adi pising leo'}/>
                </div>
                 <div className="w-[376px] py-14 px-12 bg-cardC rounded-xl text-center shadow-2xl">
                    <Image className={'m-auto'} imgSrc={CardThree}/>
                    <h3 className='text-xl text-blackC font-medium font-poppins pt-7 pb-3'>Motion Graphics</h3>
                    <Peragrap peraText={'lorem ipsum dolor sit amet consectur adi pising leo'}/>
                </div>
            </Flex>
        </Container>
    </section>
    </>
  )
}

export default Service