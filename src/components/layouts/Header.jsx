import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Logo from '../../assets/Logo.png'
import Menu from '../Menu'
import List from '../List'
import Button from '../Button'

const Header = () => {
  return (
    <>
    <section className='py-9 bg-bannerC'>
      <Container>
          <Flex className={'justify-between'}>
           <div className="">
            <Image className={'w-[150px]'} imgSrc={Logo}/>
           </div>
           <div className="">
            <Menu className={'flex gap-10'}>
              <List listItem={'home'}/>
              <List listItem={'about us'}/>
              <List listItem={'services'}/>
              <List listItem={'works'}/>
            
            </Menu>
           </div>
           <div className="">
            <Button className={'bg-allBtnC py-3 px-7 text-white'} allBtn={'hire me'}/>
           </div>
          </Flex>
      </Container>
    </section>
    </>
  )
}

export default Header